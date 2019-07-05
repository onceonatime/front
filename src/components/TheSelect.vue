<template>
  <div class="TheSelect">
    <div class="TheSelect-Head" :class="headClass" @click="toggleVisible">
      {{options[index]}}
      <img class="TheSelect-Head-Arrow" src="@/assets/icon/down_arrow.png" />
    </div>
    <div class="TheSelect-Menu" :class="menuClass">
      <div class="TheSelect-Option" v-for="(item, index) in options" :key="'select'+index">{{item}}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["options"],
  data() {
    return {
      index: 0,
      isVisible: false,
      menuClass: "",
      headClass: ""
    };
  },
  methods: {
    toggleVisible() {
      if (this.isVisible) {
        this.menuClass = "";
        this.headClass = "";
      } else {
        this.menuClass = "visible";
        this.headClass = "head-visible";
      }
      this.isVisible = !this.isVisible;
    }
  }
};
</script>

<style lang='scss' scoped>
@import "@/assets/css/index.scss";
.TheSelect {
  background-color: #fff;
  border-radius: 10px;
  position: relative;
  &-Head {
    padding-left: 10px;
    width: 100%;
    z-index: 1;
    border-radius: 10px;
    position: absolute;
    border: 1.5px solid #fff;
    box-sizing: border-box;
    // background-color: white;
    background-color: #fff;

    &-Arrow {
      position: absolute;
      right: 0px;
      top: 4px;
    }
  }
  &-Menu {
    position: absolute;
    width: 100%;
    transition: ease-in-out 0.28s, z-index 0s;
    height: 250px;
    transform: translateY(0);
    overflow-y: scroll;
    overflow-x: hidden;
    border-radius: 10px;
    opacity: 0;
    background-color: #fff;
    pointer-events: none;
  }

  &-Option {
    padding-left: 11px;
    width: 100%;
    background-color: #fff;
    pointer-events: none;
  }
}
.head-visible {
  border: 1.5px solid $orange;
}
.visible {
  visibility: visible;
  transform: translateY(55px);
  opacity: 1;
}
</style>