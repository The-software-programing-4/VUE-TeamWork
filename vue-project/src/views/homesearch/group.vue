<template>
<div class="outside">
  <el-collapse accordion v-model="name">
  <el-collapse-item :name="1">
    <template slot="title">
    <div style="font-size:20px;text-align:left; width: 100%;">豆酱相关小组内容</div>
    <div style="font-size:18px;width:100%;text-align:left;" v-show="groupData.length==0">无相关内容
    <el-button class="share-button" icon="el-icon-share"  style="border: transparent;font-size:18px;color:palevioletred;" @click="jump">去主页看看</el-button>
    </div>
    </template>
    <!-- <el-divider><i class="el-icon-mobile-phone"></i></el-divider> -->
    <el-table
      :data="groupData"
      stripe
      highlight-current-row
      style="width: 100%"
      max-height="870"
      :row-style="{height: '80px'}"
    :cell-style="{padding:'4px'}"
    >
      <el-table-column>
          <template slot-scope="scope">
            <img :src="scope.row.src" @click="toinfo(scope.row.gid)" width="70px" height="70px">
          </template>
      </el-table-column>
      <el-table-column label="" width="300px" >
         <template slot-scope="scope">
        <el-link
          :underline="false"
          @click="toinfo(scope.row.gid)"
          type="primary"
        >
          {{ scope.row.name | ellipsis }}
        </el-link>
        <div>{{scope.row.number}}个成员</div>
        <div>{{scope.row.introduction | ellipsis}}</div>
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
      searchText:'搜索内容',
      groupData: [
      ],
    };
  },
  methods: {
      jump(){
            this.$router.push(
                {
                    path:"/group/main",
                }
            )
        },
    download_movielist() {
      console.log("start rank")
      this.$axios.post("/api/movie/listmovie").then((res) => {
        console.log(res.data.messages);
        this.groupData = res.data.messages;
      });
      console.log("end rank");
    },
    toinfo(gid)
    {
      console.log("toinfo")
      this.$router.push({
        path:"/group/info",
        query:{gid: gid}
      })
      console.log("传出："+gid)
    },
    clickMv(val1, val2){

            console.log("send"+val1+" "+val2);
            this.$emit('change', val1, val2);//子组件给父组件传值，事件为change
        }
  },
  filters: {
    ellipsis: function (value) {
      if (!value) return "";
      if (value.length > 100) {
        return value.slice(0, 100) + "...";
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