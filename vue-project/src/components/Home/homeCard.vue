<template>
    <div>
        <div class="homeNav">
            <div class="homeNavLogin" v-if="this.$store.state.Login==false">
                <div style="margin:20px;"><h2>登陆/注册</h2></div>
                <el-input class="homeLoginIn" v-model="form.username" placeholder="请输入用户名"></el-input>
                <el-input class="homeLoginIn" v-model="form.password" placeholder="请输入密码" show-password></el-input>
                <el-button type="success" @click="loginf">登录</el-button>
                
                <el-button type="primary" @click="register">注册</el-button>
            </div>
            <div class="homeNavLogin" v-if="this.$store.state.Login==true" style="color:green;"><h2>{{this.$store.state.username}} 已登陆</h2>
            <el-button type="info" @click="logout">退出登陆</el-button></div>
        </div>
        <div class="homeNavLogin">
            <!-- <div id="showIm">
            
             <el-divider class="line"><i class="el-icon-sugar"></i></el-divider>
               <el-carousel :interval="4000" type="card" height="250px" wight="100px">
                <el-carousel-item v-for="img in mvList" :key="img.mid">
                    <img :src="img.src" class="image" @click="clickMv(img.name, 2)">
                </el-carousel-item>
                </el-carousel>
            <router-link to="/MovieShow">点击查看更多电影</router-link>
             <el-divider class="line"><i class="el-icon-sugar"></i></el-divider>
             <el-carousel :interval="4000" type="card" height="250px" wight="100px">
                <el-carousel-item v-for="img in bookList" :key="img.mid">
                    <img :src="img.src" class="image" @click="clickMv(img.name, 2)">
                </el-carousel-item>
                </el-carousel>
             <router-link to="/BookShow">点击查看更多图书</router-link>
        </div> -->
        
        </div>
        <div class="homeFoot" style="margin-top:-1500px">
            <div class="homeICP">
                © 2022-2022 doubanjiang.com, all rights reserved BUAA豆瓣酱小组
                <br>
                违法和不良信息/涉未成年人有害信息投诉：tousu@doubanjiang.com
                <br>
                网络从业者不良行为举报：jubao@doubanjiang.com
                <br>
                <a href="#">关于豆酱小组</a>
            </div>
        </div>
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
                this.$store.commit('setLogin',true);
                this.login=this.$store.state.Login;
              }
          })
   
          
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

<style>
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