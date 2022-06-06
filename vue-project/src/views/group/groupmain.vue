<template>
    <div class="main">
        <div class="left">
            <list2></list2>
        <list></list>
        <list3></list3>
        </div>
        <div class="right">
            <mainr></mainr>
        </div>
    </div>
</template>
<script>
import list from "../../components/group/mygrouplist.vue"
import list2 from "../../components/group/grouplist.vue"
import list3 from "../../components/group/groupIT.vue"
import mainr from "../../components/group/mainr.vue"
export default {
    components:{
        list,
        mainr,
        list2,
        list3

    }
}
</script>
<style scoped>
.left{
    margin-left: 9%;
    float: left;
    width: 50%;
}
.right{
    margin-top: 80px;
    display: inline-block;
    width: 200px;
    margin-right: 17%;
}
</style>