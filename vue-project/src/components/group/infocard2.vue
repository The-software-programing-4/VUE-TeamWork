<template>
    <div class="outside">
        <div class="title" v-if="status===1">
            <div class="ttt1">
            <img :src="this.groupData.src" width="48px" height="48px">
            </div>
            <div class="ttt3">
            <h2>{{this.groupData.name}}</h2>
            </div>
            <div class="ttt2" v-if="this.groupData.join===0">
            <el-button type="success" plain size="small" @click="addInto">加入小组</el-button>
            </div>
            <div class="ttt2" v-if="this.groupData.join===1">
            <el-button type="info" plain size="small" @click="drop">退出小组</el-button>
            </div>
        </div>
        <div class="message" v-if="status===1">
            <div class="leader">
                <b>组长</b> : {{this.groupData.leader}} &nbsp;&nbsp;  <b>创建日期</b> : {{this.groupData.time}}
            </div>
            <div class="intro">
                <el-input v-model="this.groupData.introduction" :placeholder="this.groupData.introduction"></el-input>
                
            </div>
            <div class="intro">
                <el-input v-model="this.groupData.introduction" :placeholder="this.groupData.introduction"></el-input>
            </div>
            <div class="qian">
              <b>小组标签</b> : <el-input v-model="this.groupData.leader" style="width:80px;" :placeholder="this.groupData.introduction"></el-input>
              <span style="margin-left:20px;"> </span>
                  <el-button type="primary" icon="el-icon-edit" circle></el-button>
            </div>
        </div>
        <div class="title" v-if="status===1"><h2>组内讨论</h2></div>
        <div class="list" v-if="status===1">
        <discuss1 :gid="gid" ref="child"></discuss1>
        </div>
        <div v-if="status===0" class="none"><h2>请选择小组</h2></div>
    </div>
</template>
<style scoped>
.list{
    margin-left: 30px;
}
.none{
    margin-top: 30px;
}
.intro{
    padding: 4%;
    text-align: left;
    border-bottom: 1px dashed rgba(0,0,0,0.3); ;
}
.qian{
    padding: 4%;
    text-align: left;

}
.leader{
    padding: 3%;
    text-align: left;
    border-bottom: 1px dashed rgba(0,0,0,0.3); ;
}
.message{
    padding: 5px;
    margin: 10px;
    width: 600px;
    font-size: 14px;
    background-color: #fff4e8;
}
.ttt1{

    display: inline-block;
    vertical-align: middle;
    margin-left: 10px;
}
.ttt2{
    vertical-align: middle;
    display: inline-block;
    margin-left: 10px;
}
.ttt3{
    margin-left: 10px;
    vertical-align: middle;
    display: inline-block;
}
.title{
    margin-top: 30px;
text-align: left;
vertical-align: middle;
display: inline-block;
margin-right: 30px;
}
</style>
<script>
import discuss1 from "./discuss2.vue"
export default {
    components:{
        discuss1
    },
    data(){
        return {
        gid:0,
        status:0,
        groupData:
        {
            join:1,
            gid:1,
          name:"小组名称",
          respose: 100,
          number:10,
          src: "https://img2.doubanio.com/icon/g95772-1.jpg",
          introduction:"I love this group,I love this group,I love this group,I love this group,I love this group,I love this group,I love this group,I love this group,I love this group,I love this group,I love this group,",
          leader: "selmissL", 
          time: "5.20"
        },
        }
    },
    methods:{
        getData(gid)
        {
            
            this.gid=gid
            this.status=1;
            console.log("搜索"+gid)
            this.$axios.post("/api/group/getgroup",{gid:parseInt(gid)}).then((res) => {
                console.log(res.data);
                this.groupData = res.data.groupData;
                this.groupData.src=this.$hostURL+'/'+this.groupData.src;
            });
            this.getData2(gid)
            
        },
        getData2(gid)
        {

            console.log("send"+gid)
            this.$refs.child.download_movielist(gid);
        },
        sleep1(numberMillis){    
        var now = new Date();    
        var exitTime = now.getTime() + numberMillis;   
        while (true) { 
          now = new Date();       
          if (now.getTime() > exitTime) return;
        }     
      },
        addInto()
        {
            this.$axios.post("/api/group/addmember",{gid:parseInt(this.groupData.gid),role:1}).then((res) => {
                console.log(res.data);
            });
            this.$router.go(0)
        },
        drop()
        {
            this.$axios.post("/api/group/dropmember",{gid:parseInt(this.groupData.gid)}).then((res) => {
                console.log(res.data);
            });
            this.$router.go(0)
        }
    },
    created()
    {
        this.groupData.gid=this.$route.query.gid;
        console.log("收到:"+this.groupData.gid)
        //this.getData(this.groupData.gid);
        this.$emit('getgid', this.groupData.gid);
        console.log("组件发送"+this.groupData.gid)
    }
}
</script>