<template>
  <div class="role">
    <page-search
      :searchConfig="searchConfig"
      @onReset="onReset"
      @onSearch="onSearch"
    />
    <page-content
      :contentConfig="contentConfig"
      pageName="role"
      ref="pageContentRef"
      @onCreate="onCreate"
      @onEdit="onEdit"
    />
    <page-modal
      ref="pageModalRef"
      pageName="role"
      :modalConfig="modalConfig"
      :othreInfo="othreInfo"
      :defaultInfo="defaultInfo"
      :handleType="handleType"
    >
      <div class="role-tree">
        <el-tree
          ref="elTreeRef"
          show-checkbox
          node-key="id"
          :data="entireMenu"
          :props="{ children: 'children', label: 'name' }"
          @check="onCheckMenu"
        >
        </el-tree>
      </div>
    </page-modal>
  </div>
</template>

<script>
/* 组件 */
import pageContent from "@/components/content/pageContent";
import pageModal from "@/components/content/pageModal";
import pageSearch from "@/components/content/pageSearch";
/* 配置 */
import { contentConfig } from "./config/content";
import { modalConfig } from "./config/modal";
import { searchConfig } from "./config/search";
/* 工具 */
import { mapMenuToLeftKeys } from "@/utils/mapMenus";
/* mixin */
import { handleContentMixin } from "@/mixin/handleContentMixin";

const HANDLE_EDIT = "edit"; // 编辑操作
export default {
  components: {
    pageContent,
    pageModal,
    pageSearch
  },
  mixins: [handleContentMixin],
  data() {
    return {
      contentConfig,
      modalConfig,
      searchConfig,
      othreInfo: {},
      defaultInfo: {},
      handleType: ""
    };
  },
  computed: {
    entireMenu() {
      return this.$store.state.entireMenu;
    }
  },
  methods: {
    /* 选中菜单权限 */
    onCheckMenu(data, checkData) {
      const checkedKeys = checkData.checkedKeys;
      const halfCheckedKeys = checkData.halfCheckedKeys;
      const menuList = [...checkedKeys, ...halfCheckedKeys];
      this.othreInfo = { menuList };
    },
    /* 编辑角色 */
    onEdit(formData) {
      this.$refs.pageModalRef.showDialog = true;
      this.handleType = HANDLE_EDIT;
      this.defaultInfo = formData;
      // 取菜单数组的叶子节点
      const leafKeys = mapMenuToLeftKeys(formData.menuList);
      this.$nextTick(() => {
        this.$refs.elTreeRef?.setCheckedKeys(leafKeys, false);
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.role-tree {
  margin-left: 20px;
}
</style>
