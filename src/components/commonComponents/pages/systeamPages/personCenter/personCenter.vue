<template>
  <div style="height:inherit;overflow:hidden">
    <basicPage :basicType="'All'" cardType>
      <div slot="All" style="height:inherit;overflow:auto">
        <!-- 内容编辑区 -->
        <div class="person-pane">
          <el-row>
            <!-- <div class="person-pane-top"> -->
            <!-- 头像部分 -->
            <el-col :xs="24" :lg="4">
              <div class="person-avatar" @click="changeAvatar">
                <input
                  type="file"
                  v-show="false"
                  id="avatat-upload"
                  @change="selectFile"
                  accept="image/png, image/jpeg"
                >
                <el-avatar
                  fit="cover"
                  src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
                  :size="150"
                >
                  <img src="https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png">
                </el-avatar>
              </div>
            </el-col>
            <!-- 表单部分 -->
            <el-col :xs="24" :lg="10">
              <div class="person-form">
                <el-form :model="form" label-width="72px" style="width:100%">
                  <div style="display:flex;justify-content: space-around;">
                    <el-form-item label="昵称">
                      <el-input size="mini" v-model="form.name" maxlength="15"></el-input>
                    </el-form-item>
                    <el-form-item label="联系方式">
                      <el-input size="mini" v-model="form.phone" maxlength="15"></el-input>
                    </el-form-item>
                  </div>
                  <div style="display:flex;justify-content: space-around;">
                    <el-form-item label="邮箱">
                      <el-input size="mini" v-model="form.email"></el-input>
                    </el-form-item>
                    <el-form-item label="我的签名">
                      <el-input size="mini" v-model="form.signature" maxlength="15"></el-input>
                    </el-form-item>
                  </div>
                  <div style="display:flex;justify-content: space-around;">
                    <el-form-item label="备注">
                      <el-input size="mini" v-model="form.mark" maxlength="15"></el-input>
                    </el-form-item>
                    <el-form-item>
                      <el-input size="mini" style="visibility:hidden;"></el-input>
                    </el-form-item>
                  </div>
                </el-form>
              </div>
            </el-col>
            <!-- 额外部分 -->
            <el-col :xs="24" :lg="10">
              <common-echarts :options="options3" class="additional-charts"></common-echarts>
            </el-col>
            <!-- 底部卡片 -->
            <el-col :xs="24" :lg="12">
              <div class="person-functionCard">
                <div class="person-functionCard-normal">
                  <card class="chartsCard" :title="'分析中心'" :backgroundColor="'rgb(76, 175, 80)'" :routeTo="'hardware'" cardIcon="el-icon-c-scale-to-original"></card>
                  <div class="person-functionCard-txt">
                    <div>网络质量:目测优良</div>
                    <div>网络带宽:24M/S</div>
                    <div>每秒分发:200M</div>
                  </div>
                  <div class="person-functionCard-chart">
                    <common-echarts :options="options4" height="150px"></common-echarts>
                  </div>
                </div>
                <div class="person-functionCard-normal">
                  <card class="chartsCard" :title="'网络中心'" :backgroundColor="'#99CCFF'" :routeTo="'netWork'" cardIcon="el-icon-s-platform"></card>
                  <div class="person-functionCard-txt">
                    <div>网络质量:目测优良</div>
                    <div>网络带宽:24M/S</div>
                    <div>每秒分发:200M</div>
                  </div>
                  <div class="person-functionCard-chart">
                    <common-echarts :options="options4" height="150px"></common-echarts>
                  </div>
                </div>
                <div class="person-functionCard-normal">
                  <card class="chartsCard" :title="'视频中心'" :backgroundColor="'#330000'" :routeTo="'deploy'" cardIcon="el-icon-s-cooperation"></card>
                  <div class="person-functionCard-txt">
                    <div>网络质量:目测优良</div>
                    <div>网络带宽:24M/S</div>
                    <div>每秒分发:200M</div>
                  </div>
                  <div class="person-functionCard-chart">
                    <common-echarts :options="options4" height="150px"></common-echarts>
                  </div>
                </div>
              </div>
            </el-col>
            <el-col :xs="24" :lg="12">
              <div class="person-Console">
                <common-echarts :options="options5" height="450px"></common-echarts>
                <div></div>
              </div>
            </el-col>
          </el-row>
        </div>
      </div>
    </basicPage>
    <common-drawer :dialogControl="dialogVisibleFlag" :title="'新增'" @change="callbackChange"></common-drawer>
  </div>
</template>

<script>
import commonEcharts from '@/components/commonComponents/module/echarts/commonEcharts'
import card from '@/components/commonComponents/module/dashBoard/cardText'
export default {
  name: 'personCenter',
  components: { commonEcharts, card },
  data () {
    return {
      form: {
        name: '',
        phone: '',
        email: '',
        signature: '',
        mark: ''
      },
      options3: {},
      options4: {},
      options5: {},
      timer: {}
    }
  },
  watch: {
    form: {
      handler (value) {
        window.localStorage.setItem('personMessage', JSON.stringify(value))
      },
      deep: true
    }
  },
  mounted () {
    if (window.localStorage.getItem('personMessage')) {
      this.form = JSON.parse(window.localStorage.getItem('personMessage'))
    }
    this.chartsOfJob()
    this.chartsOfCard()
    this.chartsOfConsole()
  },
  methods: {
    // 触发文件上传
    changeAvatar () {
      $('#avatat-upload').click()
    },
    // 选择文件
    selectFile () {
      var files = $('#avatat-upload').prop('files')
    },
    // 处理进度图表
    chartsOfJob () {
      function randomData () {
        now = new Date(+now + oneDay)
        value = value + Math.random() * 21 - 10
        return {
          name: now.toString(),
          value: [
            [now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/'),
            Math.round(value)
          ]
        }
      }

      var data = []
      var now = +new Date(1997, 9, 3)
      var oneDay = 24 * 3600 * 1000
      var value = Math.random() * 1000
      for (var i = 0; i < 1000; i++) {
        data.push(randomData())
      }

      this.options3 = {
        title: {
          text: '趋势变化'
        },
        tooltip: {
          trigger: 'axis',
          formatter: function (params) {
            params = params[0]
            var date = new Date(params.name)
            return (
              date.getDate() +
              '/' +
              (date.getMonth() + 1) +
              '/' +
              date.getFullYear() +
              ' : ' +
              params.value[1]
            )
          },
          axisPointer: {
            animation: false
          }
        },
        xAxis: {
          type: 'time',
          splitLine: {
            show: false
          }
        },
        yAxis: {
          type: 'value',
          boundaryGap: [0, '100%'],
          splitLine: {
            show: false
          }
        },
        series: [
          {
            name: '模拟数据',
            type: 'line',
            showSymbol: false,
            hoverAnimation: false,
            data: data
          }
        ]
      }

      this.timer = setInterval(function () {
        for (var i = 0; i < 5; i++) {
          data.shift()
          data.push(randomData())
        }
        // this.options3.series = [
        //   {
        //     data: data
        //   }
        // ]
      }, 1000)
    },
    // 小列表图表
    chartsOfCard () {
      var data = []
      var value = Math.random() * 1000
      for (var i = 0; i < 10; i++) {
        data.push(Math.random() * 1000)
      }
      this.options4 = {
        xAxis: {
          type: 'category',
          boundaryGap: false
        },
        yAxis: {
          axisTick: {
            show: false
          },
          axisLabel: {
            show: false
          },
          axisLine: {
            show: false
          },
          splitLine: {
            show: false
          }
        },
        grid: {
          top: '20',
          bottom: '0',
          left: '0',
          right: '5'
        },
        series: [
          {
            data: data,
            type: 'line',
            areaStyle: {}
          }
        ]
      }
    },
    // 控制台图表
    chartsOfConsole () {
      this.options5 = {
        title: {
          // text: '组织关系'
        },
        tooltip: {},
        animationDurationUpdate: 1500,
        animationEasingUpdate: 'quinticInOut',
        series: [
          {
            type: 'graph',
            layout: 'none',
            symbolSize: 50,
            roam: true,
            label: {
              show: true
            },
            edgeSymbol: ['circle', 'arrow'],
            edgeSymbolSize: [4, 10],
            edgeLabel: {
              fontSize: 20
            },
            data: [{
              name: '策划部',
              x: 300,
              y: 300
            }, {
              name: '组织部',
              x: 800,
              y: 300
            }, {
              name: '后勤部',
              x: 550,
              y: 100
            }, {
              name: '财务部',
              x: 550,
              y: 500
            }],
            // links: [],
            links: [{
              source: 0,
              target: 1,
              symbolSize: [5, 20],
              label: {
                show: true
              },
              lineStyle: {
                width: 5,
                curveness: 0.2
              }
            }, {
              source: '组织部',
              target: '策划部',
              label: {
                show: true
              },
              lineStyle: {
                curveness: 0.2
              }
            }, {
              source: '策划部',
              target: '后勤部'
            }, {
              source: '组织部',
              target: '后勤部'
            }, {
              source: '组织部',
              target: '财务部'
            }, {
              source: '策划部',
              target: '财务部'
            }],
            lineStyle: {
              opacity: 0.9,
              width: 2,
              curveness: 0
            }
          }
        ]
      }
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
.person-pane {
  width: 100%;
  height: inherit;
  overflow-x: hidden;
}
.person-pane-top {
  width: 100%;
  display: flex;
}
.person-avatar {
  width: 100%;
  min-height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid rgb(235, 238, 245);
}
.person-avatar:hover {
  cursor: pointer;
}
.person-form {
  width: 100%;
  min-height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid rgb(235, 238, 245);
}
.additional-charts {
  min-height: 300px;
  border: 1px solid rgb(235, 238, 245);
}
.person-functionCard {
  width: 100%;
  height: 512px;
  border: 1px solid rgb(235, 238, 245);
}
.person-functionCard-normal {
  display: flex;
}
.chartsCard {
  width: 200px;
}
.person-functionCard-txt {
  width: 200px;
}
.person-functionCard-txt div {
  line-height: 40px;
  margin-top: 12px;
  margin-left: 20px;
  font-size: 15px;
  color: #969696;
}
.person-functionCard-chart {
  width: calc(100% - 400px);
  height: 150px;
}
.person-Console {
  width: 100%;
  height: 512px;
  display: flex;
  border: 1px solid rgb(235, 238, 245);
}
</style>
