<template>
  <div class="nav-menu">
    <div class="logo">
      <img class="img" src="~@/assets/img/login/logo.svg" alt="logo" />
      <span v-if="!isCollapse" class="title">Vue2+JS</span>
    </div>
    <el-menu
      :default-active="menuActive + ''"
      class="el-menu-vertical"
      :collapse="isCollapse"
    >
      <el-submenu :index="x.id + ''" v-for="x in menuList" :key="x.id">
        <template slot="title">
          <i :class="x.icon"></i>
          <span>{{ x.name }}</span>
        </template>
        <template v-if="x.children">
          <el-menu-item
            v-for="y in x.children"
            :key="y.id"
            :index="y.id + ''"
            @click="onMenu(y)"
            >{{ y.name }}</el-menu-item
          >
        </template>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
import localCache from "@/utils/cache.js";

export default {
  data() {
    return {
      menuList: [],
      menuActive: ""
    };
  },
  props: {
    isCollapse: {
      type: Boolean,
      default: false
    }
  },
  computed: {},
  created() {
    // 获取菜单和选中菜单
    this.menuList = this.$store.state.login.menuInfo;
    this.menuActive = localCache.getCache("menuActive");
  },
  methods: {
    onMenu(menu) {
      localCache.setCache("menuActive", menu.id);
      this.$router.push({
        path: menu.url ?? "/notFound"
      });
    }
  }
};
</script>

<style scoped lang="scss">
.nav-menu {
  height: 100%;
  background-color: #001529;

  .logo {
    display: flex;
    height: 28px;
    padding: 12px 10px 8px 10px;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;

    .img {
      height: 100%;
      margin: 0 10px;
    }

    .title {
      font-size: 16px;
      font-weight: 700;
      color: white;
    }
  }

  .el-menu {
    border-right: none;
    background-color: #0c2135;
  }

  // 目录
  .el-submenu {
    background-color: #001529 !important;
    // 二级菜单 ( 默认背景 )
    .el-menu-item {
      padding-left: 50px !important;
      background-color: #0c2135 !important;
    }
    .el-submenu__title span {
      color: #fff;
    }
  }

  ::v-deep .el-submenu__title {
    background-color: #001529 !important;
  }
  .el-menu-item {
    span {
      color: #fff;
    }
  }
  // hover 高亮
  .el-menu-item:hover {
    color: #fff !important; // 菜单
  }

  .el-menu-item.is-active {
    color: #fff !important;
    background-color: #0a60bd !important;
  }
}
.el-menu {
  .el-menu-item {
    background-color: #0c2135;
    color: #fff;
  }
  .el-menu-item.is-active {
    color: var(--el-color-primary);
  }
}
.el-menu-vertical:not(.el-menu--collapse) {
  width: 100%;
  height: calc(100% - 48px);
}
</style>
