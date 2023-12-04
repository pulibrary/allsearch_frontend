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
  background-color: var(--light-gray);
  padding: 2px 15px 18px;
  border: 1px var(--gray) solid;
  margin-top: 10px;
  width: max(calc(30vw - 30px), 360px);
  overflow-wrap: anywhere;
  flex-grow: 1;
  min-height: 300px;
}
</style>
