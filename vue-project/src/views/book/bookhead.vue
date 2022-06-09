<template>
  <div class="about">
    <!-- <headTop></headTop> -->
    <div id="db-nav-group" class="nav" >
        <div class="nav-search">
            <el-input placeholder="请输入内容" v-model="searchText" class="input-with-select" size="medium" style="width: 400px;">
                <el-button slot="append" icon="el-icon-search" @click="onSearch" id="button1"></el-button>
            </el-input>
        </div>
    </div>
    <router-view></router-view>
  </div>
</template>
<script>
import headTop from "../../components/pry_part/headtop.vue"
import searchImg from"../../components/pry_part/BookSearchResult.vue"
import searchBox from"../../components/pry_part/searchBox.vue"
import movielist from "../../components/PYK-component/booklist.vue"
import PopularMovieList from "../../components/PYK-component/HotBookTopics.vue"
export default {
  components:{
    headTop,
    searchImg,
    searchBox,
    movielist,
    PopularMovieList,
},
   data(){
        return{
            searchText:'',
            toBookId: '',
            toMovieName:"",//点击跳转到的电影页面名称
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
        //点击搜索跳转
        onSearch(){
            console.log(this.searchText);
            this.$router.push(
                {
                    path:"/book/search",
                    query:{searchText:this.searchText}
                }
            )

        },
    },

}
</script>
<style scoped>
/* 搜索框样式 */
    #db-nav-group{
        position: relative;
        /* background-color: #FFFFcc; */
        background: url("../../components/imgs/book.jpg");
        height: 100px;
        width: 100%;
        margin: 0;
        padding: 0;
        /* background-size:auto; */
        /* padding-bottom: 34.156%; */
        background-repeat:no-repeat ;
        background-size: 100%, 20%;
        }
    /* #db-nav-group .logo{
        height: 100%;
        width: 145px;
        margin-top: 0;
        float: left;
        margin-left: 50px;
        text-align: center;
        background: url("../../components/pry_part/images/logo.jpg");
        background-size: 100%, 100%;
    } */
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
        border-radius: 20px;
        width: 70%;
        height: 40px;
        font-size: 15px;
        
    }
    #db-nav-group .nav-search .up input{
        float: left;
        border: none;
        background-color:#339933;
        color: #FFFFcc;
        width: 20%;

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
