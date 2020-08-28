<template>
  <div class="login-div">
    <div class="login-card">
      <el-form class="login-form" label-width="70px" :model="form">
        <el-form-item>
          <el-input style="width:90%" placeholder="昵称" v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input style="width:90%" placeholder="密码" v-model="form.password" type="password"></el-input>
        </el-form-item>
        <el-form-item label-width="0" class="login-button">
          <el-button type="primary" @click="to('ruleForm')" class="button">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      form: {
        name: '',
        password: ''
      }
    }
  },
  mounted () {
  },
  methods: {
    to () {
      this.$request
        .Axios({
          url: '/api/login',
          data: this.form
        })
        .then(res => {
          this.$router.push({ name: 'HelloWorld' })
        })
    }
  }
}
</script>

<style scoped>
.login-div {
  display: flex;
  justify-content: center;
  align-items: center;
}
.login-card {
  width: 500px;
  height: 300px;
  border: 1px solid #c0c0c0;
  border-radius: 40px;
  opacity: 0.6;
  display: flex;
  justify-content: center;
  align-items: center;
}
.login-form {
  width: 100%;
  margin-top: 10%;
  color: white;
}
.login-button {
  display: flex;
  justify-content: center;
}
.button {
  background-clip: red;
}
</style>
