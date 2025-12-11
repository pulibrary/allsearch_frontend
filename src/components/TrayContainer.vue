<template>
  <div v-if="query" class="tray-container">
    <h1 class="visually-hidden">Search results</h1>
    <div class="best-bets">
      <BestBetsTray :results-promise="searchService.results('best-bet', query)">
      </BestBetsTray>
    </div>
    <div class="tray-grid">
      <div v-for="(column, colIdx) in traysToLink" :key="colIdx">
        <template v-for="(scope, scopeIdx) in column" :key="scope || scopeIdx">
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
const traysToLink = new TrayOrder().order;
</script>

<style>
.best-bets {
  flex: 0 0 auto;
  max-width: 1400px;
  width: 100%;
  margin: 0 auto;
}

.tray-grid {
  flex: 1 1 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 2rem;
  max-width: 1400px;
  width: 100%;
  margin: 0 auto;
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
    grid-template-columns: 1fr;
    padding: 0;
  }
}
.tray-grid > section {
  @media (max-width: 899px) {
    width: 100%;
  }
}

.tray-grid > div:nth-child(3) {
  @media (min-width: 900px) {
    width: 80%;
  }
}

.header__secondary {
  position: relative;
}

.tray-container {
  padding: var(--space-base) var(--space-x-large) var(--space-x-larger)
    var(--space-x-large);
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>
