<template>
  <el-table
    :data="grouptableData"
    stripe
    highlight-current-row
    style="width: 100%"
    :default-sort="{ prop: 'group_size', order: 'descending' }"
    max-height="1000"
  >
    <el-table-column width="48">
      <template slot-scope="scope">
        <a :href="scope.row.group_link">
          <img :src="scope.row.grouppicture_link" width="48" height="48" />
        </a>
      </template>
    </el-table-column>
    <el-table-column prop="group_size" label="值得加入的小组" width="350">
      <template slot-scope="scope">
        <el-descriptions :column="2" size="mini" :colon="false">
          <el-descriptions-item span="2" label="">
            <el-link
              :underline="false"
              :href="scope.row.group_link"
              style="font-size: 15px"
            >
              {{ scope.row.groupname | ellipsis }}
            </el-link>
          </el-descriptions-item>
          <el-descriptions-item label="">
            {{ scope.row.group_size }}个成员
          </el-descriptions-item>
          <el-descriptions-item label="">
            <el-button
              size="mini"
              @click="gotogrouplink(scope.$index, scope.row)"
            >
              +加入小组
            </el-button>
          </el-descriptions-item>
        </el-descriptions>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  data() {
    return {
      grouptableData: [
        
      ],
    };
  },
  methods: {
    gotogrouplink(index, row) {
      this.$router.push(row.group_link);
    },
    download_grouplist() {
      this.$axios.get("http://39.105.102.182:8080/api/group").then((res) => {
        console.log(res.data);
        this.grouptableData = res.data.grouptableData;
      });
    },
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
    this.download_grouplist();
  },
  mounted: function () {
    // 高度调整
    this.elTableHeight = $(".booklist").height();
  },
};
</script>

<!--
			{
				grouppicture_link: "",
				groupname: "groupazzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz",
				group_link: "/",
				group_size: 10000000000,
			},
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