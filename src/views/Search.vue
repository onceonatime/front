<template>
  <div class="Search">
    <the-navigation :head="head"></the-navigation>
    <router-view class="Search-Main" />
  </div>
</template>

<script>
export default {
  props: ["head"]
};
</script>

<style lang='scss' scoped>
@import "@/assets/css/index.scss";
.Search {
  position: relative;
  top: 65px;
  height: calc(100% - 65px);
  &-Main {
    position: relative;
    height: 100%;
  }
}
</style>