<template>
  <div>
    <div style="display:inline-block; width:50%; margin-top: 50px;margin-left:10% ;float: left;">
       <bookInfoCard class="bookCard" style="">
    </bookInfoCard>
    </div>
    <div style="display:inline-block;width:30%;float:left;margin-left:0px;margin-top: 50px; ">
        <img src="../../components/imgs/movieinfo.jpg" alt="" style="width:100%">
    </div>
  </div>
</template>

<script>
import bookInfoCard from "@/components/Movies/MovieInfoCard.vue";
import HotBookTopicsVue from '@/components/PYK-component/PopularMovieList.vue';
import movielistVue from '@/components/PYK-component/movielist.vue';
export default {
  name: "BookInfoView",
  components: {
    bookInfoCard,
     HotBookTopicsVue,
    movielistVue,
  },
};
</script>

<style scoped>
</style>