<template>
  <div class="TimeLine">
    <div class="TimeLine-Head">
      <div class="TimeLine-HeadName">{{age}}</div>
      <div class="TimeLine-HeadAge">1392-1506</div>
    </div>
    <div class="TimeLine-Load">
      <div class="TimeLine-LoadLine"></div>
      <ol class="TimeLine-Load-Age">
        <li
          class="TimeLine-Load-AgeItem"
          v-for="(age, index) in data"
          :class="{'itemHas':age.hasThis}"
          :key="'age'+index"
        >
          <span class="TimeLine-Load-AgeNum">{{age.number}}</span>
          <span class="TimeLine-Load-AgeBack flex__center" :class="{'backHas':age.hasThis}">
            <span class="TimeLine-Load-AgeCircle" :class="{'circleHas':age.hasThis}"></span>
          </span>
          <span class="TimeLine-Load-AgeTxt">{{age.desc}}</span>
        </li>
      </ol>
    </div>
    <div class="TimeLine-All">
      <img :src="allIcon" alt />
    </div>
  </div>
</template>

<script>
import timeset from "../timeline_dataset";
export default {
  name: "TimeLine",
  props: ["age"],
  data() {
    return {
      data: timeset.data,
      allIcon: require("@/assets/icon/all.png")
    };
  }
};
</script>

<style lang='scss' scoped>
@import "@/assets/css/index.scss";
.TimeLine {
  position: relative;
  background-color: $background-color;
  overflow: scroll;
  scroll-behavior: smooth;
  &-Head {
    padding-top: 10px;
    padding-left: 62.8px;
    padding-bottom: 4px;
    display: inline-block;
    text-align: center;
    &Name {
      font-size: 35px;
      font-weight: 500;
    }
    &Age {
      font-size: 18px;
      font-weight: 530;
    }
  }
  &-Load {
    margin-left: 20px;
    // background-color: yellow;
    position: relative;
    &Line {
      width: 2px;
      left: 92.5px;
      position: absolute;
      background-color: $darkgray;
      height: calc(100% + 22px);
      z-index: 1;
    }
    &-Age {
      list-style: none;
      padding: 0;
      margin: 0;
      // flex-direction: column;
      &Item {
        flex-shrink: 1;
        // display: inline-flex;
        display: flex;
        position: relative;
        top: 30px;
        align-items: center;
        margin-bottom: 45px;
        border-radius: 14px;
        padding: 5px 10px;
        width: fit-content;
        padding-right: 30px;
      }
      &Num {
        color: $litedark;
        width: 79px;
        font: {
          size: 16px;
          weight: bold;
        }
      }
      &Back {
        z-index: 2;
        // background-color: yellow;
        background-color: $background-color;
        width: 10px;
        height: 20px;
      }
      &Circle {
        z-index: 4;
        background-color: $darkgray;
        border-radius: 100%;
        width: 9px;
        height: 9px;
      }
      &Txt {
        position: relative;
        left: 15px;
        font-size: 16px;
        max-width: 180px;
        text-overflow: ellipsis;
      }
    }
  }
  &-All{
    position:fixed;
    top:55%;
    right:3%;
  }
}
.backHas {
  background-color: #fff;
}
.itemHas {
  background-color: #fff;
}
.circleHas {
  background-color: $orange;
}
</style>