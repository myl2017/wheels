<template>
  <div class="g-slides" @mouseenter="onMouseEnter" @mouseleave="onMouseLeave"
       @touchstart="onTouchStart"
       @touchmove="onTouchMove"
       @touchend="onTouchEnd">
    <div class="g-slides-window" ref="window">
      <div class="g-slides-wrapper">
        <slot></slot>
      </div>
    </div>
    <div class="g-slides-dots">
      <span @click="onClickPrev">&lt;</span>
      <span v-for="n in childrenLength" :key="n" :class="{'active': selectedIndex ===  n-1}" @click="select(n-1)">
        {{ n }}
      </span>
      <span @click="onClickNext">&gt;</span>
    </div>
  </div>
</template>

<script>
import GIcon from '../icon'
export default {
  name: "slides",
  components: {GIcon},
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
      lastSelectedIndex: undefined,
      timerId: undefined,
      startTouch: undefined
    }
  },
  computed: {
    selectedIndex() {
      let index = this.names.indexOf(this.selected)
      return index === -1 ? 0 : index
    },
    names() {
      return this.items.map(vm => vm.name)
    },
    items() {
      return this.$children.filter(vm => vm.$options.name === 'GuluSlidesItem')
    }
  },
  mounted() {
    this.updateChildren()
    this.playAutomatically()
    this.childrenLength = this.items.length
  },
  updated() {
    this.updateChildren()
  },
  methods: {
    onMouseEnter() {
      this.pause()
    },
    onMouseLeave() {
      this.playAutomatically()
    },
    onTouchStart(e) {
      this.pause()
      if (e.touches.length > 1) {
        return
      }
      this.startTouch = e.touches[0]
      console.log('摸');
    },
    onTouchMove(e) {
      console.log('边摸边动');
    },
    onTouchEnd(e) {
      console.log(e.changedTouches[0])
      let endTouch = e.changedTouches[0]
      let {clientX: x1, clientY: y1} = this.startTouch
      let {clientX: x2, clientY: y2} = endTouch

      let distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2))
      let deltaY = Math.abs(y2 - y1)
      let rate = distance / deltaY
      if (rate > 2) {
        console.log('在滑动我了')
        if (x2 > x1) {
          if (endTouch.clientX > this.startTouch.clientX) {
            console.log('右')
            this.select(this.selectedIndex - 1)
          } else {
            console.log('左')
            this.select(this.selectedIndex + 1)
          }
        }
      }
      this.$nextTick(() => {
        this.playAutomatically()
      })
      console.log('摸完了');
    },
    onClickPrev() {
      this.select(this.selectedIndex - 1)
      console.log('prev')
    },
    onClickNext() {
      this.select(this.selectedIndex + 1)
      console.log('next')
    },
    playAutomatically() {
      if (this.timerId) {
        return
      }
      let run = () => {
        let index = this.names.indexOf(this.getSelected())
        let newIndex = index + 1
        if (newIndex === -1) {
          newIndex = this.names.length - 1
        }
        if (newIndex === this.names.length) {
          newIndex = 0
        }
        this.select(newIndex)
        this.timerId = setTimeout(run, 3000)
      }

      this.timerId = setTimeout(run, 3000)
      // 用 setTimeout 模拟 setInterval
    },
    pause() {
      clearTimeout(this.timerId)
      this.timerId = undefined
    },
    select(newIndex) {
      this.lastSelectedIndex = this.selectedIndex
      if (newIndex === -1) {
        newIndex = this.names.length - 1
      }
      if (newIndex === this.names.length) {
        newIndex = 0
      }
      this.$emit('update:selected', this.names[newIndex])
    },
    getSelected() {
      let first = this.items[0]
      return this.selected || first.name
    },
    updateChildren() {
      let selected = this.getSelected()
      this.items.forEach((vm) => {
        let reverse = this.selectedIndex > this.lastSelectedIndex ? false : true
        if (this.timerId) {
          if (this.lastSelectedIndex === this.items.length - 1 && this.selectedIndex === 0) {
            reverse = false
          }
          if (this.lastSelectedIndex === 0 && this.selectedIndex === this.items.length - 1) {
            reverse = true
          }
        }
        vm.reverse = reverse
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

  &-window {
    overflow: hidden;
  }

  &-wrapper {
    position: relative;
  }

  &-dots {
    padding: 8px 0;
    display: flex;
    justify-content: center;
    align-items: center;

    > span {
      width: 20px;
      height: 20px;
      display: inline-flex;
      justify-content: center;
      align-items: center;
      background: #ddd;
      border-radius: 50%;
      margin: 0 8px;
      font-size: 12px;

      &.hover {
        cursor: pointer;
      }

      &.active {
        background: black;
        color: white;

        &:hover {
          cursor: default;
        }
      }
    }
  }
}
</style>
