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
  display: flex;
  justify-content: center;
  flex-flow: row wrap;
  gap: 2rem;
}

.tray-grid section:nth-child(n) ol {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-left: 0;
  padding-top: 0;
  margin: 0;
  gap: 23px;
}

.tray-grid > section {
  @media (max-width: 899px) {
    flex: 1 0 100%;
  }
}

.tray-grid section:nth-child(-n + 2) {
  @media (min-width: 900px) {
    flex: 1 0 45%;
  }
}

.tray-grid section:not(:nth-child(-n + 2)):not(:nth-last-child(-n + 6)) {
  background-color: light-dark(#efefef, var(--color-grayscale-darker));
  border: none;
  @media (min-width: 900px) {
    flex: 1 0 45%;
  }
}

.tray-grid section:nth-last-child(-n + 6) {
  @media (min-width: 900px) and (max-width: 1199px) {
    flex: 1 0 45%;
  }
  @media (min-width: 1200px) {
    flex: 1 0 30%;
  }
}

.header__secondary {
  position: relative;
}
</style>
