import axios from "axios"

import { Loading } from "element-ui"

const DEAFULT_LOADING = true

class CHHRequest {
  constructor(config) {
    console.log('config')
    // 创建axios实例
    this.instance = axios.create(config)
    // 保存基本信息
    this.showLoading = config.showLoading ?? DEAFULT_LOADING
    this.cShowLoading = config.showLoading ?? DEAFULT_LOADING

    // 实例的拦截器
    this.instance.interceptors.request.use(
      config.interceptors?.requestInterceptor,
      config.interceptors?.requestInterceptorCatch
    )

    this.instance.interceptors.response.use(
      config.interceptors?.responseInterceptor,
      config.interceptors?.responseInterceptorCatch
    )

    // 全局的拦截器
    this.instance.interceptors.request.use(
      (config) => {
        console.log("全局请求拦截器")
        if (this.showLoading) {
          this.loading = Loading.service({
            lock: true,
            text: "正在请求数据....",
            background: "rgba(0, 0, 0, 0.5)"
          })
        }
        return config
      },
      (err) => {
        // console.log("全局请求错误拦截器")
        return err
      }
    )

    this.instance.interceptors.response.use(
      (res) => {
        // 将loading移除
        this.loading?.close()

        const data = res.data
        // 不同的后端定义的具体状态码显示不同的错误信息
        if (data.returnCode === "-1001") {
          console.log("请求失败~, 错误信息")
        } else {
          return data
        }
      },
      (err) => {
        // console.log("全局响应错误拦截器")
        // 将loading移除
        this.loading?.close()

        // 不同的Http状态码显示不同的错误信息
        if (err.response.status === 404) {
          console.log("404的错误~")
        }
        return err
      }
    )
  }

  // 实例请求方法
  request(config) {
    return new Promise((resolve, reject) => {
      if (config.interceptors?.requestInterceptor) {
        config = config.interceptors.requestInterceptor(config)
      }
      console.log('请求')

      // 判断是否需要显示loading
      this.showLoading = config.showLoading ?? this.cShowLoading

      this.instance
        .request(config)
        .then((res) => {
          // 对单个请求的拦截处理
          if (config.interceptors?.responseInterceptor) {
            res = config.interceptors.responseInterceptor(res)
          }

          resolve(res)
        })
        .catch((err) => {
          reject(err)
          return err
        }).finally(() => {
          this.showLoading = this.cShowLoading
        })
    })
  }

  get(config) {
    return this.request({ ...config, method: "GET" })
  }

  post(config) {
    return this.request({ ...config, method: "POST" })
  }

  delete(config){
    return this.request({ ...config, method: "DELETE" })
  }

  patch(config) {
    return this.request({ ...config, method: "PATCH" })
  }
}

export default CHHRequest
