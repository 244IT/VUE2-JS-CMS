<template>
  <div class="goods">
    <page-content :contentConfig="contentConfig" pageName="goods">
      <!-- <template #image="scope">
        <el-image
          style="width: 60px; height: 60px"
          :src="scope.row.imgUrl"
          :preview-src-list="[scope.row.imgUrl]"
        ></el-image>
      </template>
      <template #oldPrice="scope">{{ "¥" + scope.row.oldPrice }}</template>
      <template #newPrice="scope">{{ "¥" + scope.row.newPrice }}</template> -->
    </page-content>
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
