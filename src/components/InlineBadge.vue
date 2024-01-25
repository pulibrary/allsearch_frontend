<template>
  <span class="badge"><slot></slot></span>
</template>
<style>
.badge {
  background: #c3ed79;
  color: #3e5b0c;
  padding: 4px;
  letter-spacing: 0.32px;
  margin: 0.25rem 0.25rem 0.25rem 0;
  border-radius: 3px;
  border: 1px solid var(--gray-50);
  display: inline-block;
}
</style>
