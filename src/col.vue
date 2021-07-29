<template>
  <div class="col" :class="colClass" :style="colStyle">
    <slot></slot>
  </div>
</template>

<script>
let validator = (value) => {
  let keys = Object.keys(value)
  let invalid = true
  keys.forEach(key => {
    if (!['span', 'offset'].includes(key)) {
      invalid = false
    }
  })
  return invalid
}
export default {
  name: "GuluCol",
  props: {
    span: {
      type: [Number, String]
    },
    offset: {
      type: [Number, String]
    },
    ipad: {type: Object, validator,},
    narrowPc: {type: Object, validator,},
    pc: {type: Object, validator,},
    widePc: {type: Object, validator,}
  },
  data() {
    return {
      gutter: 0
    }
  },
  computed: {
    colClass() {
      let {span, offset, ipad, narrowPc, pc, widePc} = this
      return [
        span && `col-${span}`,
        offset && `offset-${offset}`,
        ...(ipad ? [`col-ipad-${ipad.span}`] : []),
        ...(narrowPc ? [`col-narrowPc-${narrowPc.span}`] : []),
        ...(pc ? [`col-pc-${pc.span}`] : []),
        ...(widePc ? [`col-widePc-${widePc.span}`] : []),
      ]
    },
    colStyle() {
      return {
        paddingLeft: this.gutter / 2 + 'px',
        paddingRight: this.gutter / 2 + 'px'
      }
    }
  }
}
</script>

<style scoped lang="scss">
.col {
  // phone 默认
  $class-prefix: col-;
  @for $n from 1 through 24 {
    &.#{$class-prefix}#{$n} {
      width: ($n / 24) * 100%;
    }
  }
  $class-prefix: offset-; /*可以重复用同一个变量*/
  @for $n from 1 through 24 {
    &.#{$class-prefix}#{$n} {
      margin-left: ($n / 24) * 100%;
    }
  }

  // ipad
  @media (min-width: 577px) {
    $class-prefix: col-ipad-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        width: ($n / 24) * 100%;
      }
    }
    $class-prefix: offset-ipad-; /*可以重复用同一个变量*/
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        margin-left: ($n / 24) * 100%;
      }
    }
  }
  // narrow-pc
  @media (min-width: 769px) {
    $class-prefix: col-narrow-pc;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        width: ($n / 24) * 100%;
      }
    }
    $class-prefix: offset-narrow-pc; /*可以重复用同一个变量*/
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        margin-left: ($n / 24) * 100%;
      }
    }
  }
  // pc
  @media (min-width: 993px) {
    $class-prefix: col-pc;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        width: ($n / 24) * 100%;
      }
    }
    $class-prefix: offset-pc; /*可以重复用同一个变量*/
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        margin-left: ($n / 24) * 100%;
      }
    }
  }
  // wide-pc
  @media (min-width: 1201px) {
    $class-prefix: col-wide-pc;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        width: ($n / 24) * 100%;
      }
    }
    $class-prefix: offset-wide-pc; /*可以重复用同一个变量*/
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        margin-left: ($n / 24) * 100%;
      }
    }
  }

}


</style>