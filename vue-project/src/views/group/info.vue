<template>
    <div class="outside">
        <div class="left">
        <card>  </card>
        <div class="title">
            <h4>最热讨论</h4>
        </div>
        <div class="title" style="float:right;">
            <el-button type="success" plain size="mini">+发言</el-button>
        </div>
        <discuss></discuss>
        </div>
        <div class="right">
            <member></member>
        </div>
    </div>
</template>
<script>
import card from "../../components/group/infocard.vue"
import member from "../../components/group/member.vue"
import discuss from "../../components/group/discuss.vue"
export default {
    components:{
        card,
        member,
        discuss
    }
}
</script>
<style scoped>
.title{
    margin-top: 30px;
    margin-left: 20px;
    color: green;
    display: inline-block;
}
.outside{
    text-align:left;
}
.left{
    text-align: left;
    display: inline-block;
    margin-left: 10%;
}
.right{
    margin: 80px 10px;
    margin-left: 30px;
    display: inline-block;
    vertical-align: top;
}
</style>