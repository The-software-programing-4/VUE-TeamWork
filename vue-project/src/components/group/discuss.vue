<template>
<div class="outside">

    <el-table
      :data="groupData"
      stripe
      highlight-current-row
      style="width: 100%"
      max-height="870"
      :row-style="{height: '35px'}"
    :cell-style="{padding:'1px'}"
    >

      <el-table-column label="" width="200px" label="题目">
         <template slot-scope="scope">
        <el-link
          :underline="false"
          @click="totext(scope.row.id)"
          type="primary"
        >
          {{ scope.row.name | ellipsis }}<i v-if="scope.row.top===1" class="el-icon-upload2"></i>
        </el-link>
      </template>
    </el-table-column>
  <el-table-column prop="score" label="作者" width="">
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
    <el-table-column prop="score" label="回应" width="">
      <template  slot-scope="scope">
      {{ scope.row.respose }}
      </template>
    </el-table-column>
     <el-table-column prop="score" label="发表日期" width="230px">
      <template  slot-scope="scope">
      {{scope.row.time }}
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
          gid:0,
          name:"小组名称",
          respose: 100,
          leader: "selmissL", 
          time: "5.20"
        },
        {gid:0,
          name:"小组名称",
          respose: 100,
          leader: "selmissL", 
          time: "5.20"
        },
        {gid:0,
          name:"小组名称",
          respose: 100,
          leader: "selmissL", 
          time: "5.20"
        },
        {gid:0,
          name:"小组名称",
          respose: 100,
          leader: "selmissL", 
          time: "5.20"
        },
        {gid:0,
          name:"小组名称",
          respose: 100,
          leader: "selmissL", 
          time: "5.20"
        },
        {gid:0,
          name:"小组名称",
          respose: 100,
          leader: "selmissL", 
          time: "5.20"
        },
        {gid:0,
          name:"小组名称",
          respose: 100,
          leader: "selmissL", 
          time: "5.20"
        },
         {gid:0,
          name:"小组名称",
          respose: 100,
          leader: "selmissL", 
          time: "5.20"
        },
         {gid:0,
          name:"小组名称",
          respose: 100,
          leader: "selmissL", 
          time: "5.20"
        },
         {gid:0,
          name:"小组名称",
          respose: 100,
          leader: "selmissL", 
          time: "5.20"
        }
      ],
    };
  },
  methods: {
    download_movielist(gid) {
      this.$axios.post("/api/group/listdiscussingroup",{
        gid:parseInt(gid)
      }).then((res) => {
        console.log(res.data);
        this.groupData = res.data.discussData;
        
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
    this.gid=this.$route.query.gid;
    console.log("list收到:"+this.gid)
    this.download_movielist(this.gid);
  },
  rateChange(value) {
    console.log(value);
  },
};
</script>