<script lang="ts">
</script>

<script lang="ts" setup>
import messages from '../lib/messages'
import Logo from '../Logo.vue'

const { darkMode, colourBlindMode } = defineProps<{
  darkMode: boolean,
  colourBlindMode: boolean
}>()

let stateDarkMode = darkMode;
function toggleDarkMode (darkMode : boolean) {
  let newDarkMode = !darkMode
  document.documentElement.classList.toggle('dark')
  localStorage.setItem('darkMode', newDarkMode ? 'on' : 'off')
  stateDarkMode = newDarkMode
}

let stateColourBlindMode = colourBlindMode;
function toggleColourBlindMode (colourBlindMode : boolean) {
  let newcolourBlindMode = !colourBlindMode
  document.documentElement.classList.toggle('colourblind')
  localStorage.setItem('colourBlindMode', newcolourBlindMode ? 'on' : 'off')
  stateColourBlindMode = newcolourBlindMode
}

</script>

<template>
  <header class="m-5 mb-0 p-5">
	<div>
		<Logo />
	</div>
	<div class="flex">
	  <button @click="toggleColourBlindMode(colourBlindMode)" class="flex items-center rounded-md mr-3">
		<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
		  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
		</svg>
		<span>
			Mode daltonien
			<span v-if="colourBlindMode">
				activé
			</span>
		</span>
	  </button>
	  <button @click="toggleDarkMode(darkMode)" class="flex items-center rounded-md">
		<svg v-if="!darkMode" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
		  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
		</svg>
		<svg v-else xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
		  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
		</svg>
		<span>
			<span v-if="!stateDarkMode">
				Mode jour
			</span>
			<span v-if="stateDarkMode">
				Mode nuit
			</span>
		</span>
	  </button>
	</div>
  </header>
</template>

<style scoped>

.example, .divider {
  margin:  20px 0;
}

button, .button {
  padding: 15px;
  transition: background-color 150ms ease-in-out;
}

button:hover, .button:hover {
  background-color: rgba(0, 0, 0, 0.06);
}

.dark button:hover, .dark .button:hover {
  background-color: rgba(255, 255, 255, 0.1);
}

p {
  margin-top: 10px;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  border-bottom: 1px solid #ccc;
  color: #000;
  text-align: center;
  background: #fff;
}

.dark header {
  background: #18181B;
  color: #fff;
  border-color: #52525B;
}

@media (max-width: 715px) {
  button, .button {
	padding-left: 5px;
	padding-right: 5px;
  }
}
</style>
