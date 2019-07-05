<template>
  <div class="Times">
    <div
      class="Card flex__center"
      v-for="(time,index) in times"
      :key="'time'+index"
      @click="pushRouter(time.name)"
    >
      <div class="Card-Text">{{time.name}}</div>
    </div>
  </div>
</template>

<script>
const img1 =
  "https://www.museum.go.kr/relic_image/PS01001001/ssu001/2016/1018105920101/700/ssu001794-00.jpg";
export default {
  name: "Times",
  data() {
    return {
      times: [
        { name: "청동기", key: "01" },
        { name: "선사시대", key: "선사시대" },
        { name: "조선시대", key: "조선시대" },
        { name: "근현대", key: "근현대" },
        { name: "근현대", key: "근현대" },
        { name: "청동기", key: "01" },
        { name: "선사시대", key: "선사시대" },
        { name: "조선시대", key: "조선시대" },
        { name: "근현대", key: "근현대" },
        { name: "근현대", key: "근현대" }
      ]
    };
  },
  methods: {
    pushRouter(time) {
      this.$router.push({ name: "timeline", params: { age: time } });
    }
  }
};
</script>

<style lang='scss' scoped>
@import "@/assets/css/index.scss";
.Times {
  background-color: $gray;
  height: 100%;
  overflow: scroll;
}
.Card {
  width: 328px;
  height: 130px;
  margin: auto;
  margin-bottom: 7px;
  font-size: 32px;
  font-weight: 500;
  background: {
    repeat: no-repeat;
    position: center;
    image: url("https://www.museum.go.kr/relic_image/PS01001001/ssu001/2016/1018105920101/700/ssu001794-00.jpg");
    size: cover;
    color: #fff;
  }
}
</style>