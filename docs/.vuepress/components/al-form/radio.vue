<template>
  <div>
    <al-form
      :model="model"
      @submit="submit"
      :formItem="formItem"
      @reset="reset"
    ></al-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      model: {
        classes: 2
      },
      formItem: [
        {
          label: "会员级别",
          model: "classes",
          item: "radio",
          child: [
            {
              label: "黄金",
              value: 3,
            },
            {
              label: "白银",
              value: 2,
            },
            {
              label: "青铜",
              value: 1,
              disabled: true
            },
          ],
        },
      ],
    };
  },
  methods: {
    submit() {
      console.log(this.model);
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