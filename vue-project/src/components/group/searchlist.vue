<template>
<div class="outside">
    <div class="title">
      小组搜索: {{searchText}} 
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
      <el-table-column>
          <template slot-scope="scope">
            <img :src="scope.row.src">
          </template>
      </el-table-column>
      <el-table-column label="" width="300px" >
         <template slot-scope="scope">
        <el-link
          :underline="false"
          :href="scope.row.src"
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
          :href="scope.row.src"
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
  width: 50%;
  margin-left: 20%;
  /* border: 1px solid; */
}
.title{
  float: left;
  color : black;
  font-size: x-large;
  margin-top: 40px;
}
</style>

<script>
export default {
  data() {
    return {
      searchText:'搜索内容',
      groupData: [
        {
          name:"小组名称",
          respose: 100,
          number:10,
          src: "https://img2.doubanio.com/icon/g95772-1.jpg",
          introduction:"I love this group",
          leader: "selmissL", 
          time: "5.20"
        },
       
        
         
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