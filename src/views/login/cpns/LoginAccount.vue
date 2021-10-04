<template>
  <div class="login-account">
    <el-form label-width="60px" :rules="rules" :model="user" ref="formRef">
      <el-form-item label="账号" prop="name">
        <el-input v-model="user.name" />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="user.password" show-password />
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import {
  accountLogin,
  getUserInfoById,
  getUserMenuByRoleId
} from "@/service/login";

import localCache from "@/utils/cache";
import { rules } from "../config";
export default {
  data() {
    return {
      user: {
        name: localCache.getCache("username") ?? "coderwhy",
        password: localCache.getCache("password") ?? "123456"
      },
      rules
    };
  },
  methods: {
    /* ------------------------网络请求--------------------- */
    /* 登录 */
    async login(isKeepPassword) {
      const formRef = this.$refs.formRef;
      formRef.validate(async valid => {
        if (valid) {
          // 校验通过，执行登陆逻辑
          if (isKeepPassword) {
            localCache.setCache("password", this.user.password);
          } else {
            localCache.deleteCache("password");
          }
          localCache.setCache("username", this.user.name);

          // 登录验证
          const { name, password } = this.user;
          const tokenResult = await accountLogin({
            name,
            password
          });
          const { id, token } = tokenResult.data;
          // 获取token
          localCache.setCache("token", token);
          this.$store.commit("saveToken", token);
          // 获取部门和角色列表
          this.$store.dispatch("getInitialDataAction", null, { root: true });
          // 获取用户信息
          const userResult = await getUserInfoById(id);
          const userInfo = userResult.data;
          localCache.setCache("userInfo", userInfo);
          this.$store.commit("saveUserInfo", userInfo);

          // 获取菜单权限
          const menuResult = await getUserMenuByRoleId(id);
          const menuInfo = menuResult.data;
          localCache.setCache("menuInfo", menuInfo);
          this.$store.commit("saveMenuInfo", menuInfo);
          // 获取第一个菜单
          const mapMenus = await import("@/utils/mapMenus");
          localCache.setCache("menuActive", mapMenus.firstMenu.id);
          // 跳转首页
          this.$router.push(mapMenus.firstMenu.url);
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped></style>
