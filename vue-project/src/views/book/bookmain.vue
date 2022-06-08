<template>
    <div>
       <div style="width:800px;float: left;margin-left: 100px;">
        <books style="width:100%"></books>
       </div>
    <div style="width: 300px;float: left; margin-left:30px ;">
    <!-- <HotBookTopicsVue></HotBookTopicsVue> -->
    <booklistVue></booklistVue>
    </div>
    </div>
</template>
<script>
import books from '../../components/Books/showbook.vue';
import HotBookTopicsVue from '@/components/PYK-component/HotBookTopics.vue';
import booklistVue from '../../components/PYK-component/booklist.vue'
export default {
    components:{
        books,
        HotBookTopicsVue,
        booklistVue

    }
}
</script>