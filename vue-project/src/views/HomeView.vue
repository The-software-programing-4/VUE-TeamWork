<template>
<div>
  <headtop></headtop>
  <homeCard></homeCard>
</div>
</template>

<script>
import homeCard from "@/components/Home/homeCard.vue";
import headtop from "@/components/pry_part/headtop.vue"

export default {
  name: "HomeView",
  components: {
    homeCard,
    headtop
  },
};
</script>

<style>
</style>