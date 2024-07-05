<template>
  <LuxLibraryHeader type="header" appName="AllSearch">
    <LuxMenuBar type="main-menu" theme="dark" :menu-items="menu_items" />
  </LuxLibraryHeader>
</template>

<script setup lang="ts">
import { LuxLibraryHeader, LuxMenuBar } from 'lux-design-system';
const menu_items = [
  {
    name: 'Accounts',
    component: 'Accounts',
    href: 'https://library.psb-prod.princeton.edu/accounts'
  },
  {
    name: 'Hours',
    component: 'Hours',
    href: 'https://library.psb-prod.princeton.edu/hours'
  },
  {
    name: 'Help',
    component: 'Help',
    href: 'https://library.psb-prod.princeton.edu/help',
    children: [
      {
        name: 'Schedule a Consultation',
        component: 'Schedule a Consultation',
        href: 'https://library.psb-prod.princeton.edu/help/schedule-consultation'
      }
    ]
  },
  {
    name: 'For You',
    component: 'For You',
    href: 'https://library.psb-prod.princeton.edu/you',
    children: [
      {
        name: 'Faculty',
        component: 'Faculty',
        href: 'https://library.psb-prod.princeton.edu/you/faculty'
      },
      {
        name: 'Graduate Students',
        component: 'Graduate Students',
        href: 'https://library.psb-prod.princeton.edu/you/graduate-students'
      },
      {
        name: 'Undergraduate Students',
        component: 'Undergraduate Students',
        href: 'https://library.psb-prod.princeton.edu/you/undergraduate-students'
      },
      {
        name: 'Visitors',
        component: 'Undergraduate Students',
        href: 'https://library.psb-prod.princeton.edu/you/visitors'
      }
    ]
  }
];
</script>
