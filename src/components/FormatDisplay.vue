<template>
  <div class="format-container">
    <span class="visually-hidden">Format: </span>{{ displayFormat }}
  </div>
</template>
<script setup lang="ts">
const props = defineProps({
  format: {
    type: String,
    required: true
  }
});
const displayFormat = props.format[0].toUpperCase() + props.format?.slice(1);
</script>
<style>
.format-container {
  position: relative;
}
</style>
