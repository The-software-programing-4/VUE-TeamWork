<template>
  <div>
    <div style="float:left; width:700px;margin-left: 80px;margin-top:50px;float: left;">
       <bookInfoCard class="bookCard" style="">
    </bookInfoCard>
    </div>
    <div style="width:350px; margin-left:0px ;float: left;margin-top: 100px;">
    <img src="../../components/imgs/bookinfo.jpg" alt="" style="width:100%">
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