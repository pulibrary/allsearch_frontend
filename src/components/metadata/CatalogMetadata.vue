<template>
  <li v-if="document.creator">
    <span class="visually-hidden">Creator: </span
    >{{ document.creator }}
  </li>
  <li v-if="document.publisher">
    <span class="visually-hidden">Publisher: </span
    >{{ document.publisher }}
  </li>
  <li v-if="document.other_fields?.library" class="access-info">
    <PhysicalHoldings :document="document"></PhysicalHoldings>
  </li>
  <li v-if="document.other_fields?.resource_url" class="access-info">
    <OnlineContent
      :url="document.other_fields.resource_url"
    ></OnlineContent>
  </li>
</template>

<script setup lang="ts">
import { PropType } from "vue";
import { SearchResult } from "../../models/SearchResult";

import OnlineContent from "../OnlineContent.vue";
import PhysicalHoldings from "../PhysicalHoldings.vue";

defineProps({
  document: {
    type: Object as PropType<SearchResult>,
    required: true
    },
});
</script>
