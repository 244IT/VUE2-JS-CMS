<template>
  <div class="user">
    <page-search
      :searchConfig="searchConfig"
      @onReset="onReset"
      @onSearch="onSearch"
    />
    <page-content
      :contentConfig="contentConfig"
      pageName="users"
      ref="pageContentRef"
      @onCreate="onCreate"
      @onEdit="onEdit"
    />

    <page-modal
      ref="pageModalRef"
      pageName="users"
      :modalConfig="modalConfig"
      :defaultInfo="defaultInfo"
      :handleType="handleType"
    ></page-modal>
  </div>
</template>

<script>
/* 组件 */
import PageSearch from "@/components/content/pageSearch";
import PageContent from "@/components/content/pageContent";
import PageModal from "@/components/content/pageModal";
/* 配置 */
import { searchConfig } from "./config/search";
import { contentConfig } from "./config/content";
import { modalConfig } from "./config/modal";
/* mixin */
import { handleContentMixin } from "@/mixin/handleContentMixin";

export default {
  components: {
    PageSearch,
    PageContent,
    PageModal
  },
  mixins: [handleContentMixin],
  data() {
    return {
      searchConfig,
      contentConfig,
      defaultInfo: {},
      handleType: ""
    };
  },
  computed: {
    modalConfig() {
      const departmentItem = modalConfig.formItems?.find(
        item => item.field === "departmentId"
      );
      const roleItem = modalConfig.formItems?.find(
        item => item.field === "roleId"
      );
      const passwordItem = modalConfig.formItems.find(
        item => item.field === "password"
      );
      // 初始化部门，菜单数据
      departmentItem.options = this.$store.state.entireDepartment.map(item => {
        return { title: item.name, value: item.id };
      });
      roleItem.options = this.$store.state.entireRole.map(item => {
        return { title: item.name, value: item.id };
      });
      // 根据操作隐藏密码输入框
      passwordItem.isHidden = this.handleType !== "create";
      return modalConfig;
    }
  }
};
</script>

<style lang="scss" scoped></style>
