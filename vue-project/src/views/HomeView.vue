<template>
<div >
  <!-- <headtop></headtop> -->
  <div style="margin-top: 0px; height: 80px;" id="searchBox">
  <el-input placeholder="请输入内容" v-model="searchText" class="input-with-select" size="medium" style="margin-top:30px; width: 1200px;">
    <el-button slot="append" icon="el-icon-search" @click="search" id="button1"></el-button>
  </el-input>
  
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
      input1: '',
      input2: '',
      input3: '',
      input4:'',
      select:'',
      searchText:"",
    }
  },
  methods:{
    search(){
      console.log("搜索类别"+this.select+"搜索内容："+this.searchText);
       this.$router.push(
                {
                    path:'/search',
                    query:{searchText:this.searchText}
                }
            )
    }
  }
};
</script>

<style>
.el-select .el-input {
    width: 130px;
  }
  .input-with-select .el-input-group__prepend {
    background-color: #fff;
  }
  #button1{
    background-color:green;
    color:black;
    width: 50px;
  }
  #searchBox{
    background:url("../components/pry_part/images/back1.jpg") ;
    background-size:100% 100% ;
  }
</style>