<template>
  <TrayLayout label="Library Archives results">
    <template #title>
      <TrayTitle
        heading="Library Archives"
        icon="archives"
        description="Lorem ipsum"
      ></TrayTitle>
    </template>
    <template v-if="results?.records?.length && results.more" #further_actions>
      <MoreResults
        :url="results.more"
        :result-count="results.number"
      ></MoreResults>
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
            <li v-if="document.other_fields?.date">
              Date: {{ document.other_fields.date }}
            </li>
            <li v-if="document.description">{{ document.description }}</li>
            <li v-if="document.other_fields?.repository">
              <span class="visually-hidden">Repository: </span
              >{{ document.other_fields.repository }}
            </li>
          </ul>
        </li>
      </ol>
    </template>
    <template v-if="!results?.records?.length" #no_results>
      No results found. Search the
      <a href="https://findingaids.princeton.edu/">Library Archives</a>.
    </template>
  </TrayLayout>
</template>
<script setup lang="ts">
import { Ref, ref } from "vue";
import TrayLayout from "./TrayLayout.vue";
import TrayTitle from "./TrayTitle.vue";
import MoreResults from "./MoreResults.vue";
import FormatWithIcon from "./FormatWithIcon.vue";
import { SearchScope } from "../enums/SearchScope";
import { SearchService } from "../services/SearchService";
import { SearchResults } from "../models/SearchResults";
import { SearchTermService } from "../services/SearchTermService";

const results: Ref<SearchResults | null> = ref(null);

async function getResults(): Promise<void> {
  const service = new SearchService();
  results.value = await service.results(
    SearchScope.FindingAids,
    SearchTermService.term() as string,
  );
}

getResults();
</script>
