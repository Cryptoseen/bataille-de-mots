<script lang="ts">
</script>

<script lang="ts" setup>
import messages from '../lib/messages'
import Logo from '../Logo.vue'
</script>

<template>
  <header class="m-5 mb-0 p-5">
	<div>
		<Logo />
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
  border-bottom: 1px solid #52525B;
  color: #fff;
  text-align: center;
  background: #18181B;
}

@media (max-width: 715px) {
  button, .button {
	padding-left: 5px;
	padding-right: 5px;
  }
}
</style>
