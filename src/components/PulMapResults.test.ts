import { describe, test, expect, vi, afterEach, beforeEach } from 'vitest';
import { VueWrapper, flushPromises, mount } from '@vue/test-utils';
import { SearchService } from '../services/SearchService';
import { SearchResults } from '../models/SearchResults';
import PulMapResultsFixtures from '../fixtures/PulMapResultsFixtures';
import SearchTray from './SearchTray.vue';
import { SearchScope } from '../enums/SearchScope';

let wrapper: VueWrapper;
let mock;

describe('PulmapResults component', () => {
  const testResults = new SearchResults(
    134,
    'https://maps.princeton.edu/catalog?q=mushrooms&search_field=all_fields',
    [
      PulMapResultsFixtures.testResult1,
      PulMapResultsFixtures.testResult2,
      PulMapResultsFixtures.testResult3
    ]
  );

  beforeEach(() => {
    mock = vi.spyOn(SearchService.prototype, 'results');
    mock.mockResolvedValue(testResults);
    wrapper = mount(SearchTray, {
      props: {
        scope: SearchScope.PulMap,
        resultsPromise: new SearchService().results(
          SearchScope.PulMap,
          'searching for robots'
        )
      }
    });
  });
  afterEach(() => {
    vi.restoreAllMocks();
  });

  test('it has a heading', () => {
    expect(wrapper.find('h2').text()).toEqual('Maps and Geographic Data');
  });
  test('heading has a map icon', () => {
    expect(wrapper.find('h2 span.icon.icon-map').exists()).toBe(true);
  });
  test('it shows three results', async () => {
    await flushPromises();
    expect(wrapper.findAll('li.document').length).toEqual(3);
  });
  test('the title is in an h3', async () => {
    await flushPromises();
    const titles = wrapper.findAll('h3');
    expect(titles[0].text()).toEqual('Mushrooms, Average Yield, 2000');
    expect(titles[1].text()).toEqual(
      'Mushrooms, Harvested Area (Fractional), 2000'
    );
    expect(titles[2].text()).toEqual(
      'Mushrooms, Harvested Area (Hectares), 2000'
    );
  });
  test('it shows the formats and their icons', async () => {
    await flushPromises();
    const results = wrapper.findAll('li.document');
    expect(results[0].text()).toContain('GeoTIFF');
    expect(
      results[0].find('span.icon.icon-map[aria-hidden="true"]').exists()
    ).toBe(true);
    expect(results[1].text()).toContain('GeoTIFF');
    expect(
      results[1].find('span.icon.icon-map[aria-hidden="true"]').exists()
    ).toBe(true);
    expect(results[2].text()).toContain('GeoTIFF');
    expect(
      results[2].find('span.icon.icon-map[aria-hidden="true"]').exists()
    ).toBe(true);
  });
  test('the title h3 contains a data-attribute with the id', async () => {
    await flushPromises();
    const titles = wrapper.findAll('h3');
    expect(titles[0].attributes('data-id')).toEqual('stanford-nz384hp1906');
    expect(titles[1].attributes('data-id')).toEqual('stanford-nh098jk5780');
    expect(titles[2].attributes('data-id')).toEqual('stanford-zx442cb4791');
  });
  test('it contains a link to more results', async () => {
    await flushPromises();
    const link = wrapper.find(
      'a[href="https://maps.princeton.edu/catalog?q=mushrooms&search_field=all_fields"]'
    );
    expect(link.text()).toEqual('View and refine 134 results');
  });

  describe('if there are no results', () => {
    beforeEach(() => {
      mock = vi.spyOn(SearchService.prototype, 'results');
      mock.mockResolvedValue(
        new SearchResults(0, 'https://pulmap.example.com/zero', [])
      );
      wrapper = mount(SearchTray, {
        props: {
          scope: SearchScope.PulMap,
          resultsPromise: new SearchService().results(
            SearchScope.PulMap,
            'searching for robots'
          )
        }
      });
    });
    test('it shows helpful text', async () => {
      await flushPromises();
      expect(wrapper.findAll('li').length).toEqual(0);
      expect(wrapper.text()).toContain('No results matched your search.');
      expect(wrapper.text()).toContain(
        'Try changing your search terms or searching the Maps and Geographic Data.'
      );
    });
  });
});
