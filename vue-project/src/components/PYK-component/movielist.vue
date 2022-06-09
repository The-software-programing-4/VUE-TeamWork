<template>
<div class="outside">
    <el-table
      :data="movietableData"
      stripe
      highlight-current-row
      style="width: 350px"
      max-height="870"
      :row-style="{height: '40px'}"
    :cell-style="{padding:'1px'}"
    >
      <el-table-column type="index"></el-table-column>
      <el-table-column label="一周口碑榜" width="110%" >
         <template slot-scope="scope">
        <el-link
          :underline="false"
          @click="toinfo(scope.row.mid)"
        >
          {{ scope.row.name | ellipsis }}
        </el-link>
      </template>
    </el-table-column>
    <el-table-column prop="score" width="">
      <template  slot-scope="scope">
       
        <el-rate
                v-model="scope.row.score/2"
                disabled
                show-score
                text-color="#EA7500"
                score-template="">
                </el-rate>

      </template>
    </el-table-column>
    <el-table-column prop="score" width="45%">
      <template  slot-scope="scope">
      {{ scope.row.score }}
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
/deep/.el-rate__icon {
    font-size: 15px;
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
    toinfo(mid)
    {
      this.$router.push({
            path:"/movie/info",
            query:{mid:mid}
          })
    },
    download_movielist() {
      console.log("start rank")
      this.$axios.post("/api/movie/listmovie").then((res) => {
        console.log(res.data.messages);
        this.movietableData = res.data.messages;
      });
      console.log("end rank");
    },
    clickMv(val1, val2){
           // alert(val1+val2);
            console.log("send"+val1+" "+val2);
            this.$emit('change', val1, val2);//子组件给父组件传值，事件为change
        }
  },
  filters: {
    ellipsis: function (value) {
      if (!value) return "";
      if (value.length > 5) {
        return value.slice(0, 5) + "...";
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