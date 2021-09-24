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
    barXData: {
      type: Array,
      default: () => []
    },
    barData: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    option() {
      return {
        xAxis: {
          type: "category",
          data: this.barXData
        },
        yAxis: {
          type: "value"
        },
        series: [
          {
            data: this.barData,
            type: "bar",
            showBackground: true,
            backgroundStyle: {
              color: "rgba(180, 180, 180, 0.2)"
            }
          }
        ]
      };
    }
  }
};
</script>

<style lang="scss" scoped></style>
