// // 使用异步函数也是可以的
// export default ({
//   Vue, // VuePress 正在使用的 Vue 构造函数
//   options, // 附加到根实例的一些选项
//   router, // 当前应用的路由实例
//   siteData, // 站点元数据
//   isServer // 当前应用配置是处于 服务端渲染 或 客户端
// }) => {
//   // ...做一些其他的应用级别的优化
//   console.log(10);
// }

//  引入anlin-ui
import ui from 'anlin-ui'
import { db as Db, theme } from "anlin-ui"
import Element from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

export default ({ Vue, options, router, siteData, isServer }) => {
  Vue.use(Element, {size: 'small'});
  Vue.component('AlContainer', ui.AlContainer)
  Vue.component('AlPagination', ui.AlPagination)
  Vue.component('AlIcon', ui.AlIcon)
  Vue.component('AlFilter', ui.AlFilter)
  Vue.component('AlForm', ui.AlForm)
  Vue.component('AlTable', ui.AlTable)
  Vue.component('AlMenu', ui.AlMenu)
  const loc = new Db()
  const sess = new Db(2)
  const userLoc = new Db(1, 'user')
  const userSess = new Db(2, 'user')
  const db = { loc, sess, userLoc, userSess }
  Vue.prototype.$db = db;
  Vue.prototype.$theme = theme;
};