import { chhRequest } from "../../../index"

/* 获取用户列表 */
export function getList(url, list) {
  return chhRequest.post({
    url,
    data: list
  })
}

/* 删除用户列表项 */
export function deleteListItem(url) {
  return chhRequest.delete({
    url
  })
}

/* 新建用户列表项 */
export function createListItem(url, data) {
  return chhRequest.post({
    url,
    data
  })
}

/* 编辑用户列表项 */
export function editListItem(url, data) {
  return chhRequest.patch({
    url,
    data
  })
}
