<template>
  <div class="user">
    <page-search
      :searchConfig="searchConfig"
      @onReset="onReset"
      @onSearch="onSearch"
    />
    <!-- <page-content
      :searchContentConfig="searchContentConfig"
      pageName="users"
      ref="pageContentRef"
      @onCreate="onCreate"
      @onEdit="onEdit"
    />

    <page-modal
      ref="pageModalRef"
      pageName="users"
      :modalConfig="modalConfigRef"
      :defaultInfo="defaultInfo"
    ></page-modal> -->
  </div>
</template>

<script>
import PageSearch from "@/components/content/pageSearch";
import { searchConfig } from "./config/search";
export default {
  components: {
    PageSearch
  },
  data() {
    return {
      searchConfig
    };
  },
  methods: {
    /* 点击重置 */
    onReset() {},
    /* 点击搜索 */
    onSearch() {}
  }
};
</script>

<style lang="scss" scoped></style>
