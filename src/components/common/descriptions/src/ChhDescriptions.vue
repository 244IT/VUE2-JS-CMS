<template>
  <div class="chh-description">
    <el-descriptions class="margin-top" :title="title" :column="column" border>
      <el-descriptions-item
        v-for="(itemData, index) in tableDatas"
        :key="index"
      >
        <template slot="label"> {{ itemData.name }} </template>
        <el-tag size="small">{{ itemData.description }}</el-tag>
      </el-descriptions-item>
    </el-descriptions>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ""
    },
    column: {
      type: Number,
      default: 1
    },
    tableDatas: {
      type: Array,
      default: () => []
    }
  }
};
</script>

<style lang="scss" scoped>
.chh-description {
  margin-bottom: 20px;
}
</style>
