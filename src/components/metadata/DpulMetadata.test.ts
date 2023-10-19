import { VueWrapper, mount } from '@vue/test-utils';
import { beforeEach, describe, it, expect } from 'vitest';
import DpulMetadata from './DpulMetadata.vue';
import DpulResultsFixtures from '../../fixtures/DpulResultsFixtures';

describe('DpulMetadata', () => {
  let wrapper: VueWrapper;
  beforeEach(() => {
    wrapper = mount(DpulMetadata, {
      props: {
        document: DpulResultsFixtures.testResult1
      }
    });
  });
  it('includes the collection name', () => {
    expect(wrapper.text()).toContain(
      'Collection: Music and Performing Arts Collections at Princeton'
    );
  });
});
