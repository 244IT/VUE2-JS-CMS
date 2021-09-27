<template>
  <div class="page-content">
    <chh-table
      :listData="listData.pageList"
      :listCount="listData.pageCount"
      v-bind="contentConfig"
      :pageInfo="pageInfo"
    >
      <!-- 固定插槽 -->
      <template #headerHandler>
        <el-button size="mini" type="primary" @click="onCreate">{{
          contentConfig.createText
        }}</el-button>
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
        <strong>{{ scope.row.createAt | format }}</strong>
      </template>
      <template #updateAt="scope">
        <strong>{{ scope.row.updateAt | format }}</strong>
      </template>
      <template #handler="scope">
        <div class="handle-btns">
          <el-button
            icon="el-icon-edit"
            size="mini"
            type="text"
            @click="onEdit(scope.row)"
            >编辑</el-button
          >
          <el-button
            icon="el-icon-delete"
            size="mini"
            type="text"
            @click="onDelete(scope.row)"
            >删除</el-button
          >
        </div>
      </template>
      <!-- 跨组件插槽 -->

      <!-- <div v-for="item in otherPropSlots" :key="item.prop">
        <template #[item.slotName]="scope">
          <template v-if="item.slotName">
            <slot :name="item.slotName" :row="scope.row"></slot>
          </template>
        </template>
      </div> -->
    </chh-table>
  </div>
</template>

<script>
/* 组件 */
import ChhTable from "@/components/common/table";
export default {
  components: {
    ChhTable
  },
  props: {
    contentConfig: {
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
      listData: {
        pageList: [],
        pageCount: 0
      },
      pageInfo: { currentPage: 0, pageSize: 10 }
    };
  },
  watch: {
    pageInfo() {
      // this.getListData();
    }
  },
  created() {
    /* 获取权限 */
    // this.isCreate = this._getPermission(this.pageName, "create");
    // this.isQuery = this._getPermission(this.pageName, "query");
    // this.isDelete = this._getPermission(this.pageName, "delete");
    // this.isUpdate = this._getPermission(this.pageName, "update");

    // 获取列表数据
    console.log("pageContent created");
    this.getListData();
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
      this.$confirm("确认删除？", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.$store.dispatch(`system/deleteListItemAction`, {
            pageName: this.pageName,
            id: item.id
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    },
    /* 获取页面数据 */
    async getListData(queryInfo = {}) {
      // this.listData = this.$store.getters[`system/pageListData`](this.pageName);
      await this.$store.dispatch(`system/getListAction`, {
        pageQuery: {
          offset: this.pageInfo.currentPage * this.pageInfo.pageSize,
          size: this.pageInfo.pageSize,
          ...queryInfo
        },
        pageName: this.pageName
      });
      console.log(this.$store);
      this.listData = this.$store.getters[`system/pageListData`](this.pageName);
      console.log("listData");
      console.log(this.listData);
    },
    /* 获取操作权限 */
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
