import { describe, test, expect } from "vitest";
import { mount } from "@vue/test-utils";
import App from './App.vue';

describe('App component', () => {
    test('it has a main element that can be focused, but is not in tab order', () => {
        const wrapper = mount(App);
        expect(wrapper.find('main').attributes('tabindex')).toEqual('-1');
    });
    test('it has a skip navigation link as the first focusable element', () => {
        const wrapper = mount(App);
        // List of focusable elements courtesy of https://gomakethings.com/how-to-get-the-first-and-last-focusable-elements-in-the-dom/
        const focusable = wrapper.findAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])')
        expect(focusable[0].text()).toEqual('Skip to main content');
    });
});
