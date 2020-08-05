<template>
  <div class="content-hih-div">
    <el-container style="height:100%" direction="vertical">
      <el-header style="padding:0">
        <navMenu></navMenu>
      </el-header>
      <el-container style="margin-top:-10px">
        <el-aside v-if="!littleMenuFlag" width="200px;" style="height:inherit;overflow-x: hidden;">
          <aside-menu style="height:inherit" :menu="menuData"></aside-menu>
        </el-aside>
        <el-main style="height:inherit;padding:0;overflow:auto" class="elmain">
          <!-- <winfoMap :width="elmainWeight" :height="elmainHeight"></winfoMap> -->
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import navMenu from '@/components/commonComponents/systeamPackage/navMenu'
import asideMenu from '@/components/commonComponents/systeamPackage/asideMenu'
import winfoMap from '@/components/commonComponents/systeamPackage/map'
import systeamUrl from '../../static/js/config.js'
import { mapState } from 'vuex'
export default {
  components: { navMenu, asideMenu, winfoMap },
  data () {
    return {
      littleMenuFlag: false,
      menuData: {}
    }
  },
  computed: {
    ...mapState({
      systeamStyle: state => state.systeam.systeamStyle,
      windowWeight: state => state.systeam.windowWeight,
      elmainWeight: state => state.systeam.elmainWeight,
      elmainHeight: state => state.systeam.elmainHeight,
      menu: state => state.systeam.menu
    }),
    getMenu () {
      return this.menu
    }
  },
  watch: {
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
    },
    getMenu (newData, oldData) {
      this.menuData = newData
    }
  },
  // created () {
  //   if (window.name === '') {
  //     console.log('首次被加载')
  //     window.name = 'isReload' // 在首次进入页面时我们可以给window.name设置一个固定值
  //   } else if (window.name === 'isReload') {
  //     console.log('再次被加载')
  //     let BreadData = []
  //     BreadData = JSON.parse(window.sessionStorage.getItem('breadList'))
  //     if (BreadData.length > 1) {
  //       let temp = []
  //       temp.push(BreadData[0])
  //       window.sessionStorage.setItem('breadList', JSON.stringify(temp))
  //       console.log(JSON.parse(window.sessionStorage.getItem('breadList')))
  //     }
  //   }
  // },
  mounted () {
    // 配置初始菜单
    this.menuData = this.$enumData.Menu.fMenu
    // 进行页面动态长宽检测
    this.$store.commit(
      'set_windowWeight',
      document.documentElement.clientWidth
    )
    this.$store.commit('set_elmainWeight', $('.elmain').width())
    this.$store.commit('set_elmainHeight', $('.elmain').height())
    window.onresize = () => {
      this.$store.commit(
        'set_windowWeight',
        document.documentElement.clientWidth
      )
      this.$store.commit('set_elmainWeight', $('.elmain').width())
      this.$store.commit('set_elmainHeight', $('.elmain').height())
    }
  },
  created () {
    this.$store.commit('set_systeamStyle', this.$enumData.topColor.color)
  }
}
</script>

<style scoped>
</style>
