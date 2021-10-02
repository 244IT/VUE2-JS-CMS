<template>
  <div class="nav-header">
    <i
      class="fold-menu"
      :class="isFold ? 'el-icon-s-unfold' : 'el-icon-s-fold'"
      @click="onFold"
    ></i>
    <div class="content">
      <chh-breadcrumb :breadcrumbs="breadcrumbs" />
      <user-info />
    </div>
  </div>
</template>

<script>
import ChhBreadcrumb from "@/components/common/breadcrumb";
import UserInfo from "./UserInfo.vue";

import { pathMapBreadcrumbs } from "@/utils/mapMenus";

export default {
  components: {
    ChhBreadcrumb,
    UserInfo
  },
  data() {
    return {
      isFold: false
    };
  },
  computed: {
    breadcrumbs() {
      const menuList = this.$store.state.login.menuInfo;
      const currentPath = this.$store.state.currentPath;
      return pathMapBreadcrumbs(menuList, currentPath);
    }
  },
  created() {},
  methods: {
    onFold() {
      this.isFold = !this.isFold;
      this.$emit("onFold", this.isFold);
    }
  }
};
</script>

<style lang="scss" scoped>
.nav-header {
  display: flex;
  width: 100%;

  .fold-menu {
    font-size: 30px;
    cursor: pointer;
  }

  .content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex: 1;
    padding: 0 20px;
  }
}
</style>
