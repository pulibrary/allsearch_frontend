<template>
  <TrayLayout label="">
    <template #title>
      <TrayTitle
        :heading="getScopeTitle()"
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
          <SearchMetadata
            :scope="props.scope"
            :default-icon="props.defaultIcon"
            :document="document"
          ></SearchMetadata>
        </li>
      </ol>
    </template>
    <template v-if="!results?.records?.length" #no_results>
      No results found. Search the
      <a :href="getScopeUrl()">{{ getScopeTitle() }}</a
      >.
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
import { Ref, ref } from 'vue';
import { SearchResults } from '../models/SearchResults';
import scopeTitleMap from '../config/ScopeTitleMap';
import scopeUrlMap from '../config/ScopeUrlMap';
import SearchMetadata from './metadata/SearchMetadata.vue';
import TrayLayout from './TrayLayout.vue';
import TrayTitle from './TrayTitle.vue';
import MoreResults from './MoreResults.vue';

const props = defineProps({
  scope: {
    type: String,
    required: true
  },
  resultsPromise: Promise<SearchResults>,
  defaultIcon: {
    type: String,
    required: true
  }
});

const results: Ref<SearchResults | undefined> = ref(undefined);

async function populateResults(): Promise<void> {
  results.value = await props.resultsPromise;
}

function getScopeTitle(): string {
  if (props.scope) {
    return scopeTitleMap[props.scope as keyof typeof scopeTitleMap];
  } else {
    return '';
  }
}

function getScopeUrl(): string {
  if (props.scope) {
    return scopeUrlMap[props.scope as keyof typeof scopeUrlMap];
  } else {
    return '';
  }
}

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
