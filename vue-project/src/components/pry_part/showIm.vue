<template>

    <div id="images-show">
        <el-divider class="line"><i class="el-icon-sugar"></i></el-divider>
        <div id="crossLine1">最新热映</div>
        <el-divider class="line"><i class="el-icon-sugar"></i></el-divider>
      <!-- <el-button type="success" icon="el-icon-sunny" class="newest">最新热映</el-button> -->
    <el-carousel :interval="4000" type="card" height="250px" wight="100px">
      <el-carousel-item v-for="item in imgList" :key="item.id">
        <img :src="item.idView" class="image">
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
        <el-pagination
        background
        layout="prev, pager, next"
        :page-size="pageSize"
        :current-page="currentPage"
        @current-change="currentChange"
        :total="idoLists.length"
         >
      </el-pagination>
        <div class="image-page" >
            <!-- 放对影片详细介绍的网址 -->
            <a v-for='img in idoLists.slice(
          (currentPage - 1) * pageSize,
          currentPage * pageSize
        )' href="" target="_blank" class="item">
                <div class="image-div">
                    <!-- <img :src="img.path"/> -->
                    <el-image
                        style=" height: 100%"
                        :src="img.path"
                        :fit="fit"></el-image>
                </div>
                <p>
                    当前页{{currentPage}}
                </p>
            </a>
        </div>
        <div class="block">
    
</div>
    </div>
    
</template>
<script>
export default {
    data(){
        return{
            showbox:1,
            isClass: false,
            currentPage: 1,
            pageSize: 9,
            imagePath1:[
                {path:require('./images/one.jpg')},
                {path:require('./images/one.jpg')},
                {path:require('./images/one.jpg')},
                {path:require('./images/one.jpg')},
                {path:require('./images/one.jpg')},
                {path:require('./images/one.jpg')},
                {path:require('./images/one.jpg')},
                {path:require('./images/one.jpg')},
                {path:require('./images/one.jpg')},
                {path:require('./images/one.jpg')},
                {path:require('./images/one.jpg')}
            ],
            imagePath2:[
                {path:require('./images/two.jpg')},
                {path:require('./images/two.jpg')},
                {path:require('./images/one.jpg')},
                {path:require('./images/one.jpg')},
                {path:require('./images/one.jpg')},
                {path:require('./images/one.jpg')}
            ],
            // 轮播图使用的图片列表
            imgList:[
            {id:0,idView:require('./images/one.jpg')},
            {id:1,idView:require('./images/two.jpg')},
            {id:2,idView:require('./images/one.jpg')},
            {id:0,idView:require('./images/one.jpg')},
            {id:1,idView:require('./images/two.jpg')},
            {id:2,idView:require('./images/one.jpg')}
            //imagebox是assets下一个放图片的文件夹
            ],
            idoLists:[
                {path:require('./images/two.jpg')},
                {path:require('./images/back1.jpg')},
                {path:require('./images/one.jpg')},
                {path:require('./images/one.jpg')},
                {path:require('./images/one.jpg')},
                {path:require('./images/back2.jpg')},
                {path:require('./images/two.jpg')},
                {path:require('./images/two.jpg')},
                {path:require('./images/one.jpg')},
                {path:require('./images/one.jpg')},
                {path:require('./images/two.jpg')},
                {path:require('./images/back4.jpg')},
                {path:require('./images/one.jpg')},
                {path:require('./images/one.jpg')},
                {path:require('./images/back9.jpg')},
                {path:require('./images/back6.jpg')},
                {path:require('./images/two.jpg')},
                 {path:require('./images/one.jpg')},
                {path:require('./images/one.jpg')},
                {path:require('./images/two.jpg')},
                {path:require('./images/back8.jpg')},
                {path:require('./images/one.jpg')},
                {path:require('./images/one.jpg')},
                {path:require('./images/back5.jpg')},
                {path:require('./images/one.jpg')}
            ],
        }
    },
    methods:{
        getPhoto(){
        this.$axios.get("/api/user/ImgPath").then(res=>{
         //控制台打印
        console.log(res.data);
        //对数据初始化
        if(res.data.imagePath1!=null) this.imagePath1=res.data.imagePath1;
        if(res.data.imagePath2!=null) this.imagePath2=res.data.imagePath2;})
        },
        currentChange(val) {
        // alert(val)
        this.currentPage = val;
        // alert(this.currentPage);
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
}
#images-show .choose-page button{
    text-align: center;
    background-color: #ffffff;
    border: transparent;
    margin-right: 5px;
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
 }
 #images-show .image-page a{
     display: block;
     float: left;
     font-size: 13px;
     text-align: center;
     margin-right: 30px;
     margin-bottom: 10px;
     width: 220px;
     height: 300px;
     
 }
 #images-show .image-page a .image-div{
     height: 80%;
     width: 100%
 }
 #images-show .image-page a img{
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