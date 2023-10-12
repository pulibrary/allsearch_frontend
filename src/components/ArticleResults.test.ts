import { describe, test, expect } from "vitest";
import ArticleResults from "./ArticleResults.vue";
import { flushPromises, mount } from "@vue/test-utils";

describe('ArticleResults component', () => {
    test('it has a heading', () => {
        const wrapper = mount(ArticleResults);
        expect(wrapper.find('h2').text()).toEqual("Articles+");
    });
    test('heading has an articles icon', () => {
        const wrapper = mount(ArticleResults);
        expect(wrapper.find('h2 span.icon.icon-text').exists()).toBe(true);
    });
    test('it contains a link to more results', async () => {
        const wrapper = mount(ArticleResults);
        await flushPromises();
        const link = wrapper.find('a[href="https://example.com"]');
        expect(link.text()).toEqual('View and refine 23,182 results');
    });
});
