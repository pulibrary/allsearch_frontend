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
  it('includes the phone', () => {
    expect(wrapper.text()).toContain('(555) 111-1111');
  });
  it('includes the office number', () => {
    expect(wrapper.text()).toContain('A-200');
  });
  it('includes the building location', () => {
    expect(wrapper.text()).toContain('Firestone Library');
  });
});
