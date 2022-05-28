<template>
  <div>
    <topicInfoCard class="topicCard">

    </topicInfoCard>
  </div>
</template>

<script>
import topicInfoCard from "@/components/Topic/topicInfoCard.vue";

export default {
  name: "TopicInfoView",
  components: {
    topicInfoCard,
  },
};
</script>

<style>
.topicCard{
  width: 40%;
  position: relative;
  left: 240px;
  top: 50px;
}
</style>