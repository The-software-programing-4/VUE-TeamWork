<template>
<!-- <BookSearchResultVue style="width:100%"></BookSearchResultVue> -->
  <div>
    <div style="width:800px;position: relative;margin:0 auto">
       <BookSearchResultVue style="width:100%"></BookSearchResultVue>
    </div>
  </div>
</template>

<script>
import HotBookTopicsVue from '@/components/PYK-component/PopularMovieList.vue';
import booklistVue from '@/components/PYK-component/movielist.vue';
import BookSearchResultVue from "@/components/pry_part/searchResultShow.vue";
export default {
  name: "BookInfoView",
  components: {
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

<style>
</style>