<template>
  <div class="more-container">
    <a :href="props.url" class="more-link"
      >View and refine {{ props.resultCount.toLocaleString() }} results</a
    >
  </div>
</template>
<script setup lang="ts">
const props = defineProps({
  url: {
    type: String,
    required: true
  },
  resultCount: {
    type: Number,
    required: true
  }
});
</script>
<style>
.more-container {
  display: flex;
  justify-content: flex-end;
}

a.more-link {
  color: var(--black);
}
</style>
