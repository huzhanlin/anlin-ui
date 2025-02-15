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

<script>
export default {

}
</script>

<style scoped>
.container {
  height: 600px;
}
.container ::v-deep .header {
  background-color: #eee;
}
.container ::v-deep .content {
  background-color: #aaa;
}
.container ::v-deep .footer {
  background-color: #eee;
}
</style>