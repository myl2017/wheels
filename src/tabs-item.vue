<template>
  <div class="tabs-item" @click="xxx" :class="classes">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "GuluTabsItem",
  inject: ['eventBus'],
  data() {
    return { // 不需要用户传值， 自己维护
      active: false
    }
  },
  props: {
    // active: { // 需要用户（前端开发者）传值
    //   type: Boolean,
    //   default: false
    // },
    disabled: {
      type: Boolean,
      default: false
    },
    name: {
      type: String | Number,
      required: true
    }
  },
  computed: {
    classes() {
      return {
        active: this.active
      }
    }
  },
  created() {
    this.eventBus.$on('update:selected', (name) => {
      console.log(name)
      if (name === this.name) {
        console.log(`我${this.name}被选中了`)
        this.active = true
      } else {
        this.active = false
        console.log(`我${this.name}没被选中了`)
      }
    })
  },
  methods: {
    xxx() {
      this.eventBus.$emit('update:selected', this.name)
    }
  }
}
</script>

<style scoped lang="scss">
.tabs-item {
  flex-shrink: 0;
  display: inline-flex;
  align-items: center;
  padding: 0 1em;
  cursor: pointer;
  height: 100%;

  &.active {
    background: red;
  }
}
</style>
