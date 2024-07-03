<template>
  <div id="jump-to-section">
    <ul>
      <template v-for="scope in props.traysToLink" :key="scope">
        <li class="ul-border">
          <a :href="getHref(scope)">{{ ScopeTitleMap[scope] }}</a>
        </li>
      </template>
    </ul>
  </div>
</template>
<script setup lang="ts">
import { PropType } from 'vue';
import ScopeTitleMap from '../config/ScopeTitleMap';
import { SearchScope } from '../enums/SearchScope';
import { IdService } from '../services/IdService';
const props = defineProps({
  traysToLink: {
    type: Array as PropType<SearchScope[]>,
    required: true
  }
});
function getHref(scope: SearchScope): string {
  return '#' + IdService.createDomId(ScopeTitleMap[scope]);
}
</script>
<style scoped>
#jump-to-section {
  .ul-border {
    border: #f5f4f1;
  }

  ul {
    display: flex;
    flex-flow: row wrap;
    gap: 10px;
    padding: 0;
  }
}

#jump-to-section > ul > li {
  list-style: none;
  display: inline-flex;
  justify-content: center;
  background-color: #f5f4f1;

  &:hover {
    color: var(--black);
    background-color: var(--orange-50);
    cursor: pointer;
  }
  a {
    text-decoration: none;
    flex: 1 1 auto;
    text-align: center;
    padding: 0.5rem;
  }
  a:link {
    color: var(--black);
  }

  a:visited {
    color: var(--black);
  }

  a:hover {
    color: var(--gray-90);
  }

  @media (min-width: 1200px) {
    flex: 1 0 15%;
  }
  @media (min-width: 1000px) and (max-width: 1199px) {
    flex: 1 0 20%;
  }

  @media (max-width: 999px) {
    /* in this media query ideally we want to collapse
     the skip to section under one div */
    flex: 1 0 100%;
  }
}
</style>
