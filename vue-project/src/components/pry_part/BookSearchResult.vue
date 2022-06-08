<!-- 电影搜索结果 -->
<template>
<div>
    <!-- {{msg}} -->

    <el-divider class="line"><i class="el-icon-search"></i></el-divider>
    <div id="crossLine">{{msg}}的搜索结果</div>
    <el-divider class="line"><i class="el-icon-search"></i></el-divider>
    <div id="img-show" v-for="img in imageResult1.slice(
          (currentPage - 1) * pageSize,
          currentPage * pageSize
        )">
        <div class="item-root">
            <!-- <a href="" class="a-img">
                <img :src="img.src" alt="" @click="clickMv(img.name, 2)">
            </a> -->
            <img :src="img.src" alt="" @click="clickMv(img.bookname, 2)">
        </div>
        <div class="detail">
            <div>

                <div @click="clickMv(img.bookname, 2)">名字:{{img.bookname}}</div>
            </div>
            <div>
                <el-rate
                v-model="img.score/2"
                disabled
                show-score
                text-color="#EA7500"
                score-template="评分">
                </el-rate>
            </div>
            <div>
                <p>作者：{{img.author}}
                </p>
                <p>出版社：{{img.press}}</p>
            </div>
        </div>
    </div>
    <el-pagination
        background
        layout="prev, pager, next"
        :page-size="pageSize"
        :current-page="currentPage"
        @current-change="currentChange"
        :total="imageResult.length"
         >
      </el-pagination>
</div>
</template>
<script>
export default {
   data(){
        return{
            //msg:"的",

           isClass: false,
            currentPage: 1,
            pageSize: 9,
            imageResult:[
                {path:require('./images/one.jpg'),
                name:"pic1",
                score:1,
                message:"123"},

            ],

        }
    },
    props:{
        msg:String,//从父组件获取的值
        imageResult1:Array
    },
   created(){
       var url='/api/movie/moviesearch';
       console.log("have created search");
       this.$axios.post(url,
                toString(this.msg),
                {
                        headers: {
                      'Content-Type':'application/text'
                    }
                }
            ).then(res => {
            console.log(res.data);
            this.imageResult=res.data.messages;
        })
   },
   methods:{
       currentChange(val) {

        this.currentPage = val;

        },
        clickMv(val1, val2){

           console.log(val2);
            this.$emit('change', val1, val2);//子组件给父组件传值，事件为change
        },
        getArr(arr){
            this.imageResult1=arr;
        }
   }

}
</script>
<style>

#crossLine{ 
    height: 70px;
    text-align: center;
    color: aliceblue;
    line-height: 70px;
    font-size: 20px;
    background: url("./images/back1.jpg");
    background-size: 100%, 100%;
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
    width: 110px;
    max-height: 90%;
    vertical-align: middle;
    margin-left: 30px;
}
#img-show .detail{

    margin-top: 4px;
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