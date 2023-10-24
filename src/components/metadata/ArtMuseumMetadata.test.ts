import { VueWrapper, mount } from '@vue/test-utils';
import { beforeEach, describe, it, expect } from 'vitest';
import ArtMuseumMetadata from './ArtMuseumMetadata.vue';
import ArtmuseumResultsFixtures from '../../fixtures/ArtmuseumResultsFixtures';

describe('ArtMuseumMetadata', () => {
  let wrapper: VueWrapper;
  beforeEach(() => {
    wrapper = mount(ArtMuseumMetadata, {
      props: {
        document: ArtmuseumResultsFixtures.testResult1
      }
    });
  });
  it('includes the creator name', () => {
    expect(wrapper.text()).toContain(
      'Creator: Dimitri Hadzi, 1921–2006; born New York, NY; died Boston, MA; active Rome, Italy and Cambridge, MA'
    );
  });
  it('includes the medium', () => {
    expect(wrapper.text()).toContain('Medium: Cast bronze');
  });
});
