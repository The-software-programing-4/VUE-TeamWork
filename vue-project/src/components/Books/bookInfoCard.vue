<template>
    <div class="bookCard">
        <div class="bookInfo">
            <h1 class="bookTitle">
            <span>{{bookname}}</span>
            </h1>
            <div class="bookImg">
                <img :src="src" alt="">
            </div>
            <div class="bookIntro">
                <li class="bookInfoItem">作者:{{author}}</li>
                <li class="bookInfoItem">出版社:{{press}}</li>
                <li class="bookInfoItem">出版年:{{publish_date}}</li>
                <li class="bookInfoItem">页数:{{pages_number}}</li>
                <li class="bookInfoItem">定价:{{price}}</li>
                <li class="bookInfoItem">ISBN:{{isbn}}</li> 
            </div>
            <div class="bookStar">
                <div class="ratingLogo">图书评分</div>
                <div class="ratingBody">
                    <span class="ratingLeft">{{score}}</span>
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
                <div class="indent">{{brief_introduction}}</div>
            </div>
            <div class="relatedInfoBlock">
                <div class="relatedInfoTitle">作者简介</div>
                <div class="indent">{{brief_introduction_of_author}}</div>
            </div>
            <div class="relatedInfoBlock">
                <div class="relatedInfoTitle">目录</div>
                <div class="indent">{{directory}}</div>
            </div>
            <div class="relatedInfoBlock">
                <div class="relatedInfoTitle">短评</div>
                <div class="commentCard">
                    <ul>
                        <li v-for="(item, index) in marks" class="commentItem">
                            <div class="commentNav">
                                <a href="#" class="commentUser">{{item.username}}</a>
                                <span class="commentStar">
                                    <el-rate
                                        v-model="item.score"
                                        disabled
                                        text-color="#ff9900">
                                    </el-rate>
                                </span>
                                <span class="commentThumb">{{item.thumb}}
                                <a @click="thumb(index)">{{item.isthumb}}</a>
                                </span>
                                <span class="commentDate">
                                    {{item.day}}
                                </span>
                            </div>
                            <div>{{item.content}}</div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        
    </div>
</template>

<script>
import "@/css/style.css";
import axios from 'axios';
export default {
    data(){
        return{
            marks:[
                {
                id: 1,
                username: 'ando',
                score: 3,
                content: '民国时期的经济环境居然已经如此丰富多彩了，什么商业竞争之类的应有尽有。在克劳对于中国人的一些总结的确实一针见血，像要面子这种，不愧是在中国生活这么久的人。整体写作风格偏幽默，虽然实际当时中国人民的生活并没有克劳所描写的那么乐观，但在当时已经算超前的了。',
                thumb: 0,
                reply: 0,
                day: '2022.5.21 15:36:01',
                isthumb: '点赞', 
                },
            ],
            bookMessage:[

            ],
            directory: '',
            brief_introduction_of_author: '',
            brief_introduction: '',
            score: 0.0,
            src: '',
            isbn: '',
            price: '',
            //book_id: 1,
            pages_number: '',
            press: '',
            publish_date: '',
            bookname: "",
            author: '',
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
        book_id: Number,//从父组件传值
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
        thumb(index){
            if(this.marks[index].isthumb == "点赞"){
                this.marks[index].thumb++;
                this.marks[index].isthumb = '已点赞'
            }
            else{
                this.marks[index].thumb--;
                this.marks[index].isthumb = '点赞'
            }
            var url='/api/mark/thumb';
            this.$axios.post(
                url,
                {
                    id: this.marks[index].id,
                    target: this.marks[index].thumb
                }
            )
        },
        getData(id){
            var url='/api/book/message_get';
            this.$axios.post(
                url,
                id
                ,{
                    headers: {
                        'Content-Type':'application/json'
                    }
                }
            )
            .then(
                res=>{
                    console.log(this.book_id+"receive");
                    console.log(res.data);
                    this.author = res.data.author;
                    this.score = res.data.score;
                    this.src = this.$hostURL+"/"+ res.data.src;
                    this.bookname=res.data.bookname;
                    this.isbn = res.data.isbn;
                    this.price = res.data.price;
                    this.pages_number = res.data.pages_number;
                    this.press = res.data.press;
                    this.publish_date = res.data.publish_date;
                    this.directory = res.data.directory;
                    this.brief_introduction_of_author = res.data.brief_introduction_of_author;
                    this.brief_introduction = res.data.brief_introduction;
                }
            )
            .catch(err => {              
                console.log(err);
            })
        },
        getMarks(){
            var url='/api/marks/getmark';
            this.$axios.post(
                url,
                {
                type:1,
                target:this.book_id
                }
                // {
                //     headers: {
                //         'Content-Type':'application/text'
                //     }
                // }
            )
            .then(
                res=>{
                    console.log(res.data)
                    this.marks = res.data.marks;
                }
            )
            .catch(err => {              
                console.log(err);
            })
        }
    },
    created(){
        this.getData(0);
        this.getMarks();
    }
}
</script>

<style>
  
</style>