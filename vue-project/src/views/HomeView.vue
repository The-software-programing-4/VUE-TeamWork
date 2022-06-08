<template>
<div >
  <!-- <headtop></headtop> -->
  <homeCard></homeCard>

</div>
</template>

<script>
import homeCard from "@/components/Home/homeCard.vue";
import headtop from "@/components/pry_part/headtop.vue"
import booklistVue from "@/components/group/booklist.vue";
import HotBookTopicsVue from "@/components/PYK-component/HotBookTopics.vue";
export default {
  name: "HomeView",
  components: {
    homeCard,
    headtop,
    booklistVue,
    HotBookTopicsVue,
  },
};
</script>

<style>
</style>