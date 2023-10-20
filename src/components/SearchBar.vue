<template>
  <search role="search">
    <form action="/" :class="props.position" @submit="validateForm">
      <WarningAlert
        :should-display-alert="showValidationError"
        alert-text="Please input a search"
      ></WarningAlert>
      <div class="searchbar">
        <label for="search"
          >Search
          <input
            id="search"
            v-model="query"
            type="text"
            name="q"
            aria-required="true"
          />
        </label>
        <button type="submit" class="icon icon-search">
          <span class="visually-hidden">Search</span>
        </button>
      </div>
    </form>
  </search>
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
  border: 5px solid var(--black);
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
  padding: 20px;
  font-size: 1rem;
}
button {
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
  padding: 21.25px 20px 21.25px 20px;
  border: 5px solid var(--black);
  border-left: 0px;
  background-color: var(--orange);
  font-size: 1rem;
  margin-top: 0;
  margin-left: 0;
}
</style>
