<script setup lang="ts">
import { info } from './Example'

const currentUrl = window.location.href
const open = $ref(true)
</script>

<template>
  <div v-if="!info.hide && open" class="fixed z-50 top-4 left-4 right-4 px-6 max-w-full sm:w-96 rounded-lg font-karla text-gray-400 bg-gray-900 dark:bg-gray-100 dark:text-gray-500">
    <div class="flex justify-between pt-6 mt-0.5">
      <div>
        <h1 class="text-2xl text-white dark:text-gray-900 font-extrabold tracking-tight">{{ info.title }}</h1>
      </div>
      <button @click="open = false" class="text-gray-400 hover:text-gray-300 focus:text-gray-300 dark:text-gray-500 dark:hover:text-gray-600 dark:focus:text-gray-600 w-8 h-8 flex items-center justify-center -mr-3 rounded-full">
        <span class="sr-only">Fermer</span>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M2.96967 11.9697L11.9697 2.96967L13.0303 4.03033L4.03033 13.0303L2.96967 11.9697Z"></path>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M13.0303 11.9697L4.03033 2.96967L2.96968 4.03033L11.9697 13.0303L13.0303 11.9697Z"></path>
        </svg>
      </button>
    </div>
    <p class="mt-3 leading-relaxed">{{info.description }}</p>
    <a
      :href="currentUrl"
      class="transition-colors focus:text-white text-gray-300 dark:text-gray-600 hover:text-white dark:hover:text-black font-semibold block bg-gray-700 dark:bg-gray-200 hover:bg-gray-600 dark:hover:bg-gray-300 text-center w-full mt-5 mb-4 p-2.5 rounded font-bold text-white"
      target="_blank"
    >
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" class="inline fill-current mr-2">
        <path d="M3.5 3.5v9h9V8H14v5a1 1 0 01-1 1H3a1 1 0 01-1-1V3a1 1 0 011-1h5v1.5H3.5z"></path>
        <path clip-rule="evenodd" d="M11.44 3.5H10V2h4v4h-1.5V4.56L7.53 9.53 6.47 8.47l4.97-4.97z"></path>
      </svg>
      Ouvrir dans un nouvel onglet
    </a>
  </div>
</template>
