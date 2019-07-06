<template>
  <div class="Site">
    <div class="Site-Main">
      <!-- <div class="Site-Search">
        <div style="paddingLeft:5px;gridColumn:1/9">옛적의</div>
        <the-select style="zIndex:3;gridColumn:9/22" :options="cities"></the-select>
        <the-select style="gridColumn:1/17" :options="cities"></the-select>
        <div>을</div>
      </div> -->
      <div class="Site-Search">
        
      </div>
      <the-button class="Site-Button">둘러보기</the-button>
    </div>
  </div>
</template>

<script>
import TheSelect from "@/components/TheSelect";
import TheButton from "@/components/TheButton";
export default {
  data() {
    return {
      cities: ["강북구", "강남구", "성북구", "성동구", "서대문구"]
    };
  },
  components: {
    "the-select": TheSelect,
    "the-button": TheButton
  }
};
</script>

<style lang='scss' scoped>
@import "@/assets/css/index.scss";
.search {
  &-select {
    background-color: #ffffff;
    border: none;
  }
  &-option {
    font-weight: 500;
    font-size: 100%;
  }
}
.Site {
  background-color: $background-color;
  height: 100%;
  position: relative;
  &-Search {
    font-size: 37px;
    font-weight: 500;
    display: grid;
    grid-template-columns: repeat(24, 1fr);
    grid-gap: 14px 18px;
    width: 95%;
    margin: auto;
    padding-top: 40%;
  }
  &-Button {
    position: absolute;
    top: 50%;
    right: 50px;
  }
}
</style>