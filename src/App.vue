<script setup lang="ts">
import InitialSearch from './components/InitialSearch.vue';
import AppHeader from './components/AppHeader.vue';
import { SearchTermService } from './services/SearchTermService';
import TrayContainer from './components/TrayContainer.vue';

const query = SearchTermService.term();
if (query) {
  document.title = query + ' search results | Princeton University Library';
}
</script>

<template>
  <a class="skip-link" href="#main-content">Skip to main content</a>
  <AppHeader></AppHeader>
  <main id="main-content" tabindex="-1">
    <div v-if="query">
      <div class="row">
        <TrayContainer></TrayContainer>
      </div>
    </div>
    <div v-else>
      <InitialSearch></InitialSearch>
    </div>
  </main>
</template>
<style>
@import '../assets/app.css';
a.skip-link {
  z-index: 25;
  position: absolute;
  top: 5px;
  background: white;
  padding: 0 8px 8px;
  border-bottom-right-radius: 3px;
  color: var(--black);
}
</style>
