<template>
    <span class="badge">Online</span>
    <a :href="props.url" :aria-describedby="descriptionId">Online content</a>
    <span aria-hidden="true" class="icon icon-newtab"></span>
    <span :id="descriptionId" class="visually-hidden">Opens in new tab</span>
</template>
<script setup lang="ts">
const props = defineProps({
  url: String
});
const uniqueId = Math.floor(Math.random() * 1_000_000);
const descriptionId = "online-content-link-description-" + uniqueId;
</script>
<style>
.icon {
  margin: 3px;
}
</style>
