<template>
    <el-button
        class="innerClass"
        :class="buttonClass"
        :type="type"
        :size="size"
        :loading="loading"
        :disabled="disabled"
    >{{buttonname}}</el-button>
</template>

<script>
export default {
  name: 'commonButton',
  props: {
    type: {
      default: 'primary'
    },
    size: {},
    pageName: {},
    buttonNum: {},
    iconName: {},
    buttonControl: {},
    loading: {},
    disabled: {},
    buttonClass: {},
    buttonname: {}
  },
  data () {
    return {}
  },
  watch: {},
  methods: {},
  mounted () {}
}
</script>

<style scoped>
</style>
