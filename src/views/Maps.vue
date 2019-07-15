<template>
  <div class="Maps">
    <div id="map">
      <button class="Maps-Current" @click="findRelic">지도에서 유적지 찾기</button>
    </div>
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
      bounds: null,
      postcode: null,
      geocoder: null
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
      if (marker === null) {
        return alert("데이터에 있는 유적지가 없습니다.");
      } else {
        this.bounds = new kakao.maps.LatLngBounds();

        marker.forEach(element => {
          if (element.latitude && element.longitude) {
            const position = new kakao.maps.LatLng(
              element.latitude,
              element.longitude
            );
            // console.log(position);
            const marker = new kakao.maps.Marker({
              map: this.map,
              position: position,
              title: element.ccbaMnm1
              // clickable: true
            });

            const iwContent = `
                <div style="padding:10px;font-size:12px;">
                  <a href="detail/5">
                    ${element.ccbaMnm1}
                  </a>
                </div>
              `, // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
              iwRemoveable = true; // removeable 속성을 ture 로 설정하면 인포윈도우를 닫을 수 있는 x버튼이 표시됩니다

            // 인포윈도우를 생성합니다
            const infowindow = new kakao.maps.InfoWindow({
              content: iwContent,
              removable: iwRemoveable
            });

            kakao.maps.event.addListener(marker, "click", () => {
              // 마커 위에 인포윈도우를 표시합니다
              infowindow.open(this.map, marker);
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
    // const postHead = document.getElementsByClassName("post-head")[0];
    // postHead.addEventListener("click", (this.onSearchBar = true));

    this.postcode = document.getElementById("postcode");
  }
};
</script>

<style lang='scss' scoped>
@import "@/assets/css/index.scss";
#map {
  width: 100%;
  height: 100%;
}
.Maps {
  // height: 100%;
  background-color: yellow;
  &-Current {
    position: absolute;
    top: 0;
    right: 0;
    z-index: 2;
  }
}
</style>