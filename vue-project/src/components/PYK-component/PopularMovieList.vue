<template>
<div class="outside">
  <div class="title">RANK</div>
  <el-table
    :data="PopularMovieListData"
    stripe
    highlight-current-row
    style="width: 120%"
    max-height="1000"
    :row-style="{height: '40px'}"
    :cell-style="{padding:'1px'}"
  >
    
    <el-table-column type="index"></el-table-column>
    <el-table-column label="热门图书" width="auto">
      <template slot-scope="scope">
        <el-link
          :underline="false"
          :href="scope.row.src"
        >
          {{ scope.row.name | ellipsis }}
        </el-link>
      </template>
    </el-table-column>
    <el-table-column prop="score" width="80">
      <template  slot-scope="scope">
        <span>评分:{{ scope.row.score }}</span>
      </template>
    </el-table-column>
  </el-table>
</div>
</template>
<style scoped>
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
      PopularMovieListData: [
        
      ],
    };
  },
  methods: {
    download_movielists() {
      this.$axios.post("api/movie/listmovie").then((res) => {
        console.log(res.data);
        this.PopularMovieListData = res.data.messages;
      });
    },
  },
  filters: {
    ellipsis: function (value) {
      if (!value) return "";
      if (value.length > 10) {
        return value.slice(0, 10) + "...";
      }
      return value;
    },
  },
  created() {
    this.download_movielists();
  },
};
</script>

<!--
			{
          movielistname: "movielistazzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz",
          movielist_link: "/",
          num_of_Recommend: 10000000000,
        },{
          movielistname: "movielistb",
          movielist_link: "/",
          num_of_Recommend: 10,
        },{
          movielistname: "movielistc",
          movielist_link: "/",
          num_of_Recommend: 100,
        },
-->