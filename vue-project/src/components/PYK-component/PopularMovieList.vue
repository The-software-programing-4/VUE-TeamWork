<template>
  <el-table
    :data="PopularMovieListData"
    stripe
    highlight-current-row
    style="width: 100%"
    :default-sort="{ prop: 'num_of_Recommend', order: 'descending' }"
    max-height="1000"
  >
    <el-table-column label="热门片单" width="300">
      <template slot-scope="scope">
        <el-link
          :underline="false"
          :href="scope.row.movielist_link"
          style="font-size: 15px"
        >
          {{ scope.row.movielistname | ellipsis }}
        </el-link>
      </template>
    </el-table-column>
    <el-table-column prop="num_of_Recommend" width="150">
      <template  slot-scope="scope">
        <el-button type="text" disabled
          >{{ scope.row.num_of_Recommend }}推荐</el-button
        >
      </template>
    </el-table-column>
  </el-table>
</template>
<style scoped>
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
        this.PopularMovieListData = res.data.PopularMovieListData;
      });
    },
  },
  filters: {
    ellipsis: function (value) {
      if (!value) return "";
      if (value.length > 30) {
        return value.slice(0, 30) + "...";
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