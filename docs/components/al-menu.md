### 1. 默认视图

**带*menuList*(Array)属性的基本视图**

::: demo  menuList可以无限层级，但是层级越高性能消耗越大
``` html
<template>
  <al-menu :menuList="menuList"></al-menu>
</template>

<script>
export default {
  data() {
    return {
      menuList: [
        {
          path: "/user",
          name: "用户"
        },
        {
          path: "/admin",
          name: "管理",
          children: [
            {
              path: "/admin/vip1",
              name: "vip1",
              children: [
                {
                  path: "/admin/vip1/vip1-1",
                  name: "vip11",
                },
                {
                  path: "/admin/vip1/vip1-2",
                  name: "vip12",
                },
              ],
            },
            {
              path: "/admin/vip2",
              name: "vip2",
            },
            {
              path: "/admin/vip3",
              name: "vip3",
            },
          ],
        }
      ]
    }
  }
}
</script>

```
:::

<br/>

### 2. 属性

***collapse* 属性支持展开菜单栏和收缩菜单栏**

***meta: { icon: "el-icon-mobile" }*  支持icon 图标**

**router  点击跳转对应的path路径**

::: demo
``` html
<template>
  <al-menu
    router
    :default-active="currentPath"
    :unique-opened="false"
    active-text-color="#ff0000"
    :collapse="collapse"
    :collapse-transition="false"
    :menuList="menuList"
    >
  </al-menu>
</template>

<script>
export default {
  data() {
    return {
      currentPath: "/user",
      collapse: true,
      menuList: [
        {
          path: "/user",
          name: "用户",
          meta: { icon: "el-icon-mobile" },
        },
        {
          path: "/admin",
          name: "管理",
          meta: { icon: "el-icon-eleme" },
          children: [
            {
              path: "/admin/vip1",
              name: "vip1",
              children: [
                {
                  path: "/admin/vip1/vip1-1",
                  name: "vip11",
                },
                {
                  path: "/admin/vip1/vip1-2",
                  name: "vip12",
                },
              ],
            },
            {
              path: "/admin/vip2",
              name: "vip2",
            },
            {
              path: "/admin/vip3",
              name: "vip3",
            },
          ],
        }
      ]
    }
  }
}
</script>

```
:::

<br/>

***mode="horizontal"* 横向布局，同时支持el-menu的其它属性**

::: demo
``` html
<template>
  <al-menu
    router
    :default-active="currentPath"
    :unique-opened="false"
    active-text-color="#ff0000"
    :collapse-transition="false"
    :menuList="menuList"
    mode="horizontal"
    >
  </al-menu>
</template>

<script>
export default {
  data() {
    return {
      currentPath: "/user",
      menuList: [
        {
          path: "/user",
          name: "用户",
          meta: { icon: "el-icon-mobile" },
        },
        {
          path: "/admin",
          name: "管理",
          meta: { icon: "el-icon-eleme" },
          children: [
            {
              path: "/admin/vip1",
              name: "vip1",
              children: [
                {
                  path: "/admin/vip1/vip1-1",
                  name: "vip11",
                },
                {
                  path: "/admin/vip1/vip1-2",
                  name: "vip12",
                },
              ],
            },
            {
              path: "/admin/vip2",
              name: "vip2",
            },
            {
              path: "/admin/vip3",
              name: "vip3",
            },
          ],
        }
      ]
    }
  }
}
</script>

```
:::

<br/>

### 3. solt

**al-menu 内置 menuItem/submenu 插槽，具体使用方法请参考示例**

::: demo
``` html
<template>
  <al-menu :menuList="menuList" router>
    <template v-slot:menuItem="scope">
      {{scope.row.name}}（路径：{{scope.row.path}}）（点击跳转）
    </template>
    <template v-slot:submenu="scope">
      {{scope.row.name}}（路径：{{scope.row.path}}）（点击展开）
    </template>
  </al-menu>
</template>

<script>
export default {
  data() {
    return {
      menuList: [
        {
          path: "/user",
          name: "用户",
          meta: { icon: "el-icon-mobile" },
        },
        {
          path: "/admin",
          name: "管理",
          meta: { icon: "el-icon-eleme" },
          children: [
            {
              path: "/admin/vip1",
              name: "vip1",
              children: [
                {
                  path: "/admin/vip1/vip1-1",
                  name: "vip11",
                },
                {
                  path: "/admin/vip1/vip1-2",
                  name: "vip12",
                },
              ],
            },
            {
              path: "/admin/vip2",
              name: "vip2",
            },
            {
              path: "/admin/vip3",
              name: "vip3",
            },
          ],
        }
      ]
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
|menuList|菜单的列表项|Array|—|图标|


<br/>

**Slot**

|插槽处|说明|name|
|-|-|-|
|al-menu标签内|menu-item内的插槽，用以显示自定义的内容|menuItem|
|al-menu标签内|submenu内的插槽，用以显示自定义的内容|submenu|

<!-- <ClientOnly>
  <al-menu-slot/>
</ClientOnly> -->