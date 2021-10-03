<template>
  <div class="menu">
    <page-content
      :contentConfig="contentConfig"
      pageName="menu"
      @onCreate="onCreate"
      @onEdit="onEdit"
    ></page-content>
  </div>
</template>

<script>
/* 组件 */
import PageContent from "@/components/content/pageContent";
/* 配置 */
import { contentConfig } from "./config/content";

const HANDLE_CREATE = "create"; // 新增操作
const HANDLE_EDIT = "edit";
export default {
  components: {
    PageContent
  },
  data() {
    return {
      contentConfig
    };
  },
  methods: {
    /* 创建菜单 */
    onCreate() {
      this.$refs.pageModalRef.showDialog = true;
      this.handleType = HANDLE_CREATE;
      this.defaultInfo = {};
    },
    /* 编辑菜单 */
    onEdit(formData) {
      this.$refs.pageModalRef.showDialog = true;
      this.handleType = HANDLE_EDIT;
      this.defaultInfo = formData;
    }
  }
};
</script>

<style lang="scss" scoped></style>
