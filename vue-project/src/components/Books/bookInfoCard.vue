<template>
    <div class="bookCard">
        <div class="bookInfo">
            <h1 class="bookTitle">
            <span>月亮与六便士</span>
            </h1>
            <div class="bookImg">
                <img src="../../assets/月亮与六便士.jpg" alt="">
            </div>
            <div class="bookIntro">
                <li class="bookInfoItem">作者:</li>
                <li class="bookInfoItem">出版社:</li>
                <li class="bookInfoItem">出版年:</li>
                <li class="bookInfoItem">出版年:</li>
                <li class="bookInfoItem">页数:</li>
                <li class="bookInfoItem">定价:</li>
                <li class="bookInfoItem">ISBN:</li> 
            </div>
            <div class="bookStar">
                <div class="ratingLogo">图书评分</div>
                <div class="ratingBody">
                    <span class="ratingLeft">8.8</span>
                    <span class="ratingRight">
                        <div class="bigStar45"></div>
                        <div class="ratingNum">193490人评价</div>
                    </span>
                </div>
                <li class="ratingGrade">
                    <span class="ratingGradeStar">5星</span>
                    <div class="ratingGradeImg" style="width:64px"></div>
                    <span class="ratingGradePerc">42.0%</span>
                </li>
                <li class="ratingGrade">
                    <span class="ratingGradeStar">4星</span>
                    <div class="ratingGradeImg" style="width:57px"></div>
                    <span class="ratingGradePerc">38.0%</span>
                </li>
                <li class="ratingGrade">
                    <span class="ratingGradeStar">3星</span>
                    <div class="ratingGradeImg" style="width:19px"></div>
                    <span class="ratingGradePerc">13.0%</span>
                </li>
                <li class="ratingGrade">
                    <span class="ratingGradeStar">2星</span>
                    <div class="ratingGradeImg" style="width:10px"></div>
                    <span class="ratingGradePerc">7.0%</span>
                </li>
                <li class="ratingGrade">
                    <span class="ratingGradeStar">1星</span>
                    <div class="ratingGradeImg" style="width:0px"></div>
                    <span class="ratingGradePerc">0.0%</span>
                </li>
            </div>
        </div>
        <div class="bookFav">
            <span class="bookFavComment">评价：</span>
            <span class="bookFavStar">
                <ul>
                    <li v-for="(item, index) in stars" class="bookFavStarList">
                        <img v-if="item.isshow" src="../../assets/fullStar.png" class="bookFavImg" @mouseleave="emptyStar">
                        <img v-else="item.isshow" src="../../assets/emptyStar.png" class="bookFavImg" @mouseover="fillStar(index)">
                    </li>
                </ul>
            </span>
            <span class="rateWord">{{starCom}}</span>
        </div>
        <div class="bookCommentLink">
            <li class="bookWriteLink">
                <img src="../../assets/write.gif" alt="" >
                <a href="#" class="bookWriteWord">写笔记</a>
            </li>
            <li class="bookWriteLink">
                <img src="../../assets/write.gif" alt="">
                <a href="#" class="bookWriteWord">写书评</a>
            </li>
            <li class="bookWriteLink">
                <img src="../../assets/money.gif" alt="">
                <a href="#" class="bookWriteWord">加入购书单</a>
            </li>
        </div>
        <div class="relatedInfo">
            <div class="relatedInfoBlock">
                <div class="relatedInfoTitle">内容简介</div>
                <div class="indent">作家远子首部诗集，跨越十年的隐秘书写。记录那些囿于斗室、地铁和格子间的沉思与叹息，描述所有年轻人都经历过却难以言说的诗意瞬间。《室内流亡》以罕见的坦诚刻下一颗在物质和精神的双重匮乏之中渴望上升和救赎的心，描述一种在轨道之中却又时刻想要脱轨的青年生活。以无处不在的“时代精神”为背景，作者在思辨与抒情的夹缝中层层拆解与重建，坚信诗歌的道德力量，执着于发明新的道路，并真诚地交出自己的回答。</div>
            </div>
            <div class="relatedInfoBlock">
                <div class="relatedInfoTitle">作者简介</div>
                <div class="indent">远子，作家，湖北红安人。已出版短篇小说集《十七个远方》《夜晚属于恋人》《白日漫游》。译有《达摩流浪者》《思想之诗》《零点女人》。《白日漫游》一书曾入选“《亚洲周刊》2019年十大小说”，入围第二届“宝珀理想国文学奖”决选名单。</div>
            </div>
            <div class="relatedInfoBlock">
                <div class="relatedInfoTitle">目录</div>
                <div class="indent">
1 而我坐在原地 <br>
2 心小 <br>
3 呼喊：给Y <br>
4 地下室之歌 <br>
5 乡村医生：给苇风 <br>
6 在城中村 <br>
7 一万条街的距离 <br>
8 我不能告诉你 <br>
9 小海子站 <br>
10 金台夕照</div>
            </div>
            <div class="relatedInfoBlock">
                <div class="relatedInfoTitle">短评</div>
                <div class="indent"></div>
            </div>
        </div>
    </div>
</template>

<script>
import "@/css/style.css";
export default {
    data(){
        return{
            stars: [
            {isshow: false },
            {isshow: false },
            {isshow: false },
            {isshow: false },
            {isshow: false }
            ],
            starCom: '',
            com: [
                '很差',
                '较差',
                '还行',
                '推荐',
                '力荐'
            ]
        }
    },
    methods: {
        fillStar(index){
            for(let i = 0; i <= index; i++){
                this.stars[i].isshow = true;
            }
            this.starCom = this.com[index];
        },
        emptyStar(){
            for(let i = 0; i < 5; i++){
                this.stars[i].isshow = false;
            }
            this.starCom = '';
        }
        
    }
}
</script>

<style>
  
</style>