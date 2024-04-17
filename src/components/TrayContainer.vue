<template>
  <div v-if="query">
    <div class="header__secondary">
      <nav aria-label="search tools" class="search-tools">
        <SearchBar></SearchBar>
        <JumpToSection :trays-to-link="completedTrays"></JumpToSection>
      </nav>
    </div>
    <div class="best-bets">
      <BestBetsTray :results-promise="searchService.results('best-bet', query)">
      </BestBetsTray>
    </div>
    <div class="tray-grid">
      <div v-for="row in rows" :key="row[0]" class="row">
        <template v-for="scope in row" :key="scope">
          <SearchTray
            v-if="scope"
            :scope="scope"
            :results-promise="searchService.results(scope, query)"
            @search-data-loaded="handleDataLoaded"
          >
          </SearchTray>
          <div v-else class="placeholder">
            <!-- no tray is configured for this cell -->
          </div>
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
import SearchBar from './SearchBar.vue';
import InitialSearch from './InitialSearch.vue';
import { SearchDataLoadSummary } from '../interfaces/SearchDataLoadSummary';
import { Ref, ref } from 'vue';
import { TrayOrder } from '../models/TrayOrder';
import JumpToSection from './JumpToSection.vue';
import BestBetsTray from './BestBetsTray.vue';

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
  markTrayAsCompleted(summary);
}
</script>

<style>
.tray-grid {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

.best-bets {
  margin-left: 15px;
  margin-right: 15px;
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

.row > section,
.row > div.placeholder {
  width: max(calc(30vw - 30px), 360px);
  overflow-wrap: anywhere;
  flex-grow: 1;
}

.header__secondary {
  position: relative;
  padding: 15px;
}
</style>
