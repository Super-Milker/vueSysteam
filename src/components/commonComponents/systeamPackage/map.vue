<template>
  <div id="map" :style="mapStyle" style="overflow:hidden"></div>
</template>

<script>
/* eslint-disable */
import { mapState } from "vuex";
export default {
  props: ["width", "height"],
  data() {
    return {
      mapStyle: {
        width: "100%",
        height: "100%"
      },
      winfoMap:{}
    };
  },
  computed: {
    ...mapState({
      systeamStyle: state => state.systeam.systeamStyle,
      windowWeight: state => state.systeam.windowWeight,
      elmainWeight: state => state.systeam.elmainWeight,
      elmainHeight: state => state.systeam.elmainHeight
    })
  },
  watch: {
    width: {
      handler(value) {
        this.mapStyle = {
          width: this.width,
          height: this.height
        };
        var size = new Winfo.Size(this.width, this.height);
        if (this.$common.emptyCheck(size)) {
          winfoMap.setSize(size);
        }
      },
      deep: true,
      immediate: true
    },
    elmainWeight: {
      handler(value) {
        if (this.$common.emptyCheck(this.width)) {
          this.mapStyle = {
            width: this.elmainWeight,
            height: this.elmainHeight
          };
          var size = new Winfo.Size(this.elmainWeight, this.elmainHeight);
          this.winfoMap.setSize(size);
        }
      },
      deep: true
    }
  },
  methods: {},
  mounted() {
    Winfo.SetServiceURL(
      "http://192.168.1.82:2001/",
      "http://192.168.1.82:2001/"
    );
    this.winfoMap = new Winfo.WebDNC("map", {
      layer: 8,
      layername: "googleDxt",
      center: new Winfo.LngLat(122.31255, 41.104365),
      level: 6,
      zooms: [5, 18]
    });
    var mapTypeTool = new Winfo.MapType();
  this.winfoMap.addControl(mapTypeTool); //添加控件
  var navigation = new Winfo.Navigation();
  this.winfoMap.addControl(navigation);
  window.winfoMapData = this.winfoMap;
    // winfoMap.closeMap(true)
    // setTimeout(()=>{
    //   winfoMap.closeMap(false)
    // },2000)
  }
};
</script>
