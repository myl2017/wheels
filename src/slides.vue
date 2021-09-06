<template>
  <div class="g-slides">
    <div class="g-slides-window" ref="window">
      <div class="g-slides-wrapper">
        <slot></slot>
      </div>
    </div>
    <div class="g-slides-dots">
      <span v-for="n in childrenLength" :key="n" :class="{'active': selectedIndex ===  n-1}" @click="select(n-1)">
        {{ n }}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "slides",
  props: {
    selected: {
      type: String
    },
    autoPlay: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      childrenLength: 0,
      lastSelectedIndex: undefined
    }
  },
  computed: {
    selectedIndex() {
      return this.names.indexOf(this.selected) || 0
    },
    names() {
      return this.$children.map(vm => vm.name)
    }
  },
  mounted() {
    this.updateChildren()
    this.playAutomatically()
    this.childrenLength = this.$children.length
    this.lastSelectedIndex = this.selectedIndex
  },
  updated() {
    this.updateChildren()
  },
  methods: {
    playAutomatically() {
      let index = this.names.indexOf(this.getSelected())
      let run = () => {
        let newIndex = index - 1
        if (newIndex === -1) {
          newIndex = this.names.length - 1
        }
        if (newIndex === this.names.length) {
          newIndex = 0
        }
        this.select(newIndex)
        setTimeout(run, 3000)
      }

      setTimeout(run, 3000)
      // 用 setTimeout 模拟 setInterval
    },
    select(index) {
      this.lastSelectedIndex = this.selectedIndex
      this.$emit('update:selected', this.names[index])
    },
    getSelected() {
      let first = this.$children[0]
      return this.selected || first.name
    },
    updateChildren() {
      let selected = this.getSelected()
      this.$children.forEach((vm) => {
        vm.reverse = this.selectedIndex > this.lastSelectedIndex ? false : true //newIndex > oldIndex ? false : true
        this.$nextTick(() => {
          vm.selected = selected
        })
      })
    }
  }
}
</script>

<style scoped lang="scss">
.g-slides {
  border: 1px solid black;

  &-window {
    overflow: hidden;
  }

  &-wrapper {
    border: 1px solid green;
    position: relative;
  }

  &-dots {
    > span {
      &.active {
        background: red;
      }
    }
  }
}
</style>
