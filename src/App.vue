<script setup lang="ts">
import InitialSearch from './components/InitialSearch.vue';
import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';
import { SearchTermService } from './services/SearchTermService';
import TrayContainer from './components/TrayContainer.vue';
import { useHead, useScript } from '@unhead/vue';

const query = SearchTermService.term();
if (query) {
  document.title = query + ' search results | Princeton University Library';
}

useHead({
  link: [
    {
      rel: 'stylesheet',
      href: 'https://maxcdn.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css',
      integrity:
        'sha384-T8Gy5hrqNKT+hzMclPo118YTQO6cYprQmhrYwIiQ/3axmI1hQomh7Ud2hPOy8SP1',
      crossorigin: 'anonymous'
    },
    {
      rel: 'stylesheet',
      media: 'all',
      type: 'text/css',
      href: 'https://www.stackmapintegration.com/princeton-blacklight/StackMap.min.css'
    }
  ]
});
useScript({
  src: '/assets/scripts/StackMap.min.js',
  type: 'text/javascript'
});
</script>

<template>
  <div class="page-wrap">
    <AppHeader></AppHeader>
    <main id="main-content" class="main" tabindex="-1">
      <div v-if="query">
        <div class="row">
          <TrayContainer></TrayContainer>
        </div>
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
</style>
