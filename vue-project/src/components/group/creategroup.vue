<template>
<div>
   <div id="title">申请创建豆酱小组</div>
   <div id="create-form" class="left">
   <el-form ref="form" :model="form" label-width="80px" class="form">
   <!-- <el-divider><i class="el-icon-mobile-phone"></i></el-divider> -->
  <el-form-item label="小组名称" style="color:green">
    <el-input v-model="form.name"></el-input>
  </el-form-item>

  <el-divider><i class="el-icon-s-flag"></i></el-divider>
  <el-form-item label="小组标签">
    <el-select v-model="form.tag" placeholder="请选择小组分类标签">
      <el-option label="美食" value="美食"></el-option>
      <el-option label="娱乐" value="娱乐"></el-option>
      <el-option label="生活" value="生活"></el-option>
      <el-option label="运动" value="运动"></el-option>
      <el-option label="工作" value="工作"></el-option>
      <el-option label="其他" value="其他"></el-option>
    </el-select>
  </el-form-item>

  <el-divider><i class="el-icon-coffee-cup"></i></el-divider>
  <el-form-item label="小组简介">
    <el-input type="textarea" v-model="form.introduction" id="info"></el-input>
  </el-form-item>

  <el-divider><i class="el-icon-upload"></i></el-divider>
  <el-form-item>
    <el-button type="success" @click="onSubmit">立即创建</el-button>
    <el-button @click="$router.go(-1)">取消</el-button>
  </el-form-item>
</el-form>
</div>
<div class="tips" style="float:right;width:35%">
<div style="font-size:18px;color:green;text-align: left;margin-left: 30px;margin-right: 10%;">小组创建......</div>
<div style="font-size:15px;text-align: left;margin-left: 30px;margin-right: 10%;">小组需要审核通过后才能完成创建，审核结果会用豆邮通知，请耐心等待。创建成功后，你可以在小组管理页面调整小组名称、简介及标签。</div>
</div>
</div>
</template>
<script>
  export default {
    data() {
      return {
        form: {
          name: '',//小组名称
          tag: '',//小组分类标签
          introduction: '',//小组接招
          time:''
        }
      }
    },
    created(){
      if(this.$store.state.Login==false)
      {this.$message("请先登陆～")
        this.$router.push("/")}
    },
    methods: {
      onSubmit() {
          //提交表单信息
        let yy = new Date().getFullYear();
        let mm = new Date().getMonth()+1;
        let dd = new Date().getDate();
        let hh = new Date().getHours();
        let mf = new Date().getMinutes()<10 ? '0'+new Date().getMinutes() : new Date().getMinutes();
        let ss = new Date().getSeconds()<10 ? '0'+new Date().getSeconds() : new Date().getSeconds();
        
        var time=yy+'-'+mm+'-'+dd+' '+hh+':'+mf+':'+ss;
        console.log(time);
        this.time=time;
        var url="/api/group/addgroup";
        this.$axios({
            method:'post',
            url:url,
            data:this.form
        }).then(res=>{
            console.log(res.data)
        })
        
      }
    }
  }
</script>
<style scoped>
.form{
  text-align: left;
}
.tips{
  margin-right: 10%;
}
#title{
  color: green;
    font-size: 25px;
    text-align: left;
    margin: 30px;
    margin-left: 15%;
}
#create-form{
    width: 400px;
    margin-left: 15%;
    float: left;
}
#info{
    height: 60px;
}
</style>