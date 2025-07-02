<template>
  <div class="more-container">
    <a :href="props.url" class="more-link">{{ linkText }} </a>
  </div>
</template>
<script setup lang="ts">
const props = defineProps({
  url: {
    type: String,
    required: true
  },
  resultCount: {
    type: Number
  }
});
let linkText: string;
if (props.resultCount) {
  linkText = `View and refine ${props.resultCount.toLocaleString()} results`;
} else {
  linkText = 'View and refine results';
}
</script>
<style>
.more-container {
  display: flex;
  width: 100%;
  justify-content: center;
}

a.more-link {
  color: inherit;
  font-size: 1rem;
  font-weight: 600;
}

a.more-link:focus,
a.more-link:hover {
  text-decoration: none;
  background-color: var(--orange-50);
  border-bottom: 2px
    light-dark(
      var(--color-princeton-orange-on-white),
      var(--color-princeton-orange-on-black)
    )
    solid;
}

a.more-link {
  font-size: 1rem;
  font-weight: bold;
  text-decoration: none;
  text-align: center;
  margin: 12px 7px auto;
  padding: 14px 24px;
  width: 100%;
  border-radius: 48px;
  border: 1px solid var(--gray-50);
  background-color: light-dark(var(--white), var(--color-grayscale-darker));
  color: light-dark(var(--black), var(--white));
}

a.more-link:focus,
a.more-link:hover {
  text-underline-offset: 4px;
  background-color: var(--orange-50);
  color: var(--white);
}
</style>
