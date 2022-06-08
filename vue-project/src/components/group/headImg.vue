<template>
  <div>
    <el-upload
  class="avatar-uploader"
  :action='this.url'
  :data="this.gid"
  :show-file-list="false"
  :on-success="handleAvatarSuccess"
  :before-upload="beforeAvatarUpload">
  <img v-if="imageUrl" :src="imageUrl" class="avatar">
  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
</el-upload>
 
  </div>
</template>

<style>
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
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
      handleAvatarSuccess(res, file) {
        this.imageUrl = URL.createObjectURL(file.raw);
        console.log(res);
      },
      beforeAvatarUpload(file) {
        const isJPG = file.type === 'image/jpeg';
        const isLt2M = file.size / 1024 / 1024 < 2;
        console.log(this.imageUrl);
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