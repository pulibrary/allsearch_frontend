<script setup lang="ts">
import CatalogResults from './components/CatalogResults.vue';
import SearchBar from './components/SearchBar.vue';
</script>

<template>
  <main>
    <h1>Coming soon</h1>
    <SearchBar></SearchBar>
    <div class="row">
      <CatalogResults></CatalogResults>
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
</style>
