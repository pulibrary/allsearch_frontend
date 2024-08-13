import { VueWrapper, mount } from '@vue/test-utils';
import { beforeEach, describe, it, expect } from 'vitest';
import LibraryStaffMetadata from './LibraryStaffMetadata.vue';
import LibraryStaffResultsFixtures from '../../fixtures/LibraryStaffResultsFixtures';

describe('LibraryStaffMetadata', () => {
  let wrapper: VueWrapper;
  beforeEach(() => {
    wrapper = mount(LibraryStaffMetadata, {
      props: {
        document: LibraryStaffResultsFixtures.testResult1
      }
    });
  });
  it('includes the email', () => {
    expect(wrapper.text()).toContain('nibmus@princeton.edu');
  });
  it('includes the library title of the library staff location', () => {
    expect(wrapper.text()).toContain('Nap Coordinator');
  });
  describe('when the staff member has added pronouns to their profile', () => {
    beforeEach(() => {
      wrapper = mount(LibraryStaffMetadata, {
        props: {
          document: LibraryStaffResultsFixtures.testResult2
        }
      });
    });
    it('includes the pronouns', () => {
      expect(wrapper.text()).toContain('(he/they)');
    });
  });
  describe('when the staff member has added pronouns with parentheses already included', () => {
    beforeEach(() => {
      wrapper = mount(LibraryStaffMetadata, {
        props: {
          document: LibraryStaffResultsFixtures.testResult3
        }
      });
    });
    it('includes the pronouns in just one set of parentheses', () => {
      expect(wrapper.text()).toContain('(she/her/ella)');
      expect(wrapper.text()).not.toContain('((she/her/ella))');
    });
  });
});
