<template>
    <div id="db-global-nav" class="global-nav">
        <div class="db">
            <div class="top-nav-info">
                <!-- href里待添加login页面地址 -->
                <!-- <a href="" class="nav-login" ref="nofollow">登录/注册</a> -->
                <router-link to="/" v-if="this.$store.state.Login===false"> 登录</router-link>
                <span>{{this.$store.state.username}} 已登陆</span>
                <router-link to="/user/message" v-if="this.$store.state.Login===true"> 修改个人信息</router-link>
            </div>
            <div class="top-nav-app">
                <!-- 待插入下载页面地址 -->
                <a class="lnk-app" style="color:white;" @click="thank">下载客户端</a>
            </div>
            <!-- 列出网站所有页面，点击可访问 -->
            <div class="global-nav-items">
                <ul>
                    <li>
                        <!-- _blank指跳转页面时，新打开一个 -->
                        <!-- <a href="" target="_blank">主页</a> -->
                         <router-link to="/">主页</router-link>
                    </li>
                    <li>
                        <!-- <a href="" target="_blank">读书</a> -->
                         <router-link to="/book/main">读书</router-link>
                    </li>
                    <li>
                        <!-- <a href="" target="_blank">电影</a> -->
                        <router-link to="/movie/main">电影</router-link>
                    </li>
                    <li>
                        <!-- <a href="" target="_blank">小组</a> -->
                        <router-link to="/group/main">小组</router-link>
                    </li>
                    <li>
                        <!-- <a href="../../views/TopicShow.vue" target="_blank">话题</a> -->
                        <router-link to="/topic/main">话题</router-link>
                    </li>
                </ul>
            </div>
        </div>

    </div>
</template>

<script>
export default {
    methods:{
        thank()
        {
            this.$message("感谢宝宝的下载，祝您生活愉快～爱你哟")
        }
    }
}
</script>
<style scoped>
    #db-global-nav{
        /* 上一行文字底部，到这行文字底部的高度 */
        line-height: 1.62;
        font-size: 12px;
        width: 100%;
    }
    #db-global-nav ul {
        margin: 0;
        padding: 0; }
     #db-global-nav a {
        cursor: pointer;
        text-decoration: none; }
    #db-global-nav {
        height: 28px;
        color: #d5d5d5;
        background-color: #545652;
        min-width: 950px; }
    #db-global-nav a:link, #db-global-nav a:visited, #db-global-nav a:hover, #db-global-nav a:active {
        color: #d5d5d5; }
        /* a:hover鼠标悬停时的属性 */
    #db-global-nav a:hover, #db-global-nav a:active {
        color: #fff;
        background-color: transparent; }
    #db-global-nav .global-nav-items {
        font-size: 0; }
    #db-global-nav .global-nav-items li {
        display: inline-block;
        *display: inline;
        zoom: 1;
        line-height: 28px;
        font-size: 12px;
        margin: 0;
        padding: 0;
        /* vertical-align: baseline;  */
        }
    #db-global-nav .global-nav-items a {
        display: inline-block;
        *display: inline;
        zoom: 1;
        padding: 0 12px;
        height: 28px; }
    #db-global-nav .top-nav-info {
        float: right;
        margin: 0 12px 0 0;
        line-height: 28px; }
    #db-global-nav .top-nav-app {
        position: relative;
        float: right;
        margin-right: 5px;
        line-height: 28px; }
    #db-global-nav .top-nav-app .lnk-app {
        display: inline-block;
        *display: inline;
        zoom: 1;
        padding: 0 8px;
        height: 28px; }
    ul { 
        list-style-type: none; 
        margin: 0; 
        padding: 0; 
        text-align: left;}
    body, div, dl, dt, dd, ul, li, h1, h2, h3, h4, h5, h6, pre, code, form, fieldset, legend, input, button, textarea, blockquote { margin: 0; padding: 0 }
    table { border-collapse: collapse; border-spacing: 0 }
    a:hover { color: #fff; text-decoration: none; background: #37a; }
    a:active { color: #fff; text-decoration: none; background: #f93; }
</style>