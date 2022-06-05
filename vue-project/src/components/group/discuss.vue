<template>
<div class="outside">
  <el-table
    :data="discassData"
    stripe
    highlight-current-row
    style="width: 100%"
    max-height="850"
    :row-style="{height: '30px'}"
    :cell-style="{padding:'1px'}"
  >
    <el-table-column label="讨论" width="">
      <template slot-scope="scope" >
        <el-link 
              :underline="false"
              :href="scope.row.book_link"
              style="font-size: 15px"
            >
              {{ scope.row.name | ellipsis }}
        </el-link>
      </template>
    </el-table-column >
    <el-table-column lable="作者" prop="author">
      <template slot-scope="scope" >
          {{scope.row.author | ellipsis}}
      </template>
    </el-table-column>
    <el-table-column label="回应" prop="score" >
      <template slot-scope="scope" >
           {{scope.row.response}}
        </template>
    </el-table-column>
    <el-table-column label="点赞" prop="score" width="60px">
      <template slot-scope="scope" >
           {{scope.row.thumb}}
        </template>
    </el-table-column>
  </el-table>
  </div>
</template>
<style scoped>


</style>
<script>
export default {
  data() {
    return {
      discassData: [
        {
          name: "平凡的世界（全三部）",
          author: "[中] 路遥",
          response: 9,
          thumb: 11,
        },
        {
          name: "平凡的世界（全三部）",
          author: "[中] 路遥",
          response: 9,
          thumb: 11,
        },
        {
          name: "平凡的世界（全三部）",
          author: "[中] 路遥",
          response: 9,
          thumb: 11,
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
        console.log(res.data.messages);
        this.discassData = res.data.messages;
      });
      console.log("end rank")
    },
  },
  filters: {
    ellipsis: function (value) {
      if (!value) return "";
      if (value.length > 7) {
        return value.slice(0, 7) + "...";
      }
      return value;
    },
  },
  created() {
    //this.download_booklist();
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