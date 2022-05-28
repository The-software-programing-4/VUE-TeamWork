<template>
  <el-table
    :data="groupclassificationData"
    stripe
    highlight-current-row
    style="width: 100%"
    :default-sort="{ prop: 'Firstorder_groupshot', order: 'descending' }"
    max-height="1000"
  >
    <el-table-column label="小组分类  · · · · · ·" width="300">
      <template slot-scope="scope">
          <div><el-button type="text" @click="handleClick(scope.row.Firstorder_groupslink)">{{ scope.row.Firstorder_groupsname }}》</el-button></div>
        <el-button
          type="text"
          autofocus
          :key="tag"
          v-for="tag in scope.row.Secondorder_groups"
          @click="handleClick(tag.group_link)"
        >
          {{ tag.group_name }}
        </el-button>
        <el-button
          type="text"
          @click="handleClick(scope.row.Firstorder_groupslink)"
        >
          更多
        </el-button>
      </template>
    </el-table-column>
  </el-table>
</template>
<style scoped>
.el-tag + .el-tag {
  margin-left: 10px;
}
</style>
<script>
export default {
  data() {
    return {
      groupclassificationData: [
        
      ],
    };
  },
  methods: {
    handleClick(tag) {
      this.$router.push(tag);
    },
    download_groupclassificationData() {
      this.$axios.get("api/topics").then((res) => {
        console.log(res.data);
        this.groupclassificationData = res.data.groupclassificationData;
      });
    },
  },
  created() {
    this.download_groupclassificationData();
  },
};
</script>

<!-- 
  {
          Firstorder_groupsname: "兴趣",
          Firstorder_groupslink:"/",
          Firstorder_groupshot:1000,
          Secondorder_groups: [
            {
              group_name: "旅游",
              group_link: "/",
            },
          ],
        },{
          Firstorder_groupsname: "生活",
          Firstorder_groupslink:"/",
          Firstorder_groupshot:100,
          Secondorder_groups: [
            {
              group_name: "健康",
              group_link: "/",
            },
          ],
        },
-->