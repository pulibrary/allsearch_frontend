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
  background-color: var(--gray-10);
  padding: 2px 15px 18px;
  border: 1px var(--gray-50) solid;
  margin-top: 10px;
  min-height: 300px;
}
</style>
