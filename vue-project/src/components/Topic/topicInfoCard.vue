<template>
    <div class="TopicCard">
      <div class="topicContent" >
        <div class="topicNav">
          <div class="topicIcon">
            <svg t="1653735450692" class="icon topicIcon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2187" width="200" height="200"><path d="M466.24 461.248v91.584h91.52V461.248h-91.52z m519.488 23.104C974.784 246.4 783.104 53.248 546.88 42.304 282.304 30.016 63.872 242.432 63.872 506.304c0 69.248 15.04 134.976 42.048 193.984 29.248 64.064 16.064 139.712-32.512 190.528L5.376 961.792c-3.264 3.392-0.832 9.088 3.84 9.088h475.648l-0.32-1.856c13.376 1.28 26.88 1.856 40.512 1.856 261.952 0 472.832-219.968 460.672-486.528z m-274.688 68.48c17.664 0 32 14.336 32 32 0 8.832-3.584 16.832-9.344 22.592-5.824 5.824-13.824 9.408-22.656 9.408H621.76v89.216c0 17.728-14.336 32-32 32a31.872 31.872 0 0 1-22.592-9.344 31.8144 31.8144 0 0 1-9.408-22.656V616.832h-91.52v89.216c0 17.728-14.336 32-32 32a31.872 31.872 0 0 1-22.592-9.344 31.8144 31.8144 0 0 1-9.408-22.656V616.832H312.96c-17.664 0-32-14.336-32-32 0-8.832 3.584-16.832 9.344-22.592 5.824-5.824 13.824-9.408 22.656-9.408h89.28V461.248H312.96c-17.664 0-32-14.336-32-32 0-8.832 3.584-16.832 9.344-22.656 5.824-5.76 13.824-9.344 22.656-9.344h89.28V308.032c0-17.664 14.336-32 32-32 8.832 0 16.832 3.584 22.592 9.344 5.824 5.824 9.408 13.824 9.408 22.656v89.216h91.52V308.032c0-17.664 14.336-32 32-32 8.832 0 16.832 3.584 22.592 9.344 5.824 5.824 9.408 13.824 9.408 22.656v89.216h89.28c17.664 0 32 14.336 32 32 0 8.832-3.584 16.832-9.344 22.656-5.824 5.76-13.824 9.344-22.656 9.344H621.76v91.584h89.28z m-244.8 0h91.52V461.248h-91.52v91.584z" fill="#666666" p-id="2188"></path>
            </svg>
          </div>
          <div class="topicTitle"><h2>{{title}}</h2></div>
          <div class="topicFollow">
            <el-button type="success" plain @click="concern()">关注话题</el-button>
          </div>
        </div>
        <div class="topicCounter">
          {{contentNum}}篇内容・{{followerNum}}人关注
        </div>
        <div class="topicWord">
          {{content}}
        </div>
        <ul class="topicFoot">
          <li class="topicFootItem">
            <img src="../../assets/write@2x.png" class="topicFootCommentIcon">
            <el-button plain id="button1" @click="write">写点什么</el-button>
          </li>
          <li class="topicFootItem">
            <img src="../../assets/pic.png" class="topicFootCommentIcon">
            <!-- <a href="#" class="topicFootCommentTag">发图片</a> -->
            <el-button plain id="button1" @click="write">发图片</el-button>
          </li>
          <li class="topicFootItem topicFootLast">
            <img src="../../assets/diary@2x.png" class="topicFootCommentIcon">
            <!-- <a href="#" class="topicFootCommentTag ">写日记</a> -->
           <el-button plain id="button1" @click="write">写日记</el-button>
          </li>
        </ul>
      </div>
      <!-- 点击写点什么 发图片 写日记 就跳转到此页面 -->
      <div v-show="scene==1" class="topicContent2">

          <!-- <el-form ref="form" :model="form" label-width="80px">
              <el-form-item label="写点什么">
                <el-input type="textarea" v-model="writeText"></el-input>
                <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">发布</el-button>
              </el-form-item>
              </el-form>

         <el-upload
        class="upload-demo"
        ref="upload"
        headers="token"
        action="http://39.105.102.182:8080/api/topic"
        :on-preview="handlePreview"
        :on-remove="handleRemove"
        :file-list="fileList"
        :auto-upload="false"
        :data="resData"
        list-type="picture-card"
        >
        <el-button slot="trigger" size="small" type="primary" >选取文件</el-button>
        <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
      </el-upload> -->
      <editor2></editor2>

      </div>
      <div class="topicTransition">
        <span class="topicTransitionLeft" :class="classHot" @click="change(0)">热门</span>
        <span class="topicTransitionSlash" >  /  </span>
        <span class="topicTransitionLeft" :class="classNew" @click="change(1)">最新</span>
        <span class="topicTransitionRight">共{{contentNum}}篇内容</span>
      </div>
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
import editor from '@/views/group/editor.vue';
import editor2 from "./editor.vue"
export default {
  components: { editor,editor2 },
  data(){
    return {
      classHot: 'topicNow',
      classNew: 'topicWait',
      state: 0,
      tid:0,
      title: '中国文学史上最激动人心的相遇',
      contentNum: 2,
      followerNum: 2,
      content:'闻一多称，李白、杜甫的相遇，是日月相会。“四千年的历史里，除了孔子见老子，没有比这两人的会面，更重大，更神圣，更可纪念的。”',
      forums: [
        
      ],
      scene:0,//跳转到写评论,
      writeText:"",//绑定写的评论内容
      fileList:[{name:'a', url:'*'}],
      resData:{uid:this.$store.state.Guid},
      
    }
  },
  props:{
    topicId:0
  },
  created(){
    this.tid=this.$route.query.tid;
    this.getData(this.tid);
  }
  ,
  methods: {
    changeheight(id)
    {
      console.log("show")
        var li=document.getElementById(id);
        li.style.height="auto"

    },
    write(){
        if(this.scene===1) this.scene=0;
        else this.scene=1;
    },
    thumb(index){
      this.forums[index].thumb++;
      // 点赞后需要更新发布的赞数，传输数据为话题id， 点赞人id， 新的点赞总数
      var post_data = {tid:this.topicId, fid:this.forums[index].id, thumb:this.forums[index].thumb}
      this.$axios({
        method:'post', 
        url:'/api/group/listdiscuss',
        data:qs.stringify(post_data)
      }).then(res=>{
        console.log(res.data)//打印返回数据
        
      })
    },
    getData(tid)
    { 
        var url="/api/topic/message_get"
        
        console.log("tid"+tid);
        this.$axios.post(url,{tid:parseInt(tid)}).then
        (res=>{
          
          this.tid=res.data.topic.id;
          this.content=res.data.topic.introduction;
          this.title=res.data.topic.title
          console.log(this.forums)
        });

        var url2="/api/group/listdiscuss"
        this.$axios.post(url2,{tid:parseInt(tid)}).then
        (res=>{
            this.forums=res.data.listDiscuss;
          for(var i=0;i<this.forums.length;i++)
          {
            this.forums[i].src=this.$hostURL+'/'+this.forums[i].src
          }
        }
        )
    },
    change(opt){
      if(opt == 0){
        this.classHot = 'topicNow';
        this.classNew = 'topicWait';
      }
      else {
        this.classHot = 'topicWait'
        this.classNew = 'topicNow';
      }
    },
    concern(){
    //关注话题功能， 向后端传：正在登录用户id， 被关注的话题id, 绑定
    var post_data={uid:this.$store.state.Guid, tid:this.topicId}
    this.$axios({
        method:'post', 
        url:'/api',
        data:qs.stringify(post_data)
      }).then(res=>{
        console.log(res.data)//打印返回数据
      })
    },
    
    //查看图片处理结果
    handleRemove(file, fileList) {
          console.log("remove",file, fileList);
        },
    handlePreview(file) {
          console.log("preview",file);
    },
    // 提交的用户发布帖子，文本和图片
    submitUpload() {
      //这个是用的element ui的upload功能完成的，他包含了上传功能，具体传可再商量
          this.$refs.upload.submit();
          console.log(this.fileList)
          var post_data={uid:this.$store.state.Guid, text:this.writeText};//发布用户id和文本
          this.$axios({
            method:'post', 
            url:'/api',
            data:qs.stringify(post_data)
          }).then(res=>{
            console.log(res.data)//打印返回数据
          })
        },
  },
  
}
</script>

<style scoped >
li{
  vertical-align: middle;
}
.img{
  display: inline-block;
}
.content ::v-deep img{
  width: 60%;
}
.content ::v-deep {
  height: 100px;
  overflow: hidden;
}
#showIm{
 float: left;
}
#list{
float: left;
height: 100px;
background-color:#339933 ;
}
#button1{
  border: transparent;
}
.up{
  min-width: 500px;
  width: 100%;
}
/* 发布按钮 */
#b-up{
  float: left;

}
.input input{
  width: 100%;
  height: 100px;
}
</style>