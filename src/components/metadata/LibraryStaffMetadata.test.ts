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
});
