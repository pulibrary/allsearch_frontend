<template>
   <li v-if="document.other_fields?.date">
      Date: {{ document.other_fields.date }}
    </li>
    <li v-if="document.description">{{ document.description }}</li>
    <li v-if="document.other_fields?.repository">
      <span class="visually-hidden">Repository: </span
      >{{ document.other_fields.repository }}
    </li>
</template>

<script setup lang="ts">
import { PropType } from 'vue';
import { SearchResult } from '../../models/SearchResult';

defineProps({
  document: {
    type: Object as PropType<SearchResult>,
    required: true
    },
});
</script>
