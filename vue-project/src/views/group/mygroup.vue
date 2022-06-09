<template>
    <div class="group">
    <div id="db-nav-group" class="nav" >
        <div class="nav-search">
            <!-- action规定向何处发送表单 methon：get/post -->
            <el-input placeholder="请输入内容" v-model="searchText" class="input-with-select" size="medium" style="width: 400px;">
                <el-button slot="append" icon="el-icon-search" @click="onSearch" id="button1"></el-button>
            </el-input>
        </div>
    </div>
        <router-view></router-view>
    </div>
    
</template>
<script>
// import grouplist from "../../components/group/mygrouplist.vue"

export default{
    components:{
        // grouplist,
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
        background: url("../../components/imgs/group.jpg");
        height: 110px;
        background-repeat:no-repeat ;
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
