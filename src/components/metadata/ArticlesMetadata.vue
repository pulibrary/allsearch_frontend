<template>
  <li>
    <LuxShowMore
      v-if="document.other_fields?.abstract"
      content-id="abstract-{{document.id}}"
      :description-id="document.id"
      show-label="Show abstract"
      hide-label="Hide abstract"
      :character-limit="characterLimit"
      width="100%"
      font-size="1.125rem"
      ><!-- nosemgrep javascript.vue.security.audit.xss.templates.avoid-v-html.avoid-v-html -->
      <span v-html="document.other_fields.abstract"></span
    ></LuxShowMore>
  </li>
  <li v-if="document.other_fields?.fulltext_available">
    <InlineBadge color="blue">Full-text available</InlineBadge>
  </li>
  <ArticleCitation :fields="document.other_fields"></ArticleCitation>
</template>

<script setup lang="ts">
import { PropType } from 'vue';
import { SearchResult } from '../../models/SearchResult';

import ArticleCitation from '../ArticleCitation.vue';
import InlineBadge from '../InlineBadge.vue';
import { LuxShowMore } from 'lux-design-system';

defineProps({
  document: {
    type: Object as PropType<SearchResult>,
    required: true
  }
});

const characterLimit = 100;
</script>
<style>
.lux-show-more button.lux-button {
  color: light-dark(var(--grey-100), var(--color-white));
  text-decoration-color: light-dark(var(--grey-100), var(--color-white));
}
</style>
