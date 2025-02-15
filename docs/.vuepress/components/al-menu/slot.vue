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

<style>

</style>