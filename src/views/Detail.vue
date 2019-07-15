<template>
  <div class="Detail">
    <div class="glide Detail-Slide">
      <div class="glide__track" data-glide-el="track">
        <ul class="glide__slides">
          <li v-for="(img, index) in images" :key="'image'+index" class="glide__slide">
            <div
              class="Detail-Slide-Item"
              :style="{backgroundImage:getImageUrl(slideIndex)}"
              @click="toolgeModal"
            ></div>
            <div class="Detail-Slide-Text">{{img.ccimDesc}}</div>
          </li>
        </ul>
      </div>
    </div>
    <the-modal v-if="images" class="Detail-Modal" name="modal" width="90%" height="70%">
      <div class="Detail-Modal-Item" :style="{backgroundImage:getImageUrl(slideIndex)}"></div>
    </the-modal>
    <div class="Detail-Head content" v-if="detail">
      <div class="Detail-HeadName">{{detail.ccbaMnm1}}</div>
      <div class="Detail-HeadAddress">{{detail.ccbaLcad}}</div>
    </div>
    <div class="Detail-Desc">{{detail.content}}</div>
  </div>
</template>

<script>
import Glide from "@glidejs/glide";
// import testSet from "../detail_test";
import axios from "axios";

export default {
  name: "Detail",
  props: ["id"],
  data() {
    return {
      images: null,
      detail: null,
      slideIndex: 0,
      glide: null
    };
  },
  methods: {
    getImageUrl(index) {
      return `url(${this.images[index].imageUrl})`;
    },
    toolgeModal() {
      this.$modal.show("modal");
    }
  },
  created() {
    this.$nextTick(() => {
      axios
        .get("http://outback-dev.us-west-2.elasticbeanstalk.com/detail/", {
          params: { ccbaKdcd: 11, ccbaAsno: "00030000", ccbaCtcd: 11 }
        })
        .then(res => {
          console.log(res.data);
          this.detail = res.data;
        });
      axios
        .get("http://outback-dev.us-west-2.elasticbeanstalk.com/images/", {
          params: { ccbaKdcd: 11, ccbaAsno: "00030000", ccbaCtcd: 11 }
        })
        .then(res => {
          console.log(res.data);
          this.images = res.data;
        });
    });
  },
  mounted() {
    this.glide = new Glide(".glide", {
      peek: {
        before: 20,
        after: 20
      }
    });
    // this.glide.on("run", res => {
    //   this.slideIndex = this.glide.index;
    // });
    this.glide.mount();
  },
  updated() {}
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
    padding: 0;
    &-Item {
      height: 200px;
      border-radius: 15px;
      background: {
        repeat: no-repeat;
        position: center;
        size: cover;
        color: rgb(128, 128, 128);
      }
      vertical-align: bottom;
      color: white;
    }
    &-Text {
      font-size: 16px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
  &-Modal {
    &-Item {
      width: 100%;
      height: 100%;
      background: {
        repeat: no-repeat;
        position: center;
        size: cover;
        // color: rgb(128, 128, 128);
      }
    }
  }
  &-Head {
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
    height: calc(100% - 430px);
    overflow-y: scroll;
    width: 85%;
    margin: auto;
    margin-top: 27px;
    &::-webkit-scrollbar {
      width: 2px;
      background-color: rgba(121, 121, 121, 0.383);
    }
    &::-webkit-scrollbar-thumb {
      background-color: #ff9d48a1;
    }
  }
}
</style>