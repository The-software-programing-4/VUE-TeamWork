<template>
<div class="out">
    <div id="topic-show" >
            <topics @change="changeFromTopicShow"></topics>
           
        </div>
    <div id="topiclist">
            <PopularMovieList></PopularMovieList>
            <movielist></movielist>
        </div>
</div>
</template>
<script>
import topics from "../../components/pry_part/topics.vue"
import movielist from "../../components/PYK-component/movielist.vue"
import PopularMovieList from "../../components/PYK-component/PopularMovieList.vue"

export default {
    components:{
        topics,
        movielist,
        PopularMovieList
    }
}
</script>
<style scoped>
#topic-show{
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