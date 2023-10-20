import { VueWrapper, mount } from '@vue/test-utils';
import { beforeEach, describe, it, expect } from 'vitest';
import SearchMetadata from './SearchMetadata.vue';
import ArtmuseumResultsFixtures from '../../fixtures/ArtmuseumResultsFixtures';
import { SearchScope } from '../../enums/SearchScope';
import LibguidesResultsFixtures from '../../fixtures/LibguidesResultsFixtures';

describe('SearchMetadata', () => {
  let wrapper: VueWrapper;

  describe('Artmuseum scope', () => {
    beforeEach(() => {
      wrapper = mount(SearchMetadata, {
        props: {
          document: ArtmuseumResultsFixtures.testResult1,
          defaultIcon: 'visual-material',
          scope: SearchScope.ArtMuseum
        }
      });
    });
    it('does not include the format', () => {
      expect(wrapper.text()).not.toContain('Artobjects');
    });
  });

  describe('Libguides scope', () => {
    beforeEach(() => {
      wrapper = mount(SearchMetadata, {
        props: {
          document: LibguidesResultsFixtures.testResult1,
          defaultIcon: 'compass',
          scope: SearchScope.LibGuides
        }
      });
    });
    it('includes the description', () => {
      expect(wrapper.text()).toContain(
        'This guide serves as a basic starting point to find key resources for studying, researching, and performing Medieval music at Princeton.'
      );
    });
    it('does not include the format', () => {
      expect(wrapper.text()).not.toContain('Subject Guide');
    });
  });
});
