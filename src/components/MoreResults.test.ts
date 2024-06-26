import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import MoreResultsComponent from './MoreResults.vue';

describe('MoreResults component', () => {
  it('includes the result count in a human-readable format', () => {
    const wrapper = mount(MoreResultsComponent, {
      props: {
        url: 'https://princeton.edu',
        resultCount: 1_000_000
      }
    });
    const link = wrapper.find('a');
    expect(link.text()).toEqual('View and refine 1,000,000 results');
  });
  describe('when no resultCount prop is provided', () => {
    it('has text "View and refine results"', () => {
      const wrapper = mount(MoreResultsComponent, {
        props: {
          url: 'https://princeton.edu'
        }
      });
      const link = wrapper.find('a');
      expect(link.text()).toEqual('View and refine results');
    });
  });
  describe('when undefined resultCount prop is provided', () => {
    it('has text "View and refine results"', () => {
      const wrapper = mount(MoreResultsComponent, {
        props: {
          url: 'https://princeton.edu',
          resultCount: undefined
        }
      });
      const link = wrapper.find('a');
      expect(link.text()).toEqual('View and refine results');
    });
  });
});
