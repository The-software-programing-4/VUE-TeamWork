<template>
  <div id="app">
    <headTop></headTop>
    <!-- <nav>
      <router-link to="/">Home</router-link> 
      <router-link to="/about"> |About</router-link>
       <router-link to="/MovieShow"> |MovieShow</router-link>
       <router-link to="/BookShow"> |BookShow</router-link>
       <router-link to="/TopicShow"> |TopicShow</router-link>
       <router-link to="/user/login"> |Login</router-link>
       <router-link to="/user/message"> |message</router-link>
    </nav> -->
    <!-- <nav>
       <HeadTop></headTop>
    </nav> -->
    <router-view/>
  </div>
</template>
<script>
import headTop from "./components/pry_part/headtop.vue"
export default{
  components:{
    headTop,
},
created(){
  this.$message("created");
}
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
