<template>
  <TrayLayout label="">
    <template #title>
      <TrayTitle
        :heading="getScopeTitle()"
        :icon="getScopeIcon()"
        description="Lorem ipsum"
      ></TrayTitle>
    </template>
    <template v-if="results" #metadata>
      <ol v-if="results.records.length" class="documents">
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
            :default-icon="getScopeIcon()"
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
import { PropType, Ref, ref } from 'vue';
import { SearchResults } from '../models/SearchResults';
import scopeTitleMap from '../config/ScopeTitleMap';
import scopeUrlMap from '../config/ScopeUrlMap';
import scopeIconMap from '../config/ScopeIconMap';
import SearchMetadata from './metadata/SearchMetadata.vue';
import TrayLayout from './TrayLayout.vue';
import TrayTitle from './TrayTitle.vue';
import MoreResults from './MoreResults.vue';
import { SearchDataLoadSummary } from '../interfaces/SearchDataLoadSummary';
import { SearchScope } from '../enums/SearchScope';

const props = defineProps({
  scope: {
    type: String as PropType<SearchScope>,
    required: true
  },
  resultsPromise: Promise<SearchResults>
});

const emit = defineEmits<{
  (e: 'searchDataLoaded', payload: SearchDataLoadSummary): void;
}>();

const results: Ref<SearchResults | undefined> = ref(undefined);

async function populateResults(): Promise<void> {
  results.value = await props.resultsPromise;
  emit('searchDataLoaded', {
    scope: props.scope,
    results: results.value?.records.length
  });
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

function getScopeIcon(): string {
  if (props.scope) {
    return scopeIconMap[props.scope as keyof typeof scopeIconMap];
  } else {
    return '';
  }
}

populateResults();
</script>

<style>
ol.documents {
  list-style-position: inside;
  padding-left: 0px;
}

li.document h3 {
  display: inline;
  text-underline-offset: 5px;
  font-weight: normal;
}

li.document h3 a {
  text-decoration-thickness: 1px;
}

li.document h3 a:focus,
li.document h3 a:hover {
  text-decoration-color: var(--orange);
}

li.document {
  padding-top: 20px;
}

li.document:not(:last-child) {
  padding-bottom: 20px;
  border-bottom: 2px var(--black) solid;
}

.metadata {
  list-style-type: none;
  padding: 0;
  margin: 10px 0;
}

.metadata li {
  padding: 3px 0;
}

.access-info {
  margin-top: 12px;
}

ol li.document::marker {
  font-size: 1.17em;
}
</style>
