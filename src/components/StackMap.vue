<template>
  <button class="SMButton SMsearchbtn" @click="openModal()">
    <span>Where to find it</span>
    <span class="fa fa-map-marker" aria-hidden="true"></span>
  </button>

  <Transition>
    <div v-if="showModal">
      <div id="stackmap-modal">
        <div class="modal-header d-block">
          <button
            class="blacklight-modal-close close"
            type="button"
            data-dismiss="modal"
            aria-label="Close"
            @click="closeModal()"
          >
            <span aria-hidden="true">×</span>
          </button>
          <h5
            v-if="typeof titleValue != undefined"
            class="modal-title"
            id="myModalLabel"
            dir="{{titleValue}}"
          >
            {{ titleValue }}
          </h5>
          <h5 class="modal-title" id="myModalLabel">
            {{ props.document?.title }}
          </h5>
        </div>

        <div class="modal-body">
          <p>
            Call number
            <span class="stackmap-cn">
              {{ holding.call_number }}
            </span>
            is located in
            <span class="stackmap-library">
              {{ holding.label() || '(cannot be determined)' }}
            </span>
          </p>
          <div class="stackmap-wrapper">
            <iframe
              class="stackmap-src"
              title="Map"
              v-bind:src="stackmapUrl()"
            ></iframe>
          </div>
        </div>
        <div class="modal-footer justify-content-center">
          <ul class="w-100">
            <li>
              <a href="https://library.princeton.edu/ask-us" target="_blank">
                <svg
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  x="0px"
                  y="0px"
                  width="16px"
                  height="16px"
                  viewBox="0 0 24 24"
                  enable-background="new 0 0 24 24"
                  xml:space="preserve"
                  aria-hidden="true"
                >
                  <g id="Outline_Icons_1_">
                    <g id="Outline_Icons">
                      <g>
                        <circle
                          fill="none"
                          stroke="#000000"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-miterlimit="10"
                          cx="11.5"
                          cy="12.5"
                          r="11"
                        />
                        <path
                          fill="none"
                          stroke="#000000"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-miterlimit="10"
                          d="M8.5,10
    c0-1.656,1.343-3,3-3c1.656,0,3,1.344,3,3c0,1.658-1.344,3-3,3v3"
                        />
                        <path
                          fill="none"
                          stroke="#000000"
                          stroke-linejoin="round"
                          stroke-miterlimit="10"
                          d="M12,18.5c0,0.276-0.224,0.5-0.5,0.5l0,0
    c-0.276,0-0.5-0.224-0.5-0.5l0,0c0-0.276,0.224-0.5,0.5-0.5l0,0C11.776,18,12,18.224,12,18.5L12,18.5z"
                        />
                      </g>
                    </g>
                    <g id="New_icons_1_"></g>
                  </g>
                  <g id="Invisible_Shape">
                    <rect fill="none" width="24" height="24" />
                  </g></svg
                >Ask a reference question<i
                  class="fa fa-external-link new-tab-icon-padding"
                  aria-label="Opens in new tab"
                  role="img"
                ></i
              ></a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import { PropType, ref } from 'vue';
import { PhysicalHolding } from '../models/PhysicalHolding';
import { SearchResult } from '../models/SearchResult';

/* eslint-disable @typescript-eslint/ban-types */
const props = defineProps({
  titleValue: {
    type: String
  },
  holding: {
    type: Object as PropType<PhysicalHolding>,
    required: true
  },
  document: {
    type: Object as PropType<SearchResult>
  }
});

const showModal = ref(false);

function openModal() {
  showModal.value = true;
}

function closeModal() {
  showModal.value = false;
}

function stackmapUrl() {
  const baseUrl = 'https://princeton.stackmap.com/view/';
  const params = new URLSearchParams();

  params.set('callno', props.holding?.call_number || '');
  params.set('location', convertLocation(props.holding.library));
  params.set('library', props.holding.library);

  return `${baseUrl}?${params.toString()}`;
}

// TODO: Finish converting labels to location or bring the locations from the backend
function convertLocation(library: String) {
  if (library === 'Firestone Library') {
    return 'firestone';
  } else {
    return '';
  }
}
</script>

<style scoped></style>
