<template>
    <el-table
      :data="movietableData"
      stripe
      highlight-current-row
      style="width: 350"
      :default-sort="{ prop: 'score', order: 'descending' }"
      max-height="870"
    >
      <el-table-column type="index"></el-table-column>
      <el-table-column label="一周口碑榜" prop="score" width="300">
        <template slot-scope="scope">
          <el-descriptions :column="2" size="mini" :colon="false">
            <el-descriptions-item span="2" label="">
              <el-link
                :underline="false"
                :href="scope.row.movie_link"
                style="font-size: 15px"
              >
                {{ scope.row.name | ellipsis }}
              </el-link>
            </el-descriptions-item>
            <el-descriptions-item label="">
              <el-rate
                v-model="scope.row.score"
                disabled
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
      this.$axios.post("/api/movie/listmovie").then((res) => {
        console.log(res.data);
        this.movietableData = res.data.messages;
      });
    },
  },
  filters: {
    ellipsis: function (value) {
      if (!value) return "";
      if (value.length > 20) {
        return value.slice(0, 20) + "...";
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
          name: "movieazzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz",
          movie_link: "/",
          score: 0.7,
          num_of_evaluators: 10000000000,
        },{
          name: "movieazzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz",
          movie_link: "/",
          score: 1.7,
          num_of_evaluators: 10000000000,
        },{
          name: "movieazzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz",
          movie_link: "/",
          score: 2.7,
          num_of_evaluators: 10000000000,
        },{
          name: "movieazzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz",
          movie_link: "/",
          score: 3.7,
          num_of_evaluators: 10000000000,
        },{
          name: "movieazzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz",
          movie_link: "/",
          score: 0.7,
          num_of_evaluators: 10000000000,
        },{
          name: "movieazzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz",
          movie_link: "/",
          score: 1.7,
          num_of_evaluators: 10000000000,
        },{
          name: "movieazzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz",
          movie_link: "/",
          score: 2.7,
          num_of_evaluators: 10000000000,
        },{
          name: "movieazzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz",
          movie_link: "/",
          score: 3.7,
          num_of_evaluators: 10000000000,
        },{
          name: "movieazzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz",
          movie_link: "/",
          score: 0.7,
          num_of_evaluators: 10000000000,
        },{
          name: "movieazzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz",
          movie_link: "/",
          score: 1.7,
          num_of_evaluators: 10000000000,
        },
-->
<!--
  rank->由score排序
  moviename->name
  movie_link->?
  movie_score->score
  num_of_evaluators
-->