<template>
  <el-table
    :data="booktableData"
    stripe
    highlight-current-row
    style="width: 100%"
	  :default-sort = "{prop: 'rank', order: 'ascending'}"
    height="750"
  >
    <el-table-column prop="rank" sortable width="20" > </el-table-column>
    <el-table-column width="120">
      <template slot-scope="scope">
        <el-popover trigger="hover" placement="top">
          <p>{{ scope.row.bookname }}</p>
          <p>[{{ scope.row.author_country }}] {{ scope.row.author }}</p>
          <div slot="reference" class="name-wrapper">
            <el-button
              size="middle"
              @click="gotobooklink(scope.$index, scope.row)"
            >
              {{ scope.row.bookname }}
            </el-button>
          </div>
        </el-popover>
      </template>
    </el-table-column>
    <el-table-column align="right">
      <template slot-scope="scope">
        <el-button
          size="mini"
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
      booktableData: [],
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
      this.$axios.get("api/book").then((res) => {
        console.log(res.data);
        this.booktableData = res.data.data;
      });
    },
  },
  created() {
    this.download_booklist();
  },
};
</script>

<!--
			{
				rank:'1',
				bookname:'bookazzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz',
				author_country:'英',
				author:'author_a',
				book_link:'/',
				purchase_link:'/'
			},
			{
				rank:'2',
				bookname:'bookb',
				author_country:'英',
				author:'author_b',
				book_link:'/',
				purchase_link:'/'
			},
			{
				rank:'3',
				bookname:'bookc',
				author_country:'英',
				author:'author_c',
				book_link:'/',
				purchase_link:'/'
			},
-->