import { describe, test, expect, beforeEach, vi } from 'vitest';
import { VueWrapper, flushPromises, mount } from '@vue/test-utils';
import { SearchService } from '../services/SearchService';
import { SearchResults } from '../models/SearchResults';
import ArticleResultsFixture from '../fixtures/ArticleResultsFixtures';
import SearchTray from './SearchTray.vue';
import { SearchScope } from '../enums/SearchScope';
import { nextTick } from 'vue';

let wrapper: VueWrapper;

describe('SearchTray component', () => {
  const testResults = new SearchResults(1_000, 'https://example.com/articles', [
    ArticleResultsFixture.testResult1,
    ArticleResultsFixture.testResult2
  ]);

  beforeEach(() => {
    const mock = vi.spyOn(SearchService.prototype, 'results');
    mock.mockResolvedValue(testResults);
    wrapper = mount(SearchTray, {
      props: {
        scope: SearchScope.Articles,
        resultsPromise: new SearchService().results(
          SearchScope.Articles,
          'robots'
        ),
        defaultIcon: 'text',
        basicFieldList: ['format', 'title', 'author']
      }
    });
  });
  test('it emits an event with 2 results and the dom ID', async () => {
    await flushPromises();
    expect(wrapper.emitted().searchDataLoaded.length).toBe(1);
    expect(wrapper.emitted().searchDataLoaded[0]).toEqual([
      {
        results: 2,
        scope: SearchScope.Articles
      }
    ]);
  });
  test('it displays the appropriate description from the config', async () => {
    expect(wrapper.find('div[class="tray-description"]').text()).toEqual(
      'Articles, eBooks, and other online sources'
    );
  });

  describe('when the scope is LibraryDatabases', () => {
    test('it includes the text "View and refine results", regardless of the number of results', async () => {
      wrapper.setProps({ scope: SearchScope.LibraryDatabases });
      await nextTick();

      expect(wrapper.find('a.more-link').text()).toEqual(
        'View and refine results'
      );
    });
  });

  describe('the aria-label for the section', () => {
    test('it includes an aria-label for the section to allow navigation by landmark', () => {
      expect(wrapper.find('section').attributes('aria-label')).toEqual(
        'Articles+ results'
      );
    });
  });
});
