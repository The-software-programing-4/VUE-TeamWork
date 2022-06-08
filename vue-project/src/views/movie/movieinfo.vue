<template>
  <div>
    <div style="display:inline-block; width:50%; margin-top: 50px;">
       <bookInfoCard class="bookCard" style="">
    </bookInfoCard>
    </div>
     <!-- <div style="width: 100px;display:inline-block; margin-left:0px ;">
    <HotBookTopicsVue></HotBookTopicsVue>
    <movielistVue></movielistVue>
    </div> -->
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

<style>
</style>