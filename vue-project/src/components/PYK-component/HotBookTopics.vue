<template>
  <el-table
    :data="hotbooktopicsData"
    stripe
    highlight-current-row
    style="width: 100%"
    :default-sort="{ prop: 'booktopic_hot', order: 'descending' }"
    max-height="1000"
  >
    <el-table-column label="热门图书标签  · · · · · ·" width="300">
      <template slot-scope="scope">
        <el-button type="text" disabled>[{{ scope.row.booktopic_name }}]</el-button>
        <el-button
          type="text"
          autofocus
          :key="tag"
          v-for="tag in scope.row.Secondorder_booktopics"
          @click="toinfo(scope.row.book_id)"
        >
          {{ tag.Secondorder_booktopic_name }}
        </el-button>
        <el-button
          type="text"
          @click="handleClick(scope.row.more_Secondorder_booktopics_link)"
        >
          更多
        </el-button>
      </template>
    </el-table-column>
  </el-table>
</template>
<style scoped>
.el-tag + .el-tag {
  margin-left: 10px;
}
.outside{
  /* border: 1px black solid; */
  margin-left: 15%;
  margin-top: 30px;
  /* border: 1px solid; */
}
.title{
    /* margin: 30px; */
    /* border: 1px solid; */
    margin-top: 10px;
    font-size: large;
    color: green;
    width: 80%;
    text-align: center;
    display: inline-block;
}
</style>
<script>
export default {
  data() {
    return {
      hotbooktopicsData: [
        
      ],
    };
  },
  methods: {
    toinfo(id)
    {
      this.$router.push({
            path:"/book/info",
            query:{bookid:id}
          })
    },
    handleClick(tag) {
      this.$router.push(tag);
    },
    download_BookHotTopics() {
      this.$axios.get("api/topics").then((res) => {
        console.log("畅销图书："+res.data);
        this.hotbooktopicsData = res.data.hotbooktopicsData;
      });
    },
  },
  created() {
    this.download_BookHotTopics();
  },
};
</script>

<!-- 
  {
          topic_name: "文学",
          topic_hot:1000,
          Secondorder_topics: [
            {
              Secondorder_topic_name: "小说",
              Secondorder_topic_link: "/",
            },
            {
              Secondorder_topic_name: "随笔",
              Secondorder_topic_link: "/",
            },
            {
              Secondorder_topic_name: "日本文学",
              Secondorder_topic_link: "/",
            },
            {
              Secondorder_topic_name: "散文",
              Secondorder_topic_link: "/",
            },
            {
              Secondorder_topic_name: "日本文学",
              Secondorder_topic_link: "/",
            },
            {
              Secondorder_topic_name: "散文",
              Secondorder_topic_link: "/",
            },
            {
              Secondorder_topic_name: "日本文学",
              Secondorder_topic_link: "/",
            },
            {
              Secondorder_topic_name: "散文",
              Secondorder_topic_link: "/",
            },
            {
              Secondorder_topic_name: "日本文学",
              Secondorder_topic_link: "/",
            },
            {
              Secondorder_topic_name: "散文",
              Secondorder_topic_link: "/",
            },
          ],
          more_Secondorder_topics_link: "/",
        },
        {
          topic_name: "topic1",
          topic_hot:1001,
          Secondorder_topics: [
            {
              Secondorder_topic_name: "topic11",
              Secondorder_topic_link: "/",
            },
            {
              Secondorder_topic_name: "topic12",
              Secondorder_topic_link: "/",
            },
          ],
          more_Secondorder_topics_link: "/",
        }, 
-->