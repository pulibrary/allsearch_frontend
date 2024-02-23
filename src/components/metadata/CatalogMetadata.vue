<template>
  <li v-if="holdings.length" class="access-info">
    <PhysicalHoldings
      :holdings="holdings"
      :document="document"
    ></PhysicalHoldings>
  </li>
  <li v-if="url" class="access-info">
    <OnlineContent :url="url" :url-label="urlLabel"></OnlineContent>
  </li>
</template>

<script setup lang="ts">
import OnlineContent from '../OnlineContent.vue';
import PhysicalHoldings from '../PhysicalHoldings.vue';
import { PhysicalHolding } from '../../models/PhysicalHolding';
import { PropType } from 'vue';
import { SearchResult } from '../../models/SearchResult';

defineProps({
  url: String,
  urlLabel: String,
  holdings: {
    type: Array as PropType<PhysicalHolding[]>,
    required: true
  },
  document: {
    type: Object as PropType<SearchResult>,
    required: true
  }
});
</script>
