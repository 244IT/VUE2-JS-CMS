<template>
  <chh-echart :option="option"></chh-echart>
</template>

<script>
/* 组件 */
import ChhEchart from "@/components/common/echart";
export default {
  components: {
    ChhEchart
  },
  props: {
    roseData: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    option() {
      return {
        legend: {
          top: "bottom"
        },
        toolbox: {
          show: true,
          feature: {
            mark: { show: true },
            dataView: { show: true, readOnly: false },
            restore: { show: true },
            saveAsImage: { show: true }
          }
        },
        series: [
          {
            name: "面积模式",
            type: "pie",
            radius: [10, 120],
            center: ["50%", "50%"],
            roseType: "area",
            itemStyle: {
              borderRadius: 8
            },
            data: this.roseData
          }
        ]
      };
    }
  }
};
</script>

<style lang="scss" scoped></style>
