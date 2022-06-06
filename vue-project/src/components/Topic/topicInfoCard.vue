<template>
    <div class="TopicCard">
      <div class="topicContent" v-show="scene==0">
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
            <el-button plain id="button1">写点什么</el-button>
          </li>
          <li class="topicFootItem">
            <img src="../../assets/pic.png" class="topicFootCommentIcon">
            <!-- <a href="#" class="topicFootCommentTag">发图片</a> -->
            <el-button plain id="button1">发图片</el-button>
          </li>
          <li class="topicFootItem topicFootLast">
            <img src="../../assets/diary@2x.png" class="topicFootCommentIcon">
            <!-- <a href="#" class="topicFootCommentTag ">写日记</a> -->
           <el-button plain id="button1">写日记</el-button>
          </li>
        </ul>
      </div>
      <!-- 点击写点什么 发图片 写日记 就跳转到此页面 -->
      <div v-show="scene==1" class="topicContent">
          <!-- 文字内容 -->
          <el-form ref="form" :model="form" label-width="80px">
              <el-form-item label="写点什么">
                <el-input type="textarea" v-model="writeText"></el-input>
                <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">发布</el-button>
              </el-form-item>
              </el-form>
           <!-- 上传图片 -->
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
      </el-upload>


      </div>
      <div class="topicTransition">
        <span class="topicTransitionLeft" :class="classHot" @click="change(0)">热门</span>
        <span class="topicTransitionSlash" >  /  </span>
        <span class="topicTransitionLeft" :class="classNew" @click="change(1)">最新</span>
        <span class="topicTransitionRight">共{{contentNum}}篇内容</span>
      </div>
      <div class="topicComment">
        <ul>
          <li v-for="(item, index) in forums" class="commentItem">
            <div class="commentNav">
              <a href="#" class="commentUser">{{item.username}}</a>
              <span class="commentThumb">{{item.thumb}}
                <a @click="thumb(index)">{{item.isthumb}}</a>
              </span>
              <span class="commentDate">{{item.day}}</span>
            </div>
            <div>{{item.content}}</div>
          </li>
        </ul>
      </div>
    </div>
</template>

<script>
import "@/css/style.css";
export default {
  data(){
    return {
      classHot: 'topicNow',
      classNew: 'topicWait',
      state: 0,
      title: '中国文学史上最激动人心的相遇',
      contentNum: 2,
      followerNum: 2,
      content:'闻一多称，李白、杜甫的相遇，是日月相会。“四千年的历史里，除了孔子见老子，没有比这两人的会面，更重大，更神圣，更可纪念的。”',
      forums: [
        {
          id: 1,//帖子id
          username: 'ando',//发布者姓名
          topicname:'abc',//所属话题名字
          uid:"",
          tid:"",
          content: '民国时期的经济环境居然已经如此丰富多彩了，什么商业竞争之类的应有尽有。在克劳对于中国人的一些总结的确实一针见血，像要面子这种，不愧是在中国生活这么久的人。整体写作风格偏幽默，虽然实际当时中国人民的生活并没有克劳所描写的那么乐观，但在当时已经算超前的了。',
          thumb: 0,//点赞数量
          // thumbId:[1, 2, 3],//存储点赞用户id
          day: '2022.5.21 15:36:01', 
          imgList:["src", "src", "src"]

        },
        {
          id: 2,
          username: 'ando',
          content: '民国时期的经济环境居然已经如此丰富多彩了，什么商业竞争之类的应有尽有。在克劳对于中国人的一些总结的确实一针见血，像要面子这种，不愧是在中国生活这么久的人。整体写作风格偏幽默，虽然实际当时中国人民的生活并没有克劳所描写的那么乐观，但在当时已经算超前的了。',
          thumb: 0,
          reply: 0,
          day: '2022.5.21 15:36:01',
          isthumb: '点赞', 

        },
      ],
      scene:1,//跳转到写评论,
      writeText:"",//绑定写的评论内容
      fileList:[{name:'a', url:'*'}],
      resData:{uid:this.$store.state.Guid},
      
    }
  },
  props:{
    topicId:0
  },
  methods: {
    thumb(index){
      if(this.forums[index].isthumb == "点赞"){
        this.forums[index].thumb++;
        this.forums[index].isthumb = '已点赞'
      }
      else{
        this.forums[index].thumb--;
        this.forums[index].isthumb = '点赞'
      }
      // 点赞后需要更新发布的赞数，传会话题id， 发布id， 新的点赞数
      var post_data = {tid:this.topicId, fid:this.forums[index].id, thumb:this.forums[index].thumb}
      this.$axios({
        method:'post', 
        url:'/api',
        data:qs.stringify(post_data)
      }).then(res=>{
        console.log(res.data)//打印返回数据
      })
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
    //关注话题功能， 向后端传会用户id， 被关注的话题id
    var post_data={uid:this.$store.state.Guid, tid:this.topicId}
    this.$axios({
        method:'post', 
        url:'/api',
        data:qs.stringify(post_data)
      }).then(res=>{
        console.log(res.data)//打印返回数据
      })
    },
    write(){
      //跳转到写评论，传图片页面
      this.scene=1;
    },
    //查看图片处理结果
    handleRemove(file, fileList) {
          console.log("remove",file, fileList);
        },
    handlePreview(file) {
          console.log("preview",file);
    },
    submitUpload() {
          this.$refs.upload.submit();
          console.log(this.fileList)
          var post_data={uid:this.$store.state.Guid, text:this.writeText};
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

<style>
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