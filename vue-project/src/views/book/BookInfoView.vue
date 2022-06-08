<template>
  <div>
    <div style="float:left; width:800px;margin-left: 200px;">
       <bookInfoCard class="bookCard" style="">
    </bookInfoCard>
    </div>
     <div style="width: 300px;float: left; margin-left:0px ;">
    <HotBookTopicsVue></HotBookTopicsVue>
    <booklistvue></booklistvue>
    </div>
  </div>
</template>

<script>
import bookInfoCard from "@/components/Books/bookInfoCard.vue";
import HotBookTopicsVue from '@/components/PYK-component/HotBookTopics.vue';
import booklistVue from '@/components/group/booklist.vue';
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