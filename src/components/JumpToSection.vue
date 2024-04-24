<template>
  <div id="jump-to-section">
    <ul>
      <template v-for="scope in trayArray()" :key="scope">
        <li v-if="shouldDisplay(scope)" class="ul-border">
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
  padding: 8px;
  background-color: #f5f4f1;
  &:hover {
    color: var(--black);
    background-color: var(--orange-50);
  }
  a:link {
    color: var(--black);
    text-decoration: none;
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
