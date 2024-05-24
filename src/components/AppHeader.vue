<template>
  <header>
    <div class="header--primary">
      <nav class="navbar">
        <a class="logo" href="https://library.princeton.edu">
          <img
            alt="Princeton University Logo"
            src="/assets/logos/pul-logo-new.svg"
          />
        </a>
        <lux-menu-bar type="main-menu" theme="dark" :menu-items="menu_items" />
      </nav>
    </div>
    <!-- End of head--primary class -->
  </header>
</template>

<script setup lang="ts">
import { LuxMenuBar } from 'lux-design-system';
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

<style>
header {
  width: 100%;
  padding: 1rem;
  height: 8rem;
  margin: 0em 0em 1em 0em;
  background-color: var(--gray-100);
  border-bottom: solid var(--orange-50) 3px;
}

.header--primary {
  align-content: center;
  display: flex;
  flex-flow: row wrap;
}

.logo {
  display: flex;
  flex-grow: 0;
  width: 240px;
}

.navbar {
  display: flex;
  flex-flow: row wrap;
  flex-grow: 1;
  justify-content: space-between;
}

header nav.lux-main-menu {
  /* TODO: Remove this rule and move it to lux */
  width: auto !important;
}

/* TODO: handle styling for screens less than 421px; */
@media (max-width: 645px) {
  header {
    height: 10rem;
  }

  .navbar {
    display: flex;
    flex-flow: column wrap;
    align-items: center;
  }
}
</style>
