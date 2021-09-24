<template>
  <div class="login">
    <login-panel></login-panel>
  </div>
</template>

<script>
import LoginPanel from "./cpns/LoginPanel.vue";

export default {
  components: { LoginPanel },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.login {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: url("~assets/img/login/login-bg.svg");
}
</style>
