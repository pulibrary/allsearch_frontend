<template>
  <li v-if="document?.other_fields?.email">
    <span class="visually-hidden">Email: </span
    >{{ document.other_fields.email }}
  </li>
  <li v-if="document?.other_fields?.phone">
    <span class="visually-hidden">Phone: </span
    >{{ document.other_fields.phone }}
  </li>
  <li v-if="document?.other_fields?.office">
    <span class="visually-hidden">Office: </span
    >{{ document.other_fields.office }}
  </li>
  <li v-if="document?.other_fields?.building">
    <span class="visually-hidden">Building: </span
    >{{ document.other_fields.building }}
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
