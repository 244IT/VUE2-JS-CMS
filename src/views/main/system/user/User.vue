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

    <!-- <page-modal
      ref="pageModalRef"
      pageName="users"
      :modalConfig="modalConfigRef"
      :defaultInfo="defaultInfo"
    ></page-modal> -->
  </div>
</template>

<script>
import PageSearch from "@/components/content/pageSearch";
import PageContent from "@/components/content/pageContent";
import { searchConfig } from "./config/search";
import { contentConfig } from "./config/content";
export default {
  components: {
    PageSearch,
    PageContent
  },
  data() {
    return {
      searchConfig,
      contentConfig
    };
  },
  methods: {
    /* 点击重置 */
    onReset() {},
    /* 点击搜索 */
    onSearch() {},
    /* 创建用户 */
    onCreate() {},
    /* 编辑用户 */
    onEdit() {}
  }
};
</script>

<style lang="scss" scoped></style>
