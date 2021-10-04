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
      :handleType="handleType"
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
/* mixin */
import { handleContentMixin } from "@/mixin/handleContentMixin";

const HANDLE_CREATE = "create"; // 新增操作
export default {
  components: {
    pageModal,
    pageSearch,
    pageContent
  },
  mixins: [handleContentMixin],
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
  }
};
</script>

<style lang="scss" scoped></style>
