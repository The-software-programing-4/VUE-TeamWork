<template>
    <div>
        <div class="homeNav">
            <div class="homeNavLogin">
                <el-input class="homeLoginIn" v-model="input" placeholder="请输入用户名"></el-input>
                <el-input class="homeLoginIn" placeholder="请输入密码" v-model="pwd" show-password></el-input>
                <el-button type="success">登录</el-button>
                <el-button type="primary">注册</el-button>
            </div>
        </div>
        <div class="homeContent">
            <div id="showIm">
            <!-- 屏幕右侧65% -->
            <!-- 电影 -->
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
        </div>
        <div id="list">
            <!-- 屏幕左侧35% 放置榜单等数据 -->
        </div>
        </div>
        <div class="homeFoot">
            <div class="homeICP">
                © 2022-2022 doubanjiang.com, all rights reserved BUAA豆瓣酱小组
                <br>
                违法和不良信息/涉未成年人有害信息投诉：tousu@doubanjiang.com
                <br>
                网络从业者不良行为举报：jubao@doubanjiang.com
                <br>
                <a href="#">关于豆瓣酱小组</a>
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
        this.getMovie()
        this.getBook()
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
    height: 700px;
}
</style>