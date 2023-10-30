<template>
  <div id="jump-to-section">
    <h2>Skip to:</h2>
    <ul>
      <div v-for="column of [0, 1, 2]" :key="column" class="column">
        <template v-for="scope of trayOrder.order[column]" :key="scope">
          <li v-if="shouldDisplay(scope)">
            <a :href="getHref(scope)">{{ ScopeTitleMap[scope] }}</a>
          </li>
        </template>
      </div>
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
#jump-to-section {
  border: 1px var(--gray) solid;
  padding: 2px 15px 18px;
}
ul {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}
li {
  width: 80%;
}
</style>
