<template>
  <div class="Maps">
    <div id="map"></div>
    <!-- <button @click="testClick">서울 중구</button> -->
    <button class="Maps-Current" @click="findRelic">지도에서 유적지 찾기</button>
    <vue-daum-postcode
      class="Maps-Search"
      :class="{active:onSearchBar}"
    />
    <!-- <div>{{ result }}</div> -->
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "maps",
  data() {
    return {
      onSearchBar: false,
      addressResult: null,
      container: null,
      options: null,
      map: null,
      bounds: null
    };
  },
  computed: {
    ...mapGetters({
      markers: "getMarkers"
    })
  },
  watch: {
    markers(val) {
      console.log("markers 변경");
      this.drawMarker();
    }
  },
  methods: {
    testClick() {
      this.$store.dispatch("fetchMarker", { city: "서울", town: "중구" });
    },
    findRelic() {
      const center = this.map.getCenter();
      const bounds = this.map.getBounds();
      const swLatLng = bounds.getSouthWest();
      const neLatLng = bounds.getNorthEast();
      const params = {
        northWestLatitude: neLatLng.getLat(),
        northWestLongitude: neLatLng.getLng(),
        southEastLatitude: swLatLng.getLat(),
        southEastLongitude: swLatLng.getLng()
      };
      this.$store.dispatch("fetcheMarkersWithCoordinate", params);
    },
    drawMarker() {
      const marker = this.markers;
      if (marker !== null || marker.length >= 2) {
        // return alert("데이터에 있는 유적지가 없습니다.");

        this.bounds = new kakao.maps.LatLngBounds();

        marker.forEach(element => {
          if (element.latitude && element.longitude) {
            const position = new kakao.maps.LatLng(
              element.latitude,
              element.longitude
            );
            // console.log(position);
            new kakao.maps.Marker({
              map: this.map,
              position: position,
              title: element.ccbaMnm1
            });
            this.bounds.extend(position);
          }
        });
        this.map.setBounds(this.bounds);
      }
    }
  },
  mounted() {
    this.container = document.getElementById("map"); //지도를 담을 영역의 DOM 레퍼런스
    this.options = {
      //지도를 생성할 때 필요한 기본 옵션
      center: new kakao.maps.LatLng(33.450701, 126.570667), //지도의 중심좌표.
      level: 3 //지도의 레벨(확대, 축소 정도)
    };
    this.map = new kakao.maps.Map(this.container, this.options); //지도 생성 및 객체 리턴
    this.bounds = new kakao.maps.LatLngBounds();
    this.drawMarker();
    const postHead = document.getElementsByClassName('post-head')[0]
    postHead.addEventListener('click',this.onSearchBar=true)
  }
};
</script>

<style lang='scss' scoped>
@import "@/assets/css/index.scss";
#map {
  width: 100%;
  height: 65%;
}
.Maps {
  &-Current{
    position: absolute;
    top:0;
    right:0;
    z-index: 1;
  }
  &-Search {
    height: 45%;
    overflow:scroll;
  }
}
</style>