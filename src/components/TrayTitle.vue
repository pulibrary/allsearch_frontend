<template>
  <div class="tray-header">
    <h2 :id="headingId">
      {{ props.heading }}
    </h2>
    <div class="tray-description">
      {{ props.description }}
    </div>
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
const headingId = IdService.createDomId(props.heading);
</script>
<style>
.tray-header {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

h3 a {
  color: light-dark(var(--color-cold-blue), var(--gray-10));
  text-decoration: none;
}

.tray-description {
  padding-bottom: 16px;
  border-bottom: solid 2px var(--orange-50);
}
</style>
