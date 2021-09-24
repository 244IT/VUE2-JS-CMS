<template>
  <div
    class="base-echart"
    :style="{ width: width, height: height }"
    ref="baseEchartRef"
  ></div>
</template>

<script>
import * as echarts from "echarts";
import chinaMapData from "../data/china.json";

export default {
  props: {
    width: {
      type: String,
      default: "100%"
    },
    height: {
      type: String,
      default: "300px"
    },
    option: {
      type: Object,
      default: () => {}
    }
  },
  watch: {
    option() {
      this._initEchart();
    }
  },
  mounted() {},
  methods: {
    _initEchart() {
      echarts.registerMap("china", chinaMapData);
      const echartInstance = echarts.init(this.$refs.baseEchartRef);
      echartInstance.setOption(this.option);

      // 监听window尺寸的变化
      window.addEventListener("resize", () => {
        echartInstance.resize();
      });
    }
  }
};
</script>

<style lang="scss" scoped></style>
