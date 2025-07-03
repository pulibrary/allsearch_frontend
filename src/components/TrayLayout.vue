<template>
  <section :aria-label="props.label">
    <slot name="title"></slot>
    <slot name="metadata"></slot>
    <slot name="no_results"></slot>
    <slot name="loading"></slot>
    <slot name="further_actions"></slot>
  </section>
</template>
<script setup lang="ts">
const props = defineProps({
  label: {
    type: String,
    required: true
  }
});
</script>
<style>
.tray-grid section {
  display: inline-block;
  box-sizing: border-box;
  margin-bottom: 20px;
  width: 100%;
  flex-direction: column;
  padding: 24px;
  gap: 23px;
  flex: 1 1 30%;
  border-radius: 12px;
  background-color: light-dark(
    var(--color-white),
    var(--color-grayscale-darker)
  );
}

.publisher {
  font-size: 1rem;
  font-style: italic;
  line-height: 1.5rem;
  letter-spacing: 0.011rem;
}
.creator {
  font-weight: 600;
  font-size: 1rem;
  font-style: normal;
  line-height: 1.5rem;
  letter-spacing: 0.011rem;
}
.description {
  font: 1rem;
}

.tray-grid > div:nth-child(3) {
  h2 {
    font-size: 1.25rem;
  }
  .tray-description {
    font-size: 1rem;
  }
  li.document h3 a {
    font-size: 1rem;
  }
  .more-container {
    @media screen and (min-width: 900px) {
      justify-content: flex-end;
    }
  }
  .more-container .lux-link {
    font-size: 1rem;
    font-weight: 600;
  }
  .description {
    font-size: 0.875rem;
  }
  .email {
    font-size: 0.875rem;
    font-weight: 500;
  }
  .library-title {
    font-size: 0.875rem;
  }
}

.tray-grid > div:nth-child(-n + 2) {
  li.document .metadata li .lux-show-more {
    font-size: 0.875rem;
  }
}
</style>
