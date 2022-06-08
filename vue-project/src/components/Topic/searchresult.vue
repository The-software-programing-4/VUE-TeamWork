<template>
    <div class="outside">
        <div class="left">
        <searchlist></searchlist>
        </div>
        <div class="right">
            <a> > 对搜索结果不满意？联系我们</a>
        </div>
    </div>
</template>
<script>
import searchlist from "../../components/Topic/searchlist.vue"
export default {
    components:{
        searchlist,
    }
}
</script>
<style scoped>
.left{
    width: 55%;
    display: inline-block;
}
.right{
    width: 20%;
vertical-align: top;
margin-top: 9%;
    display: inline-block;
}
</style>