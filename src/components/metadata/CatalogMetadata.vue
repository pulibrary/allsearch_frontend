<template>
  <li v-if="holdings.length" class="access-info">
    <PhysicalHoldings
      :holdings="holdings"
      :record-url="recordUrl"
    ></PhysicalHoldings>
  </li>
  <li v-if="url" class="access-info">
    <OnlineContent
      :url="url"
      :url-label="urlLabel"
      :online-access-count="onlineAccessCount"
      :record-url="recordUrl"
    ></OnlineContent>
  </li>
</template>

<script setup lang="ts">
import OnlineContent from '../OnlineContent.vue';
import PhysicalHoldings from '../PhysicalHoldings.vue';
import { PhysicalHolding } from '../../models/PhysicalHolding';
import { PropType } from 'vue';

/* eslint-disable vue/require-default-prop */
defineProps({
  url: String,
  urlLabel: String,
  holdings: {
    type: Array as PropType<PhysicalHolding[]>,
    required: true
  },
  onlineAccessCount: {
    type: Number,
    required: true
  },
  recordUrl: {
    type: String,
    required: true
  }
});
/* eslint-enable vue/require-default-prop */
</script>
