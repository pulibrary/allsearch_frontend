import { describe, test, expect, beforeAll } from 'vitest';
import { VueWrapper, mount } from '@vue/test-utils';
import PhysicalHoldings from './PhysicalHoldings.vue';
import { PhysicalHolding } from '../models/PhysicalHolding';

let wrapper: VueWrapper;

describe('PhysicalHoldings component', () => {
  describe('when there is a single library and call number', () => {
    beforeAll(() => {
      wrapper = mount(PhysicalHoldings, {
        props: {
          holdings: [new PhysicalHolding('ReCAP', 'DU110 .G738 1947')]
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
        holdings: [new PhysicalHolding('ReCAP')]
      }
    });
    expect(wrapper.text()).toMatch(/Location:\s*ReCAP/);
  });
  test('it shows nothing if no holdings are available', async () => {
    wrapper = mount(PhysicalHoldings, {
      props: {
        holdings: []
      }
    });
    expect(wrapper.text()).toEqual('');
  });
  test('it shows a second holding if available', () => {
    wrapper = mount(PhysicalHoldings, {
      props: {
        holdings: [
          new PhysicalHolding('ReCAP'),
          new PhysicalHolding('Firestone')
        ]
      }
    });
    expect(wrapper.text()).toMatch(/Location:\s*ReCAP/);
    expect(wrapper.text()).toMatch(/Location:\s*Firestone/);
  });
  test('it shows a green status badge if other_fields has a status to display', () => {
    wrapper = mount(PhysicalHoldings, {
      props: {
        holdings: [new PhysicalHolding('Stokes', undefined, 'Available')]
      }
    });
    expect(wrapper.find('.badge-green').text()).toMatch(/Available/);
  });
});
