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

<style>

</style>