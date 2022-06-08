<template>
<div class="outside">
  <el-table
    :data="booktableData"
    stripe
    highlight-current-row
    style="width: 450px"
    max-height="850"
    :row-style="{height: '40px'}"
    :cell-style="{padding:'1px'}"
  >
    <el-table-column type="index"></el-table-column>
    <el-table-column label="畅销图书榜" width="">
      <template slot-scope="scope" >
        <el-link 
              :underline="false"
              :href="scope.row.book_link"
              style="font-size: 15px"
            >
              {{ scope.row.name | ellipsis }}
        </el-link>
      </template>
    </el-table-column>
    <el-table-column prop="author">
      <template slot-scope="scope" >
        {{scope.row.author | ellipsis}}
      </template>
    </el-table-column>
  </el-table>
  </div>
</template>
<style scoped>
.outside{
  /* border: 1px black solid; */
  margin-left: 15%;
  margin-top: 30px;
  /* border: 1px solid; */
}
.el-rate__icon {
    font-size: 15px;
}
</style>
<script>
export default {
  data() {
    return {
      booktableData: [
        {
          name: "平凡的世界（全三部）",
          author: "[中] 路遥",
          book_link: "/",
          score: 10.0,
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
        },{
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
      console.log("start rank")
      this.$axios.post("/api/book/listBook").then((res) => {
        console.log("booklist"+res.data);
        this.booktableData = res.data.messages;
      });
      console.log("end rank")
    },
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
    this.download_booklist();
  },
};
</script>

