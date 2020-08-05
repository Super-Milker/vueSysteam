<template>
  <div style="height:inherit;overflow:hidden">
    <basicPage :basicType="'TopOrDown'" cardType>
      <div slot="TDTop">
          <el-form label-width="70px" style="display:flex">
            <el-form-item label="用户名:">
              <el-input size="mini"></el-input>
            </el-form-item>
            <el-form-item>
              <common-button :size="'mini'" style="margin:0 0 0 -30px" :buttonname="'搜索'"></common-button>
              <common-button
              :buttonname="'新增'"
              :size="'mini'"
              @click.native="add()"
            ></common-button>
            <common-button
              :type="'danger'"
              :size="'mini'"
              :buttonname="'批量删除'"
              @click.native="add()"
            ></common-button>
            </el-form-item>
          </el-form>
      </div>
      <div slot="TDDown">
        <common-table :tableData="tableData" :innerTableHeight="tableHeight">
          <el-table-column
            prop="address"
            label="操作"
            align="center"
            width="300px"
            show-overflow-tooltip
          >
            <template slot-scope="scope">
              <el-button type="primary" size="mini" @click="edit()">修改</el-button>
              <el-button type="danger" size="mini" >删除</el-button>
            </template>
          </el-table-column>
        </common-table>
      </div>
    </basicPage>
    <common-dialog :dialogControl="dialogVisibleFlag" :width="'50%'" :title="'新增'" @change="callbackChange"></common-dialog>
  </div>
</template>

<script>
export default {
  name: 'userConfig',
  data () {
    return {
      tableData: [
        {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }
      ]
    }
  },
  watch: {},
  mounted () {
    this.tableHeight = $('.TDDown').height()
    window.onresize = () => {
      this.tableHeight = $('.TDDown').height()
    }
  },
  methods: {
    edit () {
      this.$router.push({name: 'userConfigEdit'})
      window.sessionStorage.setItem('editData', JSON.stringify({type: 'edit'}))
    },
    add () {
      this.dialogVisibleFlag = true
      window.sessionStorage.setItem('editData', JSON.stringify({type: 'add'}))
      this.$router.push({ name: 'userConfigAdd' })
    },
    callbackChange () {
      this.dialogVisibleFlag = false
    }
  }
}
</script>

<style scoped src="@/assets/css/pageCommon.css"></style>
<style scoped>
</style>
