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
  display: flex;
  justify-content: center;
  flex-flow: row wrap;
  gap: 10px;
}
.ul-border {
  border: #f5f4f1;
}

ul {
  display: flex;
  flex-flow: row wrap;
  gap: 10px;
  padding: 10px;
}

#jump-to-section > ul > li {
  list-style: none;
  display: inline-flex;
  justify-content: center;
  padding: 7px 16px;
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

  @media (min-width: 1281px) {
    flex: 1 0 15%;
  }
  @media (min-width: 1025px) and (max-width: 1280px) {
    flex: 1 0 15%;
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    flex: 1 0 20%;
  }
  @media (min-width: 481px) and (max-width: 767px) {
    flex: 1 0 100%;
  }
  @media (min-width: 320px) and (max-width: 480px) {
    flex: 1 0 100%;
  }
}
</style>
