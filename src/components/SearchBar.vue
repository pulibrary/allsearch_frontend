<template>
  <form
    action="/"
    :class="props.position"
    role="search"
    @submit="validateForm"
    class="search-form"
  >
    <WarningAlert
      :should-display-alert="showValidationError"
      alert-text="Please input a search"
    ></WarningAlert>
    <div class="search-container">
      <LuxSearchBox v-model="query" name="q"></LuxSearchBox>
    </div>
  </form>
</template>
<script setup lang="ts">
import { SearchTermService } from '../services/SearchTermService';
import { ref } from 'vue';
import WarningAlert from './WarningAlert.vue';
import { LuxSearchBox } from 'lux-design-system';
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
<style>
.search-form {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  flex-wrap: wrap;
}
.search-container {
  width: min(750px, 80%);
}
</style>
