<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
const axios = require("axios");
export default {
  created() {}
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Nanum+Gothic&display=swap");

#app {
  // font-family: "Avenir", Helvetica, Arial, sans-serif;
  font-family: Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
  // width: 100%;
  margin: auto;
  max-width: 800px;
  position: relative;
}

html,
body {
  margin: 0;
  padding: 0;
  height: 100%;
  width:100%;
  // max-width: 800px;
}
</style>
