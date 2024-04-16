<template>
  <div id="jump-to-section">
    <ul>
      <template v-for="scope in trayArray()" :key="scope">
        <li v-if="shouldDisplay(scope)">
          <a :href="getHref(scope)">{{ ScopeTitleMap[scope] }}</a>
        </li>
      </template>
    </ul>
  </div>
</template>
<script setup lang="ts">
import { PropType } from 'vue';
import { SearchDataLoadSummary } from '../interfaces/SearchDataLoadSummary';
import ScopeTitleMap from '../config/ScopeTitleMap';
import { SearchScope } from '../enums/SearchScope';
import { IdService } from '../services/IdService';
import { TrayOrder } from '../models/TrayOrder';
const props = defineProps({
  traysToLink: {
    type: Array as PropType<SearchDataLoadSummary[]>,
    required: true
  }
});
function trayArray(): Array<SearchScope> {
  return trayOrder.order.flat();
}
function getHref(scope: SearchScope): string {
  return '#' + IdService.createDomId(ScopeTitleMap[scope]);
}
function shouldDisplay(scope: SearchScope): boolean {
  for (const tray of props.traysToLink.values()) {
    if (tray.scope === scope) {
      return true;
    }
  }
  return false;
}
const trayOrder = new TrayOrder();
</script>
<style scoped>
ul {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}
li {
  width: 80%;
  list-style: none;
  padding-bottom: 8px;

  a:link {
    color: var(--black);
  }

  a:visited {
    color: var(--black);
  }
}
</style>
