<template>
  <div class="page-search">
    <chh-form
      v-bind="searchConfig"
      :formData="formData"
      @onChangeValue="onChangeValue"
    >
      <template #header>
        <h2 class="header">高级检索</h2>
      </template>
      <template #footer>
        <div class="handle-btns">
          <el-button icon="el-icon-refresh" @click="onReset">重置</el-button>
          <el-button type="primary" icon="el-icon-search" @click="onSearch"
            >搜索</el-button
          >
        </div>
      </template>
    </chh-form>
  </div>
</template>

<script>
import ChhForm from "@/components/common/form";
export default {
  components: {
    ChhForm
  },
  props: {
    searchConfig: {
      type: Object,
      reuqired: true
    }
  },
  data() {
    return {
      formData: {}
    };
  },
  created() {
    const formItems = this.searchConfig?.formItems ?? [];
    const originFormData = {};
    for (let prop of formItems) {
      originFormData[prop.field] = "";
    }
    this.formData = originFormData;
  },
  methods: {
    onChangeValue(formData) {
      this.formData = formData;
    },
    onReset() {
      for (let key in this.formData) {
        this.formData[key] = "";
      }
      this.$emit("onReset");
    },
    onSearch() {
      // 为空不搜索
      let isEmpty = true;
      for (let key in this.formData) {
        if (this.formData[key] !== "") {
          isEmpty = false;
        }
      }
      if (isEmpty) return;
      this.$emit("onSearch", this.formData);
    }
  }
};
</script>

<style lang="scss" scoped>
.page-search {
  display: block;
  padding: 20px;
  margin-bottom: 20px;
  border-radius: 10px;
  background-color: #fff;
  .header {
    color: #000;
  }
  .handle-btns {
    text-align: right;
    padding: 0 50px 20px 0;
  }
}
</style>
