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
        time: '08:30',
        time2: [new Date(Date.now()),new Date(Date.now() + 1000 * 60 * 60)]
      },
      formItem: [
        {
          label: '时间选择',
          model: 'time',
          item: 'time-select',
          pickerOptions:{
            start: '08:30',
            step: '00:15',
            end: '18:30'
          }
        },
        {
          label: '时间选择2',
          model: 'time2',
          item: 'time-select',
          isRange: true,
          rangeSeparator: "至",
          startPlaceholder: "开始时间",
          endPlaceholder: "结束时间",
          placeholder: "选择时间范围",
          type: 'picker'
        }
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