<template>
<div class="outside">
  <el-collapse accordion v-model="name">
  <el-collapse-item :name="1">
    <template slot="title">
   <div style="font-size:20px;text-align:left; width: 100%;">豆酱相关话题内容</div>
    <div style="font-size:18px;width:100%;text-align:left;" v-show="topicData.length==0">无相关内容
    <el-button class="share-button" icon="el-icon-share"  style="border: transparent;font-size:18px;color: blue;" @click="jump">去主页看看</el-button>
    </div>
    </template>
    <!-- <el-divider><i class="el-icon-mobile-phone"></i></el-divider> -->
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
     </el-collapse-item>
</el-collapse>
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
      name:1,
      searchText:'',
      topicData: [
      
      ],
    };
  },
  methods: {
      jump(){
            this.$router.push(
                {
                    path:"/topic/main",
                }
            )
        },
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
    this.searchText=String(this.$route.query.searchText);
    console.log(this.searchText)
    var url='/api/topic/topicsearch';
            console.log("have created search");
            this.$axios.post(url,
                       {key: this.searchText},
            ).then(res => {
            console.log("话题搜索结果："+res.data.messages);
            this.topicData=res.data.messages;
            console.log("话题"+this.topicData);
            })
  }
}
</script>