<template>
  <li v-if="document.description">
    <span class="visually-hidden">Description: </span
    ><LuxShowMore
      content-id="findingaids-abstract-{{document.id}}"
      show-label="Show abstract"
      hide-label="Hide abstract"
      :character-limit="characterLimit"
      :description-id="document.id"
      >{{ document.description }}</LuxShowMore
    >
  </li>
</template>

<script setup lang="ts">
import { PropType } from 'vue';
import { SearchResult } from '../../models/SearchResult';
import { LuxShowMore } from 'lux-design-system';

defineProps({
  document: {
    type: Object as PropType<SearchResult>,
    required: true
  }
});

const characterLimit = 150;
</script>
