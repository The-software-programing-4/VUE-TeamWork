<template>
    <div class="bookCard">
        <div class="bookInfo">
            <h1 class="bookTitle">
            <span>美丽人生</span>
            </h1>
            <div class="bookImg">
                <img src="../../assets/美丽人生.jpg" alt="">
            </div>
            <div class="bookIntro">
                <li class="bookInfoItem">导演:</li>
                <li class="bookInfoItem">编剧:</li>
                <li class="bookInfoItem">主演:</li>
                <li class="bookInfoItem">类型:</li>
                <li class="bookInfoItem">国家:</li>
                <li class="bookInfoItem">语言:</li>
                <li class="bookInfoItem">上映时间:</li>
                <li class="bookInfoItem">片长:</li>
                <li class="bookInfoItem">IMDb:</li> 
            </div>
            <div class="bookStar">
                <div class="ratingLogo">电影评分</div>
                <div class="ratingBody">
                    <span class="ratingLeft">9.6</span>
                    <span class="ratingRight">
                        <div class="bigStar45"></div>
                        <div class="ratingNum">1212613人评价</div>
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
                <a href="#" class="bookWriteWord">写短评</a>
            </li>
            <li class="bookWriteLink">
                <img src="../../assets/write.gif" alt="">
                <a href="#" class="bookWriteWord">写影评</a>
            </li>
        </div>
        <div class="relatedInfo">
            <div class="relatedInfoBlock">
                <div class="relatedInfoTitle">剧情简介</div>
                <div class="indent">犹太青年圭多（罗伯托·贝尼尼）邂逅美丽的女教师多拉（尼可莱塔·布拉斯基），他彬彬有礼的向多拉鞠躬：“早安！公主！”。历经诸多令人啼笑皆非的周折后，天遂人愿，两人幸福美满的生活在一起。
　　然而好景不长，法西斯政权下，圭多和儿子被强行送往犹太人集中营。多拉虽没有犹太血统，毅然同行，与丈夫儿子分开关押在一个集中营里。聪明乐天的圭多哄骗儿子这只是一场游戏，奖品就是一辆大坦克，儿子快乐、天真的生活在纳粹的阴霾之中。尽管集中营的生活艰苦寂寞，圭多仍然带给他人很多快乐，他还趁机在纳粹的广播里问候妻子：“早安！公主！”
　　法西斯政权即将倾覆，纳粹的集中营很快就要接受最后的清理，圭多编给儿子的游戏该怎么结束？他们一家能否平安的度过这黑暗的年代呢？            
                </div>
            </div>
            <div class="relatedInfoBlock">
                <div class="relatedInfoTitle">演职员</div>
                <div class="indent">远子，作家，湖北红安人。已出版短篇小说集《十七个远方》《夜晚属于恋人》《白日漫游》。译有《达摩流浪者》《思想之诗》《零点女人》。《白日漫游》一书曾入选“《亚洲周刊》2019年十大小说”，入围第二届“宝珀理想国文学奖”决选名单。</div>
            </div>
            <div class="relatedInfoBlock">
                <div class="relatedInfoTitle">视频和图片</div>
                <div class="indent">
                </div>
            </div>
            <div class="relatedInfoBlock">
                <div class="relatedInfoTitle">获奖情况</div>
                <div class="indent">

                </div>
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