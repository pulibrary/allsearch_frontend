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
  padding: 14px 24px;
  margin: 12px 7px auto;
  border: 2px var(--black) solid;
  border-radius: 5px;
  max-width: 50%;
  text-align: right;
}

a.more-link:focus,
a.more-link:hover {
  box-shadow: 3px 3px 0 0 var(--orange-50);
}

a.more-link .underline {
  text-decoration: underline;
}

a.more-link .icon-right {
  padding-left: 3px;
}
</style>
