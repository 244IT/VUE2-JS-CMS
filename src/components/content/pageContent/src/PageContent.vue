<template>
  <div class="page-content">
    <chh-table
      :listData="listData.pageList"
      :listCount="listData.pageCount"
      v-bind="searchContentConfig"
      :pageInfo="pageInfo"
    >
      <!-- 固定插槽 -->
      <template #headerHandler>
        <el-button
          v-if="isCreate"
          size="mini"
          type="primary"
          @click="onCreate"
          >{{ searchContentConfig.createText }}</el-button
        >
      </template>
      <template #status="scope">
        <el-button
          size="mini"
          plain
          :type="scope.row.enable ? 'success' : 'danger'"
          >{{ scope.row.enable ? "启用" : "禁用" }}</el-button
        >
      </template>
      <template #createAt="scope">
        <strong>{{ $filter.format(scope.row.createAt) }}</strong>
      </template>
      <template #updateAt="scope">
        <strong>{{ $filter.format(scope.row.updateAt) }}</strong>
      </template>
      <template #handler="scope">
        <div class="handle-btns">
          <el-button
            v-if="isUpdate"
            icon="el-icon-edit"
            size="mini"
            type="text"
            @click="onEdit(scope.row)"
            >编辑</el-button
          >
          <el-button
            v-if="isDelete"
            icon="el-icon-delete"
            size="mini"
            type="text"
            @click="onDelete(scope.row)"
            >删除</el-button
          >
        </div>
      </template>
      <!-- 跨组件插槽 -->
      <template v-for="item in otherPropSlots" #[item.slotName]="scope">
        <template v-if="item.slotName">
          <slot :key="item.prop" :name="item.slotName" :row="scope.row"></slot>
        </template>
      </template>
    </chh-table>
  </div>
</template>

<script>
/* 组件 */
import ChhTable from "@/components/common/table";
import { ElMessageBox } from "element-plus";
export default {
  components: {
    ChhTable
  },
  props: {
    searchContentConfig: {
      type: Object,
      reuqired: true
    },
    pageName: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      pageInfo: { currentPage: 0, pageSize: 10 }
    };
  },
  watch: {
    pageInfo() {
      this.getListData();
    }
  },
  created() {
    /* 获取权限 */
    this.isCreate = this._getPermission(this.pageName, "create");
    this.isQuery = this._getPermission(this.pageName, "query");
    this.isDelete = this._getPermission(this.pageName, "delete");
    this.isUpdate = this._getPermission(this.pageName, "update");
  },
  methods: {
    /* 新建/编辑用户 */
    onCreate() {
      this.$emit("onCreate");
    },
    onEdit(value) {
      this.$emit("onEdit", value);
    },
    onDelete(item) {
      console.log(item);
      console.log("ondelete");
      ElMessageBox.confirm("确认删除？")
        .then(() => {
          // store.dispatch(
          //   `${props.searchContentConfig?.module}/deleteListItemAction`,
          //   {
          //     pageName: props.pageName,
          //     id: item.id
          //   }
          // )
        })
        .catch(() => ({}));
    },
    /* 获取页面数据 */
    getListData() {
      //   const listData = computed(() =>
      //   store.getters[`${props.searchContentConfig?.module}/pageListData`](
      //     props.pageName
      //   )
      // )
    },

    _getPermission(pageName, handleName) {
      const permission = this.$store.state.login.permissions;
      const verifyPermission = `system:${pageName}:${handleName}`;
      return permission.includes(verifyPermission);
    }
  }
};
</script>

<style lang="scss" scoped>
.page-content {
  border-radius: 10px;
  margin-top: 20px;
  overflow: hidden;
}
</style>
