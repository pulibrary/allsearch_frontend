<script setup lang="ts">
import InitialSearch from './components/InitialSearch.vue';
import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';
import { SearchTermService } from './services/SearchTermService';
import TrayContainer from './components/TrayContainer.vue';

const query = SearchTermService.term();
if (query) {
  document.title = query + ' search results | Princeton University Library';
}
</script>

<template>
  <ul class="skip-to-content-links">
    <li>
      <a href="#main-content" ref="skipLink" class="skip-to-content-link"
        >Skip to main content</a
      >
    </li>
  </ul>
  <div class="page-wrap">
    <AppHeader></AppHeader>
    <main id="main-content" class="main" tabindex="-1">
      <div v-if="query">
        <TrayContainer></TrayContainer>
      </div>
      <div v-else>
        <InitialSearch></InitialSearch>
      </div>
    </main>
    <AppFooter></AppFooter>
  </div>
</template>
<style>
@import '../assets/app.css';

.page-wrap {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.main {
  flex-grow: 1;
  padding-bottom: 10em;
}

a:hover {
  color: var(--orange-50, 10%);
  text-decoration: underline;
}

a:focus {
  outline: none;
  border: 3px solid orange;
}

.skip-to-content-link {
  white-space: nowrap;
  margin: 1em auto;
  top: 0;
  position: fixed;
  left: 50%;
  margin-left: -72px;
  opacity: 0;
}

.skip-to-content-link:focus {
  opacity: 1;
  background: var(--orange-20);
  color: var(--black);
  padding: 0.5em;
  border: 1px solid black;
}

.skip-to-content-links {
  list-style-type: none;
}
</style>
