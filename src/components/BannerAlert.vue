<template>
  <!-- eslint-disable vue/no-v-text-v-html-on-component -->
  <lux-alert
    v-if="result?.display_banner"
    :status="result.alert_status"
    :autoclear="result.autoclear"
    :dismissible="result.dismissible"
    v-html="result.text"
  ></lux-alert>
  <!-- eslint-enable -->
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

populateResult();
</script>
