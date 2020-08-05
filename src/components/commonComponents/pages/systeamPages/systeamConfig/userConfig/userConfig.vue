<template>
  <div style="height:inherit;overflow:hidden">
    <basicPage :basicType="'TopOrDown'" cardType :basicLoading="commonLoading">
      <div slot="TDTop">
        <el-form :model="queryData" label-width="90px" class="formSearchGroup">
          <div class="formSearchGroup-searchThing">
            <el-form-item label="用户信息">
              <el-input size="small"></el-input>
            </el-form-item>
          </div>
          <div class="formSearchGroup-searchButton">
            <el-form-item>
              <common-button :buttonname="'查询'" @click.native="initList()" :size="'small'"></common-button>
            </el-form-item>
            <el-form-item label-width="10px">
              <common-button :buttonname="'添加'" @click.native="add()" :size="'small'"></common-button>
            </el-form-item>
          </div>
        </el-form>
        <div></div>
      </div>
      <div slot="TDDown">
        <common-table
          :innerTableHeight="tableHeight"
          :Url="userConfigListUrl"
          :query="queryData"
          @tableChange="tableChange"
          ref="table"
        >
          <el-table-column type="selection" width="55"></el-table-column>
          <el-table-column prop="name" label="用户姓名" align="center" show-overflow-tooltip></el-table-column>
          <el-table-column prop="phone" label="手机号" align="center" show-overflow-tooltip></el-table-column>
          <el-table-column prop="address" label="地址" align="center" show-overflow-tooltip></el-table-column>
          <el-table-column
            prop="address"
            label="操作"
            align="center"
            width="300px"
            show-overflow-tooltip
          >
            <template slot-scope="scope">
              <el-button type="primary" size="mini" @click="edit(scope.row)">修改</el-button>
              <el-button type="danger" size="mini" @click="del(scope.row)">删除</el-button>
            </template>
          </el-table-column>
        </common-table>
      </div>
    </basicPage>
    <common-dialog ref="commonDialog" :dialogControl="dialogVisibleFlag"></common-dialog>
  </div>
</template>

<script>
export default {
  name: 'userConfig',
  data () {
    return {
      userConfigListUrl: {
        url: this.$apiconfig.SysteamApi.userConfig.List,
        type: 'post'
      },
      userConfigAdd: {
        url: this.$apiconfig.SysteamApi.userConfig.Add,
        type: 'post'
      },
      userConfigDelUrl: {
        url: this.$apiconfig.SysteamApi.userConfig.Delete,
        type: 'post'
      },
      queryData: {
        userid: window.sessionStorage.getItem('userid')
      }
    }
  },
  watch: {
    $route (to, from) {
      if (to.name === 'userConfig') {
        this.$refs.commonDialog.dialogVisible = false
      }
    }
  },
  mounted () {
    this.tableHeight = $('.TDDown').height()
    window.onresize = () => {
      this.tableHeight = $('.TDDown').height()
    }
    this.init()
  },
  methods: {
    init () {
      this.initList()
    },
    initList () {
      this.$refs.table.urlRequest()
    },
    edit (data) {
      this.handlerPageTo({
        vm: this,
        dialogFlag: false,
        data: {
          type: 'edit',
          url: this.$apiconfig.SysteamApi.userConfig.Edit,
          urlType: 'post',
          userID: data.userID,
          data: data
        },
        routeTo: 'userConfigEdit'
      })
    },
    add () {
      // this.$refs.commonDialog.dialogVisible = true
      this.handlerPageTo({
        vm: this,
        dialogFlag: true,
        data: {
          type: 'add',
          url: this.$apiconfig.SysteamApi.userConfig.Add,
          urlType: 'post'
        },
        routeTo: 'userConfigAdd'
      })
    },
    del (data) {
      this.$common.delmessageTip({
        url: this.userConfigDelUrl,
        data: data,
        vm: this
      })
    },
    callbackChange (data) {
      this.handlerPageCallBack(this, data)
    }
  }
}
</script>

<style scoped src="@/assets/css/pageCommon.css"></style>
<style scoped>
.formSearchGroup {
  min-width: 500px;
}
.formSearchGroup-searchThing {
  width: calc(100% - 200px);
  height: 100px;
  display: flex;
  justify-content: flex-start;
}
.formSearchGroup-searchButton {
  width: 200px;
  height: 100px;
  display: flex;
  justify-content: flex-end;
}
</style>
