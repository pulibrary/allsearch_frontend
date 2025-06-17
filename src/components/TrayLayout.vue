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
  padding: var(--space-base);
  background-color: light-dark(var(--white), var(--color-grayscale-darker));
}

.publisher {
  font-style: italic;
  font-size: 16px;
  line-height: 1.5rem;
  letter-spacing: 0.011rem;
}

.creator {
  font-weight: bold;
  font-size: 16px;
  font-style: normal;
  line-height: 1.5rem;
  letter-spacing: 0.011rem;
}
</style>
