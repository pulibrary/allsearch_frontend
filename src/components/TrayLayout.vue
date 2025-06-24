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
section {
  display: flex;
}
.tray-grid section {
  flex-direction: column;
  align-items: flex-start;
  padding: 24px;
  gap: 23px;
  flex: 1 1 30%;
  border-radius: 12px;
  background-color: light-dark(
    var(--color-white),
    var(--color-grayscale-darker)
  );
}

.publisher {
  font-style: italic;
  font-size: 16px;
  line-height: 1.5rem;
  letter-spacing: 0.011rem;
}

.creator {
  font-weight: 450;
  font-size: 16px;
  font-style: normal;
  line-height: 1.5rem;
  letter-spacing: 0.011rem;
}
</style>
