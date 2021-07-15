<template>
	<svg class="g-icon test2">
		<use :xlink:href="`#i-${name}`"/>
	</svg>
</template>

<script>
  export default {
    name: 'icon',
    props: ['name']
  }
</script>

<style lang="scss">
	.g-icon {
		width: 1em;
		height: 1em;
		vertical-align: middle;
		margin-top: 2px;
	}
</style>
