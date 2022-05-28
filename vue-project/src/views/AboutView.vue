<!-- <template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template> -->
<template>
  <div class="about">
    <h1>This is an about page</h1>
    <MovieInfoCard></MovieInfoCard>
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
export default {
  components:{
    headTop,
    searchBox,
    showIm,
    MovieInfoCard
}
}
</script>
