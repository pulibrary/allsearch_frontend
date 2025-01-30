<template>
  <div class="more-container">
    <a :href="props.url" class="more-link"
      >{{ linkText }}<span class="icon icon-right"></span
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
  justify-content: right;
}

a.more-link {
  color: light-dark(var(--black), var(--white));
  border-bottom: 2px light-dark(var(--black), var(--white)) solid;
}

a.more-link:focus,
a.more-link:hover {
  text-decoration: none;
  border-bottom: 2px
    light-dark(
      var(--color-princeton-orange-on-white),
      var(--color-princeton-orange-on-black)
    )
    solid;
}

a.more-link {
  font-weight: bold;
  padding: 14px 24px;
  margin: 12px 7px auto;
  max-width: 100%;
  text-underline-offset: 4px;
  text-decoration: none;
  padding: 1px;
  text-align: right;
}

a.more-link:focus,
a.more-link:hover {
  text-underline-offset: 4px;
}

a.more-link .icon-right {
  padding-left: 3px;
}
</style>
