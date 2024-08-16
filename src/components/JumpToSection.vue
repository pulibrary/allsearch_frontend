<template>
  <lux-input-button
    type="button"
    @button-clicked="toggleButton"
    variation="solid"
    aria-label="Toggle skip to section"
    class="lux-expanded"
    >Skip to Section</lux-input-button
  >
  <div id="jump-to-section" class="display-none" tabindex="-1">
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
import { LuxInputButton } from 'lux-design-system';
const props = defineProps({
  traysToLink: {
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
    gap: 10px;
    padding: 0;
  }
}

#main-content > div > div > div.header__secondary > nav .lux-button {
  margin: 1rem 0rem 1rem 0rem;
  background-color: var(--black);
  border: 1px solid var(--white);
}
@media (min-width: 1000px) {
  #main-content > div > div > div.header__secondary > nav .lux-button {
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
  display: inline-flex;
  justify-content: center;
  background-color: var(--color-grayscale-lighter);

  a {
    text-decoration: none;
    flex: 1 1 auto;
    text-align: center;
    padding: 0.5rem;
  }

  @media (prefers-color-scheme: dark) {
    background-color: var(--color-grayscale);
    a:link {
      color: var(--color-grayscale-lighter);
    }

    a:visited {
      color: var(--color-grayscale-lighter);
    }
  }

  &:hover {
    /* color: var(--black); */
    background-color: var(--orange-50);
    cursor: pointer;
  }

  @media (prefers-color-scheme: light) {
    a:link {
      color: var(--black);
    }

    a:visited {
      color: var(--black);
    }

    a:hover {
      color: var(--gray-90);
    }
  }

  @media (min-width: 1200px) {
    flex: 1 0 15%;
  }
  @media (min-width: 1000px) and (max-width: 1199px) {
    flex: 1 0 20%;
  }
  @media (max-width: 999px) {
    flex: 1 0 100%;
  }
}
</style>
