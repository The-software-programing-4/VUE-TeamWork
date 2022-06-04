<template>
<div class="outside">
    <el-table
      :data="movietableData"
      stripe
      highlight-current-row
      style="width: 350"
      max-height="870"
      :row-style="{height: '40px'}"
    :cell-style="{padding:'1px'}"
    >
      <el-table-column type="index"></el-table-column>
      <el-table-column label="一周口碑榜"  >
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
      console.log("start rank")
      this.$axios.post("/api/movie/listmovie").then((res) => {
        console.log(res.data.messages);
        this.movietableData = res.data.messages;
      });
      console.log("end rank");
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
    this.download_movielist();
  },
  rateChange(value) {
    console.log(value);
  },
};
</script>