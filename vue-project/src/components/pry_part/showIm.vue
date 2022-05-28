<template>

    <div id="images-show">
        <el-divider class="line"><i class="el-icon-sugar"></i></el-divider>
        <div id="crossLine1">最新热映</div>
        <el-divider class="line"><i class="el-icon-sugar"></i></el-divider>
      <!-- <el-button type="success" icon="el-icon-sunny" class="newest">最新热映</el-button> -->
    <el-carousel :interval="4000" type="card" height="250px" wight="100px">
      <el-carousel-item v-for="img in imgList" :key="img.mid">
        <img :src="img.src" class="image" @click="clickMv(img.name, 2)">
      </el-carousel-item>
    </el-carousel>
    <el-divider class="line"><i class="el-icon-sunny"></i></el-divider>
        <div id="crossLine2">热门电影</div>
    <el-divider class="line"><i class="el-icon-sunny"></i></el-divider>
        <div class="choose-page">
            <button @click.stop="showbox=1">全部</button>
            <button @click.stop="showbox=2">热门</button>
            <button @click.stop="showbox=3">最新</button>
            <button @click.stop="showbox=4">豆酱高分</button>
             <button @click.stop="showbox=5">冷门佳片</button>
              <button @click.stop="showbox=5">华语</button>
               <button @click.stop="showbox=5">欧美</button>
               <button @click.stop="showbox=5">韩国</button>
               <button @click.stop="showbox=5">日本</button>
        </div>
        <el-divider class="line"><i class="el-icon-sugar"></i></el-divider>
        <div class="image-page" >
            <!-- 放对影片详细介绍的网址 -->
            <div v-for='img in imgList.slice(
          (currentPage - 1) * pageSize,
          currentPage * pageSize
        )' href=""  class="item" >
                <div class="image-div">
                    <!-- <img :src="isrc"/> -->
                     <img :src="img.src" class="image" @click="clickMv(img.name, 2)">
                    <!-- <el-image
                        style=" height: 100%"
                        :src="isrc"
                        :fit="fit" @click="clickMv(img.name, 2)"></el-image> -->
                </div>
                <p>
                    当前页{{currentPage}}{{img.name}}
                </p>
            </div>
        </div>
         <el-pagination
        background
        layout="prev, pager, next"
        :page-size="pageSize"
        :current-page="currentPage"
        @current-change="currentChange"
        :total="idoLists.length"
         >
      </el-pagination>

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
            pageSize: 6,
            url:"",
            // 轮播图使用的图片列表
            imgList:[
                {mid:1,
    src:require('./images/one.jpg'),
                name:"pic1",
                score:1},
                {mid:2,
    src:require('./images/back8.jpg'),
                name:"pic2",
                score:2},
                {mid:3,
    src:require('./images/back9.jpg'),
                name:"pic3",
                score:3},
                 {mid:5,
        src:require('./images/one.jpg'),
                name:"pic1",
                score:1},
                {mid:7,
    src:require('./images/back4.jpg'),
                name:"pic2",
                score:2},
                {
                mid:8,
    src:require('./images/back6.jpg'),
                name:"pic3",
                score:3},
                {mid:9,
    src:require('./images/back5.jpg'),
                name:"pic1",
                score:1},
                {mid:11,
    src:require('./images/back1.jpg'),
                name:"pic2",
                score:2},
                {mid:13,
    src:require('./images/one.jpg'),
                name:"pic3",
                score:3},
            //imagebox是assets下一个放图片的文件夹
            ],
            idoLists:[
                {mid:1,

    src:require('./images/one.jpg'),
                name:"pic1",
                score:1},
                {mid:2,
    src:require('./images/back8.jpg'),
                name:"pic2",
                score:2},
                {mid:3,
    src:require('./images/back9.jpg'),
                name:"pic3",
                score:3},
                 {mid:5,
        src:require('./images/one.jpg'),
                name:"pic1",
                score:1},
                {mid:7,
    src:require('./images/back4.jpg'),
                name:"pic2",
                score:2},
                {
                mid:8,
    src:require('./images/back6.jpg'),
                name:"pic3",
                score:3},
                {mid:9,
    src:require('./images/back5.jpg'),
                name:"pic1",
                score:1},
                {mid:11,
    src:require('./images/back1.jpg'),
                name:"pic2",
                score:2},
                {mid:13,
    src:require('./images/one.jpg'),
                name:"pic3",
                score:3},
            ],
        }
    },
    methods:{
        turnUrl(src){
            return require(src);
        },
        getPhoto(){
            var url='/api/movie/listmovie';
            console.log("start");

            this.$axios.post(
                url,
                "123"
            )
            .then(
                res=>{
                    this.imgList=res.data.messages;
                    console.log(res.messages);
                    var str="http://39.105.102.182:8080/";
                    for(var i=0;i<this.imgList.length;i++)
                    {
                        var temp;
                        temp=res.data.messages[i].src;
                        temp=str+temp;
                        this.imgList[i].src=temp;
                        //console.log(temp);
                    }
                    console.log(this.imgList.length);
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
           // alert(val1+val2);
           console.log(val2);
            this.$emit('change', val1, val2);//子组件给父组件传值，事件为change
        }
        
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
    color: #ffffff;
    font-size: 20px;
    background: url("./images/back1.jpg");
    background-size: 100%, 100%;
}
#crossLine2{ 
    height: 70px;
    text-align: center;
    line-height: 70px;
    font-size: 20px;
    background: url("./images/back2.jpg");
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
     /* background:url("./images/back1.jpg");
     background-size:100% 100%; */

     /* background-color: gray; */
 } 
 #images-show .image-page{
     width: 100%;
     height: 900px;
 }
 #images-show .image-page .item{
     display: block;
     float: left;
     font-size: 15px;
     text-align: center;
     margin-right: 3%;
     /* margin-bottom: 10px; */
     width: 30%;
     height: 300px;
     
 }
 #images-show .image-page .item .image-div{
     height: 80%;
     width: 100%
 }
 #images-show .image-page .item img{
     max-width: 100%;
     max-height: 100%;
     vertical-align: middle;
     
 }
 #images-show .image-page a p{
     margin-top: 5%;
     height: 15%;
     text-align: center;
     color: black;
 }
 .el-carousel__item h3 {
      color: #475669;
      font-size: 14px;
      opacity: 0.75;
      line-height: 200px;
      margin: 0;
    }

    /* .el-carousel__item:nth-child(2n) {
      background-color: #272727;
      
    }

    .el-carousel__item:nth-child(2n+1) {
      background-color: #3c3c3c;
    }*/
    .image{
      max-height: 100%;
    } 
</style>