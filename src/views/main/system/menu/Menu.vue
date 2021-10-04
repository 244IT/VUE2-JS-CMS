<template>
  <div class="menu">
    <page-content :contentConfig="contentConfig" pageName="menu"></page-content>
  </div>
</template>

<script>
/* 组件 */
import PageContent from "@/components/content/pageContent";
/* 配置 */
import { contentConfig } from "./config/content";

export default {
  components: {
    PageContent
  },
  data() {
    return {
      contentConfig
    };
  }
};
</script>

<style lang="scss" scoped></style>
