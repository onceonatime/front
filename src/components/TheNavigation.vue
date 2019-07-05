<template>
  <div class="Navigation">
    <div class="Navigation-Back">
      <img @click="backRouter" class="Navigation-Icon" :src="backIcon" alt />
    </div>
    <div class="Navigation-Head">{{head}}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      backIcon: require("@/assets/icon/back_arrow.png")
    };
  },
  computed: {
    head() {
      return this.$store.state.head;
    }
  },
  methods: {
    backRouter() {
      this.$router.back();
    }
  }
};
</script>

<style lang='scss' scoped>
@import "@/assets/css/index.scss";
.Navigation {
  background-color: #f4f4f4;
  color: #707070;
  position: fixed;
  // height:100px;
  top: 0px;
  padding: 18px 14px;
  width: calc(100% - 28px);
  &-Back {
    width: 28px;
    position: absolute;
  }
  &-Icon {
    width: 100%;
  }
  &-Head {
    text-align: center;
    // position:absolute;
  }
}
</style>