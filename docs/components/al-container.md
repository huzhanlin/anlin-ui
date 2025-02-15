### 1. 默认视图

**注：不使用默认插槽的情况下**

::: demo 在项目中使用(header/content/footer)需要 ::v-deep 样式穿透
``` html
<template>
  <al-container class="container"></al-container>
</template>

<style>
.container {
  height: 600px!important;
}
.container .header {
  background-color: #eee!important;
}
.container .content {
  background-color: #aaa!important;
}
.container .footer {
  background-color: #eee!important;
}
</style>
```
:::



### 2. 使用slot

**注：默认slot处于footer插槽之下**

::: demo 在项目中使用(header/content/footer)需要 ::v-deep 样式穿透
``` html
<template>
  <al-container class="container">
    <template slot="header">
      header插槽
    </template>
    <template slot="content">
      content插槽
    </template>
    <template slot="footer">
      footer插槽
    </template>
    <div>我是默认插槽</div>
  </al-container>
</template>

<style>
.container {
  height: 600px!important;
}
.container .header {
  background-color: #eee!important;
}
.container .content {
  background-color: #aaa!important;
}
.container .footer {
  background-color: #eee!important;
}
</style>
```
:::



### 3. 默认 slot 定位

**注：默认slot处于footer插槽之下(使用position进行定位)**

::: demo 在项目中使用(header/content/footer)需要 ::v-deep 样式穿透
``` html
<template>
  <al-container class="container">
    <template slot="header">
      header插槽
    </template>
    <template slot="content">
      content插槽
    </template>
    <template slot="footer">
      footer插槽
    </template>
    <div class="default">我是默认插槽</div>
  </al-container>
</template>

<style>
.container {
  height: 600px!important;
}
.container .header {
  background-color: #eee!important;
}
.container .content {
  background-color: #aaa!important;
}
.container .footer {
  background-color: #eee!important;
}
.default {
  position: absolute;
  right: 40px; 
  bottom: 120px;
  border: 1px solid #eb2001;
  color: #fff;
  padding: 4px 6px;
}
</style>
```
:::


<!-- <ClientOnly>
  <al-container-position/>
</ClientOnly> -->
<br/>

### 4. 说明

**Slot插槽**

|插槽处|说明|name|
|-|-|-|
|头部|头部区域，可放置form搜索表单(参考说明的组合示例)|header|
|内容区|内容区域，可放置table表格(参考说明的组合示例)|content|
|尾部|尾部区域，可放置pagination分页(参考说明的组合示例)|footer|
|默认|默认的自定义内容|default|