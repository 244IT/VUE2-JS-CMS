export const projectDir = `
├─.editorconfig
│ .gitignore
│  babel.config.js
│  package-lock.json
│  package.json
│  README.md
│  vue.config.js
├─public
│      favicon.ico
│      index.html
└─src
    │  App.vue
    │  main.js
    │
    ├─assets
    │  ├─css
    │  │      base.scss
    │  │      index.scss
    │  └─img
    │      └─login
    │              login-bg.svg
    │              login-dog.jpg
    │              logo.svg
    ├─components
    │  ├─common
    │  │  ├─breadcrumb
    │  │  │  │  index.js
    │  │  │  │
    │  │  │  └─src
    │  │  │          ChhBreadcrumb.vue
    │  │  ├─card
    │  │  │  │  index.js
    │  │  │  │
    │  │  │  └─src
    │  │  │          ChhCard.vue
    │  │  ├─code
    │  │  │  │  index.js
    │  │  │  │
    │  │  │  └─src
    │  │  │          ChhCode.vue
    │  │  ├─countup
    │  │  │  │  index.js
    │  │  │  │
    │  │  │  └─src
    │  │  │          Countup.vue
    │  │  ├─descriptions
    │  │  │  │  index.js
    │  │  │  │
    │  │  │  └─src
    │  │  │          ChhDescriptions.vue
    │  │  ├─echart
    │  │  │  │  index.js
    │  │  │  │
    │  │  │  ├─data
    │  │  │  │      china.json
    │  │  │  └─src
    │  │  │          ChhEchart.vue
    │  │  ├─form
    │  │  │  │  index.js
    │  │  │  │
    │  │  │  └─src
    │  │  │          ChhForm.vue
    │  │  └─table
    │  │      │  index.js
    │  │      └─src
    │  │              ChhTable.vue
    │  └─content
    │      ├─navHeader
    │      │  │  index.js
    │      │  │
    │      │  └─src
    │      │          NavHeader.vue
    │      │          UserInfo.vue
    │      ├─navMenu
    │      │  │  index.js
    │      │  │
    │      │  └─src
    │      │          NavMenu.vue
    │      ├─pageContent
    │      │  │  index.js
    │      │  │
    │      │  └─src
    │      │          PageContent.vue
    │      ├─pageEchart
    │      │  │  index.js
    │      │  │
    │      │  ├─src
    │      │  │      BarEchart.vue
    │      │  │      LineEchart.vue
    │      │  │      MapEchart.vue
    │      │  │      PieEchart.vue
    │      │  │      RoseEchart.vue
    │      │  └─utils
    │      │          convertData.js
    │      │          coordinateData.js
    │      ├─pageModal
    │      │  │  index.js
    │      │  │
    │      │  └─src
    │      │          PageModal.vue
    │      │
    │      ├─pageSearch
    │      │  │  index.js
    │      │  │
    │      │  └─src
    │      │          PageSearch.vue
    │      │
    │      └─statisticPanel
    │          │  index.js
    │          │
    │          └─src
    │                  StatisticPanel.vue
    ├─global
    │      index.js
    │      registerElement.js
    │      registerFilter.js
    │
    ├─mixin
    │      handleContentMixin.js
    ├─router
    │  │  index.js
    │  │
    │  └─main
    │      ├─analysis
    │      │  ├─dashboard
    │      │  │      dashboard.js
    │      │  │
    │      │  └─overview
    │      │          overview.js
    │      │
    │      ├─product
    │      │  ├─category
    │      │  │      category.js
    │      │  │
    │      │  └─goods
    │      │          goods.js
    │      │
    │      ├─story
    │      │  ├─chat
    │      │  │      chat.js
    │      │  │
    │      │  └─list
    │      │          list.js
    │      │
    │      └─system
    │          ├─department
    │          │      department.js
    │          │
    │          ├─menu
    │          │      menu.js
    │          │
    │          ├─role
    │          │      role.js
    │          │
    │          └─user
    │                  user.js
    ├─service
    │  │  config.js
    │  │  index.js
    │  │  network.js
    │  │
    │  ├─login
    │  │      index.js
    │  │
    │  └─main
    │      ├─analysis
    │      │  └─dashboard
    │      │          index.js
    │      │
    │      └─system
    │          └─user
    │                  index.js
    ├─store
    │  │  index.js
    │  │
    │  ├─login
    │  │      index.js
    │  │
    │  └─main
    │      └─system
    │              index.js
    ├─utils
    │      cache.js
    │      mapMenus.js
    │      timeFormat.js
    │      util.js
    └─views
        ├─login
        │  │  Login.vue
        │  │
        │  ├─config
        │  │      index.js
        │  │
        │  └─cpns
        │          LoginAccount.vue
        │          LoginPanel.vue
        │          LoginPhone.vue
        ├─main
        │  │  Main.vue
        │  │
        │  ├─analysis
        │  │  ├─dashboard
        │  │  │      Dashboard.vue
        │  │  │
        │  │  └─overview
        │  │      │  Overview.vue
        │  │      │
        │  │      └─config
        │  │              dependencies.js
        │  │              devDependencies.js
        │  │              index.js
        │  │              projectDir.js
        │  │              technologyStacks.js
        │  ├─product
        │  │  ├─category
        │  │  │  │  Category.vue
        │  │  │  │
        │  │  │  └─config
        │  │  │          content.js
        │  │  │          modal.js
        │  │  │          search.js
        │  │  └─goods
        │  │      │  Goods.vue
        │  │      │
        │  │      └─config
        │  │              content.js
        │  │              modal.js
        │  │              search.js
        │  ├─story
        │  │  ├─chat
        │  │  │      Chat.vue
        │  │  │
        │  │  └─list
        │  │          List.vue
        │  └─system
        │      ├─department
        │      │  │  Department.vue
        │      │  │
        │      │  └─config
        │      │          content.js
        │      │          modal.js
        │      │          search.js
        │      ├─menu
        │      │  │  Menu.vue
        │      │  │
        │      │  └─config
        │      │          content.js
        │      │          modal.js
        │      ├─role
        │      │  │  Role.vue
        │      │  │
        │      │  └─config
        │      │          content.js
        │      │          modal.js
        │      │          search.js
        │      └─user
        │          │  User.vue
        │          │
        │          └─config
        │                  content.js
        │                  modal.js
        │                  search.js
        └─notFount
                NotFount.vue
`
