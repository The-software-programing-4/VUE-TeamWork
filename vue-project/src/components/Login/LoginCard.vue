<template>
  <div id="loginBox">
    <h1>登录</h1>
    <div class="inputBox">
      <div class="inputText">
        <span class="iconfont icon-wode"></span>
        <input type="text" placeholder="手机号/邮箱号" v-model="form.username"/>
      </div>
      <div class="inputText">
        <span class="iconfont icon-mima"></span>
        <input type="password" placeholder="密码" v-model="form.password"/>
      </div>
      <input v-on:click="login" class="button" type="button" value="登录" />
      <div id="sign-up">
        还没有创建账号?<router-link to="/signIn">注册</router-link>
      </div>
      <div id="sign-up">
        忘记密码?<router-link to="/phoneLogin">手机验证码登录</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import "@/css/style.css";
import "@/css/iconfont.css";
export default {
  data() {
    return {
      form:{
        username: '',
        password: ''
      } 
    }
  },
  methods:{
      login(){
          var url="api/user/login";
          this.$axios.post(url,this.form, {
                    headers: {
                      'Content-Type':'application/json'
                    }
                  }).then(res=> {
                      this.$message(res.data.message);
                      if(res.data.success === true)
                         {   this.$router.push("/user/message");
                             //store.commit('setGuid',res.data.uid);
                         }
                  })    
      }
  }
};
</script>

<style>
</style>