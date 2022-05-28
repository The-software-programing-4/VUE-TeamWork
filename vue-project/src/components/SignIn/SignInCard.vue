<template>
  <div id="loginBox">
    <h1>注册</h1>
    <div class="inputBox">
      <div class="inputText">
        <span class="iconfont icon-wode"></span>
        <input v-model="form.username" type="text" placeholder="手机号/邮箱号" />
      </div>
      <div class="inputText">
        <span class="iconfont icon-mima"></span>
        <input v-model="firstPassword" type="password" placeholder="密码(长度为6-20位)" />
      </div>
      <div class="inputText">
        <span class="iconfont icon-mima"></span>
        <input v-model="form.password" type="password" placeholder="确认密码" />
      </div>
      <input v-on:click="signin"  class="button" type="button" value="注册" />
    </div>
  </div>
</template>

<script>
import "@/css/style.css";
import "@/css/iconfont.css";
export default {
  data(){
    return {
      firstPassword: '',
      form:{
        username: '',
        password: '',
      } 
    }
  },
  methods: {
    check(){
      if(this.firstPassword !== this.form.password){
        alert("两次密码不同，请重新输入！");
        this.firstPassword = '';
        this.form.password = '';
        return false;
      }
      if(this.form.password.length < 6 || this.form.password.length > 20){
        alert("密码长度不符合要求，请重新输入！");
        this.firstPassword = '';
        this.form.password = '';
        return false;
      }
      return true;
    },
    signin(){
      if(this.check() === true){
      var url="api/user/register";
      this.$axios.post(url, this.form, {
                    headers: {
                      'Content-Type':'application/json'
                    }
                  }).then(res=>{
                    alert(res.data.message);
                      if(res.data.success === true)
                         {   this.$router.push("/user/message");
                             //store.commit('setGuid',res.data.uid);
                         }
                  })

      }
    }
  }
};
</script>

<style>
</style>