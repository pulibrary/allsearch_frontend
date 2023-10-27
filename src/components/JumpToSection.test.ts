import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import { SearchScope } from '../enums/SearchScope';
import JumpToSectionComponent from './JumpToSection.vue';

describe('JumpToSection component', () => {
  it('prints a link for each trayToLink', () => {
    const wrapper = mount(JumpToSectionComponent, {
      props: {
        traysToLink: [
          { scope: SearchScope.Articles, results: 3 },
          { scope: SearchScope.Catalog, results: 3 },
          { scope: SearchScope.FindingAids, results: 1 }
        ]
      }
    });
    const links = wrapper.findAll('a');
    expect(links.length).toEqual(3);
    expect(links[0].text()).toEqual('Articles+');
    expect(links[0].attributes('href')).toEqual('#articles');
    expect(links[1].text()).toEqual('Catalog');
    expect(links[1].attributes('href')).toEqual('#catalog');
    expect(links[2].text()).toEqual('Library Archives');
    expect(links[2].attributes('href')).toEqual('#library-archives');
  });
});
