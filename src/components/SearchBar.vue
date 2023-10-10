<template>
<search role="search">
    <form action="/">
        <label for="search">Search
            <input id="search" type="text" name="q" :value="initialValue" required>
        </label>
        <button type="submit" class="icon icon-search">
            <span class="visually-hidden">Search</span>
        </button>
    </form>
</search>
</template>
<script setup lang="ts">
    import { SearchTermService } from '../services/SearchTermService';
    const initialValue = SearchTermService.term();
</script>
<style>
  form {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
  }
  input {
    border: 5px solid var(--black);
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
    padding: 20px;
    font-size: 1rem;
  }
  button {
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
    padding: 20px;
    border: 5px solid var(--black);
    border-left:0px;
    background-color: var(--orange);
    font-size: 1rem;
  }
</style>
