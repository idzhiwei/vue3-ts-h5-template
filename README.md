
### 已完成
- [x] 配置多环境变量
- [x] vw 适配方案
- [x] VantUI 组件按需加载
- [x] Scss 全局样式
- [x] 自定义 TabBar
- [x] 适配苹果底部安全距离
- [x] 使用 Mock 数据
- [x] Axios 封装及接口管理
- [x] Vuex 状态管理
- [x] Vuex 持久化储存
- [x] Vue-router
- [x] Webpack 4 vue.config.js 基础配置
- [x] 配置 alias 别名
- [x] 配置 proxy 跨域
- [x] 配置 打包分析
- [x] externals 引入 cdn 资源
- [x] 去掉 console.log
- [x] splitChunks 单独打包第三方模块
- [x] gzip 压缩
- [x] uglifyjs 压缩
- [x] eruda移动端调试
- [x] 动态设置 title
- [x] 本地存储 storage 封装
- [x] 配置 Jssdk

### 计划完成
- [ ] vue版本升级
- [ ] TabBar优化

### Node 版本要求

`Vue CLI` 需要 Node.js 8.9 或更高版本 (推荐 8.11.0+)。你可以使用 [nvm](https://github.com/nvm-sh/nvm) 或 [nvm-windows](https://github.com/coreybutler/nvm-windows) 在同一台电脑中管理多个 Node 版本。

本示例 Node.js 12.14.0
### 项目结构
```js
h5 -- UI 主目录  
├── public -- 静态资源  
├ ├── favicon.ico -- 图标  
├ └── index.html -- 首页  
├── src -- 源码目录  
├ ├── api -- 后端交互的接口  
├ ├── assets -- 静态资源目录
├ ├ ├── css
├ ├ ├── index.scss -- 全局通用样式
├ ├ ├── mixin.scss -- 全局 mixin
├ ├ └── variables.scss -- 全局变量  
├ ├── components -- 封装的组件  
├ ├── config -- 环境配置  
├ ├── hooks -- vue3 Hooks
├ ├── model -- 类型声明文件
├ ├── const -- 放 vue 页面的配置常量  
├ ├── plugins -- 插件  
├ ├── route -- VUE 路由  
├ ├ ├── index -- 路由入口  
├ ├ └── router.config.js -- 路由表  
├ ├── store -- VUEX  
├ ├── utils -- 工具包  
├ ├ ├── request.js -- axios 封装
├ ├ └── storage.js -- 本地存储封装
├ ├── views -- 业务上的 vue 页面  
├ ├ ├── layouts -- 路由布局页面(是否缓存页面)
├ ├ ├── tabBar -- 底部菜单页面
├ ├ └── orther -- 其他页面
├ ├── App.vue -- 根组件  
├ ├── main.ts -- 入口 ts  
├ ├── shims-axios.d.ts -- axios 声明文件  
├ └── shims-vue.d.ts -- vue 组件声明文件
├── .env.development -- 开发环境  
├── .env.production -- 生产环境  
├── .env.staging -- 测试环境  
├── .eslintrc.js -- ESLint 配置  
├── .gitignore -- git 忽略  
├── .postcssrc.js -- CSS 预处理配置(rem 适配)  
├── babel.config.js -- barbel 配置入口  
├── tsconfig.json -- vscode 路径引入配置
├── package.json -- 依赖管理  
└── vue.config.js -- vue cli4 的 webpack 配置
```
### 启动项目

```bash
npm install

npm run serve
```

