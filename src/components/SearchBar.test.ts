import { describe, test, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import SearchBar from './SearchBar.vue';

describe('Searchbar component', () => {
  test('input includes the current search', () => {
    Object.defineProperty(window, 'location', {
      value: new URL('https://allsearch.princeton.edu?q=narwhal')
    });
    const wrapper = mount(SearchBar);
    expect(wrapper.find('input').element.value).toEqual('narwhal');
  });
  [
    '"><script>alert("bad")</script>',
    '<script src=example.com></script>',
    `javascript:/*--></title></style></textarea></script></xmp><svg/onload='+/"/+/onmouseover=1/+/[*/[]/+alert(1)//'>`,
    'javascript:alert(String.fromCharCode(88,83,83))',
    "jav ascript:alert('XSS');"
  ].forEach(payload => {
    test(
      "unusual search queries don't cause the input's value attribute to end early, payload: " +
        payload,
      () => {
        Object.defineProperty(window, 'location', {
          value: new URL('https://allsearch.princeton.edu?q=' + payload)
        });
        const wrapper = mount(SearchBar);
        // Make sure that the next element in the DOM exists
        expect(wrapper.find('button.lux-button').exists()).toBe(true);
      }
    );
  });
  test('input includes the current search', () => {
    Object.defineProperty(window, 'location', {
      value: new URL('https://allsearch.princeton.edu?q=narwhal')
    });
    const wrapper = mount(SearchBar);
    expect(wrapper.find('input').element.value).toEqual('narwhal');
  });
});
