<template>
  <div class="TimeLine">{{age}} 타임라인</div>
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