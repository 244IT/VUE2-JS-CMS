<template>
  <div class="page-model">
    <el-dialog
      :title="modalConfig.title"
      :visible="showDialog"
      width="30%"
      destroy-on-close
      center
      :modal="false"
      @close="onClose"
    >
      <chh-form
        v-bind="modalConfig"
        :formData="formData"
        @onChangeValue="onChangeValue"
      >
      </chh-form>
      <slot></slot>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="showDialog = false">取 消</el-button>
          <el-button type="primary" @click="onConfirm">确 定</el-button>
        </span>
      </template>
    </el-dialog>
    <chh-form />
  </div>
</template>

<script>
import ChhForm from "@/components/common/form";
export default {
  components: {
    ChhForm
  },
  props: {
    pageName: {
      type: String,
      require: true
    },
    modalConfig: {
      type: Object,
      reuqired: true
    },
    defaultInfo: {
      typeof: Object,
      default: () => ({})
    },
    othreInfo: {
      typeof: Object,
      default: () => ({})
    }
  },
  data() {
    return {
      showDialog: false,
      formData: {}
    };
  },
  created() {},
  watch: {
    defaultInfo: {
      handler(newValue) {
        console.log("新值");
        console.log(newValue);
        for (const item of this.modalConfig?.formItems) {
          // this.formData[`${item.field}`] = newValue[`${item.field}`];
          // 动态添加formData属性，否则modal值无法及时响应视图
          this.$set(this.formData, item.field, newValue[`${item.field}`]);
        }
      }
    }
  },
  methods: {
    /* 点击确认 */
    onConfirm() {
      this.showDialog = false;
      if (Object.keys(this.defaultInfo).length) {
        this.$store.dispatch("system/editListItemAction", {
          pageName: this.pageName,
          editData: { ...this.formData, ...this.othreInfo },
          id: this.defaultInfo.id
        });
      } else {
        console.log("confirm create");
        this.$store.dispatch("system/createListItemAction", {
          pageName: this.pageName,
          newData: { ...this.formData, ...this.othreInfo }
        });
        this.formData = {};
      }
    },
    /* 表单值改变 */
    onChangeValue(formData) {
      this.formData = formData;
    },
    onClose() {
      console.log("onClose");
      this.showDialog = false;
    }
  }
};
</script>

<style lang="scss" scoped></style>
