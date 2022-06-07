<template>
    <div id="topic">
       <el-divider class="line"><i class="el-icon-sugar"></i></el-divider>
        <div id="crossLine1">话题广场</div>
        <el-divider class="line"><i class="el-icon-sugar"></i></el-divider>
        <div class="topic-page" >
            <el-card class="box-card" v-for='topic in topicList.slice(
          (currentPage - 1) * pageSize,
          currentPage * pageSize
        )' >
            <div slot="header" class="clearfix" >
                <el-badge :value="topic.focus" class="item" type="warning" style="float:left;height: 10px;">
                <el-button size="small" @click="clickMv(topic.tid, 2)">关注</el-button>
                </el-badge>
                <div style="display:inline-block;">{{topic.name | ellipsis}}</div>
                <el-button style="float: right; padding: 3px 0" type="text" @click="toinfo(topic.tid)">进入话题</el-button>

            </div>
            <p class="text item" style="margin-left:100px; font-size:12px;  ">
               {{topic.introduction | ellipsis2}}
            </p>
            </el-card>
        </div>
        <div class="pages-div">
            <el-pagination
            background
            layout="prev, pager, next"
            :page-size="pageSize"
            :current-page="currentPage"
            @current-change="currentChange"
            :total="topicList.length"
            class="pages"
           >
      </el-pagination>
        </div>
        <el-divider class="line"><i class="el-icon-sunny"></i></el-divider>
        <div id="crossLine2">我关注的话题动态</div>
    <el-divider class="line"><i class="el-icon-sunny"></i></el-divider>
    <!-- 话题展示 -->
        <div class="topicComment">
            <ul>
            <li  v-for="(item, index) in forums" class="commentItem">
                <div class="img"><img :src="item.src" width="30px" height="30px"></div>
                <div class="commentNav">
                
                <a href="#" class="commentUser" style="margin-right:20px;"> {{item.writer}} </a>
                <span class="commentThumb">{{item.thumb}}
                    <a @click="thumb(index)">{{item.isthumb}}</a>
                </span>
                <span class="commentDate"> {{item.time}} </span>
                </div>
                <div :id="item.id" class="content" v-html="item.content"></div>
                <a v-if="item.id>0" @click="changeheight(item.id);item.id=0">(展开…)</a>
            </li>
            </ul>
      </div>
    </div>

</template>
<script>
import "@/css/style.css";
export default {
    data(){
        return{
            // showClass:"imsrc1",
            isClass: false,
            currentPage: 1,
            pageSize: 6,
            topicList:[],
            str:'1',
            tid0:1,
            forums: [
        
            ],
            try:[{len:3}, {pid:2}, {pid:3}],
            // tid:[],//查找得到该用户关注的tid
            forms:[{
          id: 1,//帖子id
          username: 'ando',//发布者姓名
          topicname:'abc',//所属话题名字
          uid:"创建人名字",
          tid:"话题名字",
          content: '民国时期的经济环境居然已经如此丰富多彩了，什么商业竞争之类的应有尽有。在克劳对于中国人的一些总结的确实一针见血，像要面子这种，不愧是在中国生活这么久的人。整体写作风格偏幽默，虽然实际当时中国人民的生活并没有克劳所描写的那么乐观，但在当时已经算超前的了。',
          thumb: 0,//点赞数量
          // thumbId:[1, 2, 3],//存储点赞用户id
          day: '2022.5.21 15:36:01', 
          imgList:["src", "src", "src"]

        },]
        }
    },
    filters: {
    ellipsis: function (value) {
      if (!value) return "";
      if (value.length > 8) {
        return value.slice(0, 8) + "...";
      }
      return value;
    },
     ellipsis2: function (value) {
      if (!value) return "";
      if (value.length > 30) {
        return value.slice(0, 30) + "...";
      }
      return value;
    },
  },
    methods:{
        
        toinfo(tid)
        {
            this.$router.push(
                {
                    path: "/topic/info",
                    query: {tid:parseInt(tid)}
                }
            )
        },
        getTopic(){
            var url='/api/topic/listtopic';
            var str0="a";
            console.log("starttopic");
            this.$axios.post(
                url,
                str0
            )
            .then(
                res=>{
                    this.topicList=res.data.message;
                    console.log("listtopic", res.data);
                }
            )
            console.log("endtopic");
            var url2="/api/group/listdiscuss"
                this.$axios.post(url2).then
                (res=>{
                    this.forums=res.data.listDiscuss;
                for(var i=0;i<this.forums.length;i++)
                {
                    this.forums[i].src=this.$hostURL+'/'+this.forums[i].src
                }
                }
                )
        },
        changeheight(id)
    {
      console.log("show")
        var li=document.getElementById(id);
        li.style.height="auto"

    },
        SearchTid2Pid(){
            var url='/api/topic/tid2pid';
            var midr = this.tid0;
            this.$axios.post(
                url,
                midr
                ,{
                    headers: {
                      'Content-Type':'application/json'
                    }
                }
            ).then(res => {
                console.log("topic tid2pid", res.data.message)
            })
        },
        searchPid2src(){
            var url='/api/post/userPost';
            var midr = this.tid0;
            this.$axios.post(
                url,
                midr
                ,{
                    headers: {
                      'Content-Type':'application/json'
                    }
                }
            ).then(res => {
                console.log("topic pid2src", res.data.message)
            })
        },
        messageGet(){
            var url='/api/topic/message_get';
            var midr = this.tid0;
            this.$axios.post(
                url,
                midr
                ,{
                    headers: {
                      'Content-Type':'application/json'
                    }
                }
            ).then(res => {
                console.log("message_get", res.data.posts)
            })
        },
        currentChange(val){
        // alert(val)
        this.currentPage = val;
        // alert(this.currentPage);
        },
        clickMv(val1, val2){
           // alert(val1+val2);
           console.log(val2);
            this.$emit('change', val1, val2);//子组件给父组件传值，事件为change
        },
        
    },
    created(){
        //请求初始化图片链接
        this.getTopic();
        // this.SearchTid2Pid();
        // this.searchPid2src();
        // this.messageGet();
        // this.getTid2pid();
        // console.log("try");
        // console.log(this.try[1]);
    },
    
}
</script>
<style scoped>
li{
  vertical-align: middle;
}
.content ::v-deep img{
  width: 300px;
}
.content ::v-deep {
    width: 70%;
  height: 100px;
  overflow: hidden;

}
#topic{ 
    width: 100%;
    margin-top:30px ;
}
#crossLine1{ 
    height: 70px;
    text-align: center;
    line-height: 70px;
    font-size: 20px;
    background: url("./images/card2.jpg");
    background-size: 100%, 100%;
}
#crossLine2{ 
    height: 80px;
    text-align: center;
    /* line-height: 100%; */
    /* color: #ffffff; */
    font-size: 20px;
    background: url("./images/card1.jpg");
    background-size: 100%, 100%;
}
 /* card样式 */
 .text {
    font-size: 14px;
  }

.img{
  display: inline-block;
}

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }

  .box-card {
    width: 45%;
    float: left;
    height: 27%;
    margin-bottom:5% ;
    margin-right:3% ;
    background:url("./images/card5.jpg");
    background-size: 100%, 100%;
  }
  /* card样式结束 */
.topic-page{
    width: 100%;
    height: 460px;
    /* background-color:#474747 ; */
}
.pages-div{ 
    width: 100%;
    height: 50px;
}
.pages{
    width: 100%;
    height: 100px;
    float: left;
}


#img-show .detail{
    margin-top: 1%;
    width: 70%;
    max-height: 100%;
    /* margin-left: 0; */
    float: right;
    font-size: 13px;
}
#img-show .detail div{
    text-align: left;
    /* 加入下面两个word样式，实现段落类自动换行 */
    word-wrap: break-word; 
	word-break: normal;
}
#img-show .detail div a{
    text-decoration: none;
        color: #339933;
}
#nameButton{
    border-color: transparent;
    background: transparent;
}
</style>