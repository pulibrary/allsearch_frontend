<template>
  <li v-if="document.creator">
    <span class="visually-hidden">Creator: </span>{{ document.creator }}
  </li>
  <li v-if="document?.other_fields?.collection">
    <span class="visually-hidden">Collection: </span
    >{{ document.other_fields.collection }}
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
