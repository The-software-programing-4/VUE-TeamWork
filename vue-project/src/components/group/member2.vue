<template>
    <div class="out">
        <div class="title">
        <h4>管理员</h4>
        </div>
        <div class="member-list">
            <ul>
            <li v-for="item in memberData2" class="member-item">
                <div class="pic">
                <a @click="fake" class="nbg">
                    <img :src="item.src" class="imgnoga" alt="常山" width="48px" height="48px">
                </a>
                </div>

                <div class="name">
                    <a @click="fake" class="">{{item.name}}</a>
                </div>
                <div class="button">
                    <el-button type="danger" @click="setrole(item.uid,1)" size="mini" circle=""><i class="el-icon-caret-bottom"></i></el-button>
                </div>
            </li>
            </ul>
        </div>
        <div class="title">
        <h4>小组成员</h4>
        </div>
        <div class="member-list">
            <ul>
            <li v-for="item in memberData1" class="member-item">
                <div class="pic">
                <a @click="fake" class="nbg">
                    <img :src="item.src" class="imgnoga" alt="常山" width="48px" height="48px">
                </a>
                </div>

                <div class="name">
                    <a @click="fake" class="">{{item.name}}</a>
                </div>
                <div class="button">
                    <el-button type="success" @click="setrole(item.uid,2)" size="mini" round><i class="el-icon-caret-top"></i></el-button>
                </div>

                <div class="button" v-if="item.tom===1">
                       申请 <i class="el-icon-caret-top"></i>
                </div>

                <div class="button2">
                    <el-button type="danger" @click="setrole(item.uid,0)" size="mini" circle=""><i class="el-icon-close"></i></el-button>
                </div>
            </li>
            </ul>
        </div>
        <div class="all" @click="allmember">
            <a> > 查看全部成员</a>
        </div>
    </div>
</template>
<style scoped>
.all{
margin-top: 5%;
font-size: 13px;
    height: 20px;
    width: 90%;
}
.title{
    margin-left: 10px;
}
.member-list{
    margin-top: 10px;
    text-align: left;
    vertical-align: middle;
}
.member-list ul {
    width: 100%;
/* 
letter-spacing: -0.31em;
word-spacing: -0.43em; */
font-size: 0;
}
ul {
/* list-style-type: none; */
width: 250px;
margin: 0;
padding: 0;
}
.member-list .pic {
/* overflow: hidden; */
vertical-align: middle;
padding: 2px;
margin-left: 5px;
width: 50px;
display: inline-block;
}
.button2 {
    display: inline-block;
    width: 70px;
    vertical-align: top;
    margin-top: 3px;
}
.button{
    display: inline-block;
}
img.imgnoga {
width: 30px;
/* aspect-ratio: auto 48 / 48; */
height: 30px;
margin-right: 5px;

}
.member-list .name {
clear: both;
display: inline-block;
vertical-align: middle;
text-align: left;
width: 90px;
}
.member-list .button {
clear: both;
display: inline-block;
vertical-align: middle;
width: 60px;
}
.member-list li {

zoom: 1;
width: 100%;
vertical-align: middle;
text-align: left;
font-size: 14px;
vertical-align: top;
letter-spacing: normal;
word-spacing: normal;
}
</style>
<script>
export default {
    data(){
        return {
            //gid:'',
            memberData1:[
            ],
            memberData2:[
            ]
        }
    },
    props:{
        gid:Number
    },
    methods:{
        fake(){
            this.$message("天青色等烟雨，而我在等你");
        },
        allmember()
        {
            this.$message("已展示全部成员")
        },
        getData(gid){
            this.$axios.post("/api/group/getmember2",{
            gid:parseInt(gid)
            }).then((res) => {
            console.log(res.data);
         this.memberData2 = res.data.memberData;
         for(var i=0;i<this.memberData2.length;i++)
         {
             this.memberData2[i].src=this.$hostURL+'/'+this.memberData2[i].src;
         }
        
      });
      this.$axios.post("/api/group/getmember1",{
            gid:parseInt(gid)
            }).then((res) => {
            console.log(res.data);
         this.memberData1 = res.data.memberData;
         for(var i=0;i<this.memberData1.length;i++)
         {
             this.memberData1[i].src=this.$hostURL+'/'+this.memberData1[i].src;
         }
        
      });
        },
     setrole(uid,role){
         this.$axios.post("/api/group/setrole",
         {
             uid:parseInt(uid),
             gid:this.gid,
             role:parseInt(role)
         }).then(res=>{
             console.log(res.data);
         })
        this.sleep1(200)
        this.getData(this.gid);
     },
     sleep1(numberMillis){    
        var now = new Date();    
        var exitTime = now.getTime() + numberMillis;   
        while (true) { 
          now = new Date();       
          if (now.getTime() > exitTime) return;
        }  
     }
    },
    created(){
        // this.gid=this.$route.query.gid;
        // console.log("member收到:"+this.gid)
        this.getData(this.gid)
    }
}
</script>