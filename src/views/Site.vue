<template>
  <div class="Site">
    <div class="Site-Main">
      <div class="Site-Search">
        <span style="gridColumn:2/8;">옛적의</span>
        <el-select
          style="left:5px;marginRight:5px;gridColumn:8/24;"
          v-model="cityValue"
          placeholder="시/도"
          autocomplete
          filterable
        >
          <el-option
            class="Site-Option"
            v-for="(city,index) in cities"
            :key="'city'+index"
            :label="city"
            :value="city"
          ></el-option>
        </el-select>
        <el-select
          style="left:5px;marginRight:5px;gridColumn:1/16;"
          v-model="cityValue"
          placeholder="시/도"
          autocomplete
        >
          <el-option
            class="Site-Option"
            v-for="(city,index) in cities"
            :key="'city'+index"
            :label="city"
            :value="city"
          ></el-option>
        </el-select>
        <span style="gridColumn:17/19;">을</span>
        <the-button class="Site-Button" style="gridColumn:14/23;">둘러보기</the-button>
      </div>
    </div>
  </div>
</template>

<script>
import TheSelect from "@/components/TheSelect";
import TheButton from "@/components/TheButton";
export default {
  data() {
    return {
      cityValue: "",
      cityIndex: 0,
      cities: ["강북구", "강남구", "성북구", "성동구", "서대문구"]
    };
  },
  components: {
    "the-select": TheSelect,
    "the-button": TheButton
  }
};
</script>

<style lang='scss'>
@import "@/assets/css/index.scss";
.Site {
  background-color: $background-color;
  height: 100%;
  position: relative;
  &-Search {
    display: grid;
    max-width: 350px;
    padding-top: 100px;
    font-size: 28px;
    font-weight: 500;
    color: $litedark;

    grid-template-columns: repeat(24, 1fr);
    grid-row-gap: 12px;
  }
  &-Button {
    text-align: center;
    top: 35px;
    position: relative;
  }
}
.el-input {
  font-size: 28px;
  font-weight: 500;
  color: $litedark;
  &__inner {
    height: 43px;
  }
}
</style>