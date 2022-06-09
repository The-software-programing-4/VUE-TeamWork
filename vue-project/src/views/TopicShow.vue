<template>
  <div class="about">
    <!-- <headTop></headTop> -->
    <div id="db-nav-group" class="nav" >
        <div class="nav-search">
            <!-- action规定向何处发送表单 methon：get/post -->
            <form id="form" action="" method="">
                <div class="input">
                    <!-- for放关联控件id -->
                    <input type="text" id="search" placeholder="搜素话题" v-model="searchText">
                </div>
                <div class="up">
                    <!-- <input  value="搜索一下" @click="onSearch"  > -->
                    <el-button type="primary" icon="el-icon-search" @click="onSearch" background-color="#ffffff">搜索</el-button>
                </div>
            </form>
        </div>
    </div>
        <!-- <div id="topic-show" >
            <topics @change="changeFromTopicShow" v-show="showScene==1"></topics>
            <topicInfoCard class="topicCard" v-show="showScene==2"> </topicInfoCard>
        </div>
        <div id="topiclist">
            <PopularMovieList></PopularMovieList>
            <movielist></movielist>
        </div> -->
        <router-view></router-view>
  </div>
</template>
<script>
export default {
  components:{
},
   data(){
        return{
            searchText:'',
           toTopicId:0,//点击跳转到的电影页面名称
            showScene:1,//showScence决定展示哪一个页面，0时显示搜索结果
            searchImgResult:[
                {path:require("../components/pry_part/images/one.jpg"),
                name:"名字1",
                score:"2分"},
                {path:require("../components/pry_part/images/two.jpg"),
                name:"名字2",
                score:"3分"}
            ]

        }
    },
    methods:{
        onSearch(){
           console.log("search"+this.searchResult)
            this.$router.push(
                {
                    path:"/topic/search",
                    query:{searchText:this.searchText}
                }
            )

        },
        // 事件处理函数
       async changeFromTopicShow(param1,param2) {//从子组件处获取的值
            this.showScene=param2;
            this.toTopicId=param1;
            //alert(this.showScene+this.toTopicId);
            console.log(this.showScene);
        },
    },

}
</script>
<style scoped>
/* 搜索框样式 */
    #db-nav-group{
        position: relative;
        /* background-color: #FFFFcc; */
        background: url("../components/imgs/topic.jpg");
        height: 98px;
        width: 100%;
        margin: 0;
        padding: 0;
        background-size: 100%, 100%;
        }
    #db-nav-group .logo{
        height: 100%;
        width: 145px;
        margin-top: 0px;
        float: left;
        margin-left: 50px;
        text-align: center;
        background: url("../components/pry_part/images/logo.jpg");
        background-size: 100%, 100%;
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
        height: 30px;
        margin-top: 40px;
        width: 25%;
        float: right;
        margin-right: 10%;

    }
    #db-nav-group .nav-search .input input{
        float: left;
        border: transparent;
        width: 70%;
        height: 40px;
        font-size: 15px;
        
    }
    #db-nav-group .nav-search .up input{
        float: left;
        border: none;
        background-color:#ffffff;
        color: #FFFFcc;
        width: 20%;
    }
    #topic-show{
        margin-left: 5%;
        width: 55%;
        float: left;
    }
    #topiclist{
        float: right;
        width: 30%;
        margin-right: 10%;
        margin-top:30px ;
       font-size:20px ;
    }
/* 搜索框样式end */
.topicCard{ 
    margin-top:50px ;
}
</style>
