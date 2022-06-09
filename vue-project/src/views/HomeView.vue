<template>
<div >
  <!-- <headtop></headtop> -->
  <div style="margin-top: 0px; height: 100px;width: 100%;" id="searchBox" >
  <el-row >
  <el-col :span="2" style="margin-top: 20px; color: #46A3FF;font-size: 35px;font-weight: 900;"><div class="grid-content bg-purple" > 
  <button style="color: #46A3FF;font-size: 35px;font-weight: 900;background: transparent;border: transparent;" @click="click1">图书</button></div></el-col>
  <el-col :span="2" style="margin-top: 20px; color: #46A3FF;font-size: 35px;font-weight: 900;"><div class="grid-content bg-purple-light">
     <button style="color: #46A3FF;font-size: 35px;font-weight: 900;background: transparent;border: transparent;" @click="click2">电影</button>
  </div></el-col>
  <el-col :span="2" style="margin-top: 20px; color: #46A3FF;font-size: 35px;font-weight: 900;"><div class="grid-content bg-purple">
    <button style="color: #46A3FF;font-size: 35px;font-weight: 900;background: transparent;border: transparent;" @click="click3">小组</button>
  </div></el-col>
  <el-col :span="2" style="margin-top: 20px; color: #46A3FF;font-size: 35px;font-weight: 900;"><div class="grid-content bg-purple-light">
    <button style="color: #46A3FF;font-size: 35px;font-weight: 900;background: transparent;border: transparent;" @click="click4">话题</button>
  </div></el-col>
  <el-col :span="30" offset="6" style="margin-top: 20px; "><div class="grid-content bg-purple-light">
    <el-input placeholder="请输入内容" v-model="searchText" class="input-with-select" size="medium" style="width: 400px;">
    <el-button slot="append" icon="el-icon-search" @click="search" id="button1"></el-button>
  </el-input>
  </div></el-col>
</el-row>
</div>
<router-view></router-view>
  <!-- <homeCard></homeCard> -->
</div>
</template>

<script>
import homeCard from "@/components/Home/homeCard.vue";
import headtop from "@/components/pry_part/headtop.vue"
import booklistVue from "@/components/group/booklist.vue";
import HotBookTopicsVue from "@/components/PYK-component/HotBookTopics.vue";
export default {
  name: "HomeView",
  components: {
    homeCard,
    headtop,
    booklistVue,
    HotBookTopicsVue,
  },
  data() {
    return {
      select:'',
      searchText:"",
    }
  },
  methods:{
    search(){
      //console.log("搜索类别"+this.select+"搜索内容："+this.searchText);
       this.$router.push(
                {
                    path:'/search',
                    query:{searchText:this.searchText}
                }
            )
    },
    click1(){
      this.$router.push(
                {
                    path:'/book/main',
                }
            )
    },
    click2(){
      this.$router.push(
                {
                    path:'/movie/main',
                }
            )
    },
    click3(){
      this.$router.push(
                {
                    path:'/group/main',
                }
            )
    },
    click4(){
      this.$router.push(
                {
                    path:'/topic/main',
                }
            )
    }
  }
};
</script>

<style scoped>
.el-select .el-input {
    width: 130px;
  }
  .input-with-select .el-input-group__prepend {
    background-color: #fff;
  }
  #button1{
    background: color #97CBFF;;
    color:pink;
    width: 50px;
  }
  #searchBox{
    background:url("../components/imgs/pink1.jpeg") ;
    background-size:100% 100% ;
  }

</style>