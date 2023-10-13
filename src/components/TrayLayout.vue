<template>
    <section :aria-label="props.label">
        <slot name="title"></slot>
        <slot name="metadata"></slot>
        <slot name="no_results"></slot>
        <slot name="further_actions"></slot>
    </section>
</template>
<script setup lang="ts">
import {defineProps} from 'vue';
const props = defineProps({
  label: {
    type: String,
    required: true
  }
})
</script>
<style>
section {
    background-color: var(--light-gray);
    padding: 2px 15px 18px;
    border: 1px var(--gray) solid;
}
</style>
