<template>
<div class="outside">
    <!-- <headTop></headTop> -->
    <div id="db-nav-group" class="nav" >
        <div class="logo">
            <!-- 存放小组主页面地址 -->
            <a href="">豆酱</a>
        </div>
    </div>
    <div class="left">
        <div class="title">
            <div class="button2">第三方应用授权</div>
            <div class="button">个人信息</div>
            
        </div>
        <message></message>
    </div> 
    <div class="right">
        <div class="word">
            <b>寻找“个人介绍”或“邮件提醒”设置？</b>
        </div>
        <div class="word2">去我的豆瓣，个人介绍可以直接编辑，邮件提醒位于名号下方的“设置”里</div>
         <div class="word">
            <b>我的域名</b>
        </div>
        <div class="word2">个性化域名将用作个人主页网址的一部分，最多15个数字或字母，字母开头，一经设定则不可更改。 
如果现在你不是非常确定，可以先留空，以后再说</div>
<div class="word">
            <b>联系管理员</b>
        </div>
        <div class="word2">如果遇到任何问题欢迎联系管理员，1971008968@qq.com</div>
         <div class="word3"> > 删除账号</div>
    </div>
   
</div>
    
</template>
<script>
import headTop from "../../components/pry_part/headtop.vue"
import message from '../../components/Functional/message.vue'
import DatePicker from '@/components/TimeAndDate/DatePicker.vue'
export default {
    components:{
    message,
    headTop,
    DatePicker,
}
}
</script>
<style scoped>
.right{
    /* border: 1px solid; */
    display: inline-block;
    width: 30%;
    margin: 70px;
}
.word{
    /* margin: 30px; */
    margin-top: 30px;
    font-size: large;
    color: green;
    width: 80%;
    text-align: left;
    display: inline-block;
}
.word2{
    width: 80%;
    margin: 10px;
    display: inline-block;
    text-align: left;
}
.word3{
    width: 80%;
    margin: 10px;
    color: blue;
    font-size: small;
    display: inline-block;
    text-align: left;
}
    #db-nav-group{
        position: relative;
        /* background-color: #FFFFcc; */
        background: url("../../components/pry_part/images/back9.jpg");
        height: 98px;
        width: 100%;
        margin: 0;
        padding: 0;
        background-size: 100%, 100%;
        }
            #db-nav-group .logo a{
        font-size: 24px;
        text-align: center;
        /* color: #003300; */
    }

    #db-nav-group .logo{
        height: 58px;
        width: 145px;
        margin-top: 30px;
        float: left;
        margin-left: 50px;
        text-align: center;
    }
.button{
    font-size: small;
    padding: 0% 5px 0% 5px;
    line-height: 30px;
    height: 50px;
    width: auto;
    background-color: white;
    /* border: 1px solid rgb(169, 162, 162); */
    display: inline-block;
    border-radius: 30%;
    text-align: center;
    float: right;
}
.button2{
    font-size: small;
    padding: 0% 5px 0% 5px;
    line-height: 30px;
    height: 50px;
    /* background-color: white; */
    /* border: 1px solid rgb(169, 162, 162); */
    display: inline-block;
    border-radius: 30%;
    text-align: center;
    float: right;
}
.title{
    margin: 3% auto 3% 10%;
    height: 30px;
    width: 100%;
    padding-top: 3px;
    padding-right: 14px;
    
    /* line-height: 30px; */
    background-color: rgb(233, 248, 212);
    
}
.left{
    display: inline-block;
    width: 40%;
    /* border: 5px blue solid; */
    margin: 1% 5% 5% 8%;
    float: left;
}
</style>
