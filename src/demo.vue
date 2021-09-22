<template>
  <div class="wrapper">
    <g-slides :selected="selected">
      <g-slides-item name="1">
        <div class="box">1</div>
      </g-slides-item>
      <g-slides-item name="2">
        <div class="box">2</div>
      </g-slides-item>
      <g-slides-item name="3">
        <div class="box">3</div>
      </g-slides-item>
    </g-slides>
  </div>
</template>

<script>
import GSlides from './slides/slides'
import GSlidesItem from './slides/slides-item'

export default {
  name: "demo",
  components: {
    'g-slides': GSlides,
    'g-slides-item': GSlidesItem
  },
  data() {
    return {
      selected: ''
    };
  },
  created() {
    let n = 1
    setInterval(() => {
      if (n === 4) {
        n = 1
      }
      this.selected = n.toString()
      n++
    }, 2000)
  }
};
</script>

<style scoped lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.wrapper {
  margin: 40px;
}

.box {
  width: 100%;
  height: 350px;
  background: #ddd;
}
</style>
