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
            Pry's Part
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
            pwd: ''
        }
    }
}
</script>

<style>

</style>