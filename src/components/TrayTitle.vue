<template>
  <h2 :id="headingId">
    <span v-if="props.icon" :class="iconClass" aria-hidden="true"></span>
    {{ props.heading }}
  </h2>
  <div class="description">
    {{ props.description }}
  </div>
</template>
<script setup lang="ts">
import { IdService } from '../services/IdService';

/* eslint-disable vue/require-default-prop */
const props = defineProps({
  icon: String,
  heading: {
    type: String,
    required: true
  },
  description: String
});
/* eslint-enable vue/require-default-prop */
const iconClass = 'icon icon-' + props.icon;
const headingId = IdService.createDomId(props.heading);
</script>
<style>
h3 a {
  color: light-dark(var(--black), var(--gray-10));
}

.description {
  padding: 3px 0 8px;
  border-bottom: solid 2px var(--orange-50);
}
</style>
