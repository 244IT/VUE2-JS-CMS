<template>
  <div class="category">
    <page-search
      :searchConfig="searchConfig"
      @onSearch="onSearch"
      @onReset="onReset"
    />
    <page-content
      ref="pageContentRef"
      pageName="category"
      :contentConfig="contentConfig"
      @onCreate="onCreate"
      @onEdit="onEdit"
    ></page-content>
    <page-modal
      ref="pageModalRef"
      pageName="category"
      :modalConfig="modalConfig"
      :defaultInfo="defaultInfo"
    ></page-modal>
  </div>
</template>

<script>
/* 组件 */
import pageModal from "@/components/content/pageModal";
import PageSearch from "@/components/content/pageSearch";
import PageContent from "@/components/content/pageContent";
/* 配置 */
import { modalConfig } from "./config/modal";
import { searchConfig } from "./config/search";
import { contentConfig } from "./config/content";

const HANDLE_CREATE = "create"; // 新增操作
const HANDLE_EDIT = "edit"; // 编辑操作
export default {
  components: {
    pageModal,
    PageSearch,
    PageContent
  },
  data() {
    return {
      modalConfig,
      searchConfig,
      contentConfig,
      defaultInfo: {}
    };
  },
  methods: {
    /* 点击重置 */
    onReset() {
      this.$refs.pageContentRef.getListData();
    },
    /* 点击搜索 */
    onSearch(formData) {
      this.$refs.pageContentRef.getListData(formData);
    },
    /* 创建部门 */
    onCreate() {
      this.$refs.pageModalRef.showDialog = true;
      this.handleType = HANDLE_CREATE;
      this.defaultInfo = {};
    },
    /* 编辑部门 */
    onEdit(formData) {
      console.log(formData);
      this.$refs.pageModalRef.showDialog = true;
      this.handleType = HANDLE_EDIT;
      this.defaultInfo = formData;
    }
  }
};
</script>

<style lang="scss" scoped></style>
