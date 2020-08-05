<template>
  <div class="registeredPane">
      <el-form v-model="from" style="width:25%;text-align:center" class="registeredFrom">
          <el-form-item>
              <span>会员注册</span>
          </el-form-item>
          <el-form-item>
              <el-input placeholder="请输入用户名"></el-input>
          </el-form-item>
          <el-form-item>
              <el-input placeholder="请输入手机号"></el-input>
          </el-form-item>
          <el-form-item label-width="0">
              <slider></slider>
          </el-form-item>
          <el-form-item>
              <el-input placeholder="请输入密码" show-password></el-input>
          </el-form-item>
          <el-form-item>
              <el-input placeholder="请再次输入密码" show-password></el-input>
          </el-form-item>
          <el-form-item style="float:left;">
              <el-checkbox>我已经阅读并同意协议</el-checkbox>
          </el-form-item>
          <el-form-item>
              <el-button type="danger" style="width:100%">注册</el-button>
          </el-form-item>
          <el-form-item style="float:right">
              <span>已有账号，</span><span style=""><a href="">登录</a></span>
          </el-form-item>
      </el-form>
  </div>
</template>

<script>
import slider from '@/components/commonComponents/module/slider/slider'
export default {
  name: 'registered',
  components: {slider},
  data () {
    return {
      from: {}
    }
  },
  mounted () {
  },
  methods: {
  }
}
</script>

<style scoped>
.registeredPane{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center
}
.registeredFrom{
    background-color: rgb(255, 255, 255);
    box-shadow      : 0px 1px 5px 0px rgba(92, 92, 92, 0.28);
    border-radius   : 4px;
    margin          : 10px;
    padding         : 16px;
}
</style>
