<template>
  <div style="margin: 20px;">
    <div>只能上传 300kb 以内的 png、jpeg文件</div>
    <gulu-uploader accept="image/*" method="POST" action="http://127.0.0.1:3000/upload" name="files"
                   :parse-response="parseResponse" :file-list.sync="fileList">
      <g-button icon="upload">上传</g-button>
    </gulu-uploader>
  </div>
</template>

<script>
import GuluUploader from "./uploader";
import GButton from './button/button'
import GIcon from './icon'

export default {
  name: "demo",
  components: {GuluUploader, GButton},
  data() {
    return {
      fileList: []
    }
  },
  methods: {
    parseResponse(response) {
      let object = JSON.parse(response)
      let url = `http://127.0.0.1:3000/preview/${object.id}`
      return url
    }
  }
};
</script>
<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background: white;
}

.xxx {
  height: 400px;
  overflow: auto;
}
</style>
<style scoped lang="scss">
</style>
