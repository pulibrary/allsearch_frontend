<template>
  <li>
    <LuxDisclosure
      v-if="document.other_fields?.abstract"
      content-id="123"
      show-label="Show abstract"
      hide-label="Hide abstract"
      width="100%"
      font-size="1.125rem"
      ><!-- nosemgrep javascript.vue.security.audit.xss.templates.avoid-v-html.avoid-v-html -->
      <span v-html="document.other_fields.abstract"></span
    ></LuxDisclosure>
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
import { LuxDisclosure } from 'lux-design-system';

defineProps({
  document: {
    type: Object as PropType<SearchResult>,
    required: true
  }
});
</script>
