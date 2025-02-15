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
        dateBasic: '',
        dateMonth: '2021/04',
        daterange: [new Date(Date.now()),new Date(Date.now() + 1000 * 60 * 60 * 24)],
        dateTime: ['2021-04-20 00:13:00','2021-05-21 00:02:00']
      },
      formItem: [
        {
          label: '日期选择(标准)',
          model: 'dateBasic',
          item: 'date-picker',
          type: "date"
        },
        {
          label: '日期选择(月)',
          model: 'dateMonth',
          item: 'date-picker',
          placeholder: '请选择日期',
          type: "month"   
        },
        {
          label: '日期选择(范围)',
          model: 'daterange',
          item: 'date-picker',
          type: "daterange"
        },
        {
          label: "日期时间(范围)",
          model: 'dateTime',
          item: 'date-picker',
          type: 'datetimerange'
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