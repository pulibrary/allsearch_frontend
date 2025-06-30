<template>
  <InlineBadge color="blue">ONLINE</InlineBadge>
  <a :href="linkUrl" :aria-describedby="descriptionId">{{ linkText }}</a>
  <span aria-hidden="true" class="icon icon-newtab"></span>
  <span :id="descriptionId" class="visually-hidden">Opens in new tab</span>
</template>
<script setup lang="ts">
import InlineBadge from './InlineBadge.vue';
import { computed } from 'vue';

/* eslint-disable vue/require-default-prop */
const props = defineProps({
  url: String,
  urlLabel: String,
  onlineAccessCount: {
    type: Number,
    required: true
  },
  recordUrl: {
    type: String,
    required: true
  }
});
/* eslint-enable vue/require-default-prop */
const linkText = computed(() => {
  if (props.onlineAccessCount > 1) {
    return `View ${props.onlineAccessCount} Options`;
  } else {
    return props.urlLabel || 'Online content';
  }
});
const linkUrl = computed(() => {
  if (props.onlineAccessCount > 1) {
    return props.recordUrl;
  } else {
    return props.url;
  }
});
const uniqueId = Math.floor(Math.random() * 1_000_000);
const descriptionId = 'online-content-link-description-' + uniqueId;
</script>
<style>
.icon {
  margin: 3px;
  color: var(--link-blue);
  vertical-align: middle;
}
</style>
