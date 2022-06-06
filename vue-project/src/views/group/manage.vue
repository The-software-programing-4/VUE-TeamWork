<template>
    <div class="outside">
        <div class="left">
            <list @c2p="c2p"></list>
        <card @getgid="getgid" ref="child2"></card>
        
        
        </div>
        <!-- <div class="right">
            <member></member>
        </div> -->
    </div>
</template>
<script>
import card from "../../components/group/infocard2.vue"
import member from "../../components/group/member.vue"

import list from "../../components/group/Mgrouplist.vue"
export default {
    components:{
        card,
        member,
        list
    },
    data(){
        return {
            gid:'',
        }
    },
    methods:{
        c2p(p1)
        {
            this.gid=p1;
            console.log("re"+p1)
            this.$refs.child2.getData(p1);
        },
        toedit(){
            this.$router.push({
                path:"/group/editor",
                query:{gid:this.gid}
            })
            console.log("主页发送"+this.gid)
        },
        async getgid(param1)
        {
            this.gid=parseInt(param1);
            console.log("组件传值"+this.gid)
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