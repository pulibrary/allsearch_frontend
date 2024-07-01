import { describe, test, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import AppFooter from './AppFooter.vue';

const wrapper = mount(AppFooter);

describe('AppFooter component', () => {
  test('it has a lux-library-footer', () => {
    expect(wrapper.find('#app > div.lux-library-footer')).toBeTruthy;
  });
});
