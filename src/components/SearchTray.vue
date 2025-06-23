<template>
  <TrayLayout :label="sectionLabel">
    <template #title>
      <TrayTitle
        :heading="getScopeTitle()"
        :icon="getScopeIcon()"
        :description="getScopeDescription()"
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
                v-if="isCatalogTray && holdings"
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
            </template>
          </SearchMetadata>
        </li>
      </ol>
    </template>
    <template v-if="!loaded" #loading>
      <InlineBadge>Loading...</InlineBadge>
    </template>
    <template v-if="loaded && !results?.records?.length" #no_results>
      <div class="no-results">
        <p>No results matched your search.</p>
        <p>
          Try changing your search terms or searching the
          <a :href="getScopeUrl()">{{ getScopeTitle() }}</a
          >.
        </p>
      </div>
    </template>
    <template v-if="results?.records?.length && results.more" #further_actions>
      <!-- Our API uses a different search algorithm for Library Databases than
        what SpringShare uses in their interface.  This provides the potential for
        users to get confused clicking on the MoreResults link (e.g. if ours says
        there are 80 results, but then they click the link and Springshare says there
        are only 40).  Therefore, we don't include the result count for LibraryDatabases -->
      <MoreResults
        v-if="props.scope === SearchScope.LibraryDatabases"
        :url="results.more"
      ></MoreResults>
      <MoreResults
        v-else-if="informationTypeMap[props.scope] === 'materials'"
        :url="results.more"
        :result-count="results.number"
      ></MoreResults>
      <MoreHelpResults
        v-else
        :url="results.more"
        :result-count="results.number"
      ></MoreHelpResults>
    </template>
  </TrayLayout>
</template>

<script setup lang="ts">
import { PropType, Ref, ref } from 'vue';
import { SearchResults } from '../models/SearchResults';
import scopeDescriptionMap from '../config/ScopeDescriptionMap';
import scopeTitleMap from '../config/ScopeTitleMap';
import scopeUrlMap from '../config/ScopeUrlMap';
import scopeIconMap from '../config/ScopeIconMap';
import SearchMetadata from './metadata/SearchMetadata.vue';
import TrayLayout from './TrayLayout.vue';
import TrayTitle from './TrayTitle.vue';
import MoreResults from './MoreResults.vue';
import MoreHelpResults from './MoreHelpResults.vue';
import { SearchDataLoadSummary } from '../interfaces/SearchDataLoadSummary';
import { SearchScope } from '../enums/SearchScope';
import InlineBadge from './InlineBadge.vue';
import ArticlesMetadata from './metadata/ArticlesMetadata.vue';
import ArtMuseumMetadata from './metadata/ArtMuseumMetadata.vue';
import CatalogMetadata from './metadata/CatalogMetadata.vue';
import FindingaidsMetadata from './metadata/FindingaidsMetadata.vue';
import LibraryStaffMetadata from './metadata/LibraryStaffMetadata.vue';
import DpulMetadata from './metadata/DpulMetadata.vue';
import ScopeFieldsMap from '../config/ScopeFieldsMap';
import { RecordHoldingsMap } from '../models/RecordHoldingsMap';
import { informationTypeMap } from '../config/ScopeInformationTypeMap';

/* eslint-disable vue/require-default-prop */
const props = defineProps({
  scope: {
    type: String as PropType<SearchScope>,
    required: true
  },
  resultsPromise: Promise<SearchResults>
});
/* eslint-enable vue/require-default-prop */

const emit = defineEmits<{
  (e: 'searchDataLoaded', payload: SearchDataLoadSummary): void;
}>();
const sectionLabel = `${getScopeTitle()} results`;

const results: Ref<SearchResults | undefined> = ref(undefined);
const holdings: Ref<RecordHoldingsMap | undefined> = ref(undefined);
let loaded = false;

const isCatalogTray =
  props.scope == SearchScope.Catalog || props.scope == SearchScope.Journals;

async function populateResults(): Promise<void> {
  results.value = await props.resultsPromise;
  loaded = true;
  emit('searchDataLoaded', {
    scope: props.scope,
    results: results.value?.records.length
  });
  if (isCatalogTray) {
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

function getScopeDescription(): string {
  if (props.scope) {
    return scopeDescriptionMap[props.scope as keyof typeof scopeDescriptionMap];
  } else {
    return '';
  }
}

populateResults();
</script>

<style>
li.document h3 {
  display: inline;
}

li.document h3 a {
  line-height: 1.875rem;
  font-size: 1.25rem;
  font-style: normal;
  letter-spacing: 0.01375rem;
}

li.document h3 a:focus {
  text-decoration: underline;
  line-height: 2rem;
  text-underline-offset: 4px;
}

li.document h3 a:hover {
  color: var(--orange-50, 10%);
  text-decoration: underline;
  line-height: 2rem;
  text-underline-offset: 4px;
}

li.document:not(:last-child) {
  border-bottom: solid 1px var(--gray-50);
}

.metadata {
  list-style-type: none;
  padding: 0;
}

.metadata li {
  padding-bottom: 12px;
}

li.document::marker {
  font-size: 1.5em;
}

.tray-grid ol li.document {
  list-style-type: none;
  padding-bottom: 23px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
  h3 {
    margin-block-start: 0;
    margin-block-end: 0;
  }
}

.access-info ul {
  list-style: none;
  padding-inline-start: 0px;
}

.no-results {
  margin-top: 12px;
}
</style>
