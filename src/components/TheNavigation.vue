<template>
  <div class="Navigation">
    <div class="Navigation-Back">
      <img @click="backRouter" class="Navigation-Icon" :src="backIcon" alt />
    </div>
    <div class="Navigation-Home">
      <img
        @click="pushMain"
        class="Navigation-Icon"
        style="width:32px;"
        :src="homeIcon"
        alt
      />
    </div>
    <div class="Navigation-Head">{{head}}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      backIcon: require("@/assets/icon/back_arrow.png"),
      homeIcon: require("@/assets/icon/home.png")
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
    },
    pushMain() {
      this.$router.push({ name: "main" });
    }
  }
};
</script>

<style lang='scss' scoped>
@import "@/assets/css/index.scss";
.Navigation {
  background-color: $background-color;
  color: #707070;
  position: fixed;
  border-bottom: 1px solid #61616142;
  top: 0px;
  padding: 17.5px 14px;
  width: calc(100% - 28px);
  max-width: 772px;
  z-index: 10;
  &-Back {
    width: 28px;
    position: absolute;
  }
  &-Home {
    width: 28px;
    position: absolute;
    right: 15px;
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