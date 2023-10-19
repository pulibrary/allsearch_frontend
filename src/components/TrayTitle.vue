<template>
  <h2>
    <span v-if="props.icon" :class="iconClass" aria-hidden="true"></span>
    {{ props.heading }}
  </h2>
  <div class="description">{{ props.description }}</div>
</template>
<script setup lang="ts">
const props = defineProps({
  icon: String,
  heading: String,
  description: String
})
const iconClass = 'icon icon-' + props.icon
</script>
<style>
h3 a {
  color: var(--black);
}
</style>
