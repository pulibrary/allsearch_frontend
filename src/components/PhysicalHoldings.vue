<template>
  <li v-for="holding of props.holdings" :key="holding.call_number">
    <InlineBadge v-if="holding.status" :color="holding.statusColor()">{{
      holding.status
    }}</InlineBadge>
    <span class="visually-hidden">Location: </span>
    {{ holding.label() }}
  </li>
</template>
<script setup lang="ts">
import { PhysicalHolding } from '../models/PhysicalHolding';
import InlineBadge from './InlineBadge.vue';
const props = defineProps<{
  holdings: PhysicalHolding[];
}>();
</script>
