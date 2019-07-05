<template>
  <div class="Main">
    <div class="Main-Banner card">
      <div class="image-box">
        <img :src="banner" alt />
      </div>
      <div class="text-box"></div>
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
          <img class="Main-ButtonIcon" :src="site_icon" alt />
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
      banner:
        "https://file.namu.moe/file/8bc9e381797334eb33da66e3ba501be171a8566d8f565cf8f62b2ea46f179bbc2564f40b02b67d3fba71c91da46b5ea2c2465ef3241edd88ee22a66af3bd00e6688fa0de7429385f1be259890f349ea5",
      site_icon:
        "https://st2.depositphotos.com/8065014/11370/v/950/depositphotos_113707614-stock-illustration-location-icon-vector-sign.jpg"
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
    &Icon {
      width: 50px;
    }
  }
}
</style>