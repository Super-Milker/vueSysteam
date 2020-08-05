<template>
  <div
    style="height:98%"
    v-loading="basicLoading"
    :class="(cardType === '' && typeof(cardType) != 'undifined')?'paneCard':{}"
  >
    <slot name="Breadcrumb">
      <el-breadcrumb
        separator="/"
        style="padding:5px;margin-bottom:10px;border-bottom:1px solid #EBEEF5"
      >
        <el-breadcrumb-item :to="{ path: '/HelloWorld/dashBaord' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item
          v-for="(item,index) in BreadData"
          :key="index"
          :to="{ name: item.path }"
        >{{item.name}}</el-breadcrumb-item>
      </el-breadcrumb>
    </slot>
    <!-- <slot></slot> -->
    <!-- 整体结构 -->
    <div class="All" v-if="basicType === 'All'">
      <slot name="All" style="height:inherit"></slot>
    </div>
    <!-- 上下结构 -->
    <div class="TDTop" v-if="basicType === 'TopOrDown'">
      <slot name="TDTop"></slot>
    </div>
    <div class="TDDown" v-if="basicType === 'TopOrDown'">
      <slot name="TDDown"></slot>
    </div>
    <!-- 左右结构 -->
    <div class="LRLeft" v-if="basicType === 'LeftOrRight'">
      <slot name="LRLeft"></slot>
    </div>
    <div class="LRRight" v-if="basicType === 'LeftOrRight'">
      <slot name="LRRight"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'basicPageLayout',
  props: {
    basicType: {},
    basicLoading: {},
    cardType: {
      type: String
    }
  },
  data () {
    return {
      BreadData: []
    }
  },
  watch: {
    $route: {
      deep: true,
      immediate: true,
      handler (newVal) {
        this.BreadData = JSON.parse(window.sessionStorage.getItem('breadList'))
        if (newVal.meta.breadNum === 1) {
          this.BreadData = [{ path: newVal.name, name: newVal.meta.name }]
          window.sessionStorage.setItem(
            'breadList',
            JSON.stringify(this.BreadData)
          )
        } else if (this.BreadData.length >= newVal.meta.breadNum - 1) {
          let stopStep =
            this.BreadData.length - 1 > 0 ? this.BreadData.length - 1 : 1
          this.BreadData.splice(newVal.meta.breadNum - 1, stopStep, {
            path: newVal.name,
            name: newVal.meta.name
          })
          window.sessionStorage.setItem(
            'breadList',
            JSON.stringify(this.BreadData)
          )
        }
      }
    }
  },
  mounted () {
  },
  methods: {}
}
</script>

<style scoped>
.paneCard {
  box-shadow: 0px 1px 5px 0px rgba(92, 92, 92, 0.28);
  border-radius: 4px;
  margin: 10px;
  padding: 16px;
  min-width:600px
}
.TDTop {
  width: 100%;
  height: 60px;
}
.TDDown {
  width: 100%;
  height: calc(99% - 74px);
  /* background-color: green; */
}
.All {
  width: 100%;
  height: calc(100% - 17px);
}
</style>
