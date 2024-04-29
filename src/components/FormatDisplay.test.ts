import { describe, test, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import Format from './FormatDisplay.vue';

describe('Format component', () => {
  test('it shows the format', async () => {
    const wrapper = mount(Format, {
      props: { format: 'Book' }
    });
    expect(wrapper.text()).toContain('Book');
  });
});
