<template>
    <div class="main">
        <div class="left">
        <list></list>
        </div>
        <div class="right">
            <mainr></mainr>
        </div>
    </div>
</template>
<script>
import list from "../../components/group/mygrouplist.vue"
import mainr from "../../components/group/mainr.vue"
export default {
    components:{
        list,
        mainr
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