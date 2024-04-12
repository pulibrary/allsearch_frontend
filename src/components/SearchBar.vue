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
const props = defineProps({
  position: String
});
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
form {
  display: grid;
}
.searchbar {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
}
form.centered {
  justify-content: center;
}
input {
  border: 2px solid var(--black);
  font-size: 1rem;
  width: 25vw;
  min-width: 180px;
}
button {
  border: 2px solid var(--black);
  border-left: 0px;
  background-color: var(--orange-50);
  font-size: 1rem;
  margin-top: 0;
  margin-left: 0;
  width: 51px;
}

.align-searchbar {
  display: flex;
  height: 60px;
}
</style>
