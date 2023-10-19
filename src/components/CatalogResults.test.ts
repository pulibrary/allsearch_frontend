/* eslint-disable no-unused-vars */
import { describe, test, expect, vi, afterEach, beforeEach } from 'vitest'
import { flushPromises, mount } from '@vue/test-utils'
import CatalogResults from './CatalogResults.vue'
import { SearchService } from '../services/SearchService'
import { Axios } from 'axios'
import SearchServiceFixtures from '../fixtures/SearchServiceFixtures'
import { SearchResults } from '../models/SearchResults'

describe('CatalogResults component', () => {
  beforeEach(() => {
    const mock = vi.spyOn(Axios.prototype, 'get')
    mock.mockResolvedValue({
      data: SearchServiceFixtures.results
    })
  })
  afterEach(() => {
    vi.restoreAllMocks()
  })
  test('it has a heading', () => {
    const wrapper = mount(CatalogResults)
    expect(wrapper.find('h2').text()).toEqual('Catalog')
  })
  test('heading has a book icon', () => {
    const wrapper = mount(CatalogResults)
    expect(wrapper.find('h2 span.icon.icon-book').exists()).toBe(true)
  })
  test('it shows three results', async () => {
    const wrapper = mount(CatalogResults)
    await flushPromises()
    expect(wrapper.findAll('li.document').length).toEqual(3)
  })
  test('the title is in an h3', async () => {
    const wrapper = mount(CatalogResults)
    await flushPromises()
    const titles = wrapper.findAll('h3')
    expect(titles[0].text()).toEqual('Potato')
    expect(titles[1].text()).toEqual('Cheese')
    expect(titles[2].text()).toEqual('Salmon')
  })
  test('it shows the author if it exists', async () => {
    const wrapper = mount(CatalogResults)
    await flushPromises()
    const results = wrapper.findAll('li.document')
    expect(results[0].text()).toContain('Shrek')
  })
  test('it shows the library and call number if they exist', async () => {
    const wrapper = mount(CatalogResults)
    await flushPromises()
    const results = wrapper.findAll('li.document')
    expect(results[1].text()).toContain('Marquand » ABC 123')
  })
  test('it shows the publisher statement if it exists', async () => {
    const wrapper = mount(CatalogResults)
    await flushPromises()
    const results = wrapper.findAll('li.document')
    expect(results[2].text()).toContain('Boca Raton : CRC Press, [2016]')
  })
  test('it shows an Available Online link if resource_url exists', async () => {
    const wrapper = mount(CatalogResults)
    await flushPromises()
    const results = wrapper.findAll('li.document')
    expect(results[0].find('.access-info a').attributes('href')).toEqual(
      'https://na05.alma.exlibrisgroup.com/view/uresolver/01PRI_INST/openurl?u.ignore_date_coverage=true&portfolio_pid=53763462940006421&Force_direct=true'
    )
  })
  test('it shows the formats and their icons', async () => {
    const wrapper = mount(CatalogResults)
    await flushPromises()
    const results = wrapper.findAll('li.document')
    expect(results[0].text()).toContain('Book')
    expect(
      results[0].find('span.icon.icon-book[aria-hidden="true"]').exists()
    ).toBe(true)
    expect(results[1].text()).toContain('Audio')
    expect(
      results[1].find('span.icon.icon-audio[aria-hidden="true"]').exists()
    ).toBe(true)
    expect(results[2].text()).toContain('Coin')
    expect(
      results[2].find('span.icon.icon-coin[aria-hidden="true"]').exists()
    ).toBe(true)
  })
  test('the title h3 contains a data-attribute with the id', async () => {
    const wrapper = mount(CatalogResults)
    await flushPromises()
    const titles = wrapper.findAll('h3')
    expect(titles[0].attributes('data-id')).toEqual('123')
    expect(titles[1].attributes('data-id')).toEqual('456')
    expect(titles[2].attributes('data-id')).toEqual('789')
  })
  test('it contains a link to more results', async () => {
    const wrapper = mount(CatalogResults)
    await flushPromises()
    const link = wrapper.find('a[href="https://example.com"]')
    expect(link.text()).toEqual('View and refine 23,182 results')
  })
  describe('if there are no results', () => {
    beforeEach(() => {
      const mock = vi.spyOn(SearchService.prototype, 'results')
      mock.mockResolvedValue(
        new SearchResults(23_182, 'https://example.com/zero', [])
      )
    })
    test('it shows helpful text', async () => {
      const wrapper = mount(CatalogResults)
      await flushPromises()
      expect(wrapper.findAll('li').length).toEqual(0)
      expect(wrapper.text()).toContain('No results found. Search the Catalog')
    })
  })
})
