import { describe, test, expect } from 'vitest';
import TrayLayout from './TrayLayout.vue';
import { mount } from '@vue/test-utils';

describe('TrayLayout component', () => {
  test('the section includes an aria-label', () => {
    const wrapper = mount(TrayLayout, {
      props: {
        label: 'Articles+ results'
      }
    });
    expect(wrapper.find('section').attributes('aria-label')).toEqual(
      'Articles+ results'
    );
  });
});
