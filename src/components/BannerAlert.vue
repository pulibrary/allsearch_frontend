<template>
  <lux-alert
    v-if="shouldDisplayBanner()"
    :status="result?.alert_status"
    :autoclear="result?.autoclear"
    :dismissible="result?.dismissible"
    @dismissed="handleDismissed"
  >
    <!-- nosemgrep javascript.vue.security.audit.xss.templates.avoid-v-html.avoid-v-html -->
    <span v-html="result?.text"></span>
  </lux-alert>
</template>
<script setup lang="ts">
import { Ref, ref } from 'vue';
import { BannerResult } from '../models/BannerResult';
import { BannerService } from '../services/BannerService';
import { LuxAlert } from 'lux-design-system';

const bannerService = new BannerService();
const bannerPromise = bannerService.result();
const result: Ref<BannerResult | undefined> = ref(undefined);

async function populateResult(): Promise<void> {
  result.value = await bannerPromise;
}

function handleDismissed() {
  window.localStorage.setItem(
    'allsearch-banner-dismissed',
    JSON.stringify({
      date: new Date().toISOString().split('T')[0],
      text: result.value?.text
    })
  );
}

function shouldDisplayBanner(): boolean {
  if (!result.value) {
    return false;
  }
  const lastDismissed = window.localStorage.getItem(
    'allsearch-banner-dismissed'
  );
  if (lastDismissed) {
    const parsed = JSON.parse(lastDismissed);
    const lastDismissedDate = new Date(parsed.date);
    if (isRecent(lastDismissedDate) && parsed.text === result.value?.text) {
      return false;
    }
  }
  return result.value?.display_banner || false;
}

function isRecent(date: Date): boolean {
  var cutoffDate = new Date();
  var sevenDaysAgo = cutoffDate.getDate() - 7;
  cutoffDate.setDate(sevenDaysAgo);
  return date > cutoffDate;
}

populateResult();
</script>
