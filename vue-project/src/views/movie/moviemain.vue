<template>
    <div>
       <div style="width:800px;float: left;margin-left: 100px;">
        <showImVue style="width:100%"></showImVue>
       </div>
    <div style="width: 300px;float: left; margin-left:30px ;">
    <HotBookTopicsVue></HotBookTopicsVue>
    <movielistVue></movielistVue>
    </div>
    </div>
</template>
<script>
import books from '../../components/Books/showbook.vue';
import HotBookTopicsVue from '@/components/PYK-component/PopularMovieList.vue';
import movielistVue from '@/components/PYK-component/movielist.vue';
import showImVue from '@/components/pry_part/showIm.vue';
export default {
    components:{
        books,
        HotBookTopicsVue,
        movielistVue,
        showImVue

    }
}
</script>