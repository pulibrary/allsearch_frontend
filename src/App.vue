<script setup lang="ts">
import InitialSearch from './components/InitialSearch.vue';
import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';
import { SearchTermService } from './services/SearchTermService';
import TrayContainer from './components/TrayContainer.vue';
import BannerAlert from './components/BannerAlert.vue';

const colorMode = localStorage.getItem('mode') || 'dark light';
document
  .querySelector('meta[name="color-scheme"]')
  ?.setAttribute('content', colorMode);

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
      <div class="banner-wrapper">
        <BannerAlert></BannerAlert>
      </div>
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
  margin-left: 1rem;
  margin-right: 1rem;
  padding-bottom: 3rem;
}

.main {
  margin-top: 1rem;
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
  text-decoration-color: light-dark(
    var(--color-princeton-orange-on-white),
    var(--color-princeton-orange-on-black)
  );
  text-decoration: underline;
}
a:focus {
  outline-color: light-dark(
    var(--color-princeton-orange-on-white),
    var(--color-princeton-orange-on-black)
  );
  outline: solid 0.25rem;
  outline-offset: none;
  box-shadow: none;
}

.skip-to-content-link {
  white-space: nowrap;
  margin: 1px auto;
  top: 0;
  position: fixed;
  left: 50%;
  margin-left: -72px;
  opacity: 0;
  z-index: 1000;
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
/** Support Dark system mode for the disclosure icon */
/** The Light system mode is supported by the default values in lux */
@media (prefers-color-scheme: dark) {
  .lux-disclosure .lux-icon svg path {
    stroke-width: 3;
  }
}
.lux-disclosure .lux-icon svg path {
  stroke: light-dark(var(--black), var(--white));
}

.lux-disclosure button .lux-icon {
  border: 2px solid light-dark(var(--black), var(--white));
}

.banner-wrapper {
  min-height: 30px;
}
</style>
