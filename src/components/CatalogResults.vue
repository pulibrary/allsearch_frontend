<template>
  <TrayLayout label="Catalog results">
    <template #title>
      <TrayTitle
        heading="Catalog"
        icon="book"
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
          <ul class="metadata">
            <li v-if="document.type">
              <FormatWithIcon :format="document.type"></FormatWithIcon>
            </li>
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
          </ul>
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
import { Ref, ref } from 'vue';
import { SearchScope } from '../enums/SearchScope';
import { SearchService } from '../services/SearchService';
import { SearchResults } from '../models/SearchResults';
import { SearchTermService } from '../services/SearchTermService';
import FormatWithIcon from './FormatWithIcon.vue';
import PhysicalHoldings from './PhysicalHoldings.vue';
import OnlineContent from './OnlineContent.vue';
import TrayTitle from './TrayTitle.vue';
import MoreResults from './MoreResults.vue';
import TrayLayout from './TrayLayout.vue';

const results: Ref<SearchResults | null> = ref(null);

async function getResults(): Promise<void> {
  const service = new SearchService();
  results.value = await service.results(
    SearchScope.Catalog,
    SearchTermService.term() as string
  );
}

getResults();
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
