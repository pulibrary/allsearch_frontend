<template>
  <ul>
    <li v-for="holding of holdingsDisplays" v-bind:key="holding">
      <span v-if="holding" class="visually-hidden">Location: </span>
      {{ holding }}
    </li>
  </ul>
</template>
<script setup lang="ts">
import { SearchResult } from '../models/SearchResult';
import { HoldingsService } from '../services/HoldingsService';
const props = defineProps<{
  document: SearchResult;
}>();
const holdingsDisplays: string[] = HoldingsService.extractHoldingsStatements(
  props.document
);
</script>
