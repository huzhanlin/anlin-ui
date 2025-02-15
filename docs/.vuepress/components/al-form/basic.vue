<template>
  <div>
     <al-form ref="form" @submit="submit" @reset="reset"></al-form>
  </div>
</template>

<script>
export default {
  methods: {
    submit() {
      this.$notify({
        title: '事件操作反馈',
        message: `form表单validate之后执行的提交事件`
      })
    },
    reset(data) {
      this.$notify({
        title: '事件操作反馈',
        message: `form表单resetFields之后执行的重置事件`
      })
    } 
  }
}
</script>