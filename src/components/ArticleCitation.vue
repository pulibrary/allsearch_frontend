<template>
    <li v-if="props.fields?.publication_title">
        <em>Contained in: {{ props.fields.publication_title }}</em>
    </li>
    <li>
      <span v-if="props.fields?.volume">
        Vol. {{ props.fields?.volume }},
      </span>
      <span v-if="props.fields?.issue">
        No. {{ props.fields?.issue }},
      </span>
      <span v-if="props.fields?.publication_year">
        {{ props.fields?.publication_year }},
      </span>
      <span v-if="props.fields?.start_page && props.fields?.end_page">
        pp. {{ props.fields?.start_page }}-{{ props.fields?.end_page }}
      </span>
    </li>
</template>
<script setup lang="ts">
import {defineProps} from 'vue';
const props = defineProps({
  fields: Object
})
</script>
