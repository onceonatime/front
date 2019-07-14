<template>
  <div class="Maps">
    <div id="map"></div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "maps",
  data() {
    return {
      container: null,
      options: null,
      map: null,
      bounds: null
    };
  },
  methods: {
    drawMarker(marker) {
      if (marker === null || marker.length == 0) {
        return alert("데이터에 있는 유적지가 없습니다.");
      }
      console.log("draw marker");
      marker.forEach(element => {
        if (element.latitude && element.longitude) {
          const position = new kakao.maps.LatLng(
            element.latitude,
            element.longitude
          );
          console.log(position);
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
  },
  create() {
    this.$store.watch(
      () => this.$store.getters.getMarkers,
      markers => {
        // console.log(markers);
        this.drawMarker(markers);
      }
    );
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
    // this.drawMarker();
  },
  updated() {
    // this.drawMarker();
  }
};
</script>

<style lang='scss' scoped>
@import "@/assets/css/index.scss";
#map {
  width: 100%;
  height: 70%;
}
</style>