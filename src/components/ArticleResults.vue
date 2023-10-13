<template>
    <section aria-label="Articles+ results">
        <TrayTitle heading="Articles+" icon="text" description="Lorem ipsum"></TrayTitle>
        <div v-if="results">
            <ol v-if="results.results.length">
                <li v-for="document in results.results" :key="document.id" class="document">
                    <h3 :data-id="document.id"><a :href="document.url">{{ document.title }}</a></h3>
                    <ul class="metadata">
                        <li><FormatWithIcon :format="document.type" icon="text"></FormatWithIcon></li>
                        <li v-if="document.other_fields.fulltext_available"><span class="badge">Full-text available</span></li>
                        <li v-if="document.creator"><span class="visually-hidden">Creator: </span>{{ document.creator }}</li>
                        <ArticleCitation :fields="document.other_fields"></ArticleCitation>
                    </ul>
                </li>
            </ol>
            <span v-else>
                No results found. Search the <a href="https://catalog.princeton.edu">Catalog</a>.
            </span>
            <MoreResults v-if="results?.results?.length && results.more" :url="results.more" :result-count="results.number"></MoreResults>
        </div>
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
import ArticleCitation from './ArticleCitation.vue';
import FormatWithIcon from './FormatWithIcon.vue'


const results: Ref<SearchResults | null> = ref(null);

async function getResults() {
    const service = new SearchService();
    results.value = await service.results(SearchScope.Articles, SearchTermService.term() as string);
}

getResults()
</script>
