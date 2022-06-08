<template>
<div class="outside">
    <div class="title" v-if="this.$store.state.Login===true">
      <b>我的讨论 </b>
    </div>
    <el-table v-if="this.$store.state.Login===true"
      :data="groupData"
      stripe
      highlight-current-row
      style="width: 100%"
      max-height="870"
      :row-style="{height: '35px'}"
    :cell-style="{padding:'1px'}"
    >

      <el-table-column label="" width="300px" >
         <template slot-scope="scope">
        <el-link
          :underline="false"
          @click="totext(scope.row.id)"
          type="primary"
        >
          {{ scope.row.name | ellipsis }}
        </el-link>
      </template>
    </el-table-column>

    <el-table-column prop="score" width="">
      <template  slot-scope="scope">
      {{ scope.row.respose }}回应
      </template>
    </el-table-column>
     <el-table-column prop="score" width="130px">
      <template  slot-scope="scope">
      {{scope.row.time | ellipsis_time}}
      </template>
    </el-table-column>
    <el-table-column prop="score" width="">
      <template  slot-scope="scope">
        <el-link
          :underline="false"
          @click="toinfo(scope.row.gid)"
          type="primary"
        >
          {{scope.row.leader}}
        </el-link>
      
      </template>
    </el-table-column>
    </el-table>
</div>
</template>
<style scoped>
.outside{
  /* border: 1px black solid; */
  display: inline-block;

  /* border: 1px solid; */
}
.title{
  width: 200px;
  color : black;
  font-size: x-large;
  margin-top: 40px;
}
</style>

<script>
export default {
  data() {
    return {
      groupData: [
      ],
    };
  },
  methods: {
    download_movielist() {
      this.$axios.post("/api/group/listdiscuss").then((res) => {
        console.log(res.data);
        this.groupData = res.data.listDiscuss;
        
      });
    },
    clickMv(val1, val2){

            console.log("send"+val1+" "+val2);
            this.$emit('change', val1, val2);//子组件给父组件传值，事件为change
        },
    totext(tid)
    {
      console.log("toinfo")
      this.$router.push({
        path:"/group/showtext",
        query:{id:tid}
      })
    },
    toinfo(gid)
    {
      console.log("toinfo")
      this.$router.push({
        path:"/group/info",
        query:{gid: gid}
      })
      console.log("传出："+gid)
    }

  },
  filters: {
    ellipsis: function (value) {
      if (!value) return "";
      if (value.length > 10) {
        return value.slice(0, 10) + "...";
      }
      return value;
    },
    ellipsis_time: function (value) {
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