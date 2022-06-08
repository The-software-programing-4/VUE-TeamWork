<template>

    <div id="images-show">
        <el-divider class="line"><i class="el-icon-sugar"></i></el-divider>
        <div id="crossLine1">畅销图书</div>
        <el-divider class="line"><i class="el-icon-sugar"></i></el-divider>
      <!-- <el-button type="success" icon="el-icon-sunny" class="newest">最新热映</el-button> -->
    <el-carousel :interval="4000" type="card" height="350px"  wight="200px">
      <el-carousel-item v-for="img in imgList" :key="img.mid">
        <img :src="img.src" class="image" style="height:90%;" @click="clickMv(img.book_id, 2)">
        <div class="picshow">
        {{img.name}}
          </div>
      </el-carousel-item>
    </el-carousel>
    <el-divider class="line"><i class="el-icon-sunny"></i></el-divider>
        <div id="crossLine2">新书速递</div>
    <el-divider class="line"><i class="el-icon-sunny"></i></el-divider>
        <div class="choose-page">
            <button @click.stop="showbox=1">全部</button>
            <button @click.stop="showbox=2">文学</button>
            <button @click.stop="showbox=3">小说</button>
            <button @click.stop="showbox=4">历史文化</button>
             <button @click.stop="showbox=5">社会纪实</button>
              <button @click.stop="showbox=5">科学新知</button>
               <button @click.stop="showbox=5">商业经营</button>
               <button @click.stop="showbox=5">绘本漫画</button>
        </div>
        <el-divider class="line"><i class="el-icon-sugar"></i></el-divider>
          <el-pagination
            background
            layout="prev, pager, next"
            :page-size="pageSize"
            :current-page="currentPage"
            @current-change="currentChange"
            :total="idoLists.length"
            >
            </el-pagination>
        <div class="image-pages" style="height:500px">
            <!-- 放对影片详细介绍的网址 -->
            <div v-for='img in imgList.slice(
          (currentPage - 1) * pageSize,
          currentPage * pageSize
        )' href=""  class="item"  style="height:230px;width: 20% ;float:left;margin-left: 4%;margin-bottom: 10px;">
                <div class="image-div" style="width:100% height:80%">
                    <!-- <img :src="isrc"/> -->
                     <img :src="img.src" class="image" @click="clickMv(img.book_id, 2)" style="width:70%; height:90%">
                    <!-- <el-image
                        style=" height: 100%"
                        :src="isrc"
                        :fit="fit" @click="clickMv(img.name, 2)"></el-image> -->
                </div>
                <p style="width:100%; height:10%">
                    {{img.name}}
                </p>
            </div>
        </div>
       <el-divider class="line"><i class="el-icon-sugar"></i></el-divider>
        <div id="crossLine3">最受欢迎的书评</div>
        <el-divider class="line"><i class="el-icon-sugar"></i></el-divider>
        

    </div>
    
</template>
<script>

export default {
    data(){
        return{
            showbox:1,
            // showClass:"imsrc1",
            isClass: false,
            currentPage: 1,
            pageSize: 8,
            url:"",
            // 轮播图使用的图片列表
            imgList:[
            //imagebox是assets下一个放图片的文件夹
            ],
            idoLists:[
            ],
            str:'a'
        }
    },
    methods:{
        turnUrl(src){
            return require(src);
        },
        getPhoto(){
            var url='/api/book/listBook';
            console.log("start");
    
            this.$axios.post(
                url,
                this.str
            )
            .then(
                res=>{
                    this.imgList=res.data.messages;
                    console.log(res.data.messages);
                    for(var i=0;i<res.data.messages.length;i++)
                    {
                        var temp=res.data.messages[i];
                        this.imgList[i].src=this.$hostURL+'/'+temp.src;
                    }
                }
            )
            // .catch(err => {              
            //     console.log(err);
            // })
        },
        currentChange(val){
        // alert(val)
        this.currentPage = val;
        // alert(this.currentPage);
        },
        clickMv(val1, val2){
        //    alert(val1, val2);
        console.log("bookId:"+val1)
           this.$router.push(
                {
                    path:"/book/bookInfo",
                    query:{bookid:val1}
                }
            )
        },
        
    },
    
    created(){
        //请求初始化图片链接
        this.getPhoto();
    },
    
}
</script>
<style>
#crossLine1{ 
    height: 70px;
    text-align: center;
    line-height: 70px;
    color: #097262;
    font-size: 20px;
    background: url("../pry_part/images/yellow9.jpg");
    background-size: 100%, 100%;
}
#crossLine2{ 
    height: 70px;
    text-align: center;
    line-height: 70px;
    font-size: 20px;
    color: #097262;
    background: url("../pry_part/images/yellow5.jpg");
    background-size: 100%, 100%;
}
#crossLine3{ 
    height: 70px;
    text-align: center;
    line-height: 70px;
    font-size: 20px;
    color: #097262;
    background: url("../pry_part/images/yellow8.jpg");
    background-size: 100%, 100%;
}
#images-show .choose-page{
    width: 100%;
    margin-bottom: 10px;
    margin-top:10px;
    height: 20px;
    font-size: 15px;
}
#images-show .choose-page button{
    text-align: center;
    background-color: #ffffff;
    border: transparent;
    margin-right: 5px;
    font-size: 15px;
    float: left;
    /* color: aliceblue; */
}
 #images-show{
     width: 100%;
     float: left;
 } 

 .el-carousel__item h3 {
      color: #475669;
      font-size: 14px;
      opacity: 0.75;
      line-height: 200px;
      margin: 0;
    }
    .image{
      max-height: 100%;
    } 
</style>