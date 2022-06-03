<template>
  <el-table
    :data="booktableData"
    stripe
    highlight-current-row
    style="width: 300px"
    :default-sort="{ prop: 'score', order: 'descending' }"
    max-height="850"
  >
    <el-table-column type="index"></el-table-column>
    <el-table-column label="畅销图书榜" prop="score" width="250">
      <template slot-scope="scope" >
        <el-descriptions  :column="1" size="mini" :colon="false">
          <el-descriptions-item label="">
            <el-link 
              :underline="false"
              :href="scope.row.book_link"
              style="font-size: 15px"
            >
              {{ scope.row.name | ellipsis }}
            </el-link>
          </el-descriptions-item>
          <el-descriptions-item >
            {{ scope.row.author }}
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
      booktableData: [
        
      ],
    };
  },
  methods: {
    gotobooklink(index, row) {
      this.$router.push(row.book_link);
    },
    gotopurchaselink(index, row) {
      this.$router.push(row.purchase_link);
    },
    download_booklist() {
      this.$axios.post("/api/book/listBook").then((res) => {
        console.log(res.data);
        this.booktableData = res.data.message;
      });
    },
  },
  filters: {
    ellipsis: function (value) {
      if (!value) return "";
      if (value.length > 15) {
        return value.slice(0, 15) + "...";
      }
      return value;
    },
  },
  created() {
    this.download_booklist();
  },
};
</script>

<!--
		{
          name: "平凡的世界（全三部）",
          author: "[中] 路遥",
          book_link: "/",
          score: 5.0,
        },
        {
          name: "活着",
          author: "[中] 余华",
          book_link: "/",
          score: 4.9,
        },
        {
          name: "蛤蟆先生去看心理医生",
          author: "[英] 罗伯特·戴博德",
          book_link: "/",
          score: 4.8,
        },
        {
          name: "bookaaaaaaaaaaaaaaaaaaaaaaaaaaa",
          author: "[z] author_a",
          book_link: "/",
          score: 5.8,
        },
        {
          name: "bookaaaaaaaaaaaaaaaaaaaaaaaaaaa",
          author: "[z] author_a",
          book_link: "/",
          score: 1.8,
        },
        {
          name: "bookaaaaaaaaaaaaaaaaaaaaaaaaaaa",
          author: "[z] author_a",
          book_link: "/",
          score: 5.8,
        },
        {
          name: "bookaaaaaaaaaaaaaaaaaaaaaaaaaaa",
          author: "[z] author_a",
          book_link: "/",
          score: 5.8,
        },
        {
          name: "bookaaaaaaaaaaaaaaaaaaaaaaaaaaa",
          author: "[z] author_a",
          book_link: "/",
          score: 5.8,
        },
        {
          name: "bookaaaaaaaaaaaaaaaaaaaaaaaaaaa",
          author: "[z] author_a",
          book_link: "/",
          score: 5.8,
        },
        {
          name: "bookaaaaaaaaaaaaaaaaaaaaaaaaaaa",
          author: "[z] author_a",
          book_link: "/",
          score: 5.8,
        },
-->
<!--
  book_link->?
-->