<template>
  <div class="page-content">
    <chh-table
      :listData="listData.pageList"
      :listCount="listData.pageCount"
      :pageInfo="pageInfo"
      v-bind="contentConfig"
      @onSizeChange="onSizeChange"
      @onCurrentChange="onCurrentChange"
    >
      <!-- 固定插槽 -->
      <template #headerHandler>
        <el-button
          v-if="contentConfig.createText"
          size="mini"
          type="primary"
          @click="onCreate"
          >{{ contentConfig.createText }}</el-button
        >
      </template>
      <template #oldPrice="scope">
        <div size="mini" type="primary">
          {{ "¥" + scope.row.oldPrice }}
        </div>
      </template>
      <template #newPrice="scope">
        <div>
          {{ "¥" + scope.row.newPrice }}
        </div>
      </template>
      <template #image="scope">
        <el-image
          style="width: 60px; height: 60px"
          :src="scope.row.imgUrl"
          :preview-src-list="[scope.row.imgUrl]"
        ></el-image>
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
      <!-- <template
        v-for="item in otherPropSlots"
        :key="item.prop"
        #[item.slotName]="scope"
      >
        <template v-if="item.slotName">
          <slot :name="item.slotName" :row="scope.row"></slot>
        </template>
      </template> -->
    </chh-table>
  </div>
</template>

<script>
/* 组件 */
import ChhTable from "@/components/common/table";
import { MessageBox } from "element-ui";
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
      pageInfo: { currentPage: 0, pageSize: 10 }
    };
  },
  computed: {
    listData() {
      return this.$store.getters[`system/pageListData`](this.pageName);
    }
  },
  created() {
    /* 获取权限 */
    // this.isCreate = this._getPermission(this.pageName, "create");
    // this.isQuery = this._getPermission(this.pageName, "query");
    // this.isDelete = this._getPermission(this.pageName, "delete");
    // this.isUpdate = this._getPermission(this.pageName, "update");

    // 获取列表数据
    this.getListData();
  },
  methods: {
    /* 新建/编辑列表项 */
    onCreate() {
      this.$emit("onCreate");
    },
    onEdit(value) {
      console.log("onEdit");
      console.log(value);
      this.$emit("onEdit", value);
    },
    /* 删除列表项 */
    onDelete(item) {
      MessageBox.confirm("确认删除？", "提示", {
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
    onSizeChange(pageInfo) {
      this.pageInfo = pageInfo;
      this.getListData();
    },
    onCurrentChange(pageInfo) {
      this.pageInfo = pageInfo;
      this.getListData();
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
  margin-top: 0;
  border-radius: 10px;
  overflow: hidden;
}
</style>
