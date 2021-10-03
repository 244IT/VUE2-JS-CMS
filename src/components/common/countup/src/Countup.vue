<template>
  <span ref="countupRef" />
</template>

<script>
import { CountUp } from "countup.js";

const options = {
  decimalPlaces: 2, // 保留两位
  duration: 2, // 动画时长
  separator: ",", // 千位分割
  decimal: ".", // 小数分割
  prefix: "￥" // 单位
};
export default {
  props: {
    count: {
      type: Number,
      default: 0
    }
  },
  watch: {
    count(val1) {
      if (!this.$refs.countupRef) return;
      const countInstance = new CountUp(this.$refs.countupRef, val1, options);
      countInstance.start();
    }
  },
  data() {
    return {
      countInstance: {}
    };
  },
  mounted() {
    const countInstance = new CountUp(
      this.$refs.countupRef,
      this.count,
      options
    );
    countInstance.start();
  }
};
</script>

<style lang="scss" scoped></style>
