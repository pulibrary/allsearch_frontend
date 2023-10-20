import { VueWrapper, mount } from '@vue/test-utils';
import { beforeEach, describe, it, expect } from 'vitest';
import SearchMetadata from './SearchMetadata.vue';
import ArtmuseumResultsFixtures from '../../fixtures/ArtmuseumResultsFixtures';
import { SearchScope } from '../../enums/SearchScope';

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
});
