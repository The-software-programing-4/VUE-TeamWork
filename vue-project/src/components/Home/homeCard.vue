<template>
    <div>
        <div class="homeNav" >
            <div class="homeNavLogin" v-if="this.$store.state.Login==false">
                <div style="margin:20px;color:#613030"><h2>登陆/注册</h2></div>
                <el-input class="homeLoginIn" v-model="form.username" placeholder="请输入用户名" style="background-color:transparent"></el-input>
                <el-input class="homeLoginIn" v-model="form.password" placeholder="请输入密码" show-password style="background-color:transparent"> </el-input>
                <el-button type="success" @click="loginf " style="background-color:#FF8040;border:transparent;">登录</el-button>
                
                <el-button type="primary" @click="register" style="background-color:#66B3FF;border:transparent;">注册</el-button>
            </div>
            <div class="homeNavLogin" v-if="this.$store.state.Login==true" style="color:#FF8040;"><h2>{{this.$store.state.username}} 已登陆</h2>
            <el-button type="info" @click="logout">退出登陆</el-button></div>
        </div>
        <!-- <div class="homeFoot" style="margin-top:-150px">
            <div class="homeICP">
                © 2022-2022 doubanjiang.com, all rights reserved BUAA豆瓣酱小组
                <br>
                违法和不良信息/涉未成年人有害信息投诉：tousu@doubanjiang.com
                <br>
                网络从业者不良行为举报：jubao@doubanjiang.com
                <br>
                <a href="#">关于豆酱小组</a>
            </div>
        </div> -->
  </div>
</template>

<script>
import "@/css/style.css";
import axios from 'axios';
export default {
    data() {
        return {
            status:0,

            user:'',
            form:{
                uid:0,
                username:'',
                password:''
            },
            input: '',
            pwd: '',
            str:'a',
            mvList:[{mid:13,
            src:require('../pry_part/images/blue1.jpg'),
                name:"pic3",
                score:3},],
            bookList:[],
        }
    },
    methods:{
        loginf(){
          var url="api/user/login";
          this.$axios.post(url,this.form
                    , {
                    headers: {
                       'Content-Type': 'application/json',
                        withCredentials: true
                    }
                    }
                  ).then(res=> {

                      console.log(res.data)
                      this.$message(res.data.message)
                      if(res.data.success === true)
                         {   
                              //this.$router.push("/user/message");
                             //store.commit('setGuid',res.data.uid);
                             this.status=1;
                             this.user=this.form.username
                             this.$store.state.username=this.user;
                             this.$store.commit('setLogin',true);
                             this.$store.state.uid=res.data.uid;
                             console.log(this.$store.state.uid)
                         }
                  })
                  //this.$router.go(0);
            
            
      },
      logout()
      {
         var url="api/user/logout";
          this.$axios.post(url).then(res=>{
              console.log(res.data);
          })
          this.$message("注销成功")
          this.$store.commit('setLogin',false);
          this.status=0;
          this.login=this.$store.state.Login;
      },
      sleep1(numberMillis){    
        var now = new Date();    
        var exitTime = now.getTime() + numberMillis;   
        while (true) { 
          now = new Date();       
          if (now.getTime() > exitTime) return;
        }     
      },
      register()
      {
         var url="api/user/register";
          this.$axios.post(url,this.form).then(res=>{
              console.log(res.data);
              this.$message(res.data.message)
              
              if(res.data.success)
              {
                  this.status=1;
                this.user=this.form.username
                this.sleep1(500);
                this.loginf();
                this.$message("前往修改个人信息");
              }
          })
            
           // this.sleep1(500);
            //this.$router.push("/user/message");

      },
        getMovie(){
            var url='/api/movie/listmovie';
            console.log("start");

            this.$axios.post(
                url,
                this.str
            )
            .then(
                res=>{
                    this.mvList=res.data.messages;
                    console.log(res.data.messages);
                    for(var i=0;i<res.data.messages.length;i++)
                    {
                        var temp=res.data.messages[i];
                        this.mvList[i].src=this.$hostURL+'/'+temp.src;
                    }
                }
            )
            // .catch(err => {              
            //     console.log(err);
            // })
        },
        getBook(){
            var url='/api/book/listBook';
            console.log("start");
    
            this.$axios.post(
                url,
                this.str
            )
            .then(
                res=>{
                    this.bookList=res.data.messages;
                    console.log(res.data.messages);
                    for(var i=0;i<res.data.messages.length;i++)
                    {
                        var temp=res.data.messages[i];
                        this.bookList[i].src=this.$hostURL+'/'+temp.src;
                    }
                }
            )
        }
    },
    created(){
        //this.getMovie()
        //this.getBook()
    }
}
</script>

<style scoped>
#showIm{
    width: 65%;
    /* height: 100px; */
    float: left;
    margin-top:20px ;
    /* background-color:blue; */
    height: 100px;
}
#list{
    width: 35%;
    float: left;
    background-color:green ;
    height: 100px;
}
.homeContent{
    height: 100px;
}
</style>