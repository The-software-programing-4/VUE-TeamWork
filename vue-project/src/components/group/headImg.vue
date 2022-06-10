<template>
  <div class="outside">
    <div class="title" style="color:green;margin:30px">
      <h2>点击更换小组头像</h2>

    </div>
    <el-upload
  class="avatar-uploader"
  :action='this.url'
  :data="{gid:this.gid}"
  :show-file-list="false"
  :on-success="handleAvatarSuccess"
  :before-upload="beforeAvatarUpload">
  <img v-if="imageUrl" :src="imageUrl" class="avatar">
  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
</el-upload>
    <el-button class="success" size="middle" @click="go">确认</el-button>
  </div>
</template>

<style scoped>
.outside{

  background-image:url('https://t7.baidu.com/it/u=3168329137,3263381309&fm=193&f=GIF;') ;
  width: 30%;
  padding: 10%;
  margin: auto;
  margin-top: 5%;
  border: 1px green solid;
}
  .avatar-uploader .el-upload {
    border: 3px dashed #b1a2a2;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
</style>

<script>
  export default {
    data() {
      return {
          url:'',
          gid:0,
        form:{
          username: '',
        },
        imageUrl: ''
      };
    },
    methods: {
      go(){
        this.$router.go(-1)
      },
      handleAvatarSuccess(res, file) {
        this.imageUrl = URL.createObjectURL(file.raw);
        console.log(res);
      },
      beforeAvatarUpload(file) {
        const isJPG = file.type === 'image/jpeg';
        const isLt2M = file.size / 1024 / 1024 < 2;
        console.log(this.imageUrl);
        console.log("更新图片 ")
        if (!isJPG) {
          this.$message.error('上传头像图片只能是 JPG 格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
        }
        return isJPG && isLt2M;
      },
      download_erweima() {

        this.$axios.get("/api/user/getImg").then(res=>{
        console.log(res.data);
        // const captchaImg = window.URL.createObjectURL(res.data.message);
        // this.imgbase=captchaImg;
        this.imageUrl=res.data.message;
        console.log(this.imageUrl);
        
        })
      },
      display_photo(){
        this.$axios.post("/api/group/getimg",{
           gid: parseInt(this.gid)
        }).then(res=>{
        console.log(res.data);
        // const captchaImg = window.URL.createObjectURL(res.data.message);
        // this.imgbase=captchaImg;
        if(res.data.username!=null){
          this.form.username=res.data.username;
        }
        if(res.data.src)
        {
          this.imageUrl=this.$hostURL+"/"+res.data.src;
        }
        console.log(this.imageUrl);
         })
      },
    },
    created(){
        this.gid=parseInt(this.$route.query.gid);
        this.url=this.$hostURL+'/api/group/headimg'
       this.display_photo();
    },
    beforeAvatarUpload(){
      this.display_photo();
    }
    
  }
</script>