<template>
  <ul class="metadata">
    <li v-if="document.type && props.basicFieldList.includes('format')">
      <FormatWithIcon
        :format="document.type"
        :icon="getIconType(document.type)"
      ></FormatWithIcon>
    </li>
    <li v-for="field in basicFieldsWithDataList" :key="field">
      <span class="visually-hidden">{{ field }}: </span
      ><!-- nosemgrep javascript.vue.security.audit.xss.templates.avoid-v-html.avoid-v-html -->
      <span
        v-html="
          StringService.truncate(
            document[field as keyof SearchResult] as string
          )
        "
      ></span>
    </li>
    <slot name="extra-metadata"></slot>
  </ul>
</template>

<script setup lang="ts">
import { PropType } from 'vue';
import { SearchResult } from '../../models/SearchResult';
import itemTypeMap from '../../config/ItemTypeMap';
import FormatWithIcon from '../FormatWithIcon.vue';
import { StringService } from '../../services/StringService';

const props = defineProps({
  basicFieldList: {
    type: Array,
    required: true
  },
  defaultIcon: {
    type: String,
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

function getIconType(type: string): string {
  const itemType = itemTypeMap[type.toLowerCase() as keyof typeof itemTypeMap];
  return itemType || props.defaultIcon;
}
</script>
