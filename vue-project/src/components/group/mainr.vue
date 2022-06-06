<template>
    <div class="aside">
  <div class="mod profile-entry">
  <div class="pic">
  <a href="/group/people/255870596/"><img src="https://img2.doubanio.com/icon/up255870596-2.jpg"></a>
  </div>
  <div class="info">
    <a @click="tomanage"><b>管理我的小组</b></a>
    <p><a href="/group/people/255870596/publish">发起(0)</a> &nbsp;
    | &nbsp; <a href="/group/people/255870596/reply">回应(0)</a>
  </p></div>
</div>

<div id="g-reguler-groups" class="mod">
  <div class="hd">
  <span class="more"><a href="/group/people/255870596/joins">&gt; 全部</a></span>
  
    <h2>
        常去的小组
            
    </h2>

  </div>
  <div class="content">
      <ul>
          <li class="">
          <a href="https://www.douban.com/group/villages/">
            <img :src="this.$hostURL+'/templates/groupHead/1.jpg'" title="村庄爱好者" alt="村庄爱好者" class="">
          </a>
          </li>
          <li class="">
          <a href="https://www.douban.com/group/villages/">
            <img :src="this.$hostURL+'/templates/groupHead/2.jpg'" title="村庄爱好者" alt="村庄爱好者" class="">
          </a>
          </li>
          <li class="">
          <a href="https://www.douban.com/group/villages/">
            <img :src="this.$hostURL+'/templates/groupHead/3.jpg'" title="村庄爱好者" alt="村庄爱好者" class="">
          </a>
          </li>
      </ul>
  </div>
</div>
  <div class="mod">
<div class="create-group">
        <a class="" href="/group/new_group"><i>+</i>申请创建小组</a>
</div>

  </div>
<div id="group-contact" class="mod">
  <ul>
    <li class="group-wb"><a href="http://e.weibo.com/Group2005" target="_blank">豆酱小组在微信</a></li>
    <li class="feed-back"><span>联系:1971008968@qq.com</span> </li>
  </ul>
</div>
    </div>

</template>
<script>
export default {
  methods:{
    tomanage()
    {
      this.$router.push('/group/manage')
    }
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