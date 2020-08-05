<template>
  <div>
    <el-table
      :data="Data"
      :border="innerBorder?innerBorder:false"
      :height="innerTableHeight?innerTableHeight - 32:null"
      :header-cell-style="{'background-color': 'LightGrey'}"
      style="width: 100%;overflow:auto"
      v-show="Data"
    >
      <slot></slot>
    </el-table>
    <el-pagination
      v-if="!(bottomPage === 'false')"
      style="width:100%;text-align:center"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page.sync="currentPage"
      :page-size="20"
      layout="prev, pager, next, jumper"
      :total="total"
    ></el-pagination>
  </div>
</template>

<script>
export default {
  name: 'commonTable',
  props: {
    tableData: {},
    innerTableHeight: {},
    innerBorder: {
      default: false
    },
    bottomPage: {},
    Url: {},
    query: {}
  },
  data () {
    return {
      Data: [],
      currentPage: 1,
      total: 0
    }
  },
  watch: {
    tableData (value) {
      this.Data = this.tableData
    },
    deep: true
  },
  mounted () {
    if (this.Url) {
      this.urlRequest()
    } else {
      this.Data = this.tableData
    }
  },
  methods: {
    urlRequest () {
      this.$request
        .Axios({ url: this.Url.url, data: this.query, tip: false })
        .then(response => {
          this.$emit('tableChange', {
            loading: false
          })
          if (response.data) {
            this.Data = response.data.data
            this.total = response.data.total
          } else {
            this.Data = []
          }
        })
    },
    handleSizeChange (val) {},
    handleCurrentChange (val) {
      this.query.page = val + ''
      this.urlRequest()
    }
  }
}
</script>

<style scoped>
.innerClass {
  margin: 10px 10px 10px 5px;
}
</style>
