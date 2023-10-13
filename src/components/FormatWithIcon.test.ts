import { describe, test, expect } from "vitest";
import { mount } from "@vue/test-utils";
import FormatWithIcon from './FormatWithIcon.vue';

describe('FormatWithIcon component', () => {
    test('it shows the format and its icon', async () => {
        const wrapper = mount(FormatWithIcon, {
            props: {format: 'Book'}
        });
        expect(wrapper.text()).toContain('Book');
        expect(wrapper.find('span.icon.icon-book[aria-hidden="true"]').exists()).toBe(true);
    });
    test('you can override the icon if needed', async () => {
        const wrapper = mount(FormatWithIcon, {
            props: {
                format: 'Book',
                icon: 'text'
            }
        });
        expect(wrapper.text()).toContain('Book');
        expect(wrapper.find('span.icon.icon-text[aria-hidden="true"]').exists()).toBe(true);
    });
});
