<template>
  <span :class="badge_class"><slot></slot></span>
</template>
<script setup lang="ts">
const props = defineProps({
  color: {
    type: String,
    default: 'green'
  }
});
const badge_class = `badge badge-${props.color}`;
</script>
<style>
.badge {
  padding: 4px;
  letter-spacing: 0.32px;
  margin: 0.25rem 0.25rem 0.25rem 0;
  border-radius: 3px;
  border: 1px solid var(--gray-50);
  display: inline-block;
}

.badge-green {
  background: var(--green);
  color: var(--white);
}

.badge-red {
  background: var(--red);
  color: var(--gray-10);
}

.badge-gray {
  background: var(--gray-10);
  color: var(--gray-90);
}
</style>
