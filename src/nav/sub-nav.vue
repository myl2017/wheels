<template>
  <div class="g-sub-nav" :class="{active}" v-click-outside="close">
    <span class="g-sub-nav-label" @click="onClick">
      <slot name="title"></slot>
      <span class="g-sub-nav-icon" :class="{open}">
        <i v-if="open" class="icons">&gt;</i>
      </span>
    </span>
    <div class="g-sub-nav-popover" v-show="open">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import ClickOutside from '../click-outside'
import GIcon from '../icon'

export default {
  components: {GIcon},
  directives: {ClickOutside},
  name: "GuluSubNav",
  inject: ['root'],
  props: {
    name: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      open: false
    }
  },
  computed: {
    active() {
      return this.root.namePath.indexOf(this.name) >= 0 ? true : false
    }
  },
  methods: {
    onClick() {
      this.open = !this.open
    },
    close() {
      this.open = false
    },
    updateNamePath() {
      this.root.namePath.unshift(this.name)
      if (this.$parent.updateNamePath) {
        this.$parent.updateNamePath()
      } else {

      }
    }
  }
}
</script>

<style scoped lang="scss">
@import "styles/var";

.g-sub-nav {
  position: relative;

  &.active {
    position: relative;

    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      border-bottom: 2px solid $blue;
      width: 100%;
    }
  }

  &-label {
    padding: 10px 10px 10px 20px;
    display: block;
  }

  &-icon {
    display: none;
  }

  &-popover {
    background: white;
    position: absolute;
    top: 100%;
    left: 0;
    margin-top: 4px;
    white-space: nowrap;
    box-shadow: 0 0 3px fade-out(black, 0.8);
    border-radius: $border-radius;
    font-size: $font-size;
    color: $light-color;
    min-width: 8em;
  }
}

.g-sub-nav .g-sub-nav {
  &.active {
    &::after {
      display: none;
    }
  }

  .g-sub-nav-popover {
    top: 0;
    left: 100%;
    margin-left: 8px;
  }

  .g-sub-nav-label {
    display: flex;
    align-items: center;
  }

  .g-sub-nav-icon {
    display: inline-flex;
    transition: transform 250ms;

    .icons {
      font-style: normal;
      width: 1em;
      height: 1em;
      vertical-align: middle;
      margin-top: -5px;
      margin-left: 1em;
    }

    &.open {
      transform: rotate(180deg);
    }
  }
}
</style>
