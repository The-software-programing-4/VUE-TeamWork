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
            <div slot="header" class="clearfix">
                <span>话题卡片</span>
                <el-button style="float: right; padding: 3px 0" type="text" @click="clickMv(topic.id, 2)">加入话题</el-button>
            </div>
            <div class="text item">
               话题名称{{topic.name}}，第{{currentPage}}页
            </div>
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
        <div id="crossLine2">我关注的话题的动态</div>
    <el-divider class="line"><i class="el-icon-sunny"></i></el-divider>
    <!-- 话题展示 -->
        <div id="img-show" v-for="topic in topicList">
            <div class="item-root">
                    <img :src="topic.src" alt=""  @click="clickMv(topic.id, 2)">
            </div>
            <div class="detail">
                <div>
                    <a href="">话题名字:{{topic.name}}</a>
                </div>
                <div>
                    <p>话题简介：
                        简介：123456789asdfghj从那时的擦的撒谎曾经我饿了能吃三餐都是你出生到成年的赛道你问
                        简介：123456789asdfghj从那时的擦的撒谎曾经我饿了能吃三餐都是你出生到成年的赛道你问
                        简介：123456789asdfghj从那时的擦的撒谎曾经我饿了能吃三餐都是你出生到成年的赛道你问
                        简介：123456789asdfghj从那时的擦的撒谎曾经我饿了能吃三餐都是你出生到成年的赛道你问
                        简介：123456789asdfghj从那时的擦的撒谎曾经我饿了能吃三餐都是你出生到成年的赛道你问
                    </p>
                </div>
            </div>
        </div>
    </div>

</template>
<script>
export default {
    data(){
        return{
            // showClass:"imsrc1",
            isClass: false,
            currentPage: 1,
            pageSize: 6,
            // 轮播图使用的图片列表
            topicList:[
                {id:1,
    src:require('./images/one.jpg'),
                name:"pic1",
                score:1},
                {id:2,
    src:require('./images/back8.jpg'),
                name:"pic2",
                score:2},
                {id:3,
    src:require('./images/back9.jpg'),
                name:"pic3",
                score:3},
                 {id:5,
        src:require('./images/one.jpg'),
                name:"pic1",
                score:1},
                {id:7,
    src:require('./images/back4.jpg'),
                name:"pic2",
                score:2},
                {
                id:8,
    src:require('./images/back6.jpg'),
                name:"pic3",
                score:3},
                {id:9,
    src:require('./images/back5.jpg'),
                name:"pic1",
                score:1},
                {id:11,
    src:require('./images/back1.jpg'),
                name:"pic2",
                score:2},
                {id:13,
    src:require('./images/one.jpg'),
                name:"pic3",
                score:3},
            //imagebox是assets下一个放图片的文件夹
            ],
        }
    },
    methods:{
        // getPhoto(){
        //      var url='/api/movie/listmovie';
        //     this.$axios.post(
        //         url,
        //         "123"
        //     )
        //     .then(
        //         res=>{
        //             this.imgList=res.data.messages
        //         }
        //     )
        //     .catch(err => {              
        //         console.log(err);
        //     })
        // },
        currentChange(val){
        // alert(val)
        this.currentPage = val;
        // alert(this.currentPage);
        },
        clickMv(val1, val2){
           // alert(val1+val2);
           console.log(val2);
            this.$emit('change', val1, val2);//子组件给父组件传值，事件为change
        }
        
    },
    
    // created(){
    //     //请求初始化图片链接
    //     this.getPhoto();
    // },
    
}
</script>
<style>
#topic{ 
    width: 100%;
    margin-top:30px ;
}
#crossLine1{ 
    height: 70px;
    text-align: center;
    line-height: 70px;
    color: #ffffff;
    font-size: 20px;
    background: url("./images/blue2.jpg");
    background-size: 100%, 100%;
}
#crossLine2{ 
    height: 70px;
    text-align: center;
    line-height: 50px;
    color: #ffffff;
    font-size: 20px;
    background: url("./images/blue5.jpg");
    background-size: 100%, 100%;
}
 /* card样式 */
 .text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
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
    width: 27%;
    float: left;
    height: 40%;
    margin-bottom:5% ;
    margin-right:3% ;
  }
  /* card样式结束 */
.topic-page{
    width: 100%;
    height: 400px;
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
#img-show{
    margin-top:30px;
    margin-bottom: 30px;
    width: 100%;
    height: 200px;
}
#img-show .item-root{
     width: 30%;
    max-height: 100%;
    /* margin-left: 30px; */
    float: left;
}
#img-show .item-root img{
    width: 50%;
    max-height: 50%;
    vertical-align: iddle;
    margin-left: 5%;
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
</style>