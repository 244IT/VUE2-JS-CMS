<template>
  <el-container class="main">
    <el-aside :width="isFlod ? '60px' : '200px'">
      <nav-menu :isCollapse="isFlod" />
    </el-aside>
    <el-container>
      <el-header>
        <nav-header @onFold="onFold"></nav-header>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import NavMenu from "@/components/content/navMenu";
import { NavHeader } from "@/components/content/navHeader";

export default {
  components: {
    NavMenu,
    NavHeader
  },
  data() {
    return {
      isFlod: false
    };
  },
  mounted() {},
  methods: {
    onFold(isFlod) {
      this.isFlod = isFlod;
    }
  }
};
</script>

<style lang="scss" scoped>
.main {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.main-content,
.page {
  height: 100%;
}

.page-content {
  height: calc(100% - 48px);
}

.el-header,
.el-footer {
  display: flex;
  color: #333;
  text-align: center;
  align-items: center;
}

.el-header {
  height: 48px !important;
}

.el-aside {
  overflow-x: hidden;
  overflow-y: auto;
  line-height: 200px;
  text-align: left;
  cursor: pointer;
  background-color: #001529;
  transition: width 0.3s linear;
  scrollbar-width: none; /* firefox */
  -ms-overflow-style: none; /* IE 10+ */

  &::-webkit-scrollbar {
    display: none;
  }
}

.el-main {
  color: #333;
  text-align: center;
  background-color: #f0f2f5;
}
</style>
