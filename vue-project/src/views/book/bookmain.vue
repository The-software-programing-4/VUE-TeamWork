<template>
    <div>
       <div style="width:50%;float: left;margin-left: 100px;">
        <books style="width:100%"></books>
       </div>
    <div style="width: 28%;float: left; margin-left:30px ;">
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