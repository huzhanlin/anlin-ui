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

<style>

</style>