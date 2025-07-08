<template>
  <div id="jump-to-section-container">
    <lux-input-button
      type="button"
      @button-clicked="toggleButton"
      variation="solid"
      aria-label="Toggle jump to results"
      class="lux-expanded"
      id="jump-to-section-expand"
      >Jump to results<LuxIconBase width="12px" height="12px"
        ><LuxIconArrowDown></LuxIconArrowDown></LuxIconBase
    ></lux-input-button>
    <div id="jump-to-section" class="display-none" tabindex="-1">
      <span class="jump-to-description">Jump to</span>
      <ul>
        <template v-for="scope in props.traysToJumpTo" :key="scope">
          <li class="ul-border">
            <a :href="getHref(scope)">{{ ScopeTitleMap[scope] }}</a>
          </li>
        </template>
      </ul>
    </div>
  </div>
</template>
<script setup lang="ts">
import { PropType } from 'vue';
import ScopeTitleMap from '../config/ScopeTitleMap';
import { SearchScope } from '../enums/SearchScope';
import { IdService } from '../services/IdService';
import {
  LuxInputButton,
  LuxIconArrowDown,
  LuxIconBase
} from 'lux-design-system';
const props = defineProps({
  traysToJumpTo: {
    type: Array as PropType<SearchScope[]>,
    required: true
  }
});
function getHref(scope: SearchScope): string {
  return '#' + IdService.createDomId(ScopeTitleMap[scope]);
}
function toggleButton() {
  let skipLinks = document.querySelector('#jump-to-section');
  skipLinks?.classList.toggle('display-none');
  (skipLinks as HTMLElement)?.focus();
}
</script>
<style scoped>
#jump-to-section-container {
  display: flex;
  flex-flow: column wrap;
  @media (max-width: 899px) {
    width: 80%;
    border-radius: 12px;
    background-color: var(--white);
  }
}
#jump-to-section {
  .ul-border {
    border: #f5f4f1;
  }
  display: flex;
  flex-flow: row wrap;
  @media (min-width: 900px) and (max-width: 1281px) {
    flex-flow: column wrap;
    justify-content: center;
    align-items: center;
    flex: 1 1 auto;
  }

  ul {
    display: flex;
    flex-flow: row wrap;
    padding: 0;
    gap: 24px;
    @media (min-width: 900px) and (max-width: 1281px) {
      justify-content: center;
      gap: 0.3rem;
    }
  }
}

#jump-to-section-expand {
  background-color: var(--white);
  text-align: left;
  width: 100%;
  font-weight: 600;
  font-size: 14px;
  padding: var(--space-x-small) var(--space-small);
  margin: 0px;
  border-radius: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: var(--gray-100);
}

@media (min-width: 900px) {
  #jump-to-section-expand {
    display: none;
  }
}
@media (max-width: 899px) {
  #jump-to-section {
    &.display-none {
      display: none;
    }
  }
}

#jump-to-section > ul > li {
  list-style: none;
  display: flex;
  justify-content: flex-start;
  padding: 0 0 8px 8px;
  a {
    text-decoration: none;
    flex: 1 1 auto;
    padding: 0.5rem;
    color: var(--gray-100);
    border-radius: 12px;

    @media (max-width: 899px) {
      padding: 0 0 var(--space-x-small) var(--space-x-small);
    }
  }

  a:hover {
    text-decoration: underline var(--orange-50) 0.125rem;
    text-underline-offset: 0.2rem;
  }

  @media (min-width: 900px) {
    background-color: var(--gray-100);
    a {
      text-align: center;
      color: var(--white);
    }
  }

  @media (max-width: 899px) {
    background-color: var(--white);
    flex: 1 0 100%;
    a {
      font-weight: 600;
      font-size: 14px;
    }
  }
}
.jump-to-description {
  padding: var(--space-base);
  color: var(--gray-50);
  @media (min-width: 900px) and (max-width: 1281px) {
    padding: 0;
  }
  @media (max-width: 899px) {
    display: none;
  }
}
</style>
