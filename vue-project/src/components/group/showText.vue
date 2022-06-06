<template>
    <div class="outside" >
        <div class="title"><h2>{{this.title}}</h2></div>
        <div class="message">
            <div class="word"><img :src="this.src" width="48px" height="48px"></div>
            <div class="word">来自:  {{this.name}}</div>
            <div class="word">{{this.time}}</div>
        </div>
        <div class="content" v-html="this.content"></div>
    </div>
</template>
<style scoped>
.outside{

    height: 1000px;

    text-align: left;
}
.message{
    vertical-align: middle;
    height: 50px;
    margin-top: 20px;
    margin-bottom: 20px;
    background-color: antiquewhite;
    padding: 10px;
}
.word{
    vertical-align: middle;
    display: inline-block;
    margin-right: 20px;
}
.content ::v-deep img{
    width: 100%;
}

</style>
<script>
export default {
    
    data(){
        return {
            id:'',
            title:'',
            src:'',
            name:'',
            time:'',
            content:'',
        }
    },
    methods:{
        getData()
        {
            var url='/api/group/getdiscuss'
            console.log("search"+this.id)
            this.$axios.post(url,{
                id:parseInt(this.id)
            }).then(res=>{
                console.log(res.data)
                this.name=res.data.name;
                this.src=this.$hostURL+'/'+res.data.src;
                this.time=res.data.time;
                this.content=res.data.content;
                this.title=res.data.title;
            })
        }
    },
    created(){
        this.id=this.$route.query.id;
        console.log("recieve"+this.id)
        this.getData();
    }
    
}
</script>