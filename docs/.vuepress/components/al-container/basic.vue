<template>
  <al-container class="container"></al-container>
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