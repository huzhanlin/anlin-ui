### 1. 默认视图

**根据element-ui的默认属性值生成**

::: demo
``` html
<template>
  <al-pagination></al-pagination>
</template>
```
:::

<br/>

### 2. 属性

**通过*layout*传入自定义布局以及支持(el-pagination)的任何属性**

::: demo
``` html
<template>
  <al-pagination background disabled layout="total,sizes,prev,pager,next"></al-pagination>
</template>
```
:::

<br/>

**通过*pageData*对象传递page/size/total的值**

::: demo
``` html
<template>
  <al-pagination :pageData="pageData"></al-pagination>
</template>

<script>
export default {
  data() {
  return {
      pageData: {
        page: 1,
        size: 20,
        total: 40,
      }
    }
  }
}
</script>
```
:::


<br/>

### 3. 事件

::: demo
``` html
<template>
  <al-pagination
      :page-sizes="[10, 20, 30, 40]"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :pageData="pageData"
      >
  </al-pagination>
</template>

<script>
export default {
  data() {
    return {
      pageData: {
        page: 1,
        size: 20,
        total: 40,
      }
    }
  },
  methods: {
    handleSizeChange(data) {
      console.log(data);
      this.$notify({
        title: "事件操作反馈",
        message: `选择每页显示的数据条目数时触发事件-${data}`,
      });
    },
    handleCurrentChange(data) {
      console.log(data);
      this.$notify({
        title: "事件操作反馈",
        message: `选择页数时触发事件-${data}`,
      });
    },
  }
}
</script>
```
:::

<br/>

### 4. 说明

**al-pagination Attributes**

|参数|说明|类型|可选值|默认值|
|-|-|-|-|-|
|pageData|对象传递page/size/total的值|Object|—|{}|

<br/>

**al-pagination Methods**

|事件名称|说明|参数|
|-|-|-|
|size-change|选择每页显示的数据条目数时触发事件|对应的数值|
|current-change|选择页数时触发事件|对应的数值|