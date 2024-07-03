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
      <a ref="skipLink" href="#main-content" class="skip-to-content-link"
        >Skip to main content</a
      >
    </li>
  </ul>

  <AppHeader></AppHeader>
  <div class="page-wrap">
    <main id="main-content" class="main" tabindex="-1">
      <div v-if="query">
        <TrayContainer></TrayContainer>
      </div>
      <div v-else>
        <InitialSearch></InitialSearch>
      </div>
    </main>
  </div>
  <AppFooter></AppFooter>
</template>
<style>
@import '../assets/app.css';

.page-wrap {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  align-items: center;
  margin-left: 8px;
  margin-right: 8px;
}

.main {
  flex-grow: 1;
  @media (min-width: 900px) {
    max-width: 1440px;
  }
  @media (max-width: 899px) {
    max-width: 1440px;
  }
  @media (max-width: 599px) {
    max-width: 540px;
  }
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
  margin: 0;
}
</style>
