<template>
<ul class="metadata">
  <li v-if="document.type">
      <FormatWithIcon
      :format="document.type"
      :icon="getIconType(document.type)"
      ></FormatWithIcon>
  </li>
  <CatalogMetadataComponent v-if="scope === SearchScope.Catalog"
    :document="document"
  ></CatalogMetadataComponent>
  <ArticlesMetadataComponent v-if="scope === SearchScope.Articles"
    :document="document"
  ></ArticlesMetadataComponent>
  <FindingaidesMetadataComponent v-if="scope === SearchScope.FindingAids"
    :document="document"
  ></FindingaidesMetadataComponent>
  <PulmapsMetadataComponent
    :document="document"
  ></PulmapsMetadataComponent>
</ul>
</template>

<script setup lang="ts">
import { PropType } from "vue";
import { SearchResult } from "../../models/SearchResult";
import { SearchScope } from "../../enums/SearchScope";
import itemTypeMap from "../../config/ItemTypeMap";
import FormatWithIcon from "../FormatWithIcon.vue";
import ArticlesMetadataComponent from "./ArticlesMetadata.vue"
import CatalogMetadataComponent from "./CatalogMetadata.vue";
import FindingaidesMetadataComponent from "./FindingaidesMetadata.vue";
import PulmapsMetadataComponent from "./PulmapsMetadata.vue";

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
    },
});

function getIconType(type: string): string {
  const itemType = itemTypeMap[type as keyof typeof itemTypeMap];
  return itemType ? itemType : props.defaultIcon;
};
</script>
