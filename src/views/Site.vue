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
            v-for="(city,index) in data"
            :key="'city'+index"
            :label="city.city_name"
            :value="index"
          ></el-option>
        </el-select>
        <el-select
          style="left:5px;marginRight:5px;gridColumn:1/16;"
          v-model="townValue"
          placeholder="군/구"
          autocomplete
          filterable
        >
          <el-option
            class="Site-Option"
            v-for="(town,index) in towns"
            :key="'town'+index"
            :label="town.name"
            :value="index"
          ></el-option>
        </el-select>
        <span style="gridColumn:17/19;">을</span>
        <the-button class="Site-Button" style="gridColumn:14/23;" @click.native="searhSite">둘러보기</the-button>
      </div>
    </div>
    <div class="the-spinner" v-if="isLoading">
      <div class="the-spinner-core"></div>
    </div>
  </div>
</template>

<script>
import TheButton from "@/components/TheButton";
import dataset from "@/assets/data.js/site_dataset";
import { STORE } from "../assets/data.js/Constant.js";
import axios from "axios";
export default {
  components: {
    "the-button": TheButton
  },
  data() {
    return {
      isLoading: false,
      cityValue: null,
      townValue: null,
      data: dataset
    };
  },
  computed: {
    towns() {
      if (this.cityValue !== null) {
        return this.data[this.cityValue].twon;
      } else {
        return [];
      }
    },
    getCityName() {
      return this.data[this.cityValue].city_name;
    },
    getTownName() {
      return this.data[this.cityValue].twon[this.townValue].name;
    }
  },
  methods: {
    searhSite() {
      if (this.townValue === null) {
        alert("값을 입력하세요");
        return null;
      }
      this.isLoading = true;
      this.$store.dispatch(STORE.actions.FETCH_MARKERS_AND_GO_MAP, {
        city: this.getCityName,
        town: this.getTownName
      });
    }
  },
  mounted() {
    // this.$modal.show("site-spinner");
  }
};
</script>

<style lang='scss' scoped>
@import "@/assets/css/index.scss";
.the-spinner {
  background-color: rgba(104, 104, 104, 0.452);
  position: fixed;
  top:0;
  height: 100%;
  width: 100%;
  &-core {
    margin: 0px auto;
    margin-top:70%;
    border-radius: 100%;
    border-width: 3px;
    border-style: solid;
    border-color: $orange rgb(238, 238, 238) rgb(238, 238, 238);
    border-image: initial;
    width: 48px;
    height: 48px;
    animation: vue-simple-spinner-spin 0.8s linear 0s infinite normal none
      running;
  }
}
.Site {
  background-color: $background-color;
  height: 100%;
  position: relative;
  &-Search {
    display: grid;
    max-width: 350px;
    padding-top: 100px;
    padding-left: 2%;
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