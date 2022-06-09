<template>
    <div class="searchside">
        <div class="add">
          <div class="title">
            添加豆瓣没有的{{typelist[AddorRelatedData.type]}}· · · · · ·
          </div>
          <div class="link">
            <el-link
            type="primary"
            :href="AddorRelatedData.link"
            style="font-size: 12px "
            >
              &gt; 添加电影/电视剧 {{AddorRelatedData.searchresult}}
            </el-link>
          </div>
          <div class="link">
            <el-link
            type="primary"
            :href="AddorRelatedData.link"
            style="font-size: 12px "
          >&gt; 添加影人 {{AddorRelatedData.searchresult}}</el-link>
          </div>
        </div>
        <div class="relatedsearches">
          <div class="title">
            相关搜索· · · · · ·
          </div>
          <div class="link">
            <el-link
            type="primary"
            :href="AddorRelatedData.link"
            style="font-size: 12px "
            >
              &gt;  搜索"{{AddorRelatedData.searchresult}}"的图书 
            </el-link>
          </div>
          <div class="link">
            <el-link
            type="primary"
            :href="AddorRelatedData.link"
            style="font-size: 12px "
            >
              &gt;  搜索"{{AddorRelatedData.searchresult}}"的音乐
            </el-link>
          </div>
          <div class="link">
            <el-link
            type="primary"
            :href="AddorRelatedData.link"
            style="font-size: 12px "
            >
              &gt;  搜索"{{AddorRelatedData.searchresult}}"的舞台剧
            </el-link>
          </div>
        </div>
        <div class="feedback">
          <el-link
            type="primary"
            @click="this.$message('邮箱:1971008969')"
            style="font-size: 15px "
            >&gt; 对搜索不满意？给我们反馈
          </el-link>
        </div>
    </div>
</template>
<style scoped>
.searchside{
  width: 300px;
  height: 400px;
}
.title {
    font-size: 14px;
    text-align: left;
    color: #007722;
    margin-bottom: 14px;
}
.add
{
  text-align: left;
}
.link{
  text-align: left;
  margin-bottom: 11px;
}
.feedback{
  font-size:15px;
  margin-top: 11px;
  text-align: left;
}
</style>

<script>
export default {
  data() {
    return {
      typelist:["图书","电影/电视剧",],
      AddorRelatedData: {
          searchresult:"1",
          link:"/",
          linklist:[],
          type:1,
      },
    };
  },
  methods: {
    download_AddorRelatedData() {
      console.log("start rank");
      this.$axios.post("/api/???").then((res) => {
        console.log(res.data.messages);
        this.AddorRelatedData = res.data.messages;
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
    this.download_AddorRelatedData();
  },
};
</script>