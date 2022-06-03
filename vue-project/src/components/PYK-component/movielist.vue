<template>
    <el-table
      :data="movietableData"
      stripe
      highlight-current-row
      style="width: 350"
      max-height="870"
    >
      <el-table-column type="index"></el-table-column>
      <el-table-column label="一周口碑榜"  width="300">
        <template slot-scope="scope">
          <el-descriptions :column="2" size="mini" :colon="false">
            <el-descriptions-item span="2" label="">
              <el-link
                :underline="false"
                :href=""
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
              >({{ scope.row.score }}人评价)</el-descriptions-item
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