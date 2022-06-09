<template>
<!-- <BookSearchResultVue style="width:100%"></BookSearchResultVue> -->
  <div>
    <div style="float:left; width:800px;margin-left: 150px;">
       <BookSearchResultVue style="width:100%"></BookSearchResultVue>
    </div>
     <div style="width: 300px;float: left; margin-left:50px ;">
    <!-- <HotBookTopicsVue></HotBookTopicsVue>
    <booklistvue></booklistvue> -->
    </div>
  </div>
</template>

<script>
import bookInfoCard from "@/components/Books/bookInfoCard.vue";
import HotBookTopicsVue from '@/components/PYK-component/HotBookTopics.vue';
import booklistVue from '@/components/group/booklist.vue';
import BookSearchResultVue from "@/components/pry_part/BookSearchResult.vue";
export default {
  name: "BookInfoView",
  components: {
    bookInfoCard,
     HotBookTopicsVue,
    booklistVue,
    BookSearchResultVue
  },
  data(){
      return{
          // searchText:'123',
      }
  },
  created(){
    // this.searchText=this.$route.query.searchText;
  }
};
</script>

<style scoped>
</style>