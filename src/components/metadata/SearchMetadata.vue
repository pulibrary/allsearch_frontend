<template>
<ul class="metadata">
  <li v-if="document.type">
      <FormatWithIcon
      :format="document.type"
      :icon="getIconType(document.type)"
      ></FormatWithIcon>
  </li>
  <CatalogMetadata v-if="scope === SearchScope.Catalog"
    :document="document"
  ></CatalogMetadata>
  <ArticlesMetadata v-if="scope === SearchScope.Articles"
    :document="document"
  ></ArticlesMetadata>
  <FindingaidsMetadata v-if="scope === SearchScope.FindingAids"
    :document="document"
  ></FindingaidsMetadata>
  <PulmapsMetadata
    :document="document"
  ></PulmapsMetadata>
</ul>
</template>

<script setup lang="ts">
import { PropType } from "vue";
import { SearchResult } from "../../models/SearchResult";
import { SearchScope } from "../../enums/SearchScope";
import itemTypeMap from "../../config/ItemTypeMap";
import FormatWithIcon from "../FormatWithIcon.vue";
import ArticlesMetadata from "./ArticlesMetadata.vue"
import CatalogMetadata from "./CatalogMetadata.vue";
import FindingaidsMetadata from "./FindingaidsMetadata.vue";
import PulmapsMetadata from "./PulmapsMetadata.vue";

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
