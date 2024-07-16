<template>
  <li v-if="document?.other_fields?.library_title">
    <span class="visually-hidden">Library Title: </span
    >{{ document.other_fields.library_title }}
  </li>
  <li v-if="document?.other_fields?.email">
    <span class="visually-hidden">Email: </span
    >{{ document.other_fields.email }}
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
