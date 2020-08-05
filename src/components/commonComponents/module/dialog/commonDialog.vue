<template>
  <div>
    <el-dialog
      :title="title"
      :visible.sync="dialogVisible"
      :width="width"
      :before-close="handleClose"
    >
      <div class="title-card"></div>
      <router-view style="height:500px;display: flex;justify-content: center;align-items: center;"></router-view>
    </el-dialog>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'commonDialog',
  props: {
    dialogControl: {},
    width: {
      default: '800px'
    },
    title: {
      default: '提示'
    }
  },
  data () {
    return {
      dialogVisible: false
    }
  },
  computed: {
    ...mapState({
      routeFrom: state => state.routeMessage.routeFrom,
      routeTo: state => state.routeMessage.routeTo
    })
  },
  watch: {
    dialogControl: {
      handler (value) {
        if (value === true) {
          this.dialogVisible = value
        }
      },
      deep: true
    }
  },
  mounted () {},
  methods: {
    handleClose () {
      this.$emit('change')
      this.dialogVisible = false
      this.$router.push({ name: this.routeFrom.name })
    }
  }
}
</script>

<style scoped>
.title-card {
  position: absolute;
  width: 500px;
  height: 50px;
  background-color: red;
  top: -36px;
  right: 0px;
}
</style>
