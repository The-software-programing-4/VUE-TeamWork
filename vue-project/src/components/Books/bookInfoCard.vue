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
        
        <div class="bookCommentLink">
            <li class="bookWriteLink">
                <img src="../../assets/write.gif" alt="" >
                <router-link :to="`/WriteReview/1/${bookid}`" class="bookWriteWord">写书评</router-link>
            </li>
            <li class="bookWriteLink">
                <img src="../../assets/write.gif" alt="">
                <a @click="write" class="bookWriteWord">写书评</a>
            </li>
            <li class="bookWriteLink">
                <img src="../../assets/money.gif" alt="">
                <router-link to="#" class="bookWriteWord">加入购书单</router-link>
            </li>
        </div>
        <div v-if="showWrite" class="writeWrap">
            <div class="bookFav">
            <span class="bookFavComment">评价：</span>
            <span class="bookFavStar">
                <div class="block">
                <el-rate v-model="commentScore" :colors="colors"> </el-rate>
                </div> 
            </span>
            </div>

            <div class="writeContent">
           <el-input style="width:40%;margin-right: 60%;float: left;height: 50px;"
  type="textarea"
  autosize
  placeholder="请输入标题"
  v-model="title">
</el-input>
<el-input style="width: 40%;margin-right: 60%;float: left;height: 70px;"
  type="textarea"
  :autosize="{ minRows: 2, maxRows: 4}"
  placeholder="请输入内容"
  v-model="content">
</el-input>
            <div style="margin: 20px 0;"></div>
            <el-button style="margin-top:30px;margin-right:70%;" @click="addmark" type="success">提交评论</el-button>
            <div style="margin: 30px 0;"></div>
            </div>
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
                                <span class="commentThumb">
                                <a @click="report(index)">举报</a>
                                </span>
                                <span class="commentThumb">{{item.disag}}
                                <a @click="disag(index)">{{item.isdisag}}</a>
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
            day:'',
            marks:[
                {
                id: 1,
                username: 'ando',
                score: 3,
                content: '民国时期的经济环境居然已经如此丰富多彩了，什么商业竞争之类的应有尽有。在克劳对于中国人的一些总结的确实一针见血，像要面子这种，不愧是在中国生活这么久的人。整体写作风格偏幽默，虽然实际当时中国人民的生活并没有克劳所描写的那么乐观，但在当时已经算超前的了。',
                thumb: 0,
                disag: 0,
                reply: 0,
                day: '2022.5.21 15:36:01',
                isthumb: '点赞', 
                isdisag: '反对',
                },
            ],
            bookMessage:[

            ],
            title: '',
            content: '',
            colors: ['#99A9BF', '#F7BA2A', '#FF9900'],
            directory: '',
            brief_introduction_of_author: '',
            brief_introduction: '',
            commentScore: 0,
            score: 0,
            src: '',
            isbn: '',
            price: '',
            showWrite: 0,
            pages_number: '',
            press: '',
            publish_date: '',
            bookname: "",
            author: '',
            bookid: 1,
            starCom: '',
            bookid:0,
            att: 0,
        }
    },
    methods: {
        write(){
            this.showWrite = 1 - this.showWrite;
        },
        addmark(){
            var url='/api/marks/addmark';


            let yy = new Date().getFullYear();
            let mm = new Date().getMonth()+1;
            let dd = new Date().getDate();
            let hh = new Date().getHours();
            let mf = new Date().getMinutes()<10 ? '0'+new Date().getMinutes() : new Date().getMinutes();
            let ss = new Date().getSeconds()<10 ? '0'+new Date().getSeconds() : new Date().getSeconds();
            var time=yy+'-'+mm+'-'+dd+' '+hh+':'+mf+':'+ss;
            var fscore = parseFloat(this.score);
            console.log("日期:"+time)
            this.day=time;
            this.$axios.post(
                url,
                {
                    title: '',
                    type: 1,
                    target:parseInt(this.bookid),
                    uid:this.$store.state.uid,
                    content: this.content,
                    day: this.day,
                    score: fscore,
                },
                {
                    headers: {
                        'Content-Type':'application/json'
                    }
                }
            )
        },
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
            if(this.att == 1 ) return;
            if(this.marks[index].isthumb == "点赞"){
                this.marks[index].thumb++;
                this.marks[index].isthumb = '已点赞';
                this.att = 1;
            }
            else{
                this.marks[index].thumb--;
                this.marks[index].isthumb = '点赞';
                this.att = 0;
            }
            var url='/api/marks/thumb';
            this.$axios.post(
                url,
                {
                    id: this.marks[index].id,
                    target: this.marks[index].thumb
                }
            )
        },
        disag(index){
            if(this.att == 1) return; 
            if(this.marks[index].isdisag == "反对"){
                this.marks[index].disag++;
                this.marks[index].isdisag = '已反对'
                this.att = 1;
            }
            else{
                this.marks[index].disag--;
                this.marks[index].isdisag = '反对'
                this.att = 0;
            }
            var url='/api/marks/thumb';
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
                type: parseInt(1),
                target: parseInt(1)
                }, 
                {
                    headers: {
                        'Content-Type':'application/json'
                    }
                }
            )
            .then(
                res=>{
                    console.log(res.data.marks)
                    this.marks = res.data.marks;
                }
            )
            .catch(err => {              
                console.log(err);
            })
        }
    },
    created(){
        //this.getData(0);
        this.bookid=this.$route.query.bookid;
        this.getData(this.bookid);
        this.getMarks();
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
      height: 300px;
  }
</style>