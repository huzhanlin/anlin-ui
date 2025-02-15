### anlin-ui内置函数

**1. 本地存储类**

调用该函数能生成带命名空间的实例，更方便的操控浏览器的本地缓存

也更适合多人开发的项目

<br/>

**2. 变更element-ui的主题色**

调用anlin-ui导出的方法，并传入一个色值即可实现

<br>

**3. 瞧，现在已经发生变化了**

<br>

::: demo
``` html
<template>
  <el-button type="primary">看我的背景颜色</el-button>
  <p><strong>打开控制台看看localstorage</strong></p>
</template>
<script>
export default {
  mounted() {
    this.$db.userLoc.set("account", 'anlin');
    setTimeout(() => { this.$theme("#ff0000"); }, 2000)
  }
}
</script>
```
:::