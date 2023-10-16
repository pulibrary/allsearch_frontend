<template>
<span v-if="document?.other_fields?.library" class="visually-hidden">Location: </span>
{{ holdingsDisplay }}
</template>
<script setup lang="ts">
import {defineProps} from 'vue';
import { SearchResult } from '../models/SearchResult';
const props = defineProps<{
  document: SearchResult
}>();
let holdingsDisplay: string;
if (props.document?.other_fields?.library) {
  holdingsDisplay = props.document.other_fields.library;
  if (props.document.other_fields.call_number) {
    holdingsDisplay = holdingsDisplay.concat(' » ', props.document.other_fields.call_number);
  }
}
</script>
