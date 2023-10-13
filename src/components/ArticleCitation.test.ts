import { describe, test, expect } from "vitest";
import { mount } from "@vue/test-utils";
import ArticleCitation from './ArticleCitation.vue';

describe('ArticleHoldings component', () => {
    test('it shows the journal title if available', async () => {
        const wrapper = mount(ArticleCitation, {
            props: {fields: {
                publication_title: 'Journal of Advanced Cats'
            }}
        });
        expect(wrapper.find('em').text()).toEqual('Contained in: Journal of Advanced Cats');
    });
});
