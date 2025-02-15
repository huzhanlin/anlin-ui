## 简介 

> 应用：当前组件可用于pc项目
>
> 特色：数据驱动视图展示
>
> 主体：基于element-ui的2次封装组件
>
> 附加：中后台管理系统使用频率较高的工具函数

官网：[huzhanlin.gitee.io/](https://huzhanlin.gitee.io/)

## 安装

npm install -S anlin-ui

## *前提(main.js)*

element-ui(依赖项)

依赖的组件有
  1. el-menu
  2. el-submenu
  3. el-menu-item
  4. el-scrollbar
  5. el-form
  6. el-form-item
  7. el-input
  8. el-select
  9. el-option
  10. el-date-picker
  11. el-checkbox-group
  12. el-checkbox
  13. el-button
  14. el-button-group
  15. el-radio-group
  16. el-radio
  17. el-pagination
  18. el-table
  19. el-table-column
  20. el-link
  21. el-avatar
  22. el-time-picker
  23. el-time-select

## *引入(main.js)*

1. 引入elementUI(依赖)
``` js
import 'element-ui/lib/theme-chalk/index.css';
import ElementUI from 'element-ui'
Vue.use(ElementUI, { size: 'small' });
```

2. 导入组件对象
``` js
import ui from "anlin-ui"
```

3. 挂载组件到全局
``` js
Vue.component('AlContainer', ui.AlContainer)
Vue.component('AlPagination', ui.AlPagination)
Vue.component('AlIcon', ui.AlIcon)
Vue.component('AlFilter', ui.AlFilter)
Vue.component('AlForm', ui.AlForm)
Vue.component('AlTable', ui.AlTable)
Vue.component('AlMenu', ui.AlMenu)
```

4. 导入函数
``` js
import { db as Db, theme } from "anlin-ui"
```

5. 挂载到vue原型
``` js
const loc = new Db()
const sess = new Db(2)
const userLoc = new Db(1, 'user')
const userSess = new Db(2, 'user')
const db = { loc, sess, userLoc, userSess }
Vue.prototype.$db = db;

Vue.prototype.$theme = theme;
```

## *使用(\*.vue)*
改变element主题色的函数示例
``` js
created() {  
  setTimeout(() => {
    this.$theme("#ff0000");
  }, 2000);
},
```
本地存储类的使用示例
``` js
mounted() {
  this.$db.userLoc.set("account", 123);
  console.log(this.$db.userLoc.get("account"));
  setTimeout(() => {
    this.$db.userLoc.remove("account");
    console.log(this.$db.userLoc.get("account"));
  }, 1000);
},
```

## 迭代说明
* 2021/03/02

    迭代  AlMenu AlForm AlIcon AlPagination AlTable 组件

    删除AlFilter组件（这个组件的效果，在新的AlForm中，只需要传入适当的参数即可达到一样的效果）

<br>

* 2021/03/04

    迭代 AlTable

    添加支持unit属性，如果表格数据为单位数据的话，能将unit定义的（单位）文本追加到数据的后面

    添加支持slot属性，设定对应的slot属性为true,设定name,label,并且在AlTable内使用template的v-slot:XXX="XXX",即能实现想要的插槽
      

<br>

* 2021/03/12
    
    修复导出AlFilter组件的错误

<br>

* 2021/03/25 

    修复表格组件的column数据的对象中 text存在并且同级prop为多级数据时 示例：authorizer_info.service_type_info.id 不能正常解析的bug

<br>

* 2021/04/01

    修改组件的sass转化成css,修改package内的配置项

<br>

* 2021/04/04 

    修改form组件的一个Bug,同时增加了一个item配置项

<br>

* 2021/04/05 

    更新al-table组件，添加了img的对象属性，添加了操作栏的label可配