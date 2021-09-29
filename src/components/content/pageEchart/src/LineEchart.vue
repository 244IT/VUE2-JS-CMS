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
    lineXData: {
      type: Array,
      default: () => []
    },
    lineData: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    option() {
      return {
        xAxis: {
          type: "category",
          data: this.lineXData
        },
        yAxis: {
          type: "value"
        },
        series: [
          {
            data: this.lineData,
            type: "line"
          }
        ]
      };
    }
  }
};
</script>

<style lang="scss" scoped></style>
