<template>
  <div id="loginBox">
    <h1>登录</h1>
    <div class="inputBox">
      <div class="inputText">
        <span class="iconfont icon-wode"></span>
        <input type="text" placeholder="手机号" />
      </div>
      <div class="inputText inputCode">
        <span class="iconfont icon-mima"></span>
        <input type="password" placeholder="验证码" />
        <a href="#" class="sendCode">发送验证码</a>
      </div>
      <input class="button" type="button" value="登录" />
    </div>
  </div>
</template>

<script>
import "@/css/style.css";
import "@/css/iconfont.css";
export default {};
</script>

<style>
</style>