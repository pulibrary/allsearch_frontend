<script setup lang="ts">
import ArticleResults from "./components/ArticleResults.vue";
import CatalogResults from "./components/CatalogResults.vue";
import FindingaidsResults from "./components/FindingaidsResults.vue";
import SearchBar from "./components/SearchBar.vue";
import AppHeader from "./components/AppHeader.vue";
import { SearchTermService } from "./services/SearchTermService";
const query = SearchTermService.term();
if (query) {
  document.title = query + " search results | Princeton University Library";
}
</script>

<template>
  <a class="skip-link" href="#main-content">Skip to main content</a>
  <AppHeader></AppHeader>
  <main id="main-content" tabindex="-1">
    <h1>Coming soon</h1>
    <SearchBar></SearchBar>
    <div class="row">
      <CatalogResults></CatalogResults>
      <ArticleResults></ArticleResults>
    </div>
    <div class="row">
      <FindingaidsResults></FindingaidsResults>
    </div>
  </main>
</template>
<style>
.row {
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
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
