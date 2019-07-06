<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
const axios = require("axios");
export default {
  created() {
    const LIST_URL = "/cha/SearchKindOpenapiList.do";

    function list_get(_params) {
      return axios
        .get(LIST_URL, {
          params: _params
        })
        .then(res => {
          console.log(res.data);
        });
    }
    // list_get({ pageUnit: 10, pageIndex: 2 });
  }
};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Nanum+Gothic&display=swap');
#app {
  // font-family: "Avenir", Helvetica, Arial, sans-serif;
  font-family: Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
  width: 100%;
  margin: auto;
  max-width: 800px;
  position: relative;
}

html,
body {
  margin: 0;
  padding: 0;
  height: 100%;
}
</style>
