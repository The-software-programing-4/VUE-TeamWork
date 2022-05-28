<template>
<div>
    <!-- {{msg}} -->
    <el-divider class="line"><i class="el-icon-search"></i></el-divider>
    <div id="crossLine">{{mag}}搜索结果</div>
    <el-divider class="line"><i class="el-icon-search"></i></el-divider>
    <div id="img-show" v-for="img in imageResult.slice(
          (currentPage - 1) * pageSize,
          currentPage * pageSize
        )">
        <div class="item-root">
            <a href="" class="a-img">
                <img :src="img.path" alt="">
            </a>
        </div>
        <div class="detail">
            <div>
                <a href="">名字:{{img.name}}</a>
            </div>
            <div>
                <el-rate
                v-model="img.score"
                disabled
                show-score
                text-color="#EA7500"
                score-template="评分">
                </el-rate>
            </div>
            <div>
                <p>简介：123456789asdfghj从那时的擦的撒谎曾经我饿了能吃三餐都是你出生到成年的赛道你问
                    简介：123456789asdfghj从那时的擦的撒谎曾经我饿了能吃三餐都是你出生到成年的赛道你问
                    简介：123456789asdfghj从那时的擦的撒谎曾经我饿了能吃三餐都是你出生到成年的赛道你问
                    简介：123456789asdfghj从那时的擦的撒谎曾经我饿了能吃三餐都是你出生到成年的赛道你问
                    简介：123456789asdfghj从那时的擦的撒谎曾经我饿了能吃三餐都是你出生到成年的赛道你问
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
           // msg:'123',
           isClass: false,
            currentPage: 1,
            pageSize: 9,
            imageResult:[
                {path:require('./images/one.jpg'),
                name:"pic1",
                score:1},
                {path:require('./images/back8.jpg'),
                name:"pic2",
                score:2},
                {path:require('./images/back9.jpg'),
                name:"pic3",
                score:3},
                 {path:require('./images/one.jpg'),
                name:"pic1",
                score:1},
                {path:require('./images/back4.jpg'),
                name:"pic2",
                score:2},
                {path:require('./images/back6.jpg'),
                name:"pic3",
                score:3},
                {path:require('./images/back5.jpg'),
                name:"pic1",
                score:1},
                {path:require('./images/back1.jpg'),
                name:"pic2",
                score:2},
                {path:require('./images/one.jpg'),
                name:"pic3",
                score:3},
                {path:require('./images/back2.jpg'),
                name:"pic1",
                score:1},
                {path:require('./images/one.jpg'),
                name:"pic2",
                score:2},
                {path:require('./images/one.jpg'),
                name:"pic3",
                score:3},
                {path:require('./images/back9.jpg'),
                name:"pic3",
                score:3},
                 {path:require('./images/one.jpg'),
                name:"pic1",
                score:1},
                {path:require('./images/back4.jpg'),
                name:"pic2",
                score:2},
                {path:require('./images/back6.jpg'),
                name:"pic3",
                score:3},
                {path:require('./images/back5.jpg'),
                name:"pic1",
                score:1},
                {path:require('./images/back1.jpg'),
                name:"pic2",
                score:2},
                {path:require('./images/one.jpg'),
                name:"pic3",
                score:3},
                {path:require('./images/back2.jpg'),
                name:"pic1",
                score:1},
                {path:require('./images/one.jpg'),
                name:"pic2",
                score:2},
                {path:require('./images/one.jpg'),
                name:"pic3",
                score:3}
            ],

        }
    },
    props:{
        msg:String//从父组件获取的值
    },
   created(){
       axios.post(url,
                    this.msg//提交的是搜索框内容
            ).then(res => {
            console.log(res);
            alert("更新成功！")
            
        })
   },
   methods:{
       currentChange(val) {
        // alert(val)
        this.currentPage = val;
        // alert(this.currentPage);
        },
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
#img-show .item-root a img{
    width: 110px;
    max-height: 180px;
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