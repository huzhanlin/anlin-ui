### 1. 引入

``` js
import { db as Db } from "anlin-ui"
```
<br>

### 2. new 实例并且赋值给vue的原型

类接收最多2个参数

第一个参数为存储方式 -> 可选 默认为1（1为localStorage, 2为sessionStorage）

第二次参数为存储字段前的前缀-> 可选 默认为anlin

``` js
const loc = new Db()
const sess = new Db(2)
const userLoc = new Db(1, 'user')
const userSess = new Db(2, 'user')

const db = { loc, sess, userLoc, userSess }

Vue.prototype.$db = db;
```

<br>

### 3. 调用

``` js
this.$db.userLoc.set("account", 123);

console.log(this.$db.userLoc.get("account"));

setTimeout(() => {
  this.$db.userLoc.remove("account");
  console.log(this.$db.userLoc.get("account"));
}, 1000);
```


