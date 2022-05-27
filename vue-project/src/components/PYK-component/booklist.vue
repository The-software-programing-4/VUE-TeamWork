<template>
    <el-table
      :data="booktableData"
      stripe
      highlight-current-row
      style="width: 100%"
      :default-sort="{ prop: 'rank', order: 'ascending' }"
       max-height="800"
	   >
      <el-table-column prop="rank" width="40">
        <template slot-scope="scope">{{scope.row.rank}}.</template>
      </el-table-column>
      <el-table-column label="畅销图书榜" width="300">
        <template slot-scope="scope">
          <el-descriptions :column="2" size="mini" :colon="false">
            <el-descriptions-item span="2" label="">
              <el-link
                :underline="false"
                :href="scope.row.book_link"
                style="font-size: 15px"
              >
                {{ scope.row.bookname | ellipsis }}
              </el-link>
            </el-descriptions-item>
            <el-descriptions-item>
              [{{ scope.row.author_country }}] {{ scope.row.author }}
            </el-descriptions-item>
          </el-descriptions>
        </template>
      </el-table-column>
      <el-table-column width="100">
        <template slot-scope="scope">
          <el-button
            size="middle"
			type="text"
			plain
            @click="gotopurchaselink(scope.$index, scope.row)"
            >去购买</el-button
          >
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
      this.$axios.get("http://39.105.102.182:8080/api/book").then((res) => {
        console.log(res.data);
        this.booktableData = res.data.booktableData;
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
    this.download_booklist();
  },
};
</script>

<!--
		{
          rank: 1,
          bookname: "bookazzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz",
          author_country: "英",
          author: "author_a",
          book_link: "/",
          purchase_link: "/",
        },
        {
          rank:2,
          bookname: "bookazzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz",
          author_country: "英",
          author: "author_a",
          book_link: "/",
          purchase_link: "/",
        },{
          rank: 3,
          bookname: "bookazzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz",
          author_country: "英",
          author: "author_a",
          book_link: "/",
          purchase_link: "/",
        },{
          rank: 4,
          bookname: "bookazzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz",
          author_country: "英",
          author: "author_a",
          book_link: "/",
          purchase_link: "/",
        },{
          rank: 5,
          bookname: "bookazzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz",
          author_country: "英",
          author: "author_a",
          book_link: "/",
          purchase_link: "/",
        },{
          rank: 6,
          bookname: "bookazzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz",
          author_country: "英",
          author: "author_a",
          book_link: "/",
          purchase_link: "/",
        },{
          rank: 7,
          bookname: "bookazzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz",
          author_country: "英",
          author: "author_a",
          book_link: "/",
          purchase_link: "/",
        },
-->