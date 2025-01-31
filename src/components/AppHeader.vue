<template>
  <LuxLibraryHeader type="header" appName="All Search" abbrName="All Search">
    <LuxInputSelect
      v-if="currentMode"
      @change="switchMode($event)"
      :value="currentMode"
      :options="[
        { label: 'Auto', value: 'dark light' },
        { label: 'Dark', value: 'dark' },
        { label: 'Light', value: 'light' }
      ]"
    ></LuxInputSelect>
    <LuxMenuBar type="main-menu" theme="dark" :menu-items="menu_items" />
  </LuxLibraryHeader>
</template>

<script setup lang="ts">
import {
  LuxLibraryHeader,
  LuxMenuBar,
  LuxInputSelect
} from 'lux-design-system';
const menu_items = [
  {
    name: 'Accounts',
    component: 'Accounts',
    href: 'https://library.princeton.edu/services/accounts'
  },
  {
    name: 'Hours',
    component: 'Hours',
    href: 'https://library.princeton.edu/hours'
  },
  {
    name: 'Help',
    component: 'Help',
    href: 'https://library.princeton.edu/services/research-support/askus-chat-and-email'
  },
  {
    name: 'Search Tools',
    component: 'Search Tools',
    children: [
      {
        name: 'Library Catalog',
        component: 'Library Catalog',
        href: 'https://catalog.princeton.edu/'
      },
      {
        name: 'Articles+',
        component: 'Articles+',
        href: 'https://princeton.summon.serialssolutions.com/'
      },
      {
        name: 'Databases',
        component: 'Databases',
        href: 'https://libguides.princeton.edu/az/databases'
      },
      {
        name: 'Finding Aids',
        component: 'Finding Aids',
        href: 'https://findingaids.princeton.edu/'
      },
      {
        name: 'Digital Library (DPUL)',
        component: 'Digital Library (DPUL)',
        href: 'https://dpul.princeton.edu/'
      },
      {
        name: 'All Search Tools',
        component: 'All Search Tools',
        href: 'https://library.princeton.edu/services?type=1551'
      }
    ]
  }
];

let currentMode = window.localStorage.getItem('mode') || 'dark light';

function switchMode(value: string) {
  window.localStorage.setItem('mode', value);
  const colorScheme = document.querySelector('meta[name="color-scheme"]');
  colorScheme?.setAttribute('content', value);
}
</script>
