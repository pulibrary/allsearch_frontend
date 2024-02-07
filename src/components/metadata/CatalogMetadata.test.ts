import { beforeEach, describe, expect, test } from 'vitest';
import { mount, VueWrapper } from '@vue/test-utils';
import CatalogMetadata from './CatalogMetadata.vue';
import { PhysicalHolding } from '../../models/PhysicalHolding';

describe('CatalogMetadata', () => {
  let wrapper: VueWrapper;
  beforeEach(() => {
    wrapper = mount(CatalogMetadata, {
      props: {
        holdings: [new PhysicalHolding('Firestone', 'ABC 123', 'Available')],
        url: 'https://na05.alma.exlibrisgroup.com/view/uresolver/01PRI_INST/openurl?u.ignore_date_coverage=true&portfolio_pid=53763462940006421&Force_direct=true'
      }
    });
  });

  test('it shows the library and call number if they exist', async () => {
    const results = wrapper.findAll('li.access-info');
    expect(results[0].text()).toContain('Firestone');
  });

  test('it shows an Available Online link if resource_url exists', async () => {
    const result = wrapper.findAll('a');
    expect(result[0].attributes('href')).toEqual(
      'https://na05.alma.exlibrisgroup.com/view/uresolver/01PRI_INST/openurl?u.ignore_date_coverage=true&portfolio_pid=53763462940006421&Force_direct=true'
    );
  });
});
