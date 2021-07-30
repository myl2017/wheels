<template>
  <div class="layout" :class="layoutClass">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "layout",
  data() {
    return {
      layoutClass: {
        hasSider: false
      }
    }
  },
  created() {
    console.log('created...')
    console.log(this.$children)
  },
  mounted() {
    console.log('mounted...')
    console.log(this.$children)
    this.$children.forEach((vm) => {
      console.log(vm.$options.name)
      if (vm.$options.name === 'GuluSider') {
        this.layoutClass.hasSider = true
      }
    })
  }
}
</script>

<style lang="scss" scoped>
.layout {
  display: flex;
  flex-direction: column;

  &.hasSider {
    flex-direction: row;
  }
}
</style>