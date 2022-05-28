<template>
    <div id="images-show">
        <div class="choose-page">
            <button @click.stop="showbox=1">第一页</button>
            <button @click.stop="showbox=2">第二页</button>
        </div>
        <div class="image-page" v-show="showbox==1">
            <!-- 放对影片详细介绍的网址 -->
            <a href="" target="_blank" class="item">
                <div class="image-div">
                    <img src="./images/one.jpg" alt="奇异博士">
                </div>
                <p>
                    第一页电影描述{{showbox}}
                </p>
            </a>
            <a href="" target="_blank" class="item">
                <div class="image-div">
                    <img src="./images/one.jpg" alt="奇异博士">
                </div>
                <p>
                    "电影描述"
                </p>
            </a>
            <a href="" target="_blank" class="item">
                <div class="image-div">
                    <img src="./images/one.jpg" alt="奇异博士">
                </div>
                <p>
                    "电影描述"
                </p>
            </a>
            <a href="" target="_blank" class="item">
                <div class="image-div">
                    <img src="./images/one.jpg" alt="奇异博士">
                </div>
                <p>
                    "电影描述"
                </p>
            </a>
            <a href="" target="_blank" class="item">
                <div class="image-div">
                    <img src="./images/one.jpg" alt="奇异博士">
                </div>
                <p>
                    "电影描述"
                </p>
            </a>
            <a href="" target="_blank" class="item">
                <div class="image-div">
                    <img src="./images/one.jpg" alt="奇异博士">
                </div>
                <p>
                    "电影描述"
                </p>
            </a>
        </div>
        <div class="image-page" data-index="2" v-show="showbox==2">
            <!-- 放对影片详细介绍的网址 -->
            <a href="" target="_blank" class="item">
                <div class="image-div">
                    <img src="./images/two.jpg" alt="奇异博士">
                </div>
                <p>
                    "第二页电影描述1"
                </p>
            </a>
             <a href="" target="_blank" class="item">
                <div class="image-div">
                    <img src="./images/two.jpg" alt="奇异博士">
                </div>
                <p>
                    "第二页电影描述2"
                </p>
            </a>
             <a href="" target="_blank" class="item">
                <div class="image-div">
                    <img src="./images/two.jpg" alt="奇异博士">
                </div>
                <p>
                    "第二页电影描述3"
                </p>
            </a>
             <a href="" target="_blank" class="item">
                <div class="image-div">
                    <img src="./images/two.jpg" alt="奇异博士">
                </div>
                <p>
                    "第二页电影描述4"
                </p>
            </a>
             <a href="" target="_blank" class="item">
                <div class="image-div">
                    <img src="./images/two.jpg" alt="奇异博士">
                </div>
                <p>
                    "第二页电影描述5"
                </p>
            </a>
             <a href="" target="_blank" class="item">
                <div class="image-div">
                    <img src="./images/two.jpg" alt="奇异博士">
                </div>
                <p>
                    "第二页电影描述6"
                </p>
            </a>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            showbox:1,
        }
    },
    
}
</script>
<style>
#images-show .choose-page{
    width: 740px;
    margin-bottom: 10px;
}
#images-show .choose-page button{
    text-align: center;
    background-color: #669933;
    border: transparent;
    margin-right: 5px;
    color: aliceblue;
}
 #images-show{
     width: 750px;
     float: left;
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
     height: 400px;
     
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
</style>