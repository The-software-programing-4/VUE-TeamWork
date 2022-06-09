<!-- 电影搜索结果 -->
<template>
<div>
    <!-- {{msg}} -->
    
    <el-divider class="line"><i class="el-icon-search"></i></el-divider>
    <div id="mvscrossLine"></div>
    <el-divider class="line"><i class="el-icon-search"></i></el-divider>
    <div id="img-show" v-for="img in imageResult.slice(
          (currentPage - 1) * pageSize,
          currentPage * pageSize
        )">
        <div class="item-root">
            <img :src="img.src" alt="" @click="toinfo(img.mid)">
        </div>
        <div class="detail">
            <div>

                <div @click="toinfo(img.mid)">名字:{{img.name}}</div>
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
                <p>主演：{{img.actors}}
                </p>
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
           searchText:'123',
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
   created(){
       var url='/api/movie/moviesearch';
        this.searchText=this.$route.query.searchText;
       console.log("have created search"+this.searchText);
       this.$axios.post(url,
                this.searchText,
                {
                        headers: {
                      'Content-Type':'application/text'
                    }
                }
            ).then(res => {
            console.log("电影搜索结果："+res.data.messages);
            this.imageResult=res.data.messages;
            for(var i=0;i<this.imageResult.length;i++)
            {
                this.imageResult[i].src=this.$hostURL+'/'+this.imageResult[i].src
                console.log(this.$hostURL)
            }
        })
   },
   methods:{
       toinfo(mid){
           this.$router.push(
               {
                   path:"/movie/info",
                   query:{mid:mid}
               }
           )
       },
       currentChange(val) {
        // alert(val)
        this.currentPage = val;
        // alert(this.currentPage);
        },
        clickMv(val1, val2){
           // alert(val1+val2);
           console.log(val2);
            this.$emit('change', val1, val2);//子组件给父组件传值，事件为change
        },
        getArr(arr){
            this.imageResult1=arr;
        }
   },

}
</script>
<style scoped>

#mvscrossLine{ 
    height: 70px;
    text-align: center;
    color: aliceblue;
    line-height: 70px;
    font-size: 20px;
    background: url("../imgs/moviesearch.jpg");
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