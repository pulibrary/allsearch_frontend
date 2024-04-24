<template>
  <div class="more-container">
    <a :href="props.url" class="more-link"
      ><span class="underline"
        >View and refine {{ props.resultCount.toLocaleString() }} results</span
      >
      <span class="icon icon-right"></span
    ></a>
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
  justify-content: flex-start;
}

a.more-link {
  color: var(--black);
  text-decoration: none;
  padding: 14px 24px;
  margin: 12px 7px auto;
  border: 2px var(--black) solid;
  border-radius: 5px;
  max-width: 100%;
}

a.more-link:focus,
a.more-link:hover {
  text-decoration: none;
  color: var(--black);
  background-color: var(--orange-50);
}

a.more-link {
  text-decoration: underline;
}

a.more-link .icon-right {
  padding-left: 3px;
}
</style>
