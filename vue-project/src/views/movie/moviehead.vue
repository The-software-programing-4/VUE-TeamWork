<template>
  <div class="about">
    <!-- <headTop></headTop> -->
    
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
import headTop from "../../components/pry_part/headtop.vue"
import showIm from"../../components/pry_part/showIm.vue"
import searchImg from"../../components/pry_part/searchResultShow.vue"
import searchBox from"../../components/pry_part/searchBox.vue"
import MovieInfoCard from "../../components/Movies/MovieInfoCard.vue"
import movielist from "../../components/PYK-component/movielist.vue"
import PopularMovieList from "../../components/PYK-component/PopularMovieList.vue"
export default {
  components:{
    headTop,
    showIm,
    searchImg,
    searchBox,
    MovieInfoCard,
    MovieInfoCard,
    movielist,
    PopularMovieList,
},
   data(){
        return{
            gotop:false,
            searchText:'',
            toMovieID:1,   //点击跳转到的电影页面名称
            showScene:1,//showScence决定展示哪一个页面，0时显示搜索结果
            searchImgResult:[
                {path:require("../../components/pry_part/images/one.jpg"),
                name:"名字1",
                score:"2分"},
                {path:require("../../components/pry_part/images/two.jpg"),
                name:"名字2",
                score:"3分"}
            ]
        }
    },
    methods:{
        onSearch(){
             this.$router.push(
                {
                    path:"/movie/search",
                    query:{searchText:this.searchText}
                }
            )
        },
        // 事件处理函数
        async changeFromShowIm(param1,param2) {//从子组件处获取的值
            this.showScene=param2;
            this.toMovieID=parseInt(param1);
            console.log("recieve"+this.toMovieID);
            //alert(this.showScene+this.toMovieName);
            this.$refs.child2.getData(parseInt(param1));
            document.documentElement.scrollTop = 0;
        },
        async changeFromRank(param1,param2) {//从子组件处获取的值
            this.showScene=param2;
            this.toMovieID=parseInt(param1);
            console.log("recieve"+this.toMovieID);
            //alert(this.showScene+this.toMovieName);
            this.$refs.child2.getData(parseInt(param1));
            document.documentElement.scrollTop = 0;
        },
    },  

}
</script>
<style scoped>
/* 搜索框样式 */
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
        background: url("../../components/pry_part/images/logo.jpg");
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
    #img-show{
        margin-left: 5%;
        width: 55%;
        float: left;
    }
    #mvlist{
        float: right;
        width: 30%;
        margin-right: 10%;
        font-size:20px ;
    }
    .movieCard{
    margin-left: 10%;
    width: 90%;
}
/* 搜索框样式end */
</style>
