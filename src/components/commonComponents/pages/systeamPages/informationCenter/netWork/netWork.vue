<template>
  <div style="height:inherit;overflow:hidden">
    <basicPage :basicType="'All'" cardType :basicLoading="commonLoading">
      <div slot="All" style="height:inherit;overflow:auto;display:flex">
        <el-row style="width:99%;height:inherit;">
          <el-col :xs="24" :lg="8">
            <div class="chartsCard">
              <common-echarts :options="options4" class="network-charts"></common-echarts>
            </div>
          </el-col>
          <el-col :xs="24" :lg="16">
            <div class="network-card-father">
              <div class="chartsCard network-card">
                <common-table :tableData="tableData0.data" bottomPage="false" ref="table" style="height:100%;overflow:auto">
                  <el-table-column
                    v-for="(item,index) in tableData0.column"
                    :key="index"
                    :prop="item.prop"
                    :label="item.label"
                  ></el-table-column>
                </common-table>
              </div>
              <div class="chartsCard network-card">
                <common-table :tableData="tableData1.data" bottomPage="false" ref="table" style="height:100%;overflow:auto">
                  <el-table-column
                    v-for="(item,index) in tableData1.column"
                    :key="index"
                    :prop="item.prop"
                    :label="item.label"
                  ></el-table-column>
                </common-table>
              </div>
            </div>
          </el-col>
        </el-row>
      </div>
    </basicPage>
  </div>
</template>

<script>
import card from '@/components/commonComponents/module/dashBoard/cardText'
import commonEcharts from '@/components/commonComponents/module/echarts/commonEcharts'
export default {
  name: 'netWork',
  components: { commonEcharts, card },
  data () {
    return {
      netWorkListUrl: {
        url: this.$apiconfig.SysteamApi.informationCenter.netWork.tableDataList,
        type: 'post'
      },
      options4: {},
      timer: {},
      tableData0: [],
      tableData1: []
    }
  },
  watch: {},
  mounted () {
    this.init()
    $('.network-charts').height($('.All').height() * 0.9)
    $('.network-card-father').height($('.All').height() * 0.9)
  },
  methods: {
    init () {
      this.initList()
    },
    initList () {
      this.commonLoading = false
      this.chartsOfCard()
      this.getTableList()
    },
    chartsOfCard () {
      var data = []
      var data2 = []

      function randomData () {
        var now = new Date()
        var value = Math.random()
        return [now, value]
      }
      for (var i = 0; i < 20; i++) {
        data.push(randomData())
      }
      for (var j = 0; j < 20; j++) {
        data2.push(randomData())
      }

      this.options4 = {
        title: {
          text: ' 网络状态示意图 ',
          subtext: '秒状态展示',
          left: 'center',
          align: 'right'
        },
        grid: {
          bottom: 80
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            animation: false,
            label: {
              backgroundColor: '#505765'
            }
          }
        },
        xAxis: [
          {
            type: 'time',
            boundaryGap: false,
            axisLine: { onZero: false }
          }
        ],
        yAxis: [
          {
            name: '流量',
            type: 'value'
          },
          {
            name: '速度',
            max: 5,
            type: 'value'
          }
        ],
        series: [
          {
            name: '流量',
            type: 'line',
            animation: false,
            lineStyle: {
              width: 1
            },
            data: data
          },
          {
            name: '速度',
            type: 'line',
            yAxisIndex: 1,
            animation: false,
            lineStyle: {
              width: 1
            },
            data: data2
          }
        ]
      }

      this.timer = setInterval(function () {
        data.shift()
        data.push(randomData())
        data2.shift()
        data2.push(randomData())
      }, 2000)
    },
    getTableList () {
      this.$request
        .Axios({
          url: this.netWorkListUrl.url,
          method: this.netWorkListUrl.type,
          tip: false
        })
        .then(response => {
          response.data.forEach((element, index) => {
            // if (index === 0) { this.tableData0 = element; console.log(this.tableData0) }
            this[`tableData${index}`] = element
            // var str = 'this.1' + '= element'
            // eval(str)
          })
        })
        .catch()
    },
    callbackChange (data) {
      this.handlerPageCallBack(this, data)
    }
  },
  destroyed () {
    clearInterval(this.timer)
  }
}
</script>

<style scoped src="@/assets/css/pageCommon.css"></style>
<style scoped>
.network-charts {
  width: 100%;
}
.network-card {
  height: 50%;
}
</style>
