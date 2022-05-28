<template>
  <div>
    <movieInfoCard class="movieCard">

    </movieInfoCard>
  </div>
</template>

<script>
import movieInfoCard from "@/components/Movies/MovieInfoCard";

export default {
  name: "MovieInfoView",
  components: {
    movieInfoCard,
  },
};
</script>

<style>
.movieCard{
  position: relative;
  left: 300px;
  top: 50px;
}
</style>