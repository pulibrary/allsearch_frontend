<template>
  <li v-if="document.other_fields?.fulltext_available">
    <InlineBadge>Full-text available</InlineBadge>
  </li>
  <ArticleCitation :fields="document.other_fields"></ArticleCitation>
</template>

<script setup lang="ts">
import { PropType } from 'vue';
import { SearchResult } from '../../models/SearchResult';

import ArticleCitation from '../ArticleCitation.vue';
import InlineBadge from '../InlineBadge.vue';

defineProps({
  document: {
    type: Object as PropType<SearchResult>,
    required: true
  }
});
</script>
