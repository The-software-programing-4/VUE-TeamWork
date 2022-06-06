<template>
    <div class="out">
        <div class="left">
        <showtext></showtext>
        </div>
        <div class="right">
            <mainr></mainr>
        </div>
    </div>
</template>
<style scoped>
.out{
    margin: auto;
    margin-top: 5%;
}
.left{
    margin-left: 20px;
    width: 50%;
    display: inline-block;
}
.right{
    margin-left: 5%;
    display: inline-block;
    vertical-align: top;
}
</style>
<script>
import showtext from "../../components/group/showText.vue"
import mainr from "../../components/group/mainr.vue"
export default {
    components:{
        showtext,
        mainr
    }
}
</script>