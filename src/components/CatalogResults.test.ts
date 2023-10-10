/* eslint-disable no-unused-vars */
import { describe, test, expect, vi, afterEach, beforeEach } from "vitest";
import { nextTick } from 'vue';
import { mount } from "@vue/test-utils";
import CatalogResults from './CatalogResults.vue';
import { SearchService } from "../services/SearchService";

describe('CatalogResults component', () => {
    afterEach(() => {
        vi.restoreAllMocks()
    })
    test('it has a heading', () => {
        const wrapper = mount(CatalogResults);
        expect(wrapper.find('h2').text()).toEqual("Catalog");
    });
    test('heading has a book icon', () => {
        const wrapper = mount(CatalogResults);
        expect(wrapper.find('h2 span.icon.icon-book').exists()).toBe(true);
    });
    test('it has a link to more results', async () => {
        const wrapper = mount(CatalogResults);
        await nextTick();
        const link = wrapper.find('a');
        expect(link.text()).toEqual('Refine catalog search');
        expect(link.attributes('href')).toEqual('https://example.com');
    });
    test('it shows three results', async () => {
        const wrapper = mount(CatalogResults);
        await nextTick();
        expect(wrapper.findAll('li.document').length).toEqual(3);
    });
    test('the title is in an h3', async () => {
        const wrapper = mount(CatalogResults);
        await nextTick();
        const titles = wrapper.findAll('h3');
        expect(titles[0].text()).toEqual('Potato');
        expect(titles[1].text()).toEqual('Cheese');
        expect(titles[2].text()).toEqual('Salmon');
    });
    test('it shows the author if it exists', async () => {
        const wrapper = mount(CatalogResults);
        await nextTick();
        const results = wrapper.findAll('li.document');
        expect(results[0].text()).toContain('Shrek');
    });
    test('it shows the library and call number if they exist', async () => {
        const wrapper = mount(CatalogResults);
        await nextTick();
        const results = wrapper.findAll('li.document');
        expect(results[1].text()).toContain('Marquand » ABC 123');
    });
    test('it shows the formats and their icons', async () => {
        const wrapper = mount(CatalogResults);
        await nextTick();
        const results = wrapper.findAll('li.document');
        expect(results[0].text()).toContain('Book');
        expect(results[0].find('span.icon.icon-book[aria-hidden="true"]').exists()).toBe(true);
        expect(results[1].text()).toContain('Audio');
        expect(results[1].find('span.icon.icon-audio[aria-hidden="true"]').exists()).toBe(true);
        expect(results[2].text()).toContain('Coin');
        expect(results[2].find('span.icon.icon-coin[aria-hidden="true"]').exists()).toBe(true);
    });
    test('the title h3 contains a data-attribute with the id', async () => {
        const wrapper = mount(CatalogResults);
        await nextTick();
        const titles = wrapper.findAll('h3');
        expect(titles[0].attributes('data-id')).toEqual('123');
        expect(titles[1].attributes('data-id')).toEqual('456');
        expect(titles[2].attributes('data-id')).toEqual('789');
    });
    test('it contains a second more link, this time with different link text', async () => {
        const wrapper = mount(CatalogResults);
        await nextTick();
        const link = wrapper.findAll('a')[1];
        expect(link.text()).toEqual('View all 23182 results');
        expect(link.attributes('href')).toEqual('https://example.com');
    });
    // The following mock is not working as expected
    describe.todo('if there are no results', () => {
        beforeEach(() => {
            const mock = vi.spyOn(SearchService.prototype, 'results');
            mock.mockResolvedValue(
                {
                    number: 23_182,
                    more: 'https://example.com/zero',
                    results: []
                }
            );
        });
        test('it shows helpful text', async () => {
            const wrapper = mount(CatalogResults);
            expect(wrapper.findAll('li').length).toEqual(0);    
            expect(wrapper.text()).toContain('No results found. Search the Catalog');
        });
    });
});
