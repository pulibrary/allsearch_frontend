<template>
  <div v-if="query">
    <nav aria-label="search tools">
      <SearchBar></SearchBar>
      <JumpToSection :trays-to-link="completedTrays"></JumpToSection>
    </nav>
    <div class="tray-grid">
      <div v-for="row in rows" :key="row[0]" class="row">
        <template v-for="scope in row" :key="scope">
          <component
            :is="trayComponent(scope)"
            v-if="scope"
            :scope="scope"
            :results-promise="searchService.results(scope, query)"
            @search-data-loaded="handleDataLoaded"
          >
          </component>
          <div v-else><!-- no tray is configured for this cell --></div>
        </template>
      </div>
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
import BestBetsTray from './BestBetsTray.vue';
import SearchBar from './SearchBar.vue';
import InitialSearch from './InitialSearch.vue';
import { SearchDataLoadSummary } from '../interfaces/SearchDataLoadSummary';
import { type Component, Ref, ref } from 'vue';
import { TrayOrder } from '../models/TrayOrder';
import JumpToSection from './JumpToSection.vue';

const query = SearchTermService.term();
const searchService = new SearchService();
const completedTrays: Ref<SearchDataLoadSummary[]> = ref([]);

const trayOrder = new TrayOrder();
const rows: Ref<SearchScope[][]> = ref(trayOrder.asRows);

function markTrayAsCompleted(summary: SearchDataLoadSummary) {
  completedTrays.value.push(summary);
  completedTrays.value.sort((a, b) => {
    return trayOrder.compareLeftToRight(a.scope, b.scope);
  });
}
function handleDataLoaded(summary: SearchDataLoadSummary) {
  if (summary.scope === SearchScope.BestBets && summary.results === 0) {
    trayOrder.removeBestBets();
    rows.value = trayOrder.asRows;
  } else {
    markTrayAsCompleted(summary);
  }
}

function trayComponent(scope: SearchScope): Component {
  return scope === SearchScope.BestBets ? BestBetsTray : SearchTray;
}
</script>

<style scoped>
.tray-grid {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
.row {
  margin-top: 30px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: flex-start;
  min-height: 300px;
  width: 96vw;
  gap: 2vw;
}

nav {
  display: flex;
  justify-content: space-between;
  padding: 0 30px;
  flex-wrap: wrap;
}
</style>
