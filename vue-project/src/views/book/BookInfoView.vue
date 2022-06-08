<template>
  <div>
    <div style="float:left; width:50%;margin-left: 10%;margin-top:50px">
       <bookInfoCard class="bookCard" style="">
    </bookInfoCard>
    </div>
    <div style="width:30%; margin-left:0px ;">
    <booklistvue></booklistvue>
    </div>
  </div>
</template>

<script>
import bookInfoCard from "@/components/Books/bookInfoCard.vue";
import HotBookTopicsVue from '@/components/PYK-component/HotBookTopics.vue';
import booklistVue from '../../components/PYK-component/booklist.vue';
export default {
  name: "BookInfoView",
  components: {
    bookInfoCard,
     HotBookTopicsVue,
    booklistVue
  },
};
</script>

<style>
</style>