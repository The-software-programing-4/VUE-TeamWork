<template>
    <el-table
      :data="movietableData"
      stripe
      highlight-current-row
      style="width: 100%"
      :default-sort="{ prop: 'rank', order: 'ascending' }"
      max-height="800"
    >
      <el-table-column prop="rank" width="40">
        <template slot-scope="scope"> {{ scope.row.rank }}. </template>
      </el-table-column>
      <el-table-column label="一周口碑榜" width="350">
        <template slot-scope="scope">
          <el-descriptions :column="2" size="mini" :colon="false">
            <el-descriptions-item span="2" label="">
              <el-link
                :underline="false"
                :href="scope.row.movie_link"
                style="font-size: 15px"
              >
                {{ scope.row.moviename | ellipsis }}
              </el-link>
            </el-descriptions-item>
            <el-descriptions-item label="">
              <el-rate
                v-model="scope.row.movie_score"
                disabled
                show-score
                text-color="#ff9900"
                @change="rateChange"
              >
              </el-rate>
            </el-descriptions-item>
            <el-descriptions-item label=""
              >({{ scope.row.num_of_evaluators }}人评价)</el-descriptions-item
            >
          </el-descriptions>
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
      movietableData: [
        
      ],
    };
  },
  methods: {
    download_movielist() {
      this.$axios.get("/api/movie/listmovie").then((res) => {
        console.log(res.data);
        this.movietableData = res.data.movietableData;
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
    this.download_movielist();
  },
  rateChange(value) {
    console.log(value);
  },
};
</script>

<!--
		{
          rank: 1,
          moviename: "movieazzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz",
          movie_link: "/",
          movie_score: 0.7,
          num_of_evaluators: 10000000000,
        },
        {
          rank: 2,
          moviename: "moviebaaaaaaaaaaaaaaaaaaaaaaaazzzz",
          movie_link: "/",
          movie_score: 3.7,
          num_of_evaluators: 1000,
        },
        {
          rank: 3,
          moviename: "moviec",
          movie_link: "/",
          movie_score: 4.7,
          num_of_evaluators: 1000,
        },
        {
          rank: 4,
          moviename: "moviec",
          movie_link: "/",
          movie_score: 4.7,
          num_of_evaluators: 1000,
        },
        {
          rank: 5,
          moviename: "moviec",
          movie_link: "/",
          movie_score: 4.7,
          num_of_evaluators: 1000,
        },
        {
          rank: 6,
          moviename: "moviec",
          movie_link: "/",
          movie_score: 4.7,
          num_of_evaluators: 1000,
        },
        {
          rank: 7,
          moviename: "moviec",
          movie_link: "/",
          movie_score: 4.7,
          num_of_evaluators: 1000,
        },
        {
          rank: 8,
          moviename: "moviec",
          movie_link: "/",
          movie_score: 4.7,
          num_of_evaluators: 1000,
        },
        {
          rank: 9,
          moviename: "moviec",
          movie_link: "/",
          movie_score: 4.7,
          num_of_evaluators: 1000,
        },
        {
          rank: 10,
          moviename: "moviec",
          movie_link: "/",
          movie_score: 4.7,
          num_of_evaluators: 1000,
        },
-->