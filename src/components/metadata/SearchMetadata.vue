<template>
  <ul class="metadata">
    <li v-if="document.type && props.basicFieldList.includes('format')">
      <FormatDisplay :format="document.type"></FormatDisplay>
    </li>
    <li v-for="field in basicFieldsWithDataList" :key="field">
      <span class="visually-hidden">{{ field }}: </span
      >{{
        StringService.truncate(document[field as keyof SearchResult] as string)
      }}
    </li>
    <slot name="extra-metadata"></slot>
  </ul>
</template>

<script setup lang="ts">
import { PropType } from 'vue';
import { SearchResult } from '../../models/SearchResult';
import FormatDisplay from '../FormatDisplay.vue';
import { StringService } from '../../services/StringService';

const props = defineProps({
  basicFieldList: {
    type: Array,
    required: true
  },
  document: {
    type: Object as PropType<SearchResult>,
    required: true
  }
});

const basicFieldsWithDataList = props.basicFieldList.filter(field => {
  return props.document[field as keyof SearchResult];
}) as string[];
</script>
