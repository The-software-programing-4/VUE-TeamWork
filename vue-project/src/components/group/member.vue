<template>
    <div class="out">
        <div class="title">
        <h4>小组成员</h4>
        </div>
        <div class="member-list">
            <ul>
            <li v-for="item in memberData" class="member-item">
                <div class="pic">
                <a href="https://www.douban.com/people/179164772/" class="nbg">
                    <img :src="item.src" class="imgnoga" alt="常山" width="48px" height="48px">
                </a>
                </div>

                <div class="name">
                    <a href="https://www.douban.com/people/179164772/" class="">{{item.name}}</a>
                </div>
            </li>
            </ul>
        </div>
        <div class="all">
            <a> > 查看全部成员</a>
        </div>
    </div>
</template>
<style scoped>
.all{
margin-top: 5%;
font-size: 13px;
    height: 20px;
}
.title{
    margin-left: 10px;
}
.member-list{
    margin-top: 10px;
}
.member-list ul {
/* 
letter-spacing: -0.31em;
word-spacing: -0.43em; */
font-size: 0;
}
ul {
list-style-type: none;
width: 250px;
margin: 0;
padding: 0;
}
.member-list .pic {
overflow: hidden;

padding: 2px;
width: 50px;

}
img.imgnoga {
width: 48px;
/* aspect-ratio: auto 48 / 48; */
height: 48px;
}
.member-list .name {
clear: both;
}
.member-list li {
display: inline-block;
zoom: 1;
width: 60px;

text-align: center;
font-size: 12px;
vertical-align: top;
letter-spacing: normal;
word-spacing: normal;
}
</style>
<script>
export default {
    data(){
        return {
            memberData:[
                {
                    src:"https://img2.doubanio.com/icon/up179164772-1.jpg",
                    name:"常山"
                },
                {
                    src:"https://img2.doubanio.com/icon/up179164772-1.jpg",
                    name:"常山"
                },
                {
                    src:"https://img2.doubanio.com/icon/up179164772-1.jpg",
                    name:"常山"
                },
                {
                    src:"https://img2.doubanio.com/icon/up179164772-1.jpg",
                    name:"常山"
                },
                {
                    src:"https://img2.doubanio.com/icon/up179164772-1.jpg",
                    name:"常山"
                }
            ]
        }
    }
}
</script>