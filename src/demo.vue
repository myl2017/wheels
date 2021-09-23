<template>
  <div>
    <g-nav :selected.sync="selected" multiple>
      <g-nav-item name="home">首页</g-nav-item>
      <g-sub-nav>
        <template>关于</template>
        <template slot="popover">
          <g-nav-item name="culture">企业文化</g-nav-item>
          <g-nav-item name="developers">开发团队</g-nav-item>
          <g-nav-item name="contacts">联系电话</g-nav-item>
        </template>
      </g-sub-nav>
      <g-nav-item name="hire">招聘</g-nav-item>
    </g-nav>
  </div>
</template>

<script>
import GNav from './nav/nav.vue'
import GNavItem from './nav/nav-item.vue'
import GSubNav from './nav/sub-nav.vue'

export default {
  name: "demo",
  components: {GNav, GNavItem, GSubNav},
  data() {
    return {
      selected: ['home']
    };
  },
  created() {

  }
};
</script>

<style scoped lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
