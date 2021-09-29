export let firstMenu = null

export function mapToMenuRoutes(menuList) {
  // 获取所有路由
  const allRoutes = []
  const routeFiles = require.context("../router/main", true, /\.js$/)
  routeFiles.keys().forEach((key) => {
    const route = require("../router/main" + key.split(".")[1])
    allRoutes.push(route.default)
  })
  // 如果用户菜单权限中有对应路由，则添加到路由信息数组
  const routes = []
  function _recurseGetRoute(menuList){
    for(let menu of menuList) {
      if(menu.type === 2) {
        // console.log(allRoutes, menu)
        const route = allRoutes.find(item => item.path === menu.url)
        if(route) routes.push(route)
        if (!firstMenu) {
          firstMenu = menu
        }
      }else {
        _recurseGetRoute(menu.children)
      }
    }
  }

  _recurseGetRoute(menuList)

  return routes
}

export function pathMapBreadcrumbs(userMenus,currentPath) {
  const breadcrumbs = []
  pathMapToMenu(userMenus, currentPath, breadcrumbs)
  return breadcrumbs
}

// /main/system/role  -> type === 2 对应menu
export function pathMapToMenu(userMenus,currentPath,breadcrumbs) {
  for (const menu of userMenus) {
    if (menu.type === 1) {
      const findMenu = pathMapToMenu(menu.children ?? [], currentPath)
      if (findMenu) {
        breadcrumbs?.push({ name: menu.name, id: menu.id })
        breadcrumbs?.push({ name: findMenu.name, id: findMenu.id })
        return findMenu
      }
    } else if (menu.type === 2 && menu.url === currentPath) {
      return menu
    }
  }
}


export function mapMenuToLeftKeys(menuList) {
  const leftKeys = []
  console.log("mapMenuToLeftKeys")
  console.log(menuList)
  const _recurseGetLeftKey = (menus) => {
    for (const menu of menus) {
      if (menu.children) {
        _recurseGetLeftKey(menu.children)
      } else {
        leftKeys.push(menu.id)
      }
    }
  }
  _recurseGetLeftKey(menuList)
  return leftKeys
}
