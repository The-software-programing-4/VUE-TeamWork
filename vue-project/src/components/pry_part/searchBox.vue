<template>
    <div id="db-nav-group" class="nav" >
        <div class="logo">
            <!-- 存放小组主页面地址 -->
            <a href="">豆瓣酱小组</a>
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
                    <input type="text" id="search" placeholder="小组 话题" v-model="searchText">
                </div>
                <div class="up">
                    <input  value="搜索一下" @click="onSearch">

                </div>
            </form>
        </div>
    </div>
</template>
<script>
export default{
    data(){
        return{
            searchText:'',
            searching:0,
        }
    },
    methods:{
        onSearch(){
             this.$emit("getData", this.searchText);//给父组件传值
             alert(this.searchText);
            //点击跳转到搜索结果页面
            this.$router.push({path:"/searchResult"})
        },
    },
}
</script>
<style scoped>
    #db-nav-group{
        position: relative;
        background-color: #FFFFcc;
        height: 98px;
        width: 100%;
        margin: 0;
        padding: 0;
    }
    #db-nav-group .logo{
        height: 58px;
        width: 145px;
        margin-top: 30px;
        float: left;
        margin-left: 50px;
        text-align: center;
    }
    #db-nav-group .items{
        margin-top: 20px;
        height: 58px;
        float: left;
        margin-left: 20px;
        width: 40%;
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
        height: 50px;
        margin-top: 40px;
        width: 25%;
        float: right;
        margin-right: 10%;

    }
    #db-nav-group .nav-search .input input{
        float: left;
        border: transparent;
        width: 70%;
        height: 20px;
        font-size: 15px;
    }
    #db-nav-group .nav-search .up input{
        float: left;
        border: none;
        background-color:#339933;
        color: #FFFFcc;
        width: 20%;
    }
</style>
