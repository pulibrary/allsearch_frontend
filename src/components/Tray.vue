<template>
  <TrayLayout label="">
    <template #title>
      <TrayTitle
        :heading="props.scope ? getScopeTitle(props.scope): ''"
        :icon="props.defaultIcon"
        description="Lorem ipsum"
      ></TrayTitle>
    </template>
    <template v-if="results" #metadata>
      <ol v-if="results.records.length">
        <li
          v-for="document in results.records"
          :key="document.id"
          class="document"
        >
          <h3 :data-id="document.id">
            <a :href="document.url">{{ document.title }}</a>
          </h3>
          <MetadataComponent
            :scope="props.scope"
            :default-icon="props.defaultIcon"
            :document="document"
          ></MetadataComponent>
        </li>
      </ol>
    </template>
    <template v-if="!results?.records?.length" #no_results>
      No results found. Search the
      <a href="https://catalog.princeton.edu">Catalog</a>.
    </template>
    <template v-if="results?.records?.length && results.more" #further_actions>
      <MoreResults
        :url="results.more"
        :result-count="results.number"
      ></MoreResults>
    </template>
  </TrayLayout>
</template>

<script setup lang="ts">
import { Ref, ref } from "vue";
import { SearchResults } from "../models/SearchResults";
import scopeTitleMap from "../config/ScopeTitleMap";
import MetadataComponent from "./metadata/Metadata.vue";
import TrayLayout from "./TrayLayout.vue";
import TrayTitle from "./TrayTitle.vue";
import MoreResults from "./MoreResults.vue";

const props = defineProps({
  scope: {
    type: String,
    required: true
  },
  resultsPromise: Promise<SearchResults>,
  defaultIcon: {
    type: String,
    required: true
  },
});

const results: Ref<SearchResults | undefined> = ref(undefined);

async function populateResults(): Promise<void> {
  results.value = await props.resultsPromise;
};

function getScopeTitle(type: string): string {
  return scopeTitleMap[type as keyof typeof scopeTitleMap];
};

populateResults();
</script>

<style>
li.document:not(:last-child) {
  padding-bottom: 20px;
  border-bottom: 2px var(--black) solid;
}
.metadata {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

.metadata li {
  padding: 3px 0;
}

.access-info {
  margin-top: 12px;
}
</style>
