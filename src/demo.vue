<template>
  <div>
    <div style="padding: 20px;">
      <g-cascader :source.sync="source" popover-height="200px"
                  :selected.sync="selected" :load-data="loadData"></g-cascader>
    </div>
<!--    <g-popover>-->
<!--      <template>-->
<!--        <button>点我</button>-->
<!--      </template>-->
<!--      <template slot="content">-->
<!--        弹出内容-->
<!--      </template>-->
<!--    </g-popover>-->
  </div>
</template>

<script>
import Button from "./button";
import Cascader from "./cascader";
import db from './db'
import Popover from './popover'
import {removeListener} from "./click-outside";


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
    'g-popover': Popover
  },
  data() {
    return {
      selected: [],
      source: []
    };
  },
  created() {
    ajax2(0).then((result) => {
      this.source = result
    })
  },
  destroyed() {
    removeListener()
  },
  methods: {
    loadData({id}, updateSource) {
      ajax2(id).then(result => {
        updateSource(result) // 回调： 把别人传给我的函数调用一下
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
