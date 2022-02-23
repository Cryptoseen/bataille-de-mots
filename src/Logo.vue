<template>
  <h1 class="flex">
  	<div class="mr-5">
		<img id="logo" src="/logo.svg" />
	</div>
	
	<span>BATAILLE DE MOTS</span>
  </h1>
</template>

<style scoped>

#logo{
	height : 50px;
}

h1 {
  text-transform: uppercase;
  letter-spacing: 1.5px;
  font-size: 36px;
  font-weight: 700;
  white-space: nowrap;
  overflow-x: hidden;
  text-overflow: ellipsis;
  flex-shrink: 1;
}

@media (max-width: 500px) {
  h1 {
	font-size: 22px;
	padding-top: 2.5px;
	letter-spacing: 0.5px;
  }
}

@media (max-width: 310px) {
  h1 {
	font-size: 16px;
  }
}
</style>
