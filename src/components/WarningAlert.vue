<template>
  <div :class="shouldDisplayAlert ? 'warning-container' : ''" role="alert">
    <div v-if="shouldDisplayAlert" class="warning">{{ alertText }}</div>
  </div>
</template>
<script setup lang="ts">
defineProps({
  shouldDisplayAlert: {
    type: Boolean,
    required: true,
  },
  alertText: {
    type: String,
    required: true,
  },
});
</script>
<style scoped>
.warning-container {
  padding: 0.75rem 1.25rem;
  margin-bottom: 1rem;
  text-align: center;
  border: 1px solid transparent;
  border-radius: 0.25rem;
  position: relative;
  background-color: #fcf8e3;
  border-color: #faf2cc;
  color: #8a6d3b;
}
</style>
