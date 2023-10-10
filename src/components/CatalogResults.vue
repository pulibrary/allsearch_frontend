<template>
<section aria-label="Catalog results">
    <h2><span class="icon icon-book" aria-hidden="true"></span>
        Catalog</h2>
    Lorem ipsum
    <div v-if="results">
        <ol v-if="results.results.length">
            <li v-for="document in results.results" :key="document.id" class="document">
                <h3 :data-id="document.id">{{ document.title }}</h3>
                <ul>
                    <li v-if="document.creator">{{ document.creator }}</li>
                    <li><FormatWithIcon :format="document.type"></FormatWithIcon></li>
                    <li v-if="document.publisher">{{ document.publisher }}</li>
                    <li v-if="document.other_fields.library"><PhysicalHoldings :document="document"></PhysicalHoldings></li>
                    <li v-if="document.other_fields.resource_url"><OnlineContent :url="document.other_fields.resource_url"></OnlineContent></li>
                </ul>
            </li>
        </ol>
        <span v-else>
            No results found. Search the <a href="https://catalog.princeton.edu">Catalog</a>.
        </span>
        <a v-if="results" :href="results.more">View and refine {{ results.number.toLocaleString() }} results</a>
    </div>
</section>
</template>
<script setup lang="ts">
import { Ref, ref } from 'vue';
import { SearchScope } from '../enums/SearchScope';
import { SearchService } from '../services/SearchService';
import { SearchResults } from '../interfaces/SearchResults';
import FormatWithIcon from './FormatWithIcon.vue'
import PhysicalHoldings from './PhysicalHoldings.vue';
import OnlineContent from './OnlineContent.vue';

let results: Ref<SearchResults | null> = ref(null);

async function getResults() {
    const service = new SearchService();
    results.value = await service.results(SearchScope.Catalog, 'penguins');
}

getResults()
</script>
