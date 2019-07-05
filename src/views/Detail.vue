<template>
  <div class="Detail">
    <div class="Detail-Slide glide">
      <div class="glide__track" data-glide-el="track">
        <ul class="glide__slides">
          <li v-for="(img, index) in data.images" :key="'image'+index" class="glide__slide">
            <div class="Detail-Slide-Item" :style="{backgroundImage:getImageUrl(index)}"></div>
          </li>
        </ul>
      </div>
    </div>
    <!-- <div>{{id}}</div> -->
    <div class="Detail-Head content">
      <div class="Detail-HeadName">{{data.name}}</div>
      <div class="Detail-HeadAddress">{{data.address}}</div>
    </div>
    <div class="Detail-Desc content">{{data.desc}}</div>
  </div>
</template>

<script>
import Glide from "@glidejs/glide";
import testSet from "../detail_test";
export default {
  name: "Detail",
  props: ["id"],
  data() {
    return {
      data: testSet
    };
  },
  methods: {
    getImageUrl(index) {
      console.log(`url(${this.data.images[index].url})`);
      return `url(${this.data.images[index].url})`;
    }
  },
  mounted() {
    new Glide(".glide", {
      peek: {
        before: 20,
        after: 20
      }
    }).mount();
  }
};
</script>

<style lang='scss' scoped>
@import "@/assets/css/index.scss";
.content {
  padding-left: 20px;
  padding-right: 20px;
}
.Detail {
  &-Slide {
    // height: 180px;
    padding: 0;
    &-Item {
      height: 150px;
      background: {
        repeat: no-repeat;
        position: center;
        size: length(100%);
      }
    }
  }
  &-Head {
    padding-top: 20px;
    &Name {
      font-size: 6vw;
      font-weight: 520;
    }
    &Address {
      padding-top: 4px;
      font-size: 4vw;
    }
  }
  &-Desc {
    margin-top: 35px;
    height: calc(100% - 430px);
    overflow: scroll;
  }
}
</style>