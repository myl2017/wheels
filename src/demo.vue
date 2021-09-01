<template>
  <div>
    <div style="padding: 20px;">
      <g-cascader :source.sync="source" popover-height="200px"
                  :selected.sync="selected" :load-data="loadData"></g-cascader>
    </div>
  </div>
</template>

<script>
import Button from "./button";
import Cascader from "./cascader";
import db from './db'


// function ajax(parentId = 0, success, fail) {
//   let id = setTimeout(() => {
//     let result = db.filter((item) => item.parent_id == parentId)
//     success(result)
//   }, 3000)
//   return id
// }

function ajax2(parentId = 0) {
  return new Promise((success, fail) => {
    setTimeout(() => {
      let result = db.filter((item) => item.parent_id === parentId)
      result.forEach(node => {
        if (db.filter(item => item.parent_id === node.id).length > 0) {
          node.isLeaf = false
        } else {
          node.isLeaf = true
        }
      })
      success(result)
    }, 300)
  })
}

export default {
  name: "demo",
  components: {
    "g-button": Button,
    "g-cascader": Cascader,
  },
  data() {
    return {
      selected: [],
      source: [],
      popoverHeight: "200px",
    };
  },
  created() {
    ajax2(0).then((result) => {
      this.source = result
    })
  },
  methods: {
    loadData({id}, updateSource) {
      console.log(id)
      ajax2(id).then(result => {
        updateSource(result)
      })
    },
    onUpdateSource() {

    },
    onUpdateSelected() {

    },
    xxx() {
      console.log(this.selected);
      ajax2(this.selected[0].id).then((result) => {
        console.log(result)
        let lastLevelSelected = this.source.filter(item => item.id === this.selected[0].id)[0]
        this.$set(lastLevelSelected, 'children', result)
        console.log(lastLevelSelected)
      })
    }
  }
};
</script>

<style scoped lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

img {
  max-width: 100%;
}

html {
  --font-size: 14px;
}

body {
  font-size: var(--font-size);
}
</style>
