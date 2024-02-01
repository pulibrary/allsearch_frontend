import { describe, test, expect, beforeAll } from 'vitest';
import { VueWrapper, mount } from '@vue/test-utils';
import PhysicalHoldings from './PhysicalHoldings.vue';

let wrapper: VueWrapper;

describe('PhysicalHoldings component', () => {
  describe('when there is a single library and call number', () => {
    beforeAll(() => {
      wrapper = mount(PhysicalHoldings, {
        props: {
          document: {
            title: '',
            url: '',
            id: '',
            other_fields: {
              first_library: 'ReCAP',
              first_call_number: 'DU110 .G738 1947'
            }
          }
        }
      });
    });
    test('it shows the library and call number', async () => {
      expect(wrapper.text()).toMatch(/Location:\s*ReCAP » DU110 .G738 1947/);
    });
    test('it includes a single li', async () => {
      expect(wrapper.findAll('li').length).toEqual(1);
    });
  });
  test('it shows only the library if no call number is available', async () => {
    wrapper = mount(PhysicalHoldings, {
      props: {
        document: {
          title: '',
          url: '',
          id: '',
          other_fields: {
            first_library: 'ReCAP'
          }
        }
      }
    });
    expect(wrapper.text()).toMatch(/Location:\s*ReCAP/);
  });
  test('it shows nothing if the library is not available', async () => {
    wrapper = mount(PhysicalHoldings, {
      props: {
        document: {
          title: '',
          url: '',
          id: '',
          other_fields: {
            first_call_number: 'DU110 .G738 1947'
          }
        }
      }
    });
    expect(wrapper.text()).toEqual('');
  });
  test('it shows a second holding if available', () => {
    wrapper = mount(PhysicalHoldings, {
      props: {
        document: {
          title: '',
          url: '',
          id: '',
          other_fields: {
            first_library: 'ReCAP',
            second_library: 'Firestone'
          }
        }
      }
    });
    expect(wrapper.text()).toMatch(/Location:\s*ReCAP/);
    expect(wrapper.text()).toMatch(/Location:\s*Firestone/);
  });
});
