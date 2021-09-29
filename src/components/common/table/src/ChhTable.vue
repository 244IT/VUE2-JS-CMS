<template>
  <div class="chh-table">
    <div class="table-header">
      <slot name="header">
        <div class="title">{{ title }}</div>
        <div class="handler">
          <slot name="headerHandler"></slot>
        </div>
      </slot>
    </div>
    <el-table
      :data="listData"
      border
      style="width: 100%"
      v-bind="childrenProps"
    >
      <el-table-column
        v-if="showSelectColumn"
        align="center"
        type="selection"
        width="55"
      ></el-table-column>
      <el-table-column
        v-if="showIndexColumn"
        type="index"
        label="序号"
        align="center"
        width="80"
      ></el-table-column>
      <el-table-column
        v-for="propItem in propList"
        :key="propItem.prop"
        v-bind="propItem"
        show-overflow-tooltip
        align="center"
      >
        <template #default="scope">
          <slot :name="propItem.slotName" :row="scope.row">
            {{ scope.row[propItem.prop] }}
          </slot>
        </template>
      </el-table-column>
    </el-table>
    <div class="table-footer" v-if="showFooter">
      <slot name="footer">
        <el-pagination
          @size-change="onSizeChange"
          @current-change="onCurrentChange"
          :current-page="pageInfo.currentPage + 1"
          :page-sizes="[10, 20, 30, 40]"
          :page-size="pageInfo.pageSize"
          layout="total, sizes, prev, pager, next, jumper"
          :total="listCount"
        >
        </el-pagination>
      </slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    listData: {
      type: Array,
      default: () => []
    },
    listCount: {
      type: Number,
      default: 0
    },
    pageInfo: {
      type: Object,
      default: () => ({ pageSize: 10, currentPage: 0 })
    },
    propList: {
      type: Array,
      required: true
    },
    showIndexColumn: {
      type: Boolean,
      default: false
    },
    showSelectColumn: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: "标题"
    },
    childrenProps: {
      type: Object,
      default: () => {}
    },
    showFooter: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {};
  },
  created() {},
  methods: {
    onSizeChange(pageSize) {
      this.$emit("onSizeChange", { ...this.pageInfo, pageSize });
    },
    onCurrentChange(currentPage) {
      this.$emit("onCurrentChange", {
        ...this.pageInfo,
        currentPage: currentPage - 1
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.table-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  padding: 0 20px;
  background-color: #fff;
  .title {
    font-size: 20px;
    font-weight: 700;
  }
}

.table-footer {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 50px;
  background-color: #fff;
}
</style>
