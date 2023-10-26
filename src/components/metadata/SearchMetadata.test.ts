import { VueWrapper, mount } from '@vue/test-utils';
import { beforeEach, describe, it, expect } from 'vitest';
import SearchMetadata from './SearchMetadata.vue';
import ArtmuseumResultsFixtures from '../../fixtures/ArtmuseumResultsFixtures';
import { SearchScope } from '../../enums/SearchScope';
import LibguidesResultsFixtures from '../../fixtures/LibguidesResultsFixtures';
import LibraryDatabasesResultsFixtures from '../../fixtures/LibraryDatabasesResultsFixtures';

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

  describe('Library databases scope', () => {
    beforeEach(() => {
      wrapper = mount(SearchMetadata, {
        props: {
          document: LibraryDatabasesResultsFixtures.testResult1,
          defaultIcon: 'database',
          scope: SearchScope.LibraryDatabases
        }
      });
    });
    it('includes the truncated description', () => {
      console.log(wrapper.text());
      expect(wrapper.text()).toContain(
        'Also known as Beida fabao, or pkulaw.cn.  Chinese laws, regulations and cases in Chinese (Chinalawinfo) and English/Chinese (Lawinfochina). One concurrent…'
      );
    });
  });
});
