<template>
  <li v-for="holding of props.holdings" :key="holding.call_number">
    <InlineBadge v-if="holding.status" :color="holding.statusColor()">{{
      holding.status
    }}</InlineBadge>
    <span class="visually-hidden">Location: </span>
    {{ holding.label() }}
    <StackMap :holding="holding" :document="document"></StackMap>
  </li>
</template>
<script setup lang="ts">
import { PhysicalHolding } from '../models/PhysicalHolding';
import { SearchResult } from '../models/SearchResult';
import InlineBadge from './InlineBadge.vue';
import StackMap from './StackMap.vue';
const props = defineProps<{
  holdings: PhysicalHolding[];
  document: SearchResult;
}>();
</script>
