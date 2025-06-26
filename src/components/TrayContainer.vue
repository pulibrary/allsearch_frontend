<template>
  <div v-if="query">
    <h1 class="visually-hidden">Search results</h1>
    <div class="best-bets">
      <BestBetsTray :results-promise="searchService.results('best-bet', query)">
      </BestBetsTray>
    </div>
    <div class="tray-grid">
      <template v-for="scope in traysToLink" :key="scope">
        <SearchTray
          v-if="scope"
          :scope="scope"
          :default-icon="ScopeIconMap[scope]"
          :basic-field-list="ScopeFieldsMap[scope]"
          :results-promise="searchService.results(scope, query)"
        >
        </SearchTray>
        <div v-else class="placeholder">
          <!-- no tray is configured for this cell -->
        </div>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import { SearchService } from '../services/SearchService';
import { SearchTermService } from '../services/SearchTermService';
import SearchTray from './SearchTray.vue';
import { TrayOrder } from '../models/TrayOrder';
import BestBetsTray from './BestBetsTray.vue';
import ScopeFieldsMap from '../config/ScopeFieldsMap';
import ScopeIconMap from '../config/ScopeIconMap';

const query = SearchTermService.term();
const searchService = new SearchService();
const traysToLink = new TrayOrder().resultCompareArray();
</script>

<style>
.tray-grid {
  max-width: 1400px;
  width: 100%;
  margin: 0 auto;
  column-count: 3;
  column-gap: 2rem;
}

.tray-grid section:nth-child(n) ol {
  display: flex;
  flex-direction: column;
  flex-shrink: 1;
  padding-left: 0;
  padding-top: 23px;
  margin: 0;
  gap: 23px;
}

.tray-grid {
  @media (max-width: 899px) {
    column-count: 1;
    padding: 0;
  }
}
.tray-grid > section {
  @media (max-width: 899px) {
    width: 100%;
  }
}

.tray-grid > section:nth-last-child(-n + 4) {
  @media (min-width: 900px) {
    width: 80%;
  }
}

.header__secondary {
  position: relative;
}
</style>
