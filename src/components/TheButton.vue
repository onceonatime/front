<template>
  <div class="TheButton">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "TheButton",
};
</script>

<style lang='scss' scoped>
@import "@/assets/css/index.scss";
.TheButton {
  display: inline-block;
  padding: 10px 20px;
  border-radius: 7px;
  background-color: $orange;
  color: #fff;
  font-size: 21px;
  font-weight: 500;
}
</style>