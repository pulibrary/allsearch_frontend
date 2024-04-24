<template>
  <LuxDisclosure
    v-if="document.other_fields?.abstract"
    contentId="123"
    showLabel="Show abstract"
    hideLabel="Hide abstract"
    width="100%"
    fontSize="1.125rem"
    >{{ document.other_fields?.abstract }}</LuxDisclosure
  >
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
