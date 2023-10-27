<template>
  <ul>
    <li v-for="tray of traysToLink" :key="tray.scope">
      <a :href="getHref(tray.scope)">{{ ScopeTitleMap[tray.scope] }}</a>
    </li>
  </ul>
</template>
<script setup lang="ts">
import { PropType } from 'vue';
import { SearchDataLoadSummary } from '../interfaces/SearchDataLoadSummary';
import ScopeTitleMap from '../config/ScopeTitleMap';
import { SearchScope } from '../enums/SearchScope';
import { IdService } from '../services/IdService';
defineProps({
  traysToLink: {
    type: Array as PropType<SearchDataLoadSummary[]>,
    required: true
  }
});
function getHref(scope: SearchScope): string {
  return '#' + IdService.createDomId(ScopeTitleMap[scope]);
}
</script>
<style scoped>
ul {
  list-style-type: none;
  display: grid;
}
</style>
