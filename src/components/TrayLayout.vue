<template>
  <section :aria-label="props.label">
    <slot name="title"></slot>
    <slot name="metadata"></slot>
    <slot name="no_results"></slot>
    <slot name="loading"></slot>
    <slot name="further_actions"></slot>
  </section>
</template>
<script setup lang="ts">
const props = defineProps({
  label: {
    type: String,
    required: true
  }
});
</script>
<style>
.tray-grid section {
  padding: 2px 15px 18px;
  margin-top: 10px;
  min-height: 300px;
  background-color: light-dark(var(--white), var(--color-grayscale-darker));
}

@media (prefers-color-scheme: light) {
  .tray-grid section {
    border: 2px var(--gray-90) solid;
  }
}
</style>
