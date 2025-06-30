<template>
  <ul>
    <template v-if="multipleHoldings">
      <InlineBadge color="gray">MULTIPLE LOCATIONS</InlineBadge>
      <a :href="recordUrl" aria-describedby="physical-holding-link-description"
        >View All Options</a
      >
      <span aria-hidden="true" class="icon icon-newtab"></span>
      <span id="physical-holding-link-description" class="visually-hidden"
        >Opens in new tab</span
      >
    </template>
    <li v-for="holding of props.holdings" :key="holding.call_number" v-else>
      <InlineBadge v-if="holding.status" :color="holding.statusColor()">{{
        holding.statusLabel()
      }}</InlineBadge>
      <span class="visually-hidden">Location: </span>
      {{ holding.label() }}
    </li>
  </ul>
</template>
<script setup lang="ts">
import { PhysicalHolding } from '../models/PhysicalHolding';
import InlineBadge from './InlineBadge.vue';
const props = defineProps<{
  holdings: PhysicalHolding[];
  recordUrl: string;
}>();
const multipleHoldings = props.holdings.length > 1;
</script>
