<template>
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
    <ul>
      <template v-for="scope in props.traysToJumpTo" :key="scope">
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
#jump-to-section {
  .ul-border {
    border: #f5f4f1;
  }

  ul {
    display: flex;
    flex-flow: row wrap;
    padding: 0;
    @media (min-width: 1000px) {
      gap: 24px;
    }
  }
}

#jump-to-section-expand {
  display: flex;
  background-color: var(--gray-70);
  border-radius: 12px;
  justify-content: space-between;
  align-items: center;
}
@media (min-width: 1000px) {
  #jump-to-section-expand {
    display: none;
  }
}
@media (max-width: 999px) {
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
  background-color: light-dark(
    var(--color-grayscale-lighter),
    var(--color-grayscale)
  );

  a {
    text-decoration: none;
    flex: 1 1 auto;
    text-align: center;
    padding: 0.5rem;
  }

  a:link {
    color: var(--black);
    @media (max-width: 999px) {
      color: var(--white);
    }
  }

  a:visited {
    color: light-dark(var(--black), var(--color-grayscale-lighter));
    @media (max-width: 999px) {
      color: light-dark(var(--white), var(--color-grayscale-lighter));
    }
  }

  a:hover {
    color: light-dark(var(--gray-10), var(--color-grayscale-lighter));
  }

  &:hover {
    background-color: var(--orange-50);
    cursor: pointer;
  }

  @media (max-width: 999px) {
    flex: 1 0 100%;
    background-color: light-dark(var(--gray-70), var(--color-grayscale));
  }
}
</style>
