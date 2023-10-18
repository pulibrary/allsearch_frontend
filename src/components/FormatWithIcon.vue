<template>
  <span :class="classes" aria-hidden="true"></span>
  <span class="visually-hidden">Format: </span>{{ displayFormat }}
</template>
<script setup lang="ts">
const props = defineProps({
  format: {
    type: String,
    required: true,
  },
  icon: String,
});
const formatIcon = props.icon || props.format?.toLowerCase();
const classes = "icon icon-" + formatIcon;
const displayFormat = props.format[0].toUpperCase() + props.format?.slice(1);
</script>
