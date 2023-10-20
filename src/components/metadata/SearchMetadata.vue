<template>
  <ul class="metadata">
    <li v-if="document.type">
      <FormatWithIcon
        :format="document.type"
        :icon="getIconType(document.type)"
      ></FormatWithIcon>
    </li>
    <component :is="metadataComponent" :document="document"></component>
  </ul>
</template>

<script setup lang="ts">
import { type Component, PropType } from 'vue';
import { SearchResult } from '../../models/SearchResult';
import { SearchScope } from '../../enums/SearchScope';
import itemTypeMap from '../../config/ItemTypeMap';
import FormatWithIcon from '../FormatWithIcon.vue';
import ArticlesMetadata from './ArticlesMetadata.vue';
import CatalogMetadata from './CatalogMetadata.vue';
import FindingaidsMetadata from './FindingaidsMetadata.vue';
import PulmapsMetadata from './PulmapsMetadata.vue';
import DpulMetadata from './DpulMetadata.vue';

const props = defineProps({
  scope: {
    type: String,
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

let metadataComponent: Component;

switch (props.scope) {
  case SearchScope.Catalog:
    metadataComponent = CatalogMetadata;
    break;
  case SearchScope.Articles:
    metadataComponent = ArticlesMetadata;
    break;
  case SearchScope.Dpul:
    metadataComponent = DpulMetadata;
    break;
  case SearchScope.FindingAids:
    metadataComponent = FindingaidsMetadata;
    break;
  case SearchScope.PulMap:
    metadataComponent = PulmapsMetadata;
    break;
}

function getIconType(type: string): string {
  const itemType = itemTypeMap[type.toLowerCase() as keyof typeof itemTypeMap];
  return itemType ? itemType : props.defaultIcon;
}
</script>
