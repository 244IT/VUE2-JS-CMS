<template>
  <div class="dashboard">
    <!-- 顶部数据统计 -->
    <el-row :gutter="10">
      <el-col v-for="item in statisticData" :key="item.name" :span="6">
        <statistic-panel :panelData="item"></statistic-panel>
      </el-col>
    </el-row>
    <!-- 中间图表 -->
    <el-row class="top-row" :gutter="10">
      <el-col :span="8">
        <chh-card title="数据统计">
          <pie-echart :pieData="statisticData"></pie-echart>
        </chh-card>
      </el-col>
      <el-col :span="8">
        <chh-card title="全国城市商品销量">
          <map-echart :mapData="addressGoodSaleData"></map-echart>
        </chh-card>
      </el-col>
      <el-col :span="8">
        <chh-card title="分类商品数量(玫瑰图)">
          <rose-echart :roseData="categoryGoodsData"></rose-echart>
        </chh-card>
      </el-col>
    </el-row>
    <!-- 底部图表 -->
    <el-row :gutter="10">
      <el-col :span="12">
        <chh-card title="分类商品的销量">
          <line-echart v-bind="categoryGoodSaleData"></line-echart>
        </chh-card>
      </el-col>
      <el-col :span="12">
        <chh-card title="分类商品收藏">
          <bar-echart v-bind="categoryGoodFaverData"></bar-echart>
        </chh-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import ChhCard from "@/components/common/card";
import StatisticPanel from "@/components/content/statisticPanel";
import {
  BarEchart,
  PieEchart,
  RoseEchart,
  LineEchart,
  MapEchart
} from "@/components/content/pageEchart";

import * as API from "@/service/main/analysis/dashboard";

export default {
  components: {
    ChhCard,
    PieEchart,
    RoseEchart,
    LineEchart,
    BarEchart,
    MapEchart,
    StatisticPanel
  },
  data() {
    return {
      statisticData: [
        { name: "商品总销量", value: 0 },
        { name: "商品总收藏", value: 0 },
        { name: "商品总库存", value: 0 },
        { name: "商品总销售额", value: 0 }
      ],
      addressGoodSaleData: [],
      categoryGoodFaverData: [],
      categoryGoodSaleData: [],
      categoryGoodsData: []
    };
  },
  created() {
    this._initData();
  },
  methods: {
    /* -----------------------------网络请求---------------------------- */

    // 获取统计数据
    async getGoodsStatistics() {
      const statisticResult = await API.getGoodsStatistics();
      this.statisticData = (function() {
        const statistic = statisticResult.data;
        return statistic.map(item => ({
          name: item.title,
          value: item.number1,
          tips: item.tips
        }));
      })();
    },
    // 地区销售量
    async getAddressGoodsSale() {
      const addressGoodSaleResult = await API.getAddressGoodsSale();

      this.addressGoodSaleData = (function() {
        const addressGoodSale = addressGoodSaleResult.data;
        return addressGoodSale.map(item => ({
          name: item.address,
          value: item.count
        }));
      })();
    },
    // 分类商品收藏
    async getCategoryGoodsFavor() {
      const categoryGoodFaverResult = await API.getCategoryGoodsFavor();

      this.categoryGoodFaverData = (function() {
        const categoryGoodFaver = categoryGoodFaverResult.data;
        return {
          barData: categoryGoodFaver.map(item => item.goodsFavor),
          barXData: categoryGoodFaver.map(item => item.name)
        };
      })();
    },
    // 获取统计数据
    async getCategoryGoodsSale() {
      const categoryGoodSaleResult = await API.getCategoryGoodsSale();
      // 分类商品销量
      this.categoryGoodSaleData = (function() {
        const categoryGoodsSale = categoryGoodSaleResult.data;
        return {
          lineData: categoryGoodsSale.map(item => item.goodsCount),
          lineXData: categoryGoodsSale.map(item => item.name)
        };
      })();
    },
    // 分类商品库存
    async getCategoryGoodsCount() {
      const categoryGoodsResult = await API.getCategoryGoodsCount();

      this.categoryGoodsData = (function() {
        const categoryGoodsSale = categoryGoodsResult.data;
        return categoryGoodsSale.map(item => {
          return { name: item.name, value: item.goodsCount };
        });
      })();
    },
    /* --------------------------------------页面方法--------------------------------- */
    /* 初始化数据 */
    _initData() {
      this.getGoodsStatistics();
      this.getAddressGoodsSale();
      this.getCategoryGoodsFavor();
      this.getCategoryGoodsSale();
      this.getCategoryGoodsCount();
    }
  }
};
</script>

<style lang="scss" scoped>
.top-row {
  margin: 10px 0;
}
</style>
