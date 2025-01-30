<template>
  <form action="/" :class="props.position" role="search" @submit="validateForm">
    <WarningAlert
      :should-display-alert="showValidationError"
      alert-text="Please input a search"
    ></WarningAlert>
    <div class="searchbar">
      <div class="align-searchbar">
        <input
          id="search"
          v-model="query"
          type="text"
          name="q"
          aria-required="true"
          aria-label="Search"
        />
        <button type="submit">
          <span class="visually-hidden" style="margin: auto">Search</span>
          <span class="icon icon-search"></span>
        </button>
      </div>
    </div>
  </form>
</template>
<script setup lang="ts">
import { SearchTermService } from '../services/SearchTermService';
import { ref } from 'vue';
import WarningAlert from './WarningAlert.vue';
const query = ref(SearchTermService.term() as string);
const showValidationError = ref(false);

/* eslint-disable vue/require-default-prop */
const props = defineProps({
  position: String
});
/* eslint-enable vue/require-default-prop */
const validateForm = (event: Event) => {
  if (searchIsEmpty()) {
    event.preventDefault();
    showValidationError.value = true;
  }
};
const searchIsEmpty = () => {
  if (query.value?.replace(/\s/g, '')?.length) {
    return false;
  }
  return true;
};
</script>
<style scoped>
input {
  border: 2px solid var(--gray-100);
  font-size: 1rem;
  flex: 1;
  background-color: light-dark(var(--white), var(--color-grayscale-darker));
  color: light-dark(var(--black), var(--color-grayscale-lighter));
}

button {
  border: 2px solid var(--black);
  border-left: 0px;
  background-color: light-dark(var(--orange-50), var(--color-grayscale-darker));
  font-size: 1rem;
  margin-top: 0;
  margin-left: 0;
  width: 51px;
  @media (prefers-color-scheme: dark) {
    border-left: 2px var(--gray-90) solid;
  }
}

#search {
  padding: 0.375rem 0.75rem;
}
.align-searchbar {
  display: flex;
  height: 60px;
}
</style>
