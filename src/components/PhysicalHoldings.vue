<template>
  <ul>
    <li v-for="holding of holdings" v-bind:key="holding.call_number">
      <InlineBadge v-if="holding.status" :color="holding.statusColor()">{{
        holding.status
      }}</InlineBadge>
      <span class="visually-hidden">Location: </span>
      {{ holding.label() }}
    </li>
  </ul>
</template>
<script setup lang="ts">
import { PhysicalHolding } from '../models/PhysicalHolding';
import { SearchResult } from '../models/SearchResult';
import { HoldingsService } from '../services/HoldingsService';
import InlineBadge from './InlineBadge.vue';
const props = defineProps<{
  document: SearchResult;
}>();
const holdings: PhysicalHolding[] = HoldingsService.extractHoldingsArray(
  props.document
);
</script>
