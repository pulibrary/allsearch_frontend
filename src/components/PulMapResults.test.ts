/* eslint-disable no-unused-vars */
import { describe, test, expect, vi, afterEach, beforeEach } from 'vitest';
import { flushPromises, mount } from '@vue/test-utils';
import PulmapResults from './PulMapResults.vue';
import { SearchService } from '../services/SearchService';
import { SearchResults } from '../models/SearchResults';
import PulMapResultsFixtures from '../fixtures/PulMapResultsFixtures';

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
    const mock = vi.spyOn(SearchService.prototype, 'results');
    mock.mockResolvedValue(testResults);
  });
  afterEach(() => {
    vi.restoreAllMocks();
  });

  test('it has a heading', () => {
    const wrapper = mount(PulmapResults);
    expect(wrapper.find('h2').text()).toEqual('Maps and Geographic Data');
  });
  test('heading has a map icon', () => {
    const wrapper = mount(PulmapResults);
    expect(wrapper.find('h2 span.icon.icon-map').exists()).toBe(true);
  });
  test('it shows three results', async () => {
    const wrapper = mount(PulmapResults);
    await flushPromises();
    expect(wrapper.findAll('li.document').length).toEqual(3);
  });
  test('the title is in an h3', async () => {
    const wrapper = mount(PulmapResults);
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
    const wrapper = mount(PulmapResults);
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
    const wrapper = mount(PulmapResults);
    await flushPromises();
    const titles = wrapper.findAll('h3');
    expect(titles[0].attributes('data-id')).toEqual('stanford-nz384hp1906');
    expect(titles[1].attributes('data-id')).toEqual('stanford-nh098jk5780');
    expect(titles[2].attributes('data-id')).toEqual('stanford-zx442cb4791');
  });
  test('it contains a link to more results', async () => {
    const wrapper = mount(PulmapResults);
    await flushPromises();
    const link = wrapper.find(
      'a[href="https://maps.princeton.edu/catalog?q=mushrooms&search_field=all_fields"]'
    );
    expect(link.text()).toEqual('View and refine 134 results');
  });

  describe('if there are no results', () => {
    beforeEach(() => {
      const mock = vi.spyOn(SearchService.prototype, 'results');
      mock.mockResolvedValue(
        new SearchResults(0, 'https://pulmap.example.com/zero', [])
      );
    });
    test('it shows helpful text', async () => {
      const wrapper = mount(PulmapResults);
      await flushPromises();
      expect(wrapper.findAll('li').length).toEqual(0);
      expect(wrapper.text()).toContain(
        'No results found. Search the Maps and Geographic Data'
      );
    });
  });
});
