<template>
  <span :class="badge_class"><slot></slot></span>
</template>
<script setup lang="ts">
import { computed } from 'vue';
const props = defineProps({
  color: {
    type: String,
    default: 'green'
  }
});
const badge_class = computed(() => `badge badge-${props.color}`);
</script>
<style>
.badge {
  height: 23px;
  font-size: 0.625rem;
  padding: 0px 8px;
  letter-spacing: 0.32px;
  margin: 0.25rem 0.25rem 0.25rem 0;
  border-radius: 24px;
  display: inline-block;
}

.badge-blue {
  background: var(--light-blue);
  color: var(--very-dark-blue);
}

.badge-green {
  background: var(--light-green);
  color: var(--dark-green);
}

.badge-red {
  background: var(--red);
  color: var(--gray-10);
}

.badge-gray {
  background: var(--gray-10);
  color: var(--gray-90);
}

.badge-yellow {
  background: var(--yellow);
  color: var(--dark-yellow);
}
</style>
