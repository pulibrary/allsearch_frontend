<template>
  <ul class="metadata">
    <li v-if="document.type && basicFieldList.includes('format')">
      <FormatWithIcon
        :format="document.type"
        :icon="getIconType(document.type)"
      ></FormatWithIcon>
    </li>
    <li v-for="field in basicFieldList" :key="field">
      <span class="visually-hidden">{{ field }}: </span
      >{{ document[field as keyof SearchResult] }}
    </li>
    <component
      :is="metadataComponent"
      v-if="metadataComponent"
      :document="document"
    ></component>
  </ul>
</template>

<script setup lang="ts">
import { type Component, PropType } from 'vue';
import { SearchResult } from '../../models/SearchResult';
import { SearchScope } from '../../enums/SearchScope';
import itemTypeMap from '../../config/ItemTypeMap';
import FormatWithIcon from '../FormatWithIcon.vue';
import ArticlesMetadata from './ArticlesMetadata.vue';
import ArtMuseumMetadata from './ArtMuseumMetadata.vue';
import CatalogMetadata from './CatalogMetadata.vue';
import FindingaidsMetadata from './FindingaidsMetadata.vue';
import PulmapsMetadata from './PulmapsMetadata.vue';
import DpulMetadata from './DpulMetadata.vue';
import ScopeFieldsMap from '../../config/ScopeFieldsMap';

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
  case SearchScope.ArtMuseum:
    metadataComponent = ArtMuseumMetadata;
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

const basicFieldList = ScopeFieldsMap[props.scope as SearchScope];

function getIconType(type: string): string {
  const itemType = itemTypeMap[type.toLowerCase() as keyof typeof itemTypeMap];
  return itemType ? itemType : props.defaultIcon;
}
</script>
