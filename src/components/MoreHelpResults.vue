<template>
  <div class="more-container">
    <LuxHyperlink :href="url"
      >{{ linkText
      }}<LuxIconBase
        width="14"
        height="14"
        circle-color="var(--gray-100)"
        icon-color="white"
        icon-hide="true"
      >
        <LuxIconArrowRight></LuxIconArrowRight> </LuxIconBase
    ></LuxHyperlink>
  </div>
</template>
<script setup lang="ts">
import {
  LuxHyperlink,
  LuxIconArrowRight,
  LuxIconBase
} from 'lux-design-system';
const props = defineProps({
  url: {
    type: String,
    required: true
  },
  resultCount: {
    type: Number,
    default: null
  }
});
let linkText: string;
if (props.resultCount) {
  linkText = `View all ${props.resultCount.toLocaleString()} results`;
} else {
  linkText = 'View all results';
}
</script>
<style>
.more-container {
  display: flex;
  justify-content: center;
  width: 100%;

  @media (--media-query-large) {
    justify-content: right;
  }
}
.more-container a.lux-link,
.more-container a.lux-link:visited {
  color: light-dark(var(--gray-100), var(--white));
}
.more-container .lux-icon svg circle {
  fill: light-dark(var(--gray-100), var(--white));
}
.more-container .lux-icon svg path {
  stroke: light-dark(var(--white), var(--gray-100));
}
.more-container a {
  margin-top: 0;
}
</style>
