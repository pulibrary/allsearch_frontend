import { describe, test, expect, afterEach, beforeEach, vi } from 'vitest';
import { mount, flushPromises, VueWrapper } from '@vue/test-utils';
import { SearchService } from '../services/SearchService';
import { SearchResults } from '../models/SearchResults';
import FindingAidsResultsFixtures from '../fixtures/FindingAidsResultsFixtures';
import SearchTray from './SearchTray.vue';
import { SearchScope } from '../enums/SearchScope';

let wrapper: VueWrapper;
let mock;

describe('SearchTray component with Findingaids flavor', () => {
  const testResults = new SearchResults(
    134,
    'https://findingaids.princeton.edu/catalog?q=artist&search_field=all_fields',
    [
      FindingAidsResultsFixtures.testResult1,
      FindingAidsResultsFixtures.testResult2,
      FindingAidsResultsFixtures.testResult3
    ]
  );
  afterEach(() => {
    vi.restoreAllMocks();
  });
  beforeEach(() => {
    mock = vi.spyOn(SearchService.prototype, 'results');
    mock.mockResolvedValue(testResults);
    wrapper = mount(SearchTray, {
      props: {
        scope: SearchScope.FindingAids,
        resultsPromise: new SearchService().results(
          SearchScope.FindingAids,
          'my search'
        ),
        basicFieldList: ['format', 'title', 'author'],
        defaultIcon: 'collection'
      }
    });
  });

  test('it has a heading', () => {
    expect(wrapper.find('h2').text()).toEqual('Library Archives');
  });
  test('it contains a link to more results', async () => {
    await flushPromises();
    const link = wrapper.find(
      'a[href="https://findingaids.princeton.edu/catalog?q=artist&search_field=all_fields"]'
    );
    expect(link.text()).toEqual('View and refine 134 results');
  });
  test('the search result title is in an h3', async () => {
    await flushPromises();
    const titles = wrapper.findAll('h3');
    expect(titles.length).toEqual(3);
    expect(titles[0].text()).toEqual(
      'The Intent of the Artist (Manuscript), Edited by Augusto Centeno, 1941'
    );
    expect(titles[1].text()).toEqual(
      "J. Harlin O'Connell Collection on English Artists, 1825-1952 (mostly 1880-1939)"
    );
    expect(titles[2].text()).toEqual(
      'Katherine Anne Porter Collection, 1940-1945'
    );
  });
  test('it shows the date, if available', async () => {
    await flushPromises();
    const documents = wrapper.findAll('li.document');
    expect(documents[0].text()).toContain('Date: 1941');
    expect(documents[1].text()).not.toContain('Date:');
  });
  test('it shows the description, if available', async () => {
    await flushPromises();
    expect(wrapper.find('li.document').text()).toContain(
      "The collection consists of the printer's copy of the manuscript"
    );
  });
  test('it shows the repository, if available', async () => {
    await flushPromises();
    expect(wrapper.find('li.document').text()).toContain(
      'Repository: Manuscripts Division'
    );
  });
  test('it shows the collection format for collections', async () => {
    await flushPromises();
    expect(wrapper.find('li.document').text()).toContain('Format: Collection');
  });
  test('it shows the collection icon for collections', async () => {
    await flushPromises();
    expect(
      wrapper.find('span.icon.icon-collection[aria-hidden="true"]').exists()
    ).toBe(true);
  });
  describe('if there are no results', () => {
    beforeEach(() => {
      mock = vi.spyOn(SearchService.prototype, 'results');
      mock.mockResolvedValue(
        new SearchResults(0, 'https://findingaids.example.com/zero', [])
      );
      wrapper = mount(SearchTray, {
        props: {
          scope: SearchScope.FindingAids,
          resultsPromise: new SearchService().results(
            SearchScope.FindingAids,
            'my search'
          ),
          basicFieldList: ['format', 'title', 'author'],
          defaultIcon: 'collection'
        }
      });
    });
    test('it shows helpful text', async () => {
      await flushPromises();
      expect(wrapper.findAll('li').length).toEqual(0);
      expect(wrapper.text()).toContain('No results matched your search.');
      expect(wrapper.text()).toContain(
        'Try changing your search terms or searching the Library Archives.'
      );
      expect(
        wrapper.find('a[href="https://findingaids.princeton.edu"]').text()
      ).toEqual('Library Archives');
    });
  });
});
