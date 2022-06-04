<template>
    <div class="bookCard">
        <div class="bookInfo">
            <h1 class="bookTitle">
            <span>{{name}}</span>
            </h1>
            <div class="bookImg">
                <img :src="src" alt="">
            </div>
            <div class="bookIntro">
                <li class="bookInfoItem">导演:{{directors}}</li>
                <li class="bookInfoItem">编剧:{{writers}}</li>
                <li class="bookInfoItem">主演:{{actors}}</li>
                <li class="bookInfoItem">类型:{{category}}</li>
                <li class="bookInfoItem">国家:{{position}}</li>
                <li class="bookInfoItem">语言:{{language}}</li>
                <li class="bookInfoItem">上映时间:{{date}}</li>
                <li class="bookInfoItem">片长:{{length}}</li>
                <li class="bookInfoItem">IMDb:{{IMDb}}</li> 
            </div>
            <div class="bookStar">
                <div class="ratingLogo">电影评分</div>
                <div class="ratingBody">
                    <span class="ratingLeft">{{score}}</span>
                    <span class="ratingRight">
                        <div class="bigStar45"></div>
                        <div class="ratingNum">1212613人评价</div>
                    </span>
                </div>
                <div class="star">
                <li class="ratingGrade">
                    <span class="ratingGradeStar">5星</span>
                    <div class="ratingGradeImg" style="width:64px"></div>
                    <span class="ratingGradePerc">42.0%</span>
                </li>
                <li class="ratingGrade">
                    <span class="ratingGradeStar">4星</span>
                    <div class="ratingGradeImg" style="width:64px"></div>
                    <span class="ratingGradePerc">38.0%</span>
                </li>
                <li class="ratingGrade">
                    <span class="ratingGradeStar">3星</span>
                    <div class="ratingGradeImg" style="width:64px"></div>
                    <span class="ratingGradePerc">13.0%</span>
                </li>
                <li class="ratingGrade">
                    <span class="ratingGradeStar">2星</span>
                    <div class="ratingGradeImg" style="width:64px"></div>
                    <span class="ratingGradePerc">7.0%</span>
                </li>
                <li class="ratingGrade">
                    <span class="ratingGradeStar">1星</span>
                    <div class="ratingGradeImg" style="width:64px"></div>
                    <span class="ratingGradePerc">0.0%</span>
                </li>
                </div>
            </div>
        </div>
        <!-- <div class="bookFav">
           
        </div> -->
        <div class="bookCommentLink">
            <li class="bookWriteLink">
                <img src="../../assets/write.gif" alt="" >
                <a href="#" class="bookWriteWord">写短评</a>
            </li>
            <li class="bookWriteLink">
                <img src="../../assets/write.gif" alt="">
                <a href="#" class="bookWriteWord">写影评</a>
            </li>
             <span class="bookFavComment">评价：</span>
            <span class="bookFavStar">
                <ul>
                    <li v-for="(item, index) in stars" class="bookFavStarList">
                        <img v-if="item.isshow" src="../../assets/fullStar.png" class="bookFavImg" @mouseleave="emptyStar">
                        <img v-else="!item.isshow" src="../../assets/emptyStar.png" class="bookFavImg" @mouseover="fillStar(index)">
                    </li>
                </ul>
            </span>
            <span class="rateWord">{{starCom}}</span>
        </div>
        <div class="relatedInfo">
            <div class="relatedInfoBlock">
                <div class="relatedInfoTitle">剧情简介</div>
                <div class="indent">{{brief_introduction}}            
                </div>
            </div>
            <div class="relatedInfoBlock">
                <div class="relatedInfoTitle">演职员</div>
                <div class="indent"></div>
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
            name: '',
            //mid:  '',
            src: '',
            directors: '',
            writers: '',
            actors: '',
            category: '',
            language: '',
            length: 0,
            date: '',
            position: '',
            IMDb: '',
            score: 0.0,
            brief_introduction: '',
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
    props:{
        mid: Number,//从父组件传值
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
        },
        getData(midr){
            var url='/api/movie/message_get';
            console.log(this.mid+"??");
            this.$axios.post(
                url,
                midr
                ,{
                    headers: {
                      'Content-Type':'application/json'
                    }
                }
            )
            .then(
                res=>{
                    
                    this.src = this.$hostURL+"/"+res.data.src;
                    this.name = res.data.name;
                    this.score = res.data.score;
                    this.actors = res.data.actors;
                    this.IMDb = res.data.IMDb;
                    this.category = res.data.category;
                    this.directors = res.data.directors;
                    this.writers = res.data.writers;
                    this.language = res.data.language;
                    this.length = res.data.length;
                    this.date = res.data.date;
                    this.position = res.data.position;
                }
            )
            .catch(err => {              
                console.log(err);
            })
        },
        getMid(mid){
            this.mid=mid;
        }

    },
    created(){
        this.getData(1);
    }
}
</script>

<style>
  .star{
      /* border: 1px solid ; */
        text-align: left;
  }
  .star li{
      border: 1px solid transparent;
      text-align: left;
      margin-left: 2px;
      padding-left: 1px;
  }
  .bookInfo{
      height: 400px;
  }
</style>