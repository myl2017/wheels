<template>
  <div class="cascader">
    <div class="trigger">
      <slot></slot>
    </div>
    <div class="popover">
      <div v-for="item in dataSource">
        <cascader-item :source-item="item">{{ item.name }}</cascader-item>
      </div>
    </div>
  </div>
</template>

<script>
import CascaderItem from './cascader-item'

export default {
  name: "GuluCascader",
  components: {
    CascaderItem
  },
  props: {
    dataSource: {
      type: Array
    }
  }
}
</script>

<style scoped lang="scss">
@import "var";

.cascader {

}
</style>
