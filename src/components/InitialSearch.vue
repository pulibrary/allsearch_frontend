<template>
  <div class="container">
    <h1>Search Princeton University Library Resources</h1>
    <SearchBar position="centered"></SearchBar>
  </div>
</template>
<script setup lang="ts">
import SearchBar from './SearchBar.vue';
</script>
<style scoped>
.container {
  display: grid;
  justify-content: center;
  margin: 20vh 0;
}
h1 {
  text-align: center;
}
</style>
