<template>
<div>
    <!-- {{msg}} -->
    <div id="img-show" v-for="img in imageResult">
        <div class="item-root">
            <a href="" class="a-img">
                <img :src="img.path" alt="">
            </a>
        </div>
        <div class="detail">
            <div>
                <a href="">名字:{{img.name}}</a>
            </div>
            <div>评分：
                <el-rate
                v-model="img.score"
                disabled
                show-score
                text-color="#ff9900"
                score-template="">
                </el-rate>
            </div>
            <div>简介：</div>
            <div>{{img.path}}</div>
        </div>
    </div>
</div>
</template>
<script>
export default {
   data(){
        return{
           // msg:'123',
            imageResult:[
                {path:require('./images/one.jpg'),
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
   }

}
</script>
<style>
#img-show{
    margin-top:30px;
    margin-bottom: 30px;
    width: 750px;
    float: left;
}
#img-show .item-root{
     width: 150px;
    max-height: 200px;
    margin-left: 30px;
    float: left;
}
#img-show .item-root a img{
    width: 110px;
    max-height: 180px;
    vertical-align: middle;
    margin-left: 30px;
}
#img-show .detail{
    margin-top: 10px;
    width: 120px;
    max-height: 180px;
    margin-left: 0;
    float: left;
}
#img-show .detail div{
    text-align: left;
}
#img-show .detail div a{
    text-decoration: none;
        color: #339933;
}
</style>