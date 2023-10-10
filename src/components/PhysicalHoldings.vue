<template>
{{ holdingsDisplay }}
</template>
<script setup lang="ts">
import {defineProps} from 'vue';
import { SearchResult } from '../interfaces/SearchResult';
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
