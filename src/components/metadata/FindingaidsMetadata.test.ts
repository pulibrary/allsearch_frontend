import { VueWrapper, mount } from '@vue/test-utils';
import { beforeEach, describe, it, expect } from 'vitest';
import FindingaidsMetadata from './FindingaidsMetadata.vue';
import FindingAidsResultsFixtures from '../../fixtures/FindingAidsResultsFixtures';

describe('FindingaidsMetadata', () => {
  let wrapper: VueWrapper;
  beforeEach(() => {
    wrapper = mount(FindingaidsMetadata, {
      props: {
        document: FindingAidsResultsFixtures.testResult1
      }
    });
  });
  it('truncates long descriptions', () => {
    expect(wrapper.text()).toContain(
      "Description: The collection consists of the printer's copy of the manuscript for The Intent of the Artist , edited by Centeno and published by the Princeton University…"
    );
  });
});
