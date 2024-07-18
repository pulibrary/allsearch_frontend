import { VueWrapper, mount } from '@vue/test-utils';
import { beforeEach, describe, it, expect } from 'vitest';
import SearchMetadata from './SearchMetadata.vue';
import ArtmuseumResultsFixtures from '../../fixtures/ArtmuseumResultsFixtures';
import LibguidesResultsFixtures from '../../fixtures/LibguidesResultsFixtures';
import LibraryDatabasesResultsFixtures from '../../fixtures/LibraryDatabasesResultsFixtures';
import LibraryWebsiteResultsFixtures from '../../fixtures/LibraryWebsiteResultsFixtures';
import ScopeFieldsMap from '../../config/ScopeFieldsMap';

describe('SearchMetadata', () => {
  let wrapper: VueWrapper;

  describe('Artmuseum scope', () => {
    beforeEach(() => {
      wrapper = mount(SearchMetadata, {
        props: {
          document: ArtmuseumResultsFixtures.testResult1,
          defaultIcon: 'visual-material',
          basicFieldList: ScopeFieldsMap['artmuseum']
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
          basicFieldList: ScopeFieldsMap['libguides']
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
          basicFieldList: ScopeFieldsMap['database']
        }
      });
    });
    it('includes the truncated description', () => {
      expect(wrapper.text()).toContain(
        'Also known as Beida fabao, or pkulaw.cn.  Chinese laws, regulations and cases in Chinese (Chinalawinfo) and English/Chinese (Lawinfochina). One concurrent…'
      );
    });
  });

  describe('Library website scope', () => {
    beforeEach(() => {
      wrapper = mount(SearchMetadata, {
        props: {
          document: LibraryWebsiteResultsFixtures.testResult1,
          defaultIcon: 'windows',
          basicFieldList: ScopeFieldsMap.website
        }
      });
    });
    it('displays html from the results, rather than converting it into entities', () => {
      expect(wrapper.text()).toContain(
        'This series gives readers an inside look into the scholarly articles that grace the pages of the Princeton University Library Chronicle.'
      );
      expect(wrapper.text()).not.toContain('<em>');
      expect(wrapper.text()).not.toContain('<strong>');
      expect(wrapper.findAll('em').length).toEqual(2);
    });
  });
});
