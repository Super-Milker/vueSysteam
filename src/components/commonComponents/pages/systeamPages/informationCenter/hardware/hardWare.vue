<template>
  <div>
    <basicPage :basicType="'All'" cardType :basicLoading="commonLoading">
      <div slot="All" style="height:inherit;overflow:auto;display:flex">
        <div style="width:100%">
          <el-row>
            <el-col :xs="24" :lg="24">
              <div class="inner-pageTitle">
                <img :src="iconImg" width="100px" height="100px">
                <div class="inner-pageTitle-buttonPane">
                  <span>进行分析</span>
                  <el-button size="mini" type="text" @click="checkJson">start</el-button>
                </div>
              </div>
            </el-col>
            <el-col :xs="24" :lg="24">
              <div class="inner-pageDownPane">
                <el-row>
                  <el-col :xs="24" :lg="12">
                    <common-table
                      :tableData="tableData"
                      bottomPage="false"
                      ref="table"
                      style="height:500px;overflow:auto"
                    >
                      <el-table-column prop="url" label="地址信息"></el-table-column>
                      <el-table-column prop="time" label="响应时间" width="80px"></el-table-column>
                    </common-table>
                  </el-col>
                  <el-col :xs="24" :lg="12">
                    <common-table
                      :tableData="documentData"
                      bottomPage="false"
                      ref="table"
                      style="height:500px;overflow:auto"
                    >
                      <el-table-column prop="name" label="渲染页面"></el-table-column>
                      <el-table-column prop="time" label="渲染时间" width="80px"></el-table-column>
                    </common-table>
                  </el-col>
                </el-row>
              </div>
            </el-col>
          </el-row>
        </div>
      </div>
    </basicPage>
  </div>
</template>

<script>
import iconImg from '@/assets/img/hardwareImg.jpg'
export default {
  name: 'hardWare',
  data () {
    return {
      commonLoading: false,
      iconImg: iconImg,
      tableData: [],
      documentData: []
    }
  },
  mounted () {},
  methods: {
    checkJson () {
      this.commonLoading = true
      this.$request
        .Axios({
          url: '/api/json/jsonData',
          method: 'get',
          tip: false
        })
        .then(response => {
          setTimeout(() => {
            this.commonLoading = false
          }, 2000)
          this.documentData = []
          let arr = []
          let delwithArr = new Map()
          response.data.requestData.forEach((element, index) => {
            if (
              index < response.data.requestData.length - 1 &&
              JSON.parse(element).resType !== 3
            ) {
              arr.push(JSON.parse(element))
            }
          })
          arr.forEach(element1 => {
            arr.forEach(element2 => {
              if (
                element1.url === element2.url &&
                element1.resType !== element2.resType
              ) {
                delwithArr.set(element1.url, {
                  url: element1.url,
                  time: Math.abs(element1.Time - element2.Time)
                })
              }
            })
          })
          arr = []
          for (let value of delwithArr.values()) {
            arr.push(value)
          }
          this.tableData = arr
          response.data.documentData.forEach((element, index) => {
            if (index < response.data.documentData.length - 1) { this.documentData.push(JSON.parse(element)) }
          })
        })
    }
  }
}
</script>

<style scoped>
.inner-pageTitle {
  height: 300px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.inner-pageTitle-buttonPane {
  color: #606266;
  font-size: 16px;
  font-weight: 600;
  padding: 10px;
}
.inner-pageDownPane {
  border-top: 1px solid rgb(235, 238, 245);
  height: 500px;
  width: 100%;
}
</style>
