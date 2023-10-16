<template>
    <TrayLayout label="Articles+ results">
        <template #title>
            <TrayTitle heading="Articles+" icon="text" description="Lorem ipsum"></TrayTitle>
        </template>
        <template v-if="results" #metadata>
            <ol v-if="results.records.length">
                <li v-for="document in results.records" :key="document.id" class="document">
                    <h3 :data-id="document.id"><a :href="document.url">{{ document.title }}</a></h3>
                    <ul class="metadata">
                        <li v-if="document.type"><FormatWithIcon :format="document.type" icon="text"></FormatWithIcon></li>
                        <li v-if="document.other_fields?.fulltext_available"><InlineBadge>Full-text available</InlineBadge></li>
                        <li v-if="document.creator"><span class="visually-hidden">Creator: </span>{{ document.creator }}</li>
                        <ArticleCitation :fields="document.other_fields"></ArticleCitation>
                    </ul>
                </li>
            </ol>
        </template>
        <template v-if="!results?.records?.length" #no_results>
            No results found. Search <a href="https://princeton.summon.serialssolutions.com/">Articles+</a>.
        </template>
        <template v-if="results?.records?.length && results.more" #further_actions>
            <MoreResults :url="results.more" :result-count="results.number"></MoreResults>
        </template>
    </TrayLayout>
</template>
<script setup lang="ts">
import { Ref, ref } from 'vue';
import TrayTitle from "./TrayTitle.vue";
import MoreResults from "./MoreResults.vue";
import { SearchScope } from '../enums/SearchScope';
import { SearchService } from '../services/SearchService';
import { SearchResults } from '../models/SearchResults';
import { SearchTermService } from '../services/SearchTermService';
import ArticleCitation from './ArticleCitation.vue';
import FormatWithIcon from './FormatWithIcon.vue'
import InlineBadge from './InlineBadge.vue';
import TrayLayout from './TrayLayout.vue';


const results: Ref<SearchResults | null> = ref(null);

async function getResults(): Promise<void> {
    const service = new SearchService();
    results.value = await service.results(SearchScope.Articles, SearchTermService.term() as string);
}

getResults()
</script>
