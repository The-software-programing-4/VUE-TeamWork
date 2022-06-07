<template>
<div>
   <div id="title">申请创建豆酱小组</div>
   <div id="create-form">
   <el-form ref="form" :model="form" label-width="80px" >
   <!-- <el-divider><i class="el-icon-mobile-phone"></i></el-divider> -->
  <el-form-item label="小组名称" style="color:green">
    <el-input v-model="form.name"></el-input>
  </el-form-item>

  <el-divider><i class="el-icon-s-flag"></i></el-divider>
  <el-form-item label="小组标签">
    <el-select v-model="form.tag" placeholder="请选择小组分类标签">
      <el-option label="美食" value="shanghai"></el-option>
      <el-option label="娱乐" value="beijing"></el-option>
    </el-select>
  </el-form-item>

  <el-divider><i class="el-icon-coffee-cup"></i></el-divider>
  <el-form-item label="活动简介">
    <el-input type="textarea" v-model="form.info" id="info"></el-input>
  </el-form-item>

  <el-divider><i class="el-icon-upload"></i></el-divider>
  <el-form-item>
    <el-button type="primary" @click="onSubmit">立即创建</el-button>
    <el-button>取消</el-button>
  </el-form-item>
</el-form>
</div>
<div id="tips" style="float:right;width:35%">
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
          info: ''//小组接招
        }
      }
    },
    methods: {
      onSubmit() {
          //提交表单信息
        var url="/api/group";
        this.$axios({
            method:'poost',
            url:url,
            data:qs.stringify(this.form)
        }).then(res=>{
            console.log(res.data)
        })
        console.log('submit!');
      }
    }
  }
</script>
<style>
#title{
    font-size: 30px;
    text-align: left;
    margin-top: 30px;
    margin-left: 5%;
}
#create-form{
    width: 55%;
    margin-left: 5%;
    float: left;
}
#info{
    height: 60px;
}
</style>