<template>
  <div class="cascader-items" :style="{height: height}">
    <div>
<!--      selected: {{ selected }}<br>-->
<!--      level: {{ level }}-->
    </div>
    <div class="left">
      <div class="label" v-for="item in items" @click="onClickLabel(item)">
        {{ item.name }}
        <g-icon v-if="item.children" name="right" class="icon"></g-icon>
      </div>
    </div>
    <div class="right" v-if="rightItems">
      <gulu-cascader-items :items="rightItems" :height="height" :level="level + 1" :selected="selected" @update:selected="onUpdateSelected"></gulu-cascader-items>
    </div>
  </div>
</template>

<script>
import Icon from './icon'

export default {
  name: 'GuluCascaderItems',
  components: {
    'g-icon': Icon
  },
  props: {
    items: {
      type: Array
    },
    height: {
      type: String
    },
    selected: {
      type: Array,
      default: () => {
        return []
      }
    },
    level: {
      type: Number,
      default: 0
    }
  },
  computed: {
    rightItems() {
      let currentSelected = this.selected[this.level]
      if (currentSelected && currentSelected.children) {
        return currentSelected.children
      } else {
        return null
      }
    }
  },
  methods: {
    onClickLabel(item) {
      let copy = JSON.parse(JSON.stringify(this.selected))
      copy[this.level] = item
      copy.splice(this.level + 1) // 一句话
      this.$emit('update:selected', copy)
    },
    onUpdateSelected(newSelected) {
      this.$emit('update:selected', newSelected)
    }
  }
}
</script>

<style scoped lang="scss">
@import "var";

.cascader-items {
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  height: 100px;

  .left {
    height: 100%;
    padding: .3em 0;
  }

  .right {
    height: 100%;
    border-left: 1px solid $border-color-light;
  }

  .label {
    padding: .3em 1em;
    display: flex;
    align-items: center;

    .icon {
      margin-left: 1em;
      transform: scale(0.5);
    }
  }
}
</style>
