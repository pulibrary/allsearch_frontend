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
  background-color: var(--white);
  padding: 2px 15px 18px;
  border: 2px var(--gray-90) solid;
  margin-top: 10px;
  min-height: 300px;
  box-shadow: 3px 3px 0 0 var(--gray-90);
}
</style>
