<template>
<div id="app">
    <div class="message" v-if="this.status===0">  
        <!-- /prevent阻止默认行为/ -->
    <el-form ref="form" :model="form" label-width="90px" 
         @submit.prevent="onSubmit">
      <el-form-item label="头像：">
        <img-change></img-change>
        <!-- <a style="" @click="toImgChange">点击上传头像</a> -->
      </el-form-item>
  <el-form-item label="昵称：" style="">
    <el-input v-model="form.username" placeholder="设置我的昵称"></el-input>
    <span>昵称30天内只能修改一次</span>
  </el-form-item>
  <el-form-item label="密码：">
    <a style="" @click="status=1">修改密码</a>
  </el-form-item>
  <el-form-item label="常居地：">
    <el-cascader 
        :options="options"
        v-model="form.region1"
        @change="handleChange"
        placeholder="设置我的居住地"
        style="width: 100%;"
      ></el-cascader>
  </el-form-item>
  <el-form-item label="家乡：">
   <el-cascader 
        :options="options"
        v-model="form.region2"
        @change="handleChange"
        placeholder="设置我的家乡"
        style="width: 100%;"
      ></el-cascader>
  </el-form-item>
  <el-form-item label="">
    <el-radio-group v-model="form.regionOP">
      <el-radio label="公开可见"></el-radio>
      <el-radio label="仅同乡可见"></el-radio>
    </el-radio-group>
  </el-form-item>
  <el-form-item label="生日：">
      <el-date-picker type="date" default-value="2000-01-01"
      placeholder="设置我的生日" v-model="form.date1" style="width: 100%;"></el-date-picker>
    <!-- <el-col class="line" :span="2">-</el-col>
    <el-col :span="11">
      <el-time-picker placeholder="选择时间" v-model="form.date2" style="width: 100%;"></el-time-picker>
    </el-col> -->
  </el-form-item>
  <el-form-item>
    <el-radio-group v-model="form.birthOP">
      <el-radio label="公开可见"></el-radio>
      <el-radio label="保密"></el-radio>
    </el-radio-group>
  </el-form-item>
  <el-form-item label="邮箱：">
    <el-input v-model="form.email" placeholder="绑定邮箱"></el-input>
  </el-form-item>
  <el-form-item label="手机号：">
    <span>{{form.phone}}  </span>
    <a>换绑</a>
  </el-form-item>
  <el-form-item label="第三方：">

  </el-form-item>
 
  <el-form-item>
    <el-button type="success" @click="onSubmit" >更新设置</el-button>
    <el-button>取消</el-button>
  </el-form-item>
</el-form>
    </div>
    <div class="message" v-else-if="status===1">
  <el-form ref="form22" :model="form2" label-width="90px" >
  <el-form-item label="旧密码：" style="">
    <el-input v-model="form2.password_temp" placeholder="旧密码" show-password></el-input>
  </el-form-item>
  <el-form-item label="新密码：" style="">
    <el-input v-model="form2.password_temp1" placeholder="新密码(最少6位数)" show-password></el-input>
  </el-form-item>
  <el-form-item label="再次确认：" style="">
    <el-input v-model="form2.password_temp2" placeholder="再次确认" show-password></el-input>
  </el-form-item>
    <el-form-item>
    <el-button type="success" @click="changePassword" >保存并重新登录</el-button>
    <el-button @click="status=0">返回</el-button>
    </el-form-item>
       </el-form>
    </div>
</div>
</template>

<style scoped>
.el-form-item{
  text-align: left;
}
.message{
  width: 90%;
}
span{
  color: gray;
}
a{
  color: blue;
}
a:hover{
  color: pink;
  cursor:pointer;
}
.message{
  margin: auto;
}
</style>
<script>
import { regionData, CodeToText } from "element-china-area-data";
import qs from "qs"
import axios from 'axios'
import ImgChange from './ImgChange.vue';
export default {

    data() {
      return {
        form: {
          uid : '',
          username: '',
          regionOP: "公开可见",
          date1: '',
          birthOP: "公开可见",
          email: '',
          phone: '暂未绑定手机',
          region1: [null,null,null],
          region2: [null,null,null],
          l1: '',
          l2: '',
          l3: '',
          h1: '',
          h2: '',
          h3: '',
        },
        options: regionData,
        form2: {
          uid: '',
          password_temp: '',
          password_temp1: '',
          password_temp2: '',
        },
          
        
        status: 0,
      }
    },
    methods: {
      onSubmit() {
        var url='api/user/message_set';
        console.log(this.form);
        this.form.l1=this.form.region1[0];
        this.form.l2=this.form.region1[1];
        this.form.l3=this.form.region1[2];
        this.form.h1=this.form.region2[0];
        this.form.h2=this.form.region2[1];
        this.form.h3=this.form.region2[2];
        axios.post(url,
                  this.form,
                  {
                    headers: {
                      'Content-Type':'application/json'
                    }
                  }
        ).then(res => {
          console.log(res);
          alert("更新成功！")
        })
        this.status=0;
      },
      SubmitPassword() {
         this.form2.uid=this.form.uid;
         var url='/api/user/password_set';
        axios.post(url,
                  this.form2,
                  {
                    headers: {
                      'Content-Type':'application/json'
                    }
                  }
        ).then(res => {
          alert(res.data.message);
          console.log(res);
        })

      },
      handleChange() {
      var loc = "";
      for (let i = 0; i < this.region1.length; i++) {
        loc += CodeToText[this.form.region1[i]];
      }
      },
      handleChange2() {
      var loc = "";
      for (let i = 0; i < this.region2.length; i++) {
        loc += CodeToText[this.from.region2[i]];
      }
     },
     changePassword() {
              if(this.form2.password_temp1.length<6)
              {
                alert("密码至少为6位！");
              }
              else if(this.form2.password_temp1 === this.form2.password_temp2)
              {
                this.form.password=this.form2.password_temp1;
                console.log(this.form2);
                this.SubmitPassword();
                //this.$router.go(0);
              }
              else{
                alert("两次输入的密码不一致！");
              }
      },
      toImgChange() {
        this.$router.push('/user/ImgChange');
      },
      getMessage(){
        this.$axios.get("/api/user/message_get").then(res=>{
        console.log(res.data);

          this.form.uid = res.data.uid;
          this.form.username= res.data.username;
          this.form.password= res.data.password;
          this.form.regionOP= res.data.regionOP;
          var n=(res.data.date1).split(" ");
          this.form.date1= n[0];
          this.form.birthOP= res.data.birthOP;
          this.form.email= res.data.email;
          this.form.phone= res.data.phone;
          this.form.region1= res.data.region1;
          this.form.region2= res.data.region2;

          console.log(this.form);
         })
      }
    },
    created(){
      this.getMessage();
    },
    components: {
      ImgChange,
    }
  };
</script>