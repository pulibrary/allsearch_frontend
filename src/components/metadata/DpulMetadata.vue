<template>
  <li v-if="document?.other_fields?.collection">
    <span class="visually-hidden">Collection: </span>
    <span class="collection">{{ document.other_fields.collection }}</span>
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
<style>
.collection {
  font-size: 1rem;
}
</style>
