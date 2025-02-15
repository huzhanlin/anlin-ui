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
        sms: [],
        sms2: [2]
      },
      formItem: [
         {
          label: '短信套餐',
          model: 'sms',
          item: 'checkbox',
          child: [
            {
              label: 'A套餐',
              value: 1
            },
            {
              label: 'B套餐',
              value: 2
            },
            {
              label: 'C套餐',
              value: 3,
              disabled: true
            }
          ]
        },
        {
          label: '短信套餐2',
          model: 'sms2',
          item: 'checkbox',
          dataType: 'button',
          child: [
            {
              label: 'A套餐',
              value: 1
            },
            {
              label: 'B套餐',
              value: 2
            },
            {
              label: 'C套餐',
              value: 3,
              disabled: true
            }
          ]
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