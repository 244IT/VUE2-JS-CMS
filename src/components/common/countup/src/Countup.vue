<template>
  <div>{{ count }}</div>
</template>

<script>
import { CountUp } from "countup.js";
export default {
  props: {
    count: {
      type: Number,
      default: 0
    }
  }
};
</script>

<style lang="scss" scoped></style>
