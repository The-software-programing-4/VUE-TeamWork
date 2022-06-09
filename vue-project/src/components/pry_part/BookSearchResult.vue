<!-- 图书搜索结果 -->
<template>
<div>
    <el-divider class="line"><i class="el-icon-search"></i></el-divider>
    <div id="crossLine">{{searchText}}的搜索结果</div>
    <el-divider class="line"><i class="el-icon-search"></i></el-divider>
    <div id="img-show" v-for="img in imageResult.slice(
          (currentPage - 1) * pageSize,
          currentPage * pageSize
        )">
        <div class="item-root">
            <img :src="img.src" alt="" @click="toinfo(img.book_id)">
        </div>
        <div class="detail">
            <div>

                <div @click="toinfo(img.book_id)">名字:{{img.bookname}}</div>
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
            searchText:'',
           isClass: false,
            currentPage: 1,
            pageSize: 9,
            imageResult:[

            ],

        }
    },
   created(){
        this.searchText=this.$route.query.searchText;
       var url='/api/book/booksearch';
       console.log("have created search"+this.searchText);
       this.$axios.post(url,
                this.searchText,
                {
                        headers: {
                      'Content-Type':'application/text'
                    }
                }
            ).then(res => {
            console.log("图书搜索结果"+res.data.messages);
            this.imageResult=res.data.messages;
            for(var i=0;i<this.imageResult.length;i++)
            {
                this.imageResult[i].src=this.$hostURL+'/'+this.imageResult[i].src
                console.log(this.$hostURL)
            }
        })
   },
   methods:{
       currentChange(val) {

        this.currentPage = val;

        },
        toinfo(id)
        {
            this.$router.push({
                path:"/book/bookinfo",
                query:{bookid:id}
            })
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
<style scoped>

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