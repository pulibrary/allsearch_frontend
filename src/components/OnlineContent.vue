<template>
  <InlineBadge>Online</InlineBadge>
  <a :href="props.url" :aria-describedby="descriptionId">{{ linkText }}</a>
  <span aria-hidden="true" class="icon icon-newtab"></span>
  <span :id="descriptionId" class="visually-hidden">Opens in new tab</span>
</template>
<script setup lang="ts">
import InlineBadge from './InlineBadge.vue';
const props = defineProps({
  url: String,
  urlLabel: String
});
const uniqueId = Math.floor(Math.random() * 1_000_000);
const descriptionId = 'online-content-link-description-' + uniqueId;
const linkText = props.urlLabel || 'Online content';
</script>
<style>
.icon {
  margin: 3px;
}
</style>
