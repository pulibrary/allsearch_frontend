<template>
  <nav aria-label="search tools" class="search-tools">
    <slot></slot>
  </nav>
</template>
<style scoped>
nav.search-tools {
  background-color: var(--gray-100);
  width: 100%;
  padding-top: var(--space-large);
  padding-bottom: var(--space-large);
}
</style>
