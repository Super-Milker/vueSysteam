<template>
  <div>
    <basicPage :basicType="'All'" cardType :basicLoading="commonLoading" class="basicAll">
      <div slot="All" style="height:inherit;overflow:hidden;display:flex" class="innerAll">
        <div class="g-main">
          <div class="chartsCard m-left">
            <div class="m-title"></div>
            <div class="m-pane">
              <video-model v-for="(item,index) in array" :key="index"></video-model>
            </div>
          </div>
          <div class="m-main">
            <div class="chartsCard m-main-top">
              <div class="m-title"></div>
              <video id="videoElement" controls autoplay style="width:630px" class="videoElement"></video>
              <div class="m-shade">
                <el-button size="mini" style="pointer-events: auto">666</el-button>
              </div>
            </div>
            <div class="chartsCard m-main-down">
              <div class="m-title"></div>
            </div>
          </div>
          <div class="m-right">
            <div class="chartsCard m-right-top">
              <div class="m-title"></div>
            </div>
            <div class="chartsCard m-right-down">
              <div class="m-title"></div>
            </div>
          </div>
        </div>
      </div>
    </basicPage>
  </div>
</template>

<script>
import iconImg from '@/assets/img/hardwareImg.jpg'
import videoModel from './videoModel'
import flvjs from 'flv.js'
export default {
  name: 'hardWare',
  components: { videoModel },
  data () {
    return {
      commonLoading: false,
      iconImg: iconImg,
      tableData: [],
      flvPlayer: {},
      array: [1, 2, 3, 4, 5, 6, 7, 8]
    }
  },
  mounted () {
    if (flvjs.isSupported()) {
      var videoElement = document.getElementById('videoElement')
      this.flvPlayer = flvjs.createPlayer({
        type: 'flv',
        hasVideo: true,
        enableWorker: false,
        lazyLoadMaxDuration: 3 * 60,
        seekType: 'range',
        url:
          'http://fed.dev.hzmantu.com/oa-project/bce0c613e364122715270faef1874251.flv'
      })
      this.flvPlayer.attachMediaElement(videoElement)
      this.flvPlayer.load()
      this.flvPlayer.play()
    }
  },
  methods: {
    stop () {
      this.flvPlayer.pause()
    },
    start () {
      this.flvPlayer.play()
    }
  }
}
</script>

<style scoped>
.innerAll {
  width: 1670px !important;
}
.basicAll {
  width: 1700px !important;
}
.g-main {
  overflow-x: hidden;
  display: flex;
}
.m-left {
  width: 470px;
  min-height: 800px;
}
.m-main {
  width: 650px;
  min-height: 800px;
}
.m-main-top {
  height: 410px;
  position: relative;
}
.m-main-down {
  margin-top: 30px;
  min-height: 400px;
}
.m-right {
  width: 520px;
  min-height: 800px;
}
.m-right-top {
  min-height: 500px;
}
.m-right-down {
  margin-top: 30px;
  min-height: 300px;
}
.m-title {
  width: 100%;
  height: 50px;
  border-radius: 4px;
  /* margin-left: -16px; */
  margin-top: -16px;
  background-color: blue;
}
.chartsCard {
  padding: 0px;
}
.m-pane {
  width: 100%;
  height: 764px;
  overflow-y: scroll;
  /* background-color: red; */
}
.m-shade {
  background-color: red;
  opacity: 0;
  width: 100%;
  height: 30px;
  position: absolute;
  bottom: 4px;
}
.m-shade:hover {
  opacity: 0.5;
  background-color: aquamarine;
}
</style>
