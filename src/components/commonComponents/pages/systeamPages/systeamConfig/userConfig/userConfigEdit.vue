<template>
  <div style="height:inherit;overflow:hidden">
    <basicPage :basicType="'All'" :cardType="routeParams.type === 'edit'?'':'undifiend'">
      <div slot="Breadcrumb" v-if="routeParams.type != 'edit'"></div>
      <div slot="All" style="height:inherit;overflow:auto">
        <el-form
          ref="form"
          :model="form"
          :rules="rules"
          label-width="130px"
          style="width:600px;margin-left:10px;"
          :label-position="'left'"
        >
          <el-form-item label="用户名称">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="手机号" prop="phone" :required="true">
            <el-input v-model.number="form.phone"></el-input>
          </el-form-item>
          <el-form-item label="地址" prop="address">
            <el-input v-model="form.address"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit">{{routeParams.type === 'edit'?'修改':'添加'}}</el-button>
            <el-button @click="toBack()">取消</el-button>
          </el-form-item>
        </el-form>
      </div>
    </basicPage>
  </div>
</template>

<script>
import validate from '@/components/commonComponents/module/global/formCheck'
export default {
  name: 'userConfigEdit',
  data () {
    return {
      form: {
        name: '',
        phone: null,
        address: '',
        userID: ''
      },
      rules: {
        name: [{ required: true, message: '请输入名称', trigger: 'blur' }],
        phone: [{ validator: validate.checkPhone, trigger: 'blur' }],
        address: [{ required: true, message: '请输入地址', trigger: 'blur' }]
      },
      initEditUrl: {
        url: this.$apiconfig.SysteamApi.userConfig.InitEdit,
        type: 'post'
      }
    }
  },
  watch: {},
  created () {
    this.routeParams = JSON.parse(window.sessionStorage.getItem('editData'))
    this.handlerEditPageUrl(this)
  },
  mounted () {
    this.init()
  },
  methods: {
    init () {
      if (this.routeParams.type === 'edit') {
        this.initEditHandler({
          vm: this,
          url: this.initEditUrl,
          data: {
            data: this.routeParams.data,
            userID: this.routeParams.userID
          }
        })
      }
    },
    onSubmit () {
      this.$refs['form'].validate(valid => {
        if (valid) {
          this.$request
            .Axios({
              url: this.editUrl.url,
              data: this.form
            })
            .then(response => {
              this.$router.push({
                name: 'userConfig'
              })
              this.$emit('change', {
                type: JSON.parse(window.sessionStorage.getItem('editData')).type
              })
            })
        } else {
        }
      })
    },
    toBack () {
      this.dialogVisible = false
      this.$router.push({ name: 'userConfig' })
    }
  }
}
</script>

<style scoped src="@/assets/css/pageCommon.css"></style>
<style scoped>
</style>
