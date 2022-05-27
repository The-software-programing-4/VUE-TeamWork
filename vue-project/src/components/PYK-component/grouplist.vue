<template>
  <el-table
    :data="grouptableData"
    stripe
    highlight-current-row
    style="width: 100%"
	  :default-sort = "{prop: 'group_size', order: 'descending'}"
    height="750"
  >
    <el-table-column width="48">
      <template slot-scope="scope">
        <a :href="scope.row.group_link">
          <img :src="scope.row.grouppicture_link" min-width="48" height="48" />
        </a>
      </template>
    </el-table-column>
    <el-table-column width="160">
      <template slot-scope="scope">
        <el-button
          size="middle"
          @click="gotogrouplink(scope.$index, scope.row)"
        >
          {{ scope.row.groupname }}
        </el-button>
      </template>
    </el-table-column>
    <el-table-column prop="group_size">
      <template slot-scope="scope">
        <p>{{ scope.row.group_size }}个成员</p>
      </template>
    </el-table-column>
    <el-table-column>
      <template slot-scope="scope">
        <el-button size="mini" @click="gotogrouplink(scope.$index, scope.row)"
          >+加入小组</el-button
        >
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  data() {
    return {
      grouptableData: [ ],
    };
  },
  methods: {
    gotogrouplink(index, row) {
      this.$router.push(row.group_link);
    },
    download_grouplist() {
      this.$axios.get("api/group").then((res) => {
        console.log(res.data);
        this.grouptableData = res.data.data;
      });
    },
  },
  created(){
  	this.download_grouplist();
  }
};
</script>

<!--
{
				grouppicture_link:'/',
				groupname:'groupazzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz',
				group_link:'/',
				group_size:10000,
},{
				grouppicture_link:'/',
				groupname:'groupb',
				group_link:'/',
				group_size:100000,
},{
				grouppicture_link:'/',
				groupname:'groupc',
				group_link:'/',
				group_size:1000,
},
-->