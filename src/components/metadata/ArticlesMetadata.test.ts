import { VueWrapper, mount } from '@vue/test-utils';
import { beforeEach, describe, it, expect } from 'vitest';
import ArticlesMetadata from './ArticlesMetadata.vue';
import ArticleResultsFixtures from '../../fixtures/ArticleResultsFixtures';
import { nextTick } from 'vue';

describe('ArticlesMetadata', () => {
  let wrapper: VueWrapper;
  beforeEach(() => {
    wrapper = mount(ArticlesMetadata, {
      props: {
        document: ArticleResultsFixtures.testResult3
      }
    });
  });
  it('displays html in the abstract, rather than converting it into entities', async () => {
    wrapper.get('button').trigger('click');
    await nextTick();
    expect(wrapper.text()).toContain(
      'This abstract is really quite long and it contains various HTML elements'
    );
    expect(wrapper.text()).not.toContain('<i>');
    expect(wrapper.text()).not.toContain('<strong>');
    expect(wrapper.findAll('i').length).toEqual(1);
    expect(wrapper.findAll('strong').length).toEqual(1);
  });
});
