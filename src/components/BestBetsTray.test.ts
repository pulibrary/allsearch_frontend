import { describe, test, expect, beforeEach, vi, SpyInstance } from 'vitest';
import { VueWrapper, flushPromises, mount } from '@vue/test-utils';
import { SearchService } from '../services/SearchService';
import { SearchResults } from '../models/SearchResults';
import BestBetsTray from './BestBetsTray.vue';
import BestBetResultsFixture from '../fixtures/BestBetResultsFixture';

let mock: SpyInstance;
let wrapper: VueWrapper;
let testResults: SearchResults;

describe('BestBetsTray component', () => {
  describe('when there is a search result', () => {
    beforeEach(() => {
      mock = vi.spyOn(SearchService.prototype, 'results');
      testResults = new SearchResults(1, 'https://example.com', [
        BestBetResultsFixture.testResult1
      ]);
      mock.mockResolvedValue(testResults);
      wrapper = mount(BestBetsTray, {
        props: {
          resultsPromise: new SearchService().results(
            'best-bet',
            'new york times'
          )
        }
      });
    });
    test('it has a heading', async () => {
      await flushPromises();
      expect(wrapper.find('h2').text()).toEqual('Best Bets');
    });
    test('heading has a best bet icon', async () => {
      await flushPromises();
      expect(wrapper.find('h2 span.icon.icon-best-bet').exists()).toBe(true);
    });
    test('the title is in an h3', async () => {
      await flushPromises();
      const titles = wrapper.findAll('h3');
      expect(titles[0].text()).toEqual('The New York Times');
    });
    test('it shows the description if it exists', async () => {
      await flushPromises();
      const results = wrapper.findAll('li.document');
      expect(results[0].text()).toContain(
        'Guide with links to the best sources for current and historical full text online of the NYT.'
      );
    });
  });
  describe('when there is a very long description', () => {
    beforeEach(() => {
      testResults = new SearchResults(1, 'https://example.com', [
        BestBetResultsFixture.testResult2
      ]);
      mock.mockResolvedValue(testResults);
      wrapper = mount(BestBetsTray, {
        props: {
          resultsPromise: new SearchService().results(
            'best-bet',
            'new york times'
          )
        }
      });
    });
    test('it does not truncate the description', async () => {
      await flushPromises();
      const results = wrapper.findAll('li.document');
      expect(results[0].text()).toContain(
        'This program pairs every Princeton undergraduate with a friendly library expert. Your Personal Librarian will help you navigate the library system, get started with research, point you to subject experts, and answer any questions you might have.'
      );
    });
  });
  describe('when there are no results', () => {
    beforeEach(() => {
      mock = vi.spyOn(SearchService.prototype, 'results');
      testResults = new SearchResults(0, 'https://example.com', []);
      mock.mockResolvedValue(testResults);
      wrapper = mount(BestBetsTray, {
        props: {
          resultsPromise: new SearchService().results(
            'best-bet',
            'no best bets here'
          )
        }
      });
    });
    test('it displays a placeholder', async () => {
      await flushPromises();
      expect(wrapper.html()).toEqual('<div class="placeholder"></div>');
    });
    test('it emits an event with 0 results and the dom ID', async () => {
      await flushPromises();
      expect(wrapper.emitted().bestBetDataLoaded.length).toBe(1);
      expect(wrapper.emitted().bestBetDataLoaded[0]).toEqual([0]);
    });
  });
});
