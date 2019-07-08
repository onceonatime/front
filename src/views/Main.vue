<template>
  <div class="Main">
    <div class="Main-Banner" :style="{backgroundImage:`url('${banner}')`}">
      <img class="Main-Logo" :src="logo" alt />
    </div>
    <div class="Main-Infor">검색할 방법을 선택해주세요.</div>
    <div class="Main-Button">
      <div class="Main-ButtonItem">
        <div class="verticalCenter" @click="pushRouter('site')">
          <img class="Main-ButtonIcon" :src="site_icon" alt />
          <div class="Main-ButtonText">위치</div>
        </div>
      </div>
      <div class="verticalLine"></div>
      <div class="Main-ButtonItem">
        <div class="verticalCenter" @click="pushRouter('times')">
          <img class="Main-ButtonIcon" :src="timeline_icon" alt />
          <div class="Main-ButtonText">시대</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      banner: require("@/assets/image/배너.png"),
      logo: require("@/assets/image/Logo.png"),
      site_icon: require("@/assets/icon/위치.png"),
      timeline_icon: require("@/assets/icon/타임라인.png")
    };
  },
  methods: {
    pushRouter(name) {
      this.$router.push({ name: name });
    }
  }
};
</script>

<style lang='scss' scoped>
@import "@/assets/css/index.scss";

.verticalLine {
  width: 1px;
  background-color: $litegray;
  height: 89%;
}
.Main {
  position: relative;
  height: 100%;
  &-Banner {
    height: 65%;
    background-repeat: no-repeat;
    background-position: 30% 100%;
  }
  &-Logo {
    width: 120px;
    position: relative;
    top: 95px;
    left:39%;
    margin: auto;
  }
  &-Infor {
    color: $litegray;
    text-align: center;
    padding: 12px 0px 8px 0px;
  }
  &-Button {
    display: flex;
    height: calc(35% - 53px);
    align-items: center;
    &Item {
      width: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
}
</style>