import Vue from 'vue'
import { formatUtcTime } from "@/utils/timeFormat"


export default function () {
  // app.config.globalProperties.$filter = {
  //   format(value) {
  //     return formatUtcTime(value)
  //   }
  // }

  const filters = {
    format(value) {
      return formatUtcTime(value)
    }
  }


  Object.keys(filters).forEach(key=>{
    Vue.filter(key, filters[key])//插入过滤器名和对应方法
  })
}
