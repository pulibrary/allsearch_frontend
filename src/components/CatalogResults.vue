<template>
<div>
    <h2><span class="icon icon-book" aria-hidden="true"></span>
        Catalog</h2>
    <a v-if="results" :href="results.more">Refine catalog search</a>
    Lorem ipsum
    <div v-if="results">
        <ol v-if="results.results.length">
            <li v-for="document in results.results" :key="document.id" class="document">
                <h3 :data-id="document.id">{{ document.title }}</h3>
                <ul>
                    <li v-if="document.creator">{{ document.creator }}</li>
                    <li><FormatWithIcon :format="document.type"></FormatWithIcon></li>
                    <li v-if="document.other_fields.library"><PhysicalHoldings :document="document"></PhysicalHoldings></li>
                </ul>
            </li>
        </ol>
        <span v-else>
            No results found. Search the <a href="https://catalog.princeton.edu">Catalog</a>.
        </span>
        <a v-if="results" :href="results.more">View all {{ results.number }} results</a>
    </div>
</div>
</template>
<script setup lang="ts">
import { Ref, ref } from 'vue';
import { SearchScope } from '../enums/SearchScope';
import { SearchService } from '../services/SearchService';
import { SearchResults } from '../interfaces/SearchResults';
import FormatWithIcon from './FormatWithIcon.vue'
import PhysicalHoldings from './PhysicalHoldings.vue';

let results: Ref<SearchResults | null> = ref(null);

async function getResults() {
    const service = new SearchService();
    results.value = await service.results(SearchScope.Catalog, 'penguins');
}

getResults()
</script>
