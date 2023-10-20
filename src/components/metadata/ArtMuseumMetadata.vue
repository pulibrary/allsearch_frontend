<template>
  <li v-if="document.creator">
    <span class="visually-hidden">Creator: </span>{{ document.creator }}
  </li>
  <li v-if="document.other_fields?.medium">
    Medium: {{ document.other_fields.medium }}
  </li>
</template>

<script setup lang="ts">
import { PropType } from 'vue';
import { SearchResult } from '../../models/SearchResult';

defineProps({
  document: {
    type: Object as PropType<SearchResult>,
    required: true
  }
});
</script>
