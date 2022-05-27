<template>
  <el-table
    :data="movietableData"
    stripe
    highlight-current-row
    style="width: 100%"
	  :default-sort = "{prop: 'rank', order: 'ascending'}"
    height="750"
  >
    <el-table-column prop="rank" width="20" > </el-table-column>
    <el-table-column width="120">
      <template slot-scope="scope">
        <el-button
          size="middle"
          @click="gotomovielink(scope.$index, scope.row)"
        >
          {{ scope.row.moviename }}
        </el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  data() {
    return {
      movietableData: [],
    };
  },
  methods: {
    gotomovielink(index, row) {
      this.$router.push(row.movie_link);
    },
    download_movielist() {
      this.$axios.get("api/movie").then((res) => {
        console.log(res.data);
        this.movietableData = res.data.data;
      });
    },
  },
  created() {
    this.download_movielist();
  },
};
</script>

<!--
			{
				rank:'1',
				moviename:'movieazzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz',
				movie_link:'/',
			},{
				rank:'2',
				moviename:'movieb',
				movie_link:'/',
			},{
				rank:'3',
				moviename:'moviec',
				movie_link:'/',
			},

-->