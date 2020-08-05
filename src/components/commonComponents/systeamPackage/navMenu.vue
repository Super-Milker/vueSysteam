<template>
  <div>
    <!-- 导航栏 -->
    <nav class="navbar navbar-inverse navbar-fixed-top"  id="menuC" style="border:0">
      <div class="container-fluid">
        <div class="navbar-header">
          <button
            type="button"
            class="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#menu"
            aria-expanded="false"
          >
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="" @click="toindex">Systeam</a>
          <a class="navbar-brand logout" href="#" @click="logout">注销</a>
        </div>
        <div class="collapse navbar-collapse" id="menu">
          <!-- 编辑顶部菜单栏 -->
          <!-- <ul class="nav navbar-nav" v-if="littleMenuFlag === true">
            <li>
              <a @click="emitToParent('dialog1')">河道水情</a>
            </li>
            <li>
              <a @click="emitToParent('dialog2')">水库水情</a>
            </li>
            <li>
              <a href="#foot">墒情</a>
            </li>
            <li>
              <a href="#foot">其他情报</a>
            </li>
          </ul> -->
          <!-- <el-color-picker v-model="color" class="navbar-right" size="mini" show-alpha v-if="littleMenuFlag === false"></el-color-picker> -->
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data () {
    return {
      color: '',
      littleMenuFlag: false
    }
  },
  watch: {
    // 监听变色
    color: {
      handler (value) {
        $('#menuC').css('background-color', value)
        this.$store.commit('set_systeamStyle', value)
      },
      deep: true
    },
    // 监听窗口大小
    windowWeight: {
      handler (value) {
        if (value < 770) {
          this.littleMenuFlag = true
        } else {
          this.littleMenuFlag = false
        }
      },
      deep: true,
      immediate: true
    }
  },
  computed: {
    ...mapState({
      systeamStyle: state => state.systeam.systeamStyle,
      windowWeight: state => state.systeam.windowWeight
    })
  },
  methods: {
    toindex () {
      this.$router.push({name: 'HelloWorld'})
    },
    logout () {
      this.$router.push({name: 'Login'})
    }
  },
  mounted () {
    // if (this.$enumData.topImg.isImg) {
    //   $('#menuC').css('background-image', 'url(' + this.$enumData.topImg.img + ')')
    // }
    // $('#menuC').css('background-color', this.systeamStyle)
  }
}
</script>

<style scoped>
.navbar-fixed-bottom, .navbar-fixed-top{
  position:inherit
}
.logout{
  font-size: 14px;
  position: absolute;
  top:10px;
  left: 150px;
  /* margin-top:10px; */
}
</style>
