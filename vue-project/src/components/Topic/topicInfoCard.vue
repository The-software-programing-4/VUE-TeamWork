<template>
    <div class="TopicCard">
      <div class="topicContent">
        <div class="topicNav">
          <div class="topicIcon">
            <svg t="1653735450692" class="icon topicIcon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2187" width="200" height="200"><path d="M466.24 461.248v91.584h91.52V461.248h-91.52z m519.488 23.104C974.784 246.4 783.104 53.248 546.88 42.304 282.304 30.016 63.872 242.432 63.872 506.304c0 69.248 15.04 134.976 42.048 193.984 29.248 64.064 16.064 139.712-32.512 190.528L5.376 961.792c-3.264 3.392-0.832 9.088 3.84 9.088h475.648l-0.32-1.856c13.376 1.28 26.88 1.856 40.512 1.856 261.952 0 472.832-219.968 460.672-486.528z m-274.688 68.48c17.664 0 32 14.336 32 32 0 8.832-3.584 16.832-9.344 22.592-5.824 5.824-13.824 9.408-22.656 9.408H621.76v89.216c0 17.728-14.336 32-32 32a31.872 31.872 0 0 1-22.592-9.344 31.8144 31.8144 0 0 1-9.408-22.656V616.832h-91.52v89.216c0 17.728-14.336 32-32 32a31.872 31.872 0 0 1-22.592-9.344 31.8144 31.8144 0 0 1-9.408-22.656V616.832H312.96c-17.664 0-32-14.336-32-32 0-8.832 3.584-16.832 9.344-22.592 5.824-5.824 13.824-9.408 22.656-9.408h89.28V461.248H312.96c-17.664 0-32-14.336-32-32 0-8.832 3.584-16.832 9.344-22.656 5.824-5.76 13.824-9.344 22.656-9.344h89.28V308.032c0-17.664 14.336-32 32-32 8.832 0 16.832 3.584 22.592 9.344 5.824 5.824 9.408 13.824 9.408 22.656v89.216h91.52V308.032c0-17.664 14.336-32 32-32 8.832 0 16.832 3.584 22.592 9.344 5.824 5.824 9.408 13.824 9.408 22.656v89.216h89.28c17.664 0 32 14.336 32 32 0 8.832-3.584 16.832-9.344 22.656-5.824 5.76-13.824 9.344-22.656 9.344H621.76v91.584h89.28z m-244.8 0h91.52V461.248h-91.52v91.584z" fill="#666666" p-id="2188"></path>
            </svg>
          </div>
          <div class="topicTitle"><h2>{{title}}</h2></div>
          <div class="topicFollow">
            <el-button type="success" plain>关注话题</el-button>
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
            <a href="#" class="topicFootCommentTag">写点什么</a>
          </li>
          <li class="topicFootItem">
            <img src="../../assets/pic.png" class="topicFootCommentIcon">
            <a href="#" class="topicFootCommentTag">发图片</a>
          </li>
          <li class="topicFootItem topicFootLast">
            <img src="../../assets/diary@2x.png" class="topicFootCommentIcon">
            <a href="#" class="topicFootCommentTag ">写日记</a>
          </li>
        </ul>
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
          id: 1,
          username: 'ando',
          content: '民国时期的经济环境居然已经如此丰富多彩了，什么商业竞争之类的应有尽有。在克劳对于中国人的一些总结的确实一针见血，像要面子这种，不愧是在中国生活这么久的人。整体写作风格偏幽默，虽然实际当时中国人民的生活并没有克劳所描写的那么乐观，但在当时已经算超前的了。',
          thumb: 0,
          reply: 0,
          day: '2022.5.21 15:36:01',
          isthumb: '点赞', 

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
      ]
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
    }
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
</style>