<template>
  <div>
    <al-form
      ref="form"
      @submit="submit"
      @reset="reset"
      :formItem="formItem"
    ></al-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formItem: [
        {
          label: "姓名",
          model: "name",
          item: "input",
          maxlength: 4,
          required: true
        },
        {
          label: "年龄",
          model: "age",
          item: "input",
          type: 'number',
          placeholder: "请输入年龄",
          clearable: true,
          disabled: false
        },
        {
          label: '班级',
          model: 'classes',
          item: "input",
          placeholder: '请输入所在班级',
          width: '100px'
        },
        {
          model: 'detail',
          item: "input",
          type: 'textarea',
          placeholder: '请输入所在班级',
          width: '300px'
        }        
      ],
    };
  },
  methods: {
    submit() {
      this.$notify({
        title: "事件操作反馈",
        message: `form表单validate之后执行的提交事件`,
      });
    },
    reset(data) {
      this.$notify({
        title: "事件操作反馈",
        message: `form表单resetFields之后执行的重置事件`,
      });
    },
  },
};
</script>