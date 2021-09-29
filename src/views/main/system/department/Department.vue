<template>
  <div class="department">
    <page-search
      :searchConfig="searchConfig"
      @onReset="onReset"
      @onSearch="onSearch"
    />
    <page-content
      :contentConfig="contentConfig"
      pageName="department"
      ref="pageContentRef"
      @onCreate="onCreate"
      @onEdit="onEdit"
    />

    <page-modal
      ref="pageModalRef"
      pageName="department"
      :modalConfig="modalConfig"
      :defaultInfo="defaultInfo"
    ></page-modal>
  </div>
</template>

<script>
/* 组件 */
import pageModal from "@/components/content/pageModal";
import pageSearch from "@/components/content/pageSearch";
import pageContent from "@/components/content/pageContent";
/* 配置 */
import { modalConfig } from "./config/modal";
import { searchConfig } from "./config/search";
import { contentConfig } from "./config/content";

const HANDLE_CREATE = "create"; // 新增操作
const HANDLE_EDIT = "edit"; // 编辑操作
export default {
  components: {
    pageModal,
    pageSearch,
    pageContent
  },
  data() {
    return {
      searchConfig,
      contentConfig,
      defaultInfo: {},
      handleType: HANDLE_CREATE
    };
  },
  computed: {
    modalConfig() {
      const parentItem = modalConfig.formItems?.find(
        item => item.field === "parentId"
      );
      parentItem.options = this.$store.state.entireDepartment.map(item => ({
        title: item.name,
        value: item.id
      }));
      return modalConfig;
    }
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
      this.$refs.pageModalRef.showDialog = true;
      this.handleType = HANDLE_EDIT;
      this.defaultInfo = formData;
    }
  }
};
</script>

<style lang="scss" scoped></style>
