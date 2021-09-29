import CHHRequest from "./network"
import { BASE_URL, TIME_OUT } from "./config"
import localCache from "@/utils/cache"

const chhRequest = new CHHRequest({
  timeout: TIME_OUT,
  baseURL: BASE_URL,
  showLoading: false,
  interceptors: {
    requestInterceptor(config) {
      // console.log("实例请求拦截")
      // 携带token的拦截
      const token = localCache.getCache("token")
      if (token) {
        config.headers.Authorization = `Bearer ${token}`
      }

      return config
    },
    requestInterceptorCatch(err) {
      return err
    },
    responseInterceptor(config) {
      // console.log("响应拦截")
      return config
    },
    responseInterceptorCatch(err) {
      return err
    }
  }
})


export { chhRequest }
