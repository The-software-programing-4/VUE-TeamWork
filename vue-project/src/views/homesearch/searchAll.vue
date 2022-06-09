<template>
    <div>
        <div style="width:40%; float:left;margin-left: 3%;">
        <div style="margin-top:100px; margin-bottom: 20px;">
            <book ></book>
        </div>
        <div style="margin-top:10px; margin-bottom: 20px;">
             <movie></movie>
        </div>
        </div>
        <div style="width:45%; float:left;margin-left: 7%;">
        <div style="margin-top:100px; margin-bottom: 20px;">
            <group></group>
        </div>
        <div style="margin-top:10px; margin-bottom: 20px;">
             <topic></topic>
        </div>
        </div>
           <!-- <div style="">
               <book></book>
               <movie></movie>
               <group></group>
               <topic></topic>
           </div> -->
    </div>
</template>
<script>
import book from "./book.vue";
import movie from "./movie.vue";
import group from "./group.vue";
import topic from "./topic.vue";
export default{
    components: {
        book,
        movie,
        group,
        topic,
     }
}
</script>