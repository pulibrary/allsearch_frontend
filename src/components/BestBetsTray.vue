<template>
  <TrayLayout v-if="results?.records?.length" label="Best Bets">
    <template #title>
      <TrayTitle
        heading="Best Bets"
        icon="best-bet"
        description="Lorem ipsum"
      ></TrayTitle>
    </template>
    <template #metadata>
      <ol v-if="results.records.length">
        <li class="document">
          <h3 :data-id="results.records[0].id">
            <a :href="results.records[0].url">{{ results.records[0].title }}</a>
          </h3>
          <SearchMetadata
            scope="best-bet"
            default-icon="best-bet"
            :document="results.records[0]"
          ></SearchMetadata>
        </li>
      </ol>
    </template>
    <template v-if="results?.records?.length && results.more" #further_actions>
      <MoreResults
        :url="results.more"
        :result-count="results.number"
      ></MoreResults>
    </template>
  </TrayLayout>
  <div v-else class="placeholder"></div>
</template>

<script setup lang="ts">
import { Ref, ref } from 'vue';
import { SearchResults } from '../models/SearchResults';
import SearchMetadata from './metadata/SearchMetadata.vue';
import TrayLayout from './TrayLayout.vue';
import TrayTitle from './TrayTitle.vue';
import MoreResults from './MoreResults.vue';
import { SearchDataLoadSummary } from '../interfaces/SearchDataLoadSummary';
import { SearchScope } from '../enums/SearchScope';

const props = defineProps({
  resultsPromise: Promise<SearchResults>
});

const emit = defineEmits<{
  (e: 'searchDataLoaded', payload: SearchDataLoadSummary): void;
}>();

const results: Ref<SearchResults | undefined> = ref(undefined);

async function populateResults(): Promise<void> {
  results.value = await props.resultsPromise;
  emit('searchDataLoaded', {
    scope: SearchScope.BestBets,
    results: results.value?.records.length
  });
}

populateResults();
</script>
