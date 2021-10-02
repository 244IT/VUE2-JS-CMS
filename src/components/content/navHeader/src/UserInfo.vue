<template>
  <div class="user-info">
    <el-dropdown @command="onCommand">
      <span class="el-dropdown-link">
        <el-avatar
          class="avatar"
          size="small"
          src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
        ></el-avatar>
        <span>{{ name }}</span>
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item icon="el-icon-circle-close" command="loginout"
            >退出登录</el-dropdown-item
          >
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script>
import localCache from "@/utils/cache.js";

export default {
  data() {
    return {
      name: ""
    };
  },
  created() {
    this.name = this.$store.state.login.userInfo.name;
  },
  methods: {
    onCommand(res) {
      if (res === "loginout") {
        localCache.deleteCache("token");
        this.$router.push("/login");
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.user-info {
  .avatar {
    margin-right: 10px;
  }
}
.el-dropdown-link {
  cursor: pointer;
  display: flex;
  align-items: center;
}
</style>
