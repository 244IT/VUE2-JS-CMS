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
    ></page-modal>
  </div>
</template>

<script>
import PageSearch from "@/components/content/pageSearch";
import PageContent from "@/components/content/pageContent";
import PageModal from "@/components/content/pageModal";
import { searchConfig } from "./config/search";
import { contentConfig } from "./config/content";
import { modalConfig } from "./config/modal";

const HANDLE_CREATE = "create"; // 新增操作
const HANDLE_EDIT = "edit";
export default {
  components: {
    PageSearch,
    PageContent,
    PageModal
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
      passwordItem.isHidden = this.handleType !== HANDLE_CREATE;
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
    /* 创建用户 */
    onCreate() {
      this.$refs.pageModalRef.showDialog = true;
      this.handleType = HANDLE_CREATE;
      this.defaultInfo = {};
    },
    /* 编辑用户 */
    onEdit(formData) {
      this.$refs.pageModalRef.showDialog = true;
      this.handleType = HANDLE_EDIT;
      this.defaultInfo = formData;
    }
  }
};
</script>

<style lang="scss" scoped></style>
