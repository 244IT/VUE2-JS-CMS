<template>
  <div class="login-panel">
    <img class="login-logo" src="~/assets/img/login/login-dog.jpg" />
    <h1 class="title">基于VUE2+JS的</h1>
    <h1>后台管理系统</h1>
    <el-tabs type="border-card" stretch v-model="currentTab">
      <el-tab-pane name="account">
        <template #label>
          <span><i class="el-icon-user-solid"></i> 账号登录</span>
        </template>
        <login-account ref="accountRef" />
      </el-tab-pane>
      <el-tab-pane name="phone">
        <template #label>
          <span><i class="el-icon-mobile-phone"></i> 手机登录</span>
        </template>
        <login-phone ref="phoneRef" />
      </el-tab-pane>
    </el-tabs>

    <div class="account-control">
      <el-checkbox v-model="isKeepPassword">记住密码</el-checkbox>
      <el-link type="primary">忘记密码</el-link>
    </div>

    <el-button type="primary" class="login-btn" @click="onLogin"
      >立即登录</el-button
    >
  </div>
</template>

<script>
import LoginAccount from "./LoginAccount.vue";
import LoginPhone from "./LoginPhone.vue";

import localCache from "@/utils/cache";
export default {
  components: {
    LoginAccount,
    LoginPhone
  },
  data() {
    return {
      currentTab: "account",
      isKeepPassword: !!localCache.getCache("password") ?? false
    };
  },
  methods: {
    onLogin() {
      this.$refs.accountRef.login(this.isKeepPassword);
    }
  }
};
</script>

<style lang="scss" scoped>
.login-panel {
  margin-bottom: 150px;
  width: 320px;
  text-align: center;

  .title {
    text-align: center;
  }

  .login-logo {
    height: 200px;
  }

  .account-control {
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
  }

  .login-btn {
    width: 100%;
    margin-top: 10px;
  }
}
</style>
