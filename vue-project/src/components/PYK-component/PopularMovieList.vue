<template>
<div class="outside">
  <el-table
    :data="PopularMovieListData"
    stripe
    highlight-current-row
    style="width: 100%"
    :default-sort="{ prop: 'score', order: 'descending' }"
    max-height="1000"
    :row-style="{height: '20px'}"
  >
    <el-table-column type="index"></el-table-column>
    <el-table-column label="热门片单" width="auto">
      <template slot-scope="scope">
        <el-link
          :underline="false"
          :href="scope.row.src"
          style="font-size: 15px"
        >
          {{ scope.row.name | ellipsis }}
        </el-link>
      </template>
    </el-table-column>
    <el-table-column prop="score" width="80">
      <template  slot-scope="scope">
        <el-button type="text" disabled
          >{{ scope.row.score }}推荐</el-button
        >
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
      this.$axios.post("api/movie/listmovie","123").then((res) => {
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