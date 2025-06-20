<template>
  <div v-if="results?.records?.length" class="best-bet-tray">
    <div class="best-bet-header-container">
      <h2 class="best-bet-header">Best Bets</h2>
      <img alt="" src="/src/assets/icons/info.svg" class="best-bet-icon" />
    </div>
    <div class="best-bets-item-container">
      <h3 class="best-bets-title">
        <a href="results.records[0].url">{{ results.records[0].title }}</a>
      </h3>
      <p class="best-bets-description">
        {{ results.records[0]['description'] }}
      </p>
    </div>
  </div>
  <div v-else class="placeholder"></div>
</template>

<script setup lang="ts">
import { Ref, ref } from 'vue';
import { SearchResults } from '../models/SearchResults';

/* eslint-disable vue/require-default-prop */
const props = defineProps({
  resultsPromise: Promise<SearchResults>
});
/* eslint-enable vue/require-default-prop */

const emit = defineEmits<{
  (e: 'bestBetDataLoaded', payload: number | undefined): void;
}>();

const results: Ref<SearchResults | undefined> = ref(undefined);

async function populateResults(): Promise<void> {
  results.value = await props.resultsPromise;
  emit('bestBetDataLoaded', results.value?.records.length);
}

populateResults();
</script>

<style>
.best-bets section ol li.document {
  list-style-type: none;
}

.best-bets > section {
  padding: 10px;
  background-color: light-dark(#efefef, var(--color-grayscale-darker));
}

.best-bet-tray {
  border-radius: 12px;
  border: 1px solid var(--orange-50);
  background:
    linear-gradient(
      0deg,
      rgba(231, 117, 0, 0.15) 0%,
      rgba(231, 117, 0, 0.15) 100%
    ),
    var(--white);
  margin-bottom: var(--space-base);
  display: flex;
  padding: 24px 32px;
  align-items: center;
  gap: 40px;
  align-self: stretch;
}

.best-bet-header-container {
  border-right: 2px solid var(--gray-70);
  display: flex;
  align-items: center;
  gap: 10px;
}

.best-bet-header {
  color: var(--gray-100);
  margin: 14px 0px 14px 0px;
  font-size: 1.75rem;
  font-weight: 600;
  line-height: 32px;
}

.best-bet-icon {
  width: var(--space-base);
  height: var(--space-base);
  margin-right: var(--space-base);
}

.best-bets-item-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 4px;
}

.best-bets-title {
  color: var(--gray-100);
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%;
  letter-spacing: -0.22px;
  text-decoration-line: underline;
  text-decoration-style: solid;
  margin: 0;

  a {
    color: inherit;
  }
}

.best-bets-description {
  color: var(--gray-100);
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  letter-spacing: -0.176px;
  margin: 0;
}
</style>
