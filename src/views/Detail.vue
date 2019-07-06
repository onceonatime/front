<template>
  <div class="Detail">
    <div class="Detail-Slide glide">
      <div class="glide__track" data-glide-el="track">
        <ul class="glide__slides">
          <li v-for="(img, index) in data.images" :key="'image'+index" class="glide__slide">
            <div
              class="Detail-Slide-Item"
              :style="{backgroundImage:getImageUrl(index)}"
              @click="toolgeModal"
            ></div>
            <div class="Detail-Slide-Text">{{img.desc}}</div>
          </li>
        </ul>
      </div>
    </div>
    <the-modal class="Detail-Modal" name="modal" width="90%" height="70%">
      <div class="Detail-Modal-Item" :style="{backgroundImage:getImageUrl(slideIndex)}"></div>
    </the-modal>
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
      data: testSet,
      slideIndex: 0
    };
  },
  methods: {
    getImageUrl(index) {
      return `url(${this.data.images[index].url})`;
    },
    toolgeModal() {
      this.$modal.show("modal");
    }
  },
  mounted() {
    const glide = new Glide(".glide", {
      peek: {
        before: 20,
        after: 20
      }
    });
    glide.mount();
    glide.on("run", res => {
      this.slideIndex = glide.index;
    });
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
      font-size:16px;
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
    margin-top: 27px;
    height: calc(100% - 430px);
    overflow: scroll;
  }
}
</style>