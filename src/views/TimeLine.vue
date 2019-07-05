<template>
  <div class="TimeLine">
    <div class="TimeLine-Head">
      <div class="TimeLine-HeadName">{{age}}</div>
      <div class="TimeLine-HeadAge">1392-1506</div>
    </div>
    <div class="TimeLine-Load">
      <div class="TimeLine-LoadLine"></div>
      <div class="TimeLine-Load-Age">
        <div class="TimeLine-Load-AgeNum"></div>
        <div class="TimeLine-Load-AgeCircle"></div>
        <div class="TimeLine-Load-AgeTet"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TimeLine",
  props: ["age"],
  data() {
    return {};
  }
};
</script>

<style lang='scss' scoped>
@import "@/assets/css/index.scss";
</style>