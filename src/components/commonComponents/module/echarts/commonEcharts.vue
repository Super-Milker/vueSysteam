<template>
  <div ref="commonEchart" :style="{width: width, height: height}"></div>
</template>
<script>
export default {
  name: 'commonEcharts',
  props: {
    options: {},
    width: {
      default: '100%'
    },
    height: {
      default: '300px'
    }
  },

  computed: {},

  watch: {
    options: {
      handler (value) {
        this.draw()
      },
      deep: true
    }
  },

  mounted () {
    window.addEventListener('resize', () => {
      this.myChart.resize()
    })
  },

  data () {
    return {
      myChart: {}
    }
  },

  methods: {
    draw () {
      var echarts = require('echarts')
      this.myChart = echarts.init(this.$refs.commonEchart)
      this.myChart.setOption(this.options, true)
    }
  }
}
</script>

<style scoped>
</style>
