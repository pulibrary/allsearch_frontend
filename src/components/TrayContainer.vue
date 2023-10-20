<template>
  <div v-if="query">
    <h1>Coming soon</h1>
    <SearchBar></SearchBar>
    <div class="row">
      <SearchTray
        :scope="SearchScope.Catalog"
        :results-promise="searchService.results(SearchScope.Catalog, query)"
        default-icon="text"
      ></SearchTray>
      <SearchTray
        :scope="SearchScope.Articles"
        :results-promise="searchService.results(SearchScope.Articles, query)"
        default-icon="text"
      ></SearchTray>
    </div>
    <div class="row">
      <SearchTray
        :scope="SearchScope.FindingAids"
        :results-promise="searchService.results(SearchScope.FindingAids, query)"
        default-icon="archives"
      ></SearchTray>
      <SearchTray
        :scope="SearchScope.Dpul"
        :results-promise="searchService.results(SearchScope.Dpul, query)"
        default-icon="digital"
      ></SearchTray>
    </div>
    <div class="row">
      <SearchTray
        :scope="SearchScope.PulMap"
        :results-promise="searchService.results(SearchScope.PulMap, query)"
        default-icon="map"
      ></SearchTray>
      <SearchTray
        :scope="SearchScope.ArtMuseum"
        :results-promise="searchService.results(SearchScope.ArtMuseum, query)"
        default-icon="visual-material"
      ></SearchTray>
    </div>
  </div>
  <div v-else>
    <InitialSearch></InitialSearch>
  </div>
</template>

<script setup lang="ts">
import { SearchScope } from '../enums/SearchScope';
import { SearchService } from '../services/SearchService';
import { SearchTermService } from '../services/SearchTermService';
import SearchTray from './SearchTray.vue';
import SearchBar from './SearchBar.vue';
import InitialSearch from './InitialSearch.vue';

const query = SearchTermService.term();
const searchService = new SearchService();
</script>

<style>
.row {
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: flex-start;
  min-height: 300px;
}
</style>
