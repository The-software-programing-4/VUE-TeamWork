<template>
    <div class="out">
        
        <div id="topic-show" >
            
            <topicInfoCard class="topicCard"> </topicInfoCard>
        </div>
    </div>
</template>
<script>
import topicInfoCard from "@/components/Topic/topicInfoCard.vue";
export default {
    components:{
        topicInfoCard
    }
}
</script>

<style scoped>
#topic-show{
    margin-top: 30px;
        margin-left: 5%;
        width: 55%;
        float: left;
    }
    #topiclist{
        float: right;
        width: 30%;
        margin-right: 10%;
        margin-top:30px ;
       font-size:20px ;
    }
</style>
</style>