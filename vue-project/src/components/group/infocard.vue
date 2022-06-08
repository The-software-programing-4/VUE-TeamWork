<template>
    <div class="outside">
        <div class="title">
            <div class="ttt1">
            <img :src="this.groupData.src" width="48px" height="48px">
            </div>
            <div class="ttt3">
            <h2>{{this.groupData.name}}</h2>
            </div>
            <div class="ttt2" v-if="this.groupData.join===0 && this.$store.state.Login===true">
            <el-button type="success" plain size="small" @click="addInto">加入小组</el-button>
            </div>
            <div class="ttt2" v-if="this.groupData.join===1 && this.$store.state.Login===true">
            <el-button type="info" plain size="small" @click="drop">退出小组</el-button>
            </div>
            <div class="ttt2" v-if="this.groupData.ismanager===0 && this.groupData.join===1 && this.$store.state.Login===true">
            <el-button type="success" plain size="small" @click="tomanager">申请成为管理员</el-button>
            </div>
            <div class="ttt2" v-if="this.groupData.ismanager===2 && this.groupData.join===1 && this.$store.state.Login===true">
            <el-button type="succuss" plain size="small" @click="groupData.ismanager=0">申请已发送</el-button>
            </div>
            <div class="ttt2" v-if="this.$store.state.Login===false">
            <el-button type="succuss" plain size="small" @click="tologin">登陆后可加入小组</el-button>
            </div>
        </div>
        <div class="message">
            <div class="leader">
                <b>组长</b> : {{this.groupData.leader}} &nbsp;&nbsp;  <b>创建日期</b> : {{this.groupData.time}}
            </div>
            <div class="intro">
                {{this.groupData.introduction}}
            </div>
            <div class="intro">
                {{this.groupData.introduction}}
            </div>
            <div class="qian">
              <b>小组标签</b> : {{this.groupData.leader}}
            </div>
        </div>
    </div>
</template>
<style scoped>
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
}
</style>
<script>
export default {
    data(){
        return {
        
        groupData:
        {
            ismanager:0,
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
    tologin()
    {
      this.$router.push('/')
    },
        tomanager()
        {
            this.groupData.ismanager=2;
            this.$axios.post("/api/group/tomanager",
                {gid:parseInt(this.groupData.gid)}).then((res) => {
                    console.log(res.data);
                })
        },
        sleep1(numberMillis){    
        var now = new Date();    
        var exitTime = now.getTime() + numberMillis;   
        while (true) { 
          now = new Date();       
          if (now.getTime() > exitTime) return;
        }     
      },
        getData()
        {
            console.log("搜索"+this.groupData.gid)
            this.$axios.post("/api/group/getgroup",{gid:parseInt(this.groupData.gid)}).then((res) => {
                console.log(res.data);
                this.groupData = res.data.groupData;
                this.groupData.src=this.$hostURL+'/'+this.groupData.src;
                this.$emit('getgid', this.groupData.gid,this.groupData.join);
                console.log("组件发送"+this.groupData.gid)
            });
        },
        addInto()
        {
            this.$axios.post("/api/group/addmember",{gid:parseInt(this.groupData.gid),role:1}).then((res) => {
                console.log(res.data);
            });
            this.$emit('getgid', this.groupData.gid,this.groupData.join);
            this.sleep1(200)
            this.$router.go(0)
        },
        drop()
        {
            this.$axios.post("/api/group/dropmember",{gid:parseInt(this.groupData.gid)}).then((res) => {
                console.log(res.data);
            });
            this.$emit('getgid', this.groupData.gid,this.groupData.join);
            this.sleep1(200)
            this.$router.go(0)
        }
    },
    created()
    {
        this.groupData.gid=this.$route.query.gid;
        console.log("收到:"+this.groupData.gid)
        this.getData();
        
    }
}
</script>