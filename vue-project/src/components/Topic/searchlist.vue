<template>
<div class="outside">
    <div class="title" >
      和 {{searchText}} 相关的豆酱话题
    </div>
    <el-table
      :data="topicData"
      stripe
      highlight-current-row
      style="width: 100%"
      max-height="870"
      :row-style="{height: '100px'}"
    :cell-style="{padding:'4px'}"
    >
    <el-table-column label="" width="100px" >
         <template slot-scope="scope">
        <el-link
          :underline="false"
          @click="toinfo(scope.row.tid)"
          type="primary"
        >
        {{ scope.row.name | ellipsis }}
        </el-link>
      </template>
    </el-table-column>
    <el-table-column prop="score" width="100">
      <template  slot-scope="scope">
      {{ scope.row.respose }}关注
      </template>
    </el-table-column>
    <el-table-column prop="score" width="">
      <template  slot-scope="scope">
     <div>{{scope.row.introduction | ellipsis}}</div>
      </template>
    </el-table-column>
    <el-table-column label="" width="200px" >
         <template slot-scope="scope">
        <el-link
          :underline="false"
          @click="toinfo(scope.row.tid)"
          type="primary"
          icon="el-icon-share"
        >
        更多话题动态
        </el-link>
      </template>
    </el-table-column>
    </el-table>
</div>
</template>
<style scoped>
.outside{
  /* border: 1px black solid; */
  width: 100%;

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
      topicData: [
        {
          tid:'',
          name:"这是一个新话题",
          focus: 100,
          number:10,
          introduction:"与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。",
          createUid: '', 
        },
        {
          tid:'',
          name:"这是一个新话题",
          focus: 100,
          number:10,
          introduction:"与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。",
          createUid: '', 
        },
        {
          tid:'',
          name:"这是一个新话题",
          focus: 100,
          number:10,
          introduction:"与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。",
          createUid: '', 
        },
      ],
    };
  },
  methods: {
    toinfo(tid)
    {
      console.log("toinfo")
      this.$router.push({
        path:"/topic/info",
        query:{tid: tid}
      })
      console.log("传出："+tid)
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
      if (value.length > 30) {
        return value.slice(0, 30) + "...";
      }
      return value;
    },
  },
  created() {
    this.searchText=this.$route.query.searchText;
    console.log(this.groupData)
    //this.download_movielist();
    var url='/api/group/groupsearch';
            console.log("have created search");
            this.$axios.post(url,
                        {searchtext:this.searchText},
            ).then(res => {
            console.log(res.data.listGroup);
            this.groupData=res.data.listGroup;
            for(var i=0;i<this.groupData.length;i++)
            {
                this.groupData[i].src=this.$hostURL+'/'+this.groupData[i].src
            }})
  }
  // rateChange(value) {
  //   console.log(value);
  // },
}
</script>