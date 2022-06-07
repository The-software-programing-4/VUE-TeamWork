<template>
<div class="outside">

    <el-table v-if="this.status===1"
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
           <i v-if="scope.row.star===1" class="el-icon-star-on"></i>
        <el-link
          :underline="false"
          @click="totext(scope.row.id)"
          type="primary"
        >
          
          {{ scope.row.name | ellipsis }} <i v-if="scope.row.top===1" class="el-icon-upload2"></i>
        </el-link>
      </template>
    </el-table-column>
    <!-- <el-table-column prop="score" label="" width="30px" v-if="scope.row.top===1">
      <template>
    <i class="el-icon-upload2"></i>
      </template>
    </el-table-column> -->
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
     <el-table-column prop="score" label="发表日期" width="100px">
      <template  slot-scope="scope">
      {{scope.row.time }}
      </template>
    </el-table-column>
    <el-table-column prop="score" label="置顶/精华/删除" width="150px">
      <template slot-scope="scope">
        <el-button type="primary" @click="totop(scope.row.id)"  size="mini" circle><i class="el-icon-upload2"></i></el-button>
    <el-button type="warning" @click="tostar(scope.row.id)" icon="el-icon-star-off" size="mini" circle></el-button>
    <el-button type="danger" @click="delet(scope.row.id)" icon="el-icon-delete" size="mini" circle></el-button>
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
      
      status:1,
      groupData: [
        {
          top:0,
          star:0,
          id:0,
          gid:0,
          name:"小组名称",
          respose: 100,
          leader: "selmissL", 
          time: "5.20"
        },

      ],
    };
  },
  props: {
    gid:Number
  },
  methods: {
     sleep1(numberMillis){    
        var now = new Date();    
        var exitTime = now.getTime() + numberMillis;   
        while (true) { 
          now = new Date();       
          if (now.getTime() > exitTime) return;
        }     
      },
    download_movielist(gid) {
      this.gid=gid;
      this.$axios.post("/api/group/listdiscussingroup",{
        gid:parseInt(gid)
      }).then((res) => {
        console.log(res.data);

        this.groupData = res.data.discussData;
        
      });
    },
    totop(id)
    {
      this.$axios.post("/api/group/totop",{
        id:parseInt(id)
      }).then(res=>{
        console.log(res.data);
        
      })
      this.sleep1(200)
     this.download_movielist(this.gid);
    },
    tostar(id)
    {
      this.$axios.post("/api/group/tostar",{
        id:parseInt(id)
      }).then(res=>{
        console.log(res.data);
        
      })
      this.sleep1(200)
     this.download_movielist(this.gid);
    },
    delet(id)
    {
      this.$axios.post("/api/group/delet",{
        id:parseInt(id)
      }).then(res=>{
        console.log(res.data);
      })
      this.sleep1(200)
      this.download_movielist(this.gid);

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
    //this.gid=this.$route.query.gid;
    console.log("list收到:"+this.groupData.gid)
    this.download_movielist(this.gid);
  },
  rateChange(value) {
    console.log(value);
  },
};
</script>