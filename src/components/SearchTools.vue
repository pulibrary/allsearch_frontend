<template>
  <nav aria-label="search tools" class="search-tools">
    <slot></slot>
  </nav>
</template>
<style scoped>
nav.search-tools {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--gray-100);
  width: 100%;
  padding-top: var(--space-large);
  padding-bottom: var(--space-large);
}
</style>
