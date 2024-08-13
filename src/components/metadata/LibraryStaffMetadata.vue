<template>
  <li v-if="document?.other_fields?.library_title">
    <span class="visually-hidden">Library Title: </span
    >{{ document.other_fields.library_title }}
  </li>
  <li v-if="pronouns">
    <span class="visually-hidden">Pronouns: </span>{{ pronouns }}
  </li>
  <li v-if="document?.other_fields?.email">
    <span class="visually-hidden">Email: </span
    >{{ document.other_fields.email }}
  </li>
</template>

<script setup lang="ts">
import { PropType, computed } from 'vue';
import { SearchResult } from '../../models/SearchResult';

const props = defineProps({
  document: {
    type: Object as PropType<SearchResult>,
    required: true
  }
});
const pronouns = computed(() => {
  const pronounsFromProfile = props.document?.other_fields?.pronouns;
  if (pronounsFromProfile) {
    // Remove preceding and trailing parentheses, if they exist...
    const withoutParentheses = pronounsFromProfile.replaceAll(/(^\(|\)$)/g, '');
    // ...then add back parentheses so that all pronouns display with
    // just one set of parentheses
    return `(${withoutParentheses})`;
  }
  return null;
});
</script>
