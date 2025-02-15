### 1. 引入

``` js
import { theme } from "anlin-ui" 
```

<br>

### 2. 推荐绑定到vue原型

``` js
Vue.prototype.$theme = theme;
```

<br>

### 3. 调用

theme 函数接收一个参数，为浏览器识别的色值

函数调用后，将改变element-ui的主题颜色为传入的色值

``` js
setTimeout(() => {
  this.$theme("#ff0000");
}, 2000)
```


