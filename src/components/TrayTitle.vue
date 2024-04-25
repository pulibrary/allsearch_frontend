<template>
  <h2 :id="headingId">
    <span v-if="props.icon" :class="iconClass" aria-hidden="true"></span>
    {{ props.heading }}
  </h2>
  <div v-if="props.description" class="description">
    {{ props.description }}
  </div>
</template>
<script setup lang="ts">
import { IdService } from '../services/IdService';
const props = defineProps({
  icon: String,
  heading: {
    type: String,
    required: true
  },
  description: String
});
const iconClass = 'icon icon-' + props.icon;
const headingId = IdService.createDomId(props.heading);
</script>
<style>
h3 a {
  color: var(--black);
}
.description {
  padding: 3px 0 8px;
  border-bottom: solid 2px var(--gray-50);
}
</style>
