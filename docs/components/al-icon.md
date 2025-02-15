### 1. 默认视图

**基础的显示界面(element-ui图标库)**

支持用户输入和点击图标按钮选择

::: demo 默认使用的图标为 element-ui 的图标库
``` html
<template>
  <al-icon></al-icon>
</template>
```
:::

<br/>

### 2. 属性

***display/flex*属性，允许icon图标横向排列**

::: demo  flex属性可以根据实际业务更改
``` html
<template>
  <al-icon display="flex" flex="20%"></al-icon>
</template>
```
:::

<br/>

***name/placeholder*能自定义按钮的文本和input的placeholder文本**

::: demo
``` html
<template>
  <al-icon name="选择图标" placeholder="请选择图标"></al-icon>
</template>
```
:::

<br/>

**自定义图标*iconList*** 

::: demo
``` html
<template>
  <al-icon :iconList="iconList"></al-icon>
</template>

<script>
export default {
  data() {
  return {
      iconList: ["el-icon-platform-eleme", "el-icon-eleme"]
    }
  }
}
</script>
```
:::

<br/>

**icon图标所占高度*height*** 

::: demo
``` html
<template>
  <al-icon height="100px"></al-icon>
</template>
```
:::

<br/>

### 3. 事件

**点击图标任意行执行的事件**

打开控制台查看*selectIconData*事件携带的参数

::: demo 默认使用的图标为 element-ui 的图标库
``` html
<template>
  <al-icon @selectIconData="iconFont"></al-icon>
</template>

<script>
export default {
  methods: {
    iconFont(data) {
      console.log(data);
      this.$notify({
        title: '事件操作反馈',
        message: `选择了图标后得到的数据为-${data}`
      })
    }
  }
}
</script>

```
:::

<br/>

### 4. 说明

**al-form Attributes**

|参数|说明|类型|可选值|默认值|
|-|-|-|-|-|
|name|按钮的文本显示|String|—|图标|
|placeholder|input框内显示的默认文本|String|—|请输入对应图标的iconfont|
|clearable|input框内的清除图标|Boolean|—|true|
|display|下拉框图标的排列方式|String|—|block|
|flex|下拉框图标的占用空间|String|—|100%|
|iconList|自定义下拉框图标库|Array|—|—|
|height|下拉框所占用的高度|String|—|400px|


<br/>

**al-icon Methods**

|事件名称|说明|参数|
|-|-|-|
|selectIconData|点击icon图标任意行执行的事件|对应的icon文本|


<!-- <ClientOnly>
  <al-icon-iconList/>
</ClientOnly> -->