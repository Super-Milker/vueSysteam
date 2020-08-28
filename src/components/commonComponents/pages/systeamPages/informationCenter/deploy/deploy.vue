<template>
  <div>
    <basicPage :basicType="'All'" cardType :basicLoading="commonLoading" class="basicAll">
      <div slot="All" style="height:inherit;overflow:hidden;display:flex" class="innerAll">
        <div class="m-main">
          <video id="videoElement" controls autoplay style="width:100%" class="videoElement"></video>
          <div class="m-shade">
            <span>此处可以添加覆盖物</span>
          </div>
        </div>
      </div>
    </basicPage>
  </div>
</template>

<script>
import videoModel from './videoModel'
import flvjs from 'flv.js'
export default {
  name: 'hardWare',
  components: { videoModel },
  data () {
    return {
      commonLoading: false,
      flvPlayer: {}
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
    display: flex;
  justify-content: center;
}
.basicAll {
  width: 1700px !important;
}
.m-main {
  width: 85%;
  position: relative;
}
.m-shade {
  opacity: 0;
  width: 100%;
  height: 30px;
  position: absolute;
  bottom: 4px;
  /* pointer-events */
}
.m-shade:hover {
  opacity: 0.5;
  background-color: #C0C0C0;
}
</style>
