<template>
    <div class="outside">
        <div class="left">
        <card @getgid="getgid"> </card>
        <div class="title">
            <h4>最热讨论</h4>
        </div>

        <div class="title" style="float:right;" v-if="this.speak===1">
            <el-button type="success" plain size="mini" v-if="this.$store.state.Login==true" @click="this.toedit">+发言</el-button>
        </div>
        <div class="list">
        <discuss></discuss>
        </div>
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
    },
    data(){
        return {
            gid:'',
            speak:0,
        }
    },
    methods:{
        toedit(){
            this.$router.push({
                path:"/group/editor",
                query:{gid:this.gid}
            })
            console.log("主页发送"+this.gid)
        },
        async getgid(param1,p2)
        {
            this.gid=parseInt(param1);
            this.speak=parseInt(p2);
            console.log("组件传值"+this.gid+" "+this.speak)
        }
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