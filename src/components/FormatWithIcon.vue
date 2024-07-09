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
const classes = 'large-left-icon icon icon-' + formatIcon;
const displayFormat = props.format[0].toUpperCase() + props.format?.slice(1);
</script>
<style>
.format-container {
  position: relative;
}
.large-left-icon {
  left: -2.3em;
  top: -0.1em;
  position: absolute;
  font-size: 1.75em;
}
</style>
