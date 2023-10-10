<template>
<section aria-label="Catalog results">
    <h2><span class="icon icon-book" aria-hidden="true"></span>
        Catalog</h2>
    Lorem ipsum
    <div v-if="results">
        <ol v-if="results.results.length">
            <li v-for="document in results.results" :key="document.id" class="document">
                <h3 :data-id="document.id"><a :href="document.url">{{ document.title }}</a></h3>
                <ul class="metadata">
                    <li><FormatWithIcon :format="document.type"></FormatWithIcon></li>
                    <li v-if="document.creator">{{ document.creator }}</li>
                    <li v-if="document.publisher">{{ document.publisher }}</li>
                    <li v-if="document.other_fields.library" class="access-info"><PhysicalHoldings :document="document"></PhysicalHoldings></li>
                    <li v-if="document.other_fields.resource_url" class="access-info"><OnlineContent :url="document.other_fields.resource_url"></OnlineContent></li>
                </ul>
            </li>
        </ol>
        <span v-else>
            No results found. Search the <a href="https://catalog.princeton.edu">Catalog</a>.
        </span>
        <div class="more-container">
            <a v-if="results" :href="results.more" class="more-link">View and refine {{ results.number.toLocaleString() }} results</a>
        </div>
    </div>
</section>
</template>
<script setup lang="ts">
import { Ref, ref } from 'vue';
import { SearchScope } from '../enums/SearchScope';
import { SearchService } from '../services/SearchService';
import { SearchResults } from '../interfaces/SearchResults';
import { SearchTermService } from '../services/SearchTermService';
import FormatWithIcon from './FormatWithIcon.vue'
import PhysicalHoldings from './PhysicalHoldings.vue';
import OnlineContent from './OnlineContent.vue';

let results: Ref<SearchResults | null> = ref(null);

async function getResults() {
    const service = new SearchService();
    results.value = await service.results(SearchScope.Catalog, SearchTermService.term() as string);
}

getResults()
</script>
<style>
section {
    background-color: var(--light-gray);
    padding: 2px 15px 18px;
    border: 1px var(--gray) solid;
}
h3 a {
    color: var(--black);
}
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

.more-container {
    display: flex;
    justify-content: flex-end;
}

a.more-link {
    color: var(--black);
}
</style>
