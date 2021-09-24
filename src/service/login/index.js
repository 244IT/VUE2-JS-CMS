import { chhRequest } from "../index"

const LoginAPI = {
    AccountLogin: "/login",
    UserInfo: "/users/", // 用法: /users/1
    UserMenus: "/role/" // 用法: role/1/menu
}

/* 用户登陆接口 */
export function accountLogin(account) {
  return chhRequest.post({
    url: LoginAPI.AccountLogin,
    data: account
  })
}

/* 获取用户信息 */
export function getUserInfoById(id) {
  return chhRequest.get({
    url: LoginAPI.UserInfo + id,
    showLoading: false
  })
}

/* 获取用户的菜单权限 */
export function getUserMenuByRoleId(id) {
  return chhRequest.get({
    url: LoginAPI.UserMenus + id + "/menu",
    showLoading: false
  })
}
