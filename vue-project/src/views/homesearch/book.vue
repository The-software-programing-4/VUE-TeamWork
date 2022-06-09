<!-- 图书搜索结果 -->
<template>
<div>
    <el-collapse accordion v-model="name">
    <el-collapse-item :name="1">
     <template slot="title">
    <div style="font-size:20px;text-align:left; width: 100%;">豆酱相关图书内容</div>
    <div style="font-size:18px;width:100%;text-align:left;" v-show="imageResult.length==0">无相关内容
    <el-button class="share-button" icon="el-icon-share"  style="border: transparent;font-size:18px;color: blue;" @click="jump">去主页看看</el-button>
    </div>
    <!-- <el-divider><i class="el-icon-mobile-phone"></i></el-divider> -->
    </template>
    <div id="img-show" v-for="img in imageResult">
        <div class="item-root">
            <img :src="img.src" alt="" @click="clickMv(img.book_id, 2)">
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
    </el-collapse-item>
    </el-collapse>
</div>
</template>
<script>
export default {
   data(){
        return{
            name:1,
            //msg:"的",
            searchText:'',
           isClass: false,
            currentPage: 1,
            pageSize: 9,
            imageResult:[

            ],
            len:0,

        }
    },
   created(){
        this.searchText=this.$route.query.searchText;
       var url='/api/book/booksearch';
       console.log("have created search book:"+this.searchText);
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
        });
        len=this.imageResult.length;
        console.log("长度："+this.len);
   },
   methods:{
       currentChange(val) {

        this.currentPage = val;

        },
        clickMv(val1){
            console.log("bookId:"+val1);
           this.$router.push(
                {
                    path:"/book/bookInfo",
                    query:{bookid:val1}
                }
            )
        },
        getArr(arr){
            this.imageResult1=arr;
        },
        jump(){
            this.$router.push(
                {
                    path:"/book/main",
                }
            )
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
    /* background: url("./images/back1.jpg"); */
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