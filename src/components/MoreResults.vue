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
  justify-content: flex-end;
}

a.more-link {
  color: var(--black);
  text-decoration: none;
  padding: 7px;
  margin: 12px 0 7px;
}

a.more-link:focus,
a.more-link:hover {
  border-radius: 4px;
  color: #fff;
  background-color: var(--orange);
}

a.more-link .underline {
  text-decoration: underline;
}

a.more-link .icon-right {
  padding-left: 3px;
}
</style>
