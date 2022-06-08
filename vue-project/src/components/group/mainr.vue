<template>
    <div class="aside">
  <div class="mod profile-entry">
  <div class="pic" v-if="this.$store.state.Login===true">
  <img :src="this.src" >
  </div>
  <div class="info" v-if="this.$store.state.Login===true">
    <a @click="tomanage"><b>管理我的小组</b></a>
    <p><a @click="fake">发起(3)</a> &nbsp;
    | &nbsp; <a @click="fake">回应(110)</a>
  </p></div>
  <div class="info" v-if="this.$store.state.Login===false">
    <a @click="tologin"><b>亲爱的，登陆后可享用全部功能</b></a>
    <p><a @click="fake">发起(0)</a> &nbsp;
    | &nbsp; <a @click="fake">回应(0)</a>
  </p></div>
</div>

<div id="g-reguler-groups" class="mod">
  <div class="hd">
  <span class="more"><a @click="fake">&gt; 全部</a></span>
  
    <h2>
        常去的小组
            
    </h2>

  </div>
  <div class="content">
      <ul>
          <li class="">
          <a @click="fake">
            <img :src="this.$hostURL+'/templates/groupHead/1.jpg'" title="村庄爱好者" alt="村庄爱好者" class="">
          </a>
          </li>
          <li class="">
          <a @click="fake">
            <img :src="this.$hostURL+'/templates/groupHead/2.jpg'" title="村庄爱好者" alt="村庄爱好者" class="">
          </a>
          </li>
          <li class="">
          <a @click="fake">
            <img :src="this.$hostURL+'/templates/groupHead/3.jpg'" title="村庄爱好者" alt="村庄爱好者" class="">
          </a>
          </li>
      </ul>
  </div>
</div>
  <div class="mod">
<div class="create-group">
        <a class="" @click="fake"><i>+</i>申请创建小组</a>
</div>

  </div>
<div id="group-contact" class="mod">
  <ul>
    <li class="group-wb"><a @click="fake" target="_blank">豆酱小组在微信</a></li>
    <li class="feed-back"><span>联系:1971008968@qq.com</span> </li>
  </ul>
</div>
    </div>

</template>
<script>
export default {
  data(){
    return{
      src:'',
    }
  },
  methods:{
    fake(){
      this.$message("你好可爱～ love you")
    },
    display_photo(){
        this.$axios.get("/api/user/getimg").then(res=>{
        console.log(res.data);
        if(res.data.message)
        {
          this.src=this.$hostURL+"/"+res.data.message;
        }
        console.log("rout"+this.src);
         })
      },
    tomanage()
    {
      this.$router.push('/group/manage')
    },
    tologin()
    {
      this.$router.push('/')
    }
  },
  created(){
    this.display_photo();
  }
}
</script>
<style scoped>
li{
display: inline-block;
margin-right: 10px;
}
 .aside {
width: 280px;
display: inline-block;
}
.hd{
    text-align:left;
}
.aside .mod {
margin-bottom: 40px;
word-break: break-all;
font-size: 13px;
text-align: left;
}
.content{
    text-align: left;
}
h2 {
font: 15px Arial, Helvetica, sans-serif;
margin: 0 0 12px 0;
color: #111;
line-height: 150%;
}
.aside .mod .hd {
padding-bottom: 10px;
margin-bottom: 20px;
border-bottom: 1px solid rgb(245, 188, 188);
}
#g-reguler-groups li img {
width: 48px;
height: 48px;
}
.mod .more {
float: right;
margin-top: 5px;
font-size: 13px;
}
.profile-entry .pic {
float: left;
margin-right: 10px;
line-height: 0;
}
.aside .mod {
word-break: break-all;
}
.profile-entry img {
width: 48px;
height: 48px;
}
.profile-entry {

overflow: hidden;
zoom: 1;
position: relative;
padding: 8px ;
padding-left: 28px;
margin-bottom: 10px;
background: #f9f9f9;
font-size: 14px;
}
.profile-entry .info p {
margin: 4px 0 0 0;
}
.profile-entry .info {
margin-top: 2px;
overflow: hidden;
text-align: left;
zoom: 1;
color: #666;
}
</style>