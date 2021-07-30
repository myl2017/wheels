<template>
<div class="header">
  <slot></slot>
</div>
</template>

<script>
export default {
  name: "header"
}
</script>

<style lang="scss" scoped>
.header {
  flex-grow: 1;
}
</style>