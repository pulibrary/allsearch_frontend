<template>
  <div class="format-container">
    <span :class="classes" aria-hidden="true"></span>
    <span class="visually-hidden">Format: </span>{{ displayFormat }}
  </div>
</template>
<script setup lang="ts">
const props = defineProps({
  format: {
    type: String,
    required: true
  },
  icon: String
});
const formatIcon = props.icon || props.format?.toLowerCase();
const classes = 'format-icon icon icon-' + formatIcon;
const displayFormat = props.format[0].toUpperCase() + props.format?.slice(1);
</script>
<style>
.format-container {
  position: relative;
}
.icon.format-icon {
  margin: 3px 3px 3px 0;
  color: light-dark(var(--gray-100), var(--white));
}
</style>
