import { chhRequest } from "@/service/index"

const DashboardAPI = {
  categoryGoodsCount: "/goods/category/count",
  categoryGoodsSale: "/goods/category/sale",
  categoryGoodsFavor: "/goods/category/favor",
  addressGoodsSale: "/goods/address/sale",
  topTenGoodsSale: "/goods/sale/top10",
  goodsStatistics: "/goods/amount/list"
}

export function getCategoryGoodsCount() {
  return chhRequest.get({
    url: DashboardAPI.categoryGoodsCount,
  })
}

export function getCategoryGoodsSale() {
  return chhRequest.get({
    url: DashboardAPI.categoryGoodsSale
  })
}

export function getCategoryGoodsFavor() {
  return chhRequest.get({
    url: DashboardAPI.categoryGoodsFavor
  })
}

export function getAddressGoodsSale() {
  return chhRequest.get({
    url: DashboardAPI.addressGoodsSale
  })
}

export function getTopTenGoodSale() {
  return chhRequest.get({
    url: DashboardAPI.topTenGoodsSale
  })
}

export function getGoodsStatistics() {
  return chhRequest.get({
    url: DashboardAPI.goodsStatistics
  })
}
