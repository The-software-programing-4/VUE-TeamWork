<template>
<div class="login">
    <div style="margin:20px;"><h2>登陆</h2></div>
    <el-input style="margin:10px" v-model="form.username" placeholder="用户名"></el-input>
    <el-input style="margin:10px" v-model="form.password" placeholder="密码"></el-input>
    <el-button type="success" @click="login">登陆</el-button>
</div>
</template>
<style scoped>
.login{
    margin: auto;
    width: 300px;
}
</style>

<script>

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
          this.$axios.post(url,this.form
                    , {
                    headers: {
                       'Content-Type': 'application/json',
                        withCredentials: true
                    }
                    }
                  ).then(res=> {
                      //alert(res.data.message);
                      console.log(res.data)
                      if(res.data.success === true)
                         {   
                              this.$router.push("/user/message");
                             //store.commit('setGuid',res.data.uid);
                         }
                  })
            
            
      }
  }
}
</script>