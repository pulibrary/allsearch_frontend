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
}

@media (prefers-color-scheme: light) {
  .tray-grid section {
    background-color: var(--white);
    border: 2px var(--gray-90) solid;
  }
}

@media (prefers-color-scheme: dark) {
  .tray-grid section {
    background-color: var(--color-grayscale-dark);
    /* border: 2px var(--gray-10) solid; */
  }
}
</style>
