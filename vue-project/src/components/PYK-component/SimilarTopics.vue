<template>
  <div class="outside">
      <div class="intro">
        话题是豆友们针对具体的主题展开讨论的沙龙。你可以在此发现豆友的精彩言论，也可以写日记、发广播来分享你的观点和故事。为了高效地呈现最佳内容，我们欢迎你为高质量的内容点赞（喜欢），并反馈低质量及低相关性内容，这将优化内容列表的排序。
        </div>
        <h2>相似话题&nbsp;·&nbsp;·&nbsp;·&nbsp;·&nbsp;·&nbsp;·</h2>
        <ul class="bd related_topics">
          <li v-for="item in SimilarTopicsData.SimilarTopiclist" :key="item.topic">
            <div style="margin-bottom: 10px;">
                <el-link
            type="primary"
            icon="el-icon-chat-line-round"
            :href="item.topic_link"
            style="font-size: 15px "
          >
            {{ item.topic | ellipsis }}
          </el-link>
            </div>
          <span style="color:#909399 ;line-height:1; font-size: 11px;">
            {{ item.hot | numberFormat }}次浏览  {{ item.numofarticles | numberFormat }}篇文章
            </span>
          </li>
          <li class="more_topics">
            <el-link
            type="primary"
            :href="SimilarTopicsData.TopicSquare_link"
            style="font-size: 13px "
          >&gt; 去话题广场</el-link>
        </li>
      </ul>
  </div>
</template>
<style scoped>
.outside {
  /* border: 1px black solid; */
  margin-left: 15%;
  margin-top: 30px;
  /* border: 1px solid; */
  position: static;
  left: 712px;
  width: 300px;
  max-height:700px;
}
.outside .intro {
    margin-bottom: 40px;
    font-size: 13px;
    font-weight: 400;
    line-height: 1.58;
    color: #999999;
}
.outside h2 {
    font-size: 16px;
    margin: 0 0 15px 0;
    float: none;
    font-weight: 400;
    color: #007722;
    background: none;
    text-align: left;
}
.outside .bd {
    margin-bottom: 40px;

}
.outside ul{
    List-style:none;
    padding: 0;
    margin: 0;
    text-align: left;
}
ul li{
    margin-bottom: 15px;
    line-height: 1;
    
}
.outside .bd .more_topics {
    margin-top: 20px;
    margin-bottom: 40px;
}
/deep/.el-rate__icon {
  font-size: 15px;
}
</style>
<script>
export default {
  data() {
    return {
    
      SimilarTopicsData: {
          SimilarTopiclist:[
        {
          topic: "你做过哪些让你“血压升高”的题目",
          topic_link: "/",
          hot: 2547,
          numofarticles: 16,
        },
        {
          topic: "那些惊艳你的「录取通知书」设计",
          topic_link: "/",
          hot: 5254,
          numofarticles: 15,
        },
        {
          topic: "高考后，你成为想要成为的人了吗？",
          topic_link: "/",
          hot: 69514,
          numofarticles: 181,
        },
        {
          topic: "“考试工厂”里的青春记忆",
          topic_link: "/",
          hot: 126114,
          numofarticles: 92,
        },
        {
          topic: "和高考有关的记忆",
          topic_link: "/",
          hot: 4806,
          numofarticles: 28,
        },
        {
          topic: "父母为你高考默默付出了哪些",
          topic_link: "/",
          hot: 3942,
          numofarticles: 17,
        },
      ],
      TopicSquare_link:"/",
      }
    };
  },
  methods: {
    gotobooklink(index, row) {
      this.$router.push(row.book_link);
    },
    gotopurchaselink(index, row) {
      this.$router.push(row.purchase_link);
    },
    download_SimilarTopicsData() {
      console.log("start rank");
      this.$axios.post("/api/book/???").then((res) => {
        console.log(res.data.messages);
        this.SimilarTopicsData = res.data.messages;
      });
      console.log("end rank");
    },
  },
  filters: {
    ellipsis: function (value) {
      if (!value) return "";
      if (value.length > 15) {
        return value.slice(0, 15) + "...";
      }
      return value;
    },
    numberFormat: function (value) {
      let unit = "";
      var k = 10000,
        sizes = ["", "万", "亿", "万亿"],
        i;
      if (value < k) {
        value = value;
      } else {
        i = Math.floor(Math.log(value) / Math.log(k));
        value = (value / Math.pow(k, i)).toFixed(2);
        unit = sizes[i];
      }
      return value + unit;
    },
  },
  created() {
    this.download_SimilarTopicsData();
  },
};
</script>