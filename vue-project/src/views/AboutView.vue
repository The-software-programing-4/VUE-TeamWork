<!-- <template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template> -->
<template>
  <div class="about">
    <h1>This is an about page</h1>
    <!-- <MovieInfoCard></MovieInfoCard> -->
    <PopularMovieList></PopularMovieList>
    <movielist></movielist>
    <!-- <headTop></headTop>
    <searchBox></searchBox>
    <showIm></showIm> -->
  </div>
</template>
<script>
import headTop from "../components/pry_part/headtop.vue"
import searchBox from"../components/pry_part/searchBox.vue"
import showIm from"../components/pry_part/showIm.vue"

import MovieInfoCard from "../components/Movies/MovieInfoCard.vue"
import movielist from "../components/PYK-component/movielist.vue"
import PopularMovieList from "../components/PYK-component/PopularMovieList.vue"
export default {
  components:{
    headTop,
    searchBox,

    showIm,
    MovieInfoCard,
    movielist,
    PopularMovieList,
}

}
</script>
