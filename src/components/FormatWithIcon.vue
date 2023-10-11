<template>
    <span :class="classes" aria-hidden="true"></span>
    <span class="visually-hidden">Format: </span>{{ props.format }}
</template>
<script setup lang="ts">
import {defineProps} from 'vue';
const props = defineProps({
  format: String
})
const classes = "icon icon-" + props.format?.toLowerCase();
</script>
