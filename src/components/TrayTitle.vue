<template>
  <h2 :id="headingId">
    <span v-if="props.icon" :class="iconClass" aria-hidden="true"></span>
    {{ props.heading }}
  </h2>
  <div class="description">{{ props.description }}</div>
</template>
<script setup lang="ts">
const props = defineProps({
  icon: String,
  heading: {
    type: String,
    required: true
  },
  description: String
});
const iconClass = 'icon icon-' + props.icon;
const headingId = props.heading
  .toLowerCase()
  .trim()
  .replace(/\s/g, '-')
  // only ASCII letters, digits, '_', and '-' should be used in an id, per
  // https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/id
  .replace(/[^\w\d-_]/g, '');
</script>
<style>
h3 a {
  color: var(--black);
}
</style>
