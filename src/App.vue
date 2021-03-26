<template>
  <div id="app">
    app组件
   <div class="routerlink">
      <router-link to="/one" tag="div">one</router-link>
    <router-link to="/two" tag="div">two</router-link>
   </div>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.routerlink {
  display: flex;
  position: relative;
  left: 45%;
}
.routerlink >div {
  width: 100px;
  height: 100px;
  background-color: red;
  margin:20px 10px;
  line-height: 100px;
  text-align: center;
  cursor: pointer;
}
</style>
