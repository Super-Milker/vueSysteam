<template>
  <div style="padding:24px">
    <el-row :gutter="20">
      <div class="cardTitle">常用信息</div>
      <el-col :xs="12" :lg="5">
        <card class="chartsCard" :title="'网络请求'" :backgroundColor='"rgb(255, 202, 40)"'></card>
      </el-col>
      <el-col :xs="12" :lg="5">
        <card class="chartsCard" :title="'NS'" :backgroundColor='"rgb(33, 150, 243)"'></card>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <div class="cardTitle">图表信息</div>
      <el-col :xs="24" :lg="5">
        <card class="chartsCard" :title="'异常'" :backgroundColor='"rgb(233, 30, 99)"'></card>
        <card class="chartsCard" :title="'报警'" :backgroundColor='"rgb(103, 58, 183)"'></card>
      </el-col>
      <el-col :xs="24" :lg="19">
        <common-echarts class="chartsCard" :options="options1"></common-echarts>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :xs="24" :lg="5">
        <card class="chartsCard" :title="'握手'" :backgroundColor='"rgb(76, 175, 80)"'></card>
        <card class="chartsCard" :title="'PV'" :backgroundColor='"rgb(103, 58, 183)"'></card>
      </el-col>
      <el-col :xs="24" :lg="19">
        <common-echarts class="chartsCard" :options="options2"></common-echarts>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :xs="24" :lg="5">
        <card class="chartsCard" :title="'UV'" :backgroundColor='"rgb(76, 175, 80)"'></card>
        <card class="chartsCard" :title="'资源'" :backgroundColor='"rgb(233, 30, 99)"'></card>
      </el-col>
      <el-col :xs="24" :lg="19">
        <common-echarts class="chartsCard" :options="options3"></common-echarts>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import commonEcharts from '@/components/commonComponents/module/echarts/commonEcharts'
import card from '@/components/commonComponents/module/dashBoard/cardText'
export default {
  name: 'dashBaordIndex',
  props: {},
  components: { commonEcharts, card },
  computed: {},

  mounted () {
    this.chartsInit()
  },

  data () {
    return {
      options1: {},
      options2: {},
      options3: {}
    }
  },

  methods: {
    chartsInit () {
      this.options1 = {
        title: {
          text: ''
        },
        tooltip: {},
        xAxis: {
          data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
        },
        yAxis: {},
        series: [
          {
            name: '销量',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20]
          }
        ]
      }
      this.options2 = {
        title: {
          text: '',
          subtext: '',
          left: 'center'
        },
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        legend: {
          left: 'center',
          top: 'bottom',
          data: ['rose1', 'rose2', 'rose3', 'rose4', 'rose5', 'rose6', 'rose7', 'rose8']
        },
        toolbox: {
          show: true,
          feature: {
            mark: {show: true},
            dataView: {show: true, readOnly: false},
            magicType: {
              show: true,
              type: ['pie', 'funnel']
            },
            restore: {show: true},
            saveAsImage: {show: true}
          }
        },
        series: [
          {
            name: '半径模式',
            type: 'pie',
            radius: [20, 110],
            center: ['25%', '50%'],
            roseType: 'radius',
            label: {
              show: false
            },
            emphasis: {
              label: {
                show: true
              }
            },
            data: [
              {value: 10, name: 'rose1'},
              {value: 5, name: 'rose2'},
              {value: 15, name: 'rose3'},
              {value: 25, name: 'rose4'},
              {value: 20, name: 'rose5'},
              {value: 35, name: 'rose6'},
              {value: 30, name: 'rose7'},
              {value: 40, name: 'rose8'}
            ]
          },
          {
            name: '面积模式',
            type: 'pie',
            radius: [30, 110],
            center: ['75%', '50%'],
            roseType: 'area',
            data: [
              {value: 10, name: 'rose1'},
              {value: 5, name: 'rose2'},
              {value: 15, name: 'rose3'},
              {value: 25, name: 'rose4'},
              {value: 20, name: 'rose5'},
              {value: 35, name: 'rose6'},
              {value: 30, name: 'rose7'},
              {value: 40, name: 'rose8'}
            ]
          }
        ]
      }
      this.options3 = {
        tooltip: {
          formatter: '{a} <br/>{b} : {c}%'
        },
        toolbox: {
          feature: {
            restore: {},
            saveAsImage: {}
          }
        },
        series: [
          {
            name: '业务指标',
            type: 'gauge',
            detail: {formatter: '{value}%'},
            data: [{value: 50, name: '完成率'}]
          }
        ]
      }
    }
  }
}
</script>

<style scoped>

</style>
