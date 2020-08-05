<template>
  <div>
    <el-menu
      :collapse="littleMenuFlag"
      style="height:inherit;overflow-x:hidden"
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      @select="handleSelect"
      :background-color="isChild?'':systeamStyle"
      :text-color="isChild?'':'#fff'"
      :active-text-color="isChild?'':'#ffd04b'"
    >
      <el-submenu
        :index="item.index"
        v-for="(item,index) in menu.data"
        :key="index"
        v-if="menu.type === 'master'"
      >
        <template slot="title">
          <i :class="item.icon"></i>
          <span>{{item.name}}</span>
        </template>
        <el-menu-item
          :index="item.index"
          v-for="(item,index) in item.children"
          :key="index"
        >{{item.name}}</el-menu-item>
      </el-submenu>
      <el-menu-item-group
        v-for="(item,index) in menu.data"
        :key="index"
        v-if="menu.type === 'child'"
      >
        <template slot="title">{{item.name}}</template>
        <el-menu-item
          :index="item.index"
          v-for="(item,index) in item.children"
          :key="index"
        >{{item.name}}</el-menu-item>
      </el-menu-item-group>
    </el-menu>
  </div>
</template>

<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>

<script>
import { mapState } from 'vuex'
export default {
  props: ['menu', 'isChild'],
  data () {
    return {
      isCollapse: true,
      littleMenuFlag: false
    }
  },
  computed: {
    ...mapState({
      systeamStyle: state => state.systeam.systeamStyle
    })
  },
  watch: {},
  methods: {
    handleOpen (key, keyPath) {
      // this.littleMenuFlag = true
      // this.$store.commit('set_windowWeight', document.documentElement.clientWidth)
      // this.$store.commit('set_elmainWeight', $('.elmain').width())
      // this.$store.commit('set_elmainHeight', $('.elmain').height())
      // // console.log('open')
      // this.$router.push({name: 'test'})
      // this.$router.push({name: 'map'})
    },
    handleClose (key, keyPath) {
      // this.littleMenuFlag = true
      // this.$store.commit('set_windowWeight', document.documentElement.clientWidth)
      // this.$store.commit('set_elmainWeight', $('.elmain').width())
      // this.$store.commit('set_elmainHeight', $('.elmain').height())
      // console.log('close')
      // this.$router.push({name: 'HelloWorld'})
      // this.$router.push({name: 'HelloWorld'})
    },
    handleSelect (index, indexPath) {
      this.littleMenuFlag = false
      this.$store.commit(
        'set_windowWeight',
        document.documentElement.clientWidth
      )
      this.$store.commit('set_elmainWeight', $('.elmain').width())
      this.$store.commit('set_elmainHeight', $('.elmain').height())
      // console.log(index)
      this.$router.push({ name: index })
    }
  }
}
</script>
