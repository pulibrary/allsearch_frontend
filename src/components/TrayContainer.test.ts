import { describe, test, expect } from 'vitest';
import TrayContainer from './TrayContainer.vue';
import { mount } from '@vue/test-utils';

describe('TrayContainer component', () => {
  describe('when there is a search query', () => {
    test('it has a visually hidden heading', () => {
      Object.defineProperty(window, 'location', {
        value: new URL('https://allsearch.princeton.edu?q=robots')
      });
      const wrapper = mount(TrayContainer);
      expect(wrapper.find('h1').text()).toEqual('Search results');
      expect(wrapper.find('h1').classes()).toContain('visually-hidden');
    });
  });
});
