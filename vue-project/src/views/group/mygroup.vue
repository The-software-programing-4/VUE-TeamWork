<template>
    <div class="group">
    <div id="db-nav-group" class="nav" >
        <div class="logo">
            <!-- 存放小组主页面地址 -->
            <!-- <a href="">豆瓣酱电影</a> -->
        </div>
        <div class="items">
            <ul>
                <li>
                    <a href="">精选</a>
                </li>
                <li>
                    <a href="">娱乐</a>
                </li>
                <li>
                    <a href="">时尚</a>
                </li>
                <li>
                    <a href="">科技</a>
                </li>
            </ul>
        </div>
        <div class="nav-search">
            <!-- action规定向何处发送表单 methon：get/post -->
            <form id="form" action="" method="">
                <div class="input">
                    <!-- for放关联控件id -->
                    <input type="text" id="search" placeholder="星际穿越" v-model="searchText">
                </div>
                <div class="up">
                    <!-- <input  value="搜索一下" @click="onSearch"  > -->
                    <el-button type="success" icon="el-icon-search" @click="onSearch" background-color="#67C23A">搜索</el-button>
                </div>
            </form>
        </div>
    </div>
        <router-view></router-view>
    </div>
    
</template>
<script>
import grouplist from "../../components/group/mygrouplist.vue"

export default{
    components:{
        grouplist,
    },
    data(){
        return{
            searchText:'',
            searchResult:[]
        }
    },
    methods:{
        onSearch(){
             
            console.log("search"+this.searchResult)
            this.$router.push(
                {
                    path:"/group/search",
                    query:{searchText:this.searchText}
                }
            )
        }
        }
    }

</script>
<style scoped>
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
    #db-nav-group .logo{
        height: 100%;
        width: 145px;
        margin-top: 0;
        float: left;
        margin-left: 50px;
        text-align: center;
        background: url("../../components/pry_part/images/logo2.png");
        background-size: 100%, 100%;
    }
    #db-nav-group .items{
        margin-top: 20px;
        height: 58px;
        float: left;
        margin-left: 20px;
        width: 30%;
    }
    #db-nav-group .items ul{
        list-style: none;
    }
    #db-nav-group .items ul li{
        list-style: none;
        float: left;
        margin-left: 10px;
    }
    #db-nav-group .logo a{
        font-size: 24px;
        text-align: center;
        /* color: #003300; */
    }
    a{
        text-decoration: none;
        color: #339933;
    }
    #db-nav-group .nav-search{
        height: 30px;
        margin-top: 40px;
        width: 30%;
        float: right;
        margin-right: 10%;

    }
    #db-nav-group .nav-search .input input{
        float: left;
        border: transparent;
        border-radius: 20px;
        width: 70%;
        height: 40px;
        font-size: 15px;
    }
    #db-nav-group .nav-search .up input{

        border: none;
        background-color:#339933;
        color: #FFFFcc;
        width: 10%;
        display: inline-block;
    }
</style>
