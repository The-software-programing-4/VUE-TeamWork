<template>
<div class="outside">
    <div class="title">
      <b>我的小组讨论 </b>
    </div>
    <el-table
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
          @click="totext(scope.row.tid)"
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
     <el-table-column prop="score" width="">
      <template  slot-scope="scope">
      {{scope.row.time}}
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
        {
          id:0,
          name:"小组名称",
          respose: 100,
          leader: "selmissL", 
          time: "5.20"
        },
        {id:0,
          name:"小组名称",
          respose: 100,
          leader: "selmissL", 
          time: "5.20"
        },
        {id:0,
          name:"小组名称",
          respose: 100,
          leader: "selmissL", 
          time: "5.20"
        },
        {id:0,
          name:"小组名称",
          respose: 100,
          leader: "selmissL", 
          time: "5.20"
        },
        {id:0,
          name:"小组名称",
          respose: 100,
          leader: "selmissL", 
          time: "5.20"
        },
        {id:0,
          name:"小组名称",
          respose: 100,
          leader: "selmissL", 
          time: "5.20"
        },
        {id:0,
          name:"小组名称",
          respose: 100,
          leader: "selmissL", 
          time: "5.20"
        },
         {id:0,
          name:"小组名称",
          respose: 100,
          leader: "selmissL", 
          time: "5.20"
        },
         {id:0,
          name:"小组名称",
          respose: 100,
          leader: "selmissL", 
          time: "5.20"
        },
         {id:0,
          name:"小组名称",
          respose: 100,
          leader: "selmissL", 
          time: "5.20"
        }
      ],
    };
  },
  methods: {
    download_movielist() {
      console.log("start rank")
      this.$axios.post("/api/movie/listmovie").then((res) => {
        console.log(res.data.messages);
        this.groupData = res.data.messages;
      });
      console.log("end rank");
    },
    clickMv(val1, val2){
           // alert(val1+val2);
            console.log("send"+val1+" "+val2);
            this.$emit('change', val1, val2);//子组件给父组件传值，事件为change
        },
    totext(tid)
    {
      console.log("toinfo")
      this.$router.push({
        path:"/group/showtext"
      })
    },
    toinfo(gid)
    {
      console.log("toinfo")
      this.$router.push({
        path:"/group/info"
      })
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
  },
  created() {
    //this.download_movielist();
  },
  rateChange(value) {
    console.log(value);
  },
};
</script>