<template>
  <li v-if="props.fields?.publication_title || chronology.length">
    <em
      ><template v-if="props.fields?.publication_title">{{
        props.fields.publication_title
      }}</template
      ><template v-if="props.fields?.publication_title && chronology.length"
        >, </template
      ><template v-if="chronology.length">{{
        chronology.join(', ')
      }}</template></em
    >
  </li>
</template>
<script setup lang="ts">
/* eslint-disable vue/require-default-prop */
const props = defineProps({
  fields: Object
});
/* eslint-enable vue/require-default-prop */
const chronology: string[] = [];
if (props.fields) {
  if (props.fields.volume) {
    chronology.push('Vol. ' + props.fields.volume);
  }
  if (props.fields.issue) {
    chronology.push('No. ' + props.fields.issue);
  }
  if (props.fields.publication_year) {
    chronology.push(props.fields.publication_year);
  }
  if (props.fields.start_page && props.fields.end_page) {
    chronology.push(
      'pp. ' + props.fields.start_page + '-' + props.fields.end_page
    );
  }
}
</script>
