<template>
  <transition name="fade" v-if="visible">
    <div class="sider">
      <slot></slot>
      <button @click="visible=false">close</button>
    </div>
  </transition>
</template>

<script>
export default {
  name: "GuluSider",
  data() {
    return {
      visible: true
    }
  },
  methods: {
    hide() {

    }
  }
}
</script>

<style lang="scss" scoped>
.sider {
  position: relative;

  > button {
    position: absolute;
    top: 0;
    right: 0;
  }
}

.fade-enter-active, .fade-leave-active {
  transition: all .5s;
}

.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */
{
  margin-left: -200px;
}
</style>