import { describe, test, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import SubscribeNewsletter from './SubscribeNewsletter.vue';

describe('SubscribeNewsletter component', () => {
  test('it has an input field', () => {
    const wrapper = mount(SubscribeNewsletter);
    expect(wrapper.find('input').attributes('type')).toEqual('email');
  });
  test('it has a subscribe button', () => {
    const wrapper = mount(SubscribeNewsletter);
    expect(wrapper.find('button').text()).toEqual('Subscribe');
  });
});
