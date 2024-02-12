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
            :basic-field-list="ScopeFieldsMap[props.scope as SearchScope]"
            :default-icon="getScopeIcon()"
            :document="document"
          >
            <template #extra-metadata>
              <ArticlesMetadata
                v-if="props.scope == SearchScope.Articles"
                :document="document"
              ></ArticlesMetadata>
              <ArtMuseumMetadata
                v-if="props.scope == SearchScope.ArtMuseum"
                :document="document"
              ></ArtMuseumMetadata>
              <CatalogMetadata
                v-if="props.scope == SearchScope.Catalog && holdings"
                :url="document.other_fields?.resource_url"
                :url-label="document.other_fields?.resource_url_label"
                :holdings="holdings.getHoldingsByDocumentId(document.id)"
              ></CatalogMetadata>
              <DpulMetadata
                v-if="props.scope == SearchScope.Dpul"
                :document="document"
              ></DpulMetadata>
              <FindingaidsMetadata
                v-if="props.scope == SearchScope.FindingAids"
                :document="document"
              ></FindingaidsMetadata>
              <LibraryStaffMetadata
                v-if="props.scope == SearchScope.LibraryStaff"
                :document="document"
              ></LibraryStaffMetadata>
              <WebsiteMetadata
                v-if="props.scope == SearchScope.Website"
                :document="document"
              ></WebsiteMetadata>
            </template>
          </SearchMetadata>
          <StackMap></StackMap>
        </li>
      </ol>
    </template>
    <template v-if="!loaded" #loading>
      <InlineBadge>Loading...</InlineBadge>
    </template>
    <template v-if="loaded && !results?.records?.length" #no_results>
      <div class="no-results">
        No results found. Search the
        <a :href="getScopeUrl()">{{ getScopeTitle() }}</a
        >.
      </div>
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
import InlineBadge from './InlineBadge.vue';
import ArticlesMetadata from './metadata/ArticlesMetadata.vue';
import ArtMuseumMetadata from './metadata/ArtMuseumMetadata.vue';
import CatalogMetadata from './metadata/CatalogMetadata.vue';
import FindingaidsMetadata from './metadata/FindingaidsMetadata.vue';
import LibraryStaffMetadata from './metadata/LibraryStaffMetadata.vue';
import DpulMetadata from './metadata/DpulMetadata.vue';
import WebsiteMetadata from './metadata/WebsiteMetadata.vue';
import ScopeFieldsMap from '../config/ScopeFieldsMap';
import { RecordHoldingsMap } from '../models/RecordHoldingsMap';
import StackMap from './StackMap.vue';

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
const holdings: Ref<RecordHoldingsMap | undefined> = ref(undefined);
let loaded = false;

async function populateResults(): Promise<void> {
  results.value = await props.resultsPromise;
  loaded = true;
  emit('searchDataLoaded', {
    scope: props.scope,
    results: results.value?.records.length
  });
  if (props.scope === SearchScope.Catalog) {
    holdings.value = new RecordHoldingsMap(results.value as SearchResults);
    await holdings.value.updateScsbAvailability();
  }
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
li.document h3 {
  display: inline;
  text-underline-offset: 5px;
}

li.document h3 a {
  text-decoration-thickness: 1px;
  text-decoration-color: var(--gray-50);
}

li.document h3 a:focus {
  outline: none !important;
  border: 3px solid orange;
  text-decoration: underline;
}

li.document h3 a:hover {
  color: var(--orange-50, 10%);
  text-decoration: underline;
}

li.document {
  padding-left: 2em;
  padding-top: 34px;
}

li.document:not(:last-child) {
  padding-bottom: 20px;
  border-bottom: 3px var(--orange-50) solid;
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
  font-size: 1.5em;
}

.no-results {
  margin-top: 12px;
}
</style>
