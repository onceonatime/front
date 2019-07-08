<template>
  <div class="Times">
    <div
      class="Card flex__center"
      v-for="(time,index) in times"
      :key="'time'+index"
      @click="pushRouter(time.name)"
      :style="{backgroundImage:getImageUrl(index)}"
    >
      <div class="Card-Text">{{time.name}}</div>
    </div>
  </div>
</template>

<script>
import dataSet from "@/times_dataset.js";

export default {
  name: "Times",
  data() {
    return {
      times: dataSet.data
    };
  },
  methods: {
    getImageUrl(index) {
      return `url(${this.times[index].src})`;
    },
    pushRouter(time) {
      this.$router.push({ name: "timeline", params: { age: time } });
    }
  }
};
</script>

<style lang='scss' scoped>
@import "@/assets/css/index.scss";
.Times {
  background-color: $background-color;
  height: 100%;
  overflow: scroll;
}
.Card {
  width: 310px;
  height: 130px;
  margin: auto;
  margin-bottom: 7px;
  font-size: 32px;
  font-weight: 500;
  background: {
    repeat: no-repeat;
    position: right;
    size: contain;
    color: #fff;
  }
  background-position:right;
}
</style>