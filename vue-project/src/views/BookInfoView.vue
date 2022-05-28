<template>
  <div>
    <bookInfoCard class="bookCard">

    </bookInfoCard>
  </div>
</template>

<script>
import bookInfoCard from "@/components/Books/bookInfoCard.vue";

export default {
  name: "BookInfoView",
  components: {
    bookInfoCard,
  },
};
</script>

<style>
.bookCard{
  position: relative;
  left: 300px;
  top: 50px;
}
</style>