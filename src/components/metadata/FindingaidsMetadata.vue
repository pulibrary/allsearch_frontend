<template>
  <li v-if="document.other_fields?.date">
    Date: {{ document.other_fields.date }}
  </li>
  <li v-if="document.description">
    <span class="visually-hidden">Description: </span
    >{{ StringService.truncate(document.description) }}
  </li>
</template>

<script setup lang="ts">
import { PropType } from 'vue';
import { SearchResult } from '../../models/SearchResult';
import { StringService } from '../../services/StringService';

defineProps({
  document: {
    type: Object as PropType<SearchResult>,
    required: true
  }
});
</script>
