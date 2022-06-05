<template>
    <div class="outside">
        <div class="title">
            <div class="ttt1">
            <img :src="this.groupData.src">
            </div>
            <div class="ttt3">
            <h2>{{this.groupData.name}}</h2>
            </div>
            <div class="ttt2">
            <el-button type="info" plain size="small">加入小组</el-button>
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
          name:"小组名称",
          respose: 100,
          number:10,
          src: "https://img2.doubanio.com/icon/g95772-1.jpg",
          introduction:"I love this group,I love this group,I love this group,I love this group,I love this group,I love this group,I love this group,I love this group,I love this group,I love this group,I love this group,",
          leader: "selmissL", 
          time: "5.20"
        },
        }
    }
}
</script>