<template>
    <section aria-label="Articles+ results">
        <TrayTitle heading="Articles+" icon="text" description="Lorem ipsum"></TrayTitle>
        <MoreResults v-if="results?.results?.length && results.more" :url="results.more" :result-count="results.number"></MoreResults>
    </section>
</template>
<script setup lang="ts">
import { Ref, ref } from 'vue';
import TrayTitle from "./TrayTitle.vue";
import MoreResults from "./MoreResults.vue";
import { SearchScope } from '../enums/SearchScope';
import { SearchService } from '../services/SearchService';
import { SearchResults } from '../interfaces/SearchResults';
import { SearchTermService } from '../services/SearchTermService';


const results: Ref<SearchResults | null> = ref(null);

async function getResults() {
    const service = new SearchService();
    results.value = await service.results(SearchScope.Articles, SearchTermService.term() as string);
}

getResults()
</script>
