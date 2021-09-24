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
    pieData: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    option() {
      return {
        tooltip: {
          trigger: "item"
        },
        legend: {
          orient: "horizontal",
          left: "left"
        },
        series: [
          {
            name: "访问来源",
            type: "pie",
            radius: "50%",
            data: this.pieData,
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)"
              }
            }
          }
        ]
      };
    }
  }
};
</script>

<style lang="scss" scoped></style>
