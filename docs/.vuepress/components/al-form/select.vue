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
        sex: 1,
        classes: "",
      },
      formItem: [
        {
          model: "classes",
          item: "select",
          child: [
            {
              label: "基金",
              value: 0,
            },
            {
              label: "股票",
              value: 1,
            },
            {
              label: "债卷",
              value: 2,
            },
          ],
          placeholder: "请选择分类",
        },
        {
          label: "性别",
          model: "sex",
          item: "select",
          child: {
            男: 0,
            女: 1,
          },
          dataType: "object",
          placeholder: "请选择性别",
        },
        {
          label: "班级",
          model: "grades",
          item: "select",
          child: [
            {
              label: "一年级",
              options: [
                {
                  label: "一年一班",
                  value: "1.1",
                },
                {
                  label: "一年二班",
                  value: "1.2",
                },
              ],
            },
            {
              label: "二年级",
              options: [
                {
                  label: "二年一班",
                  value: "2.1",
                },
                {
                  label: "二年二班",
                  value: "2.2",
                },
              ],
            },
          ],
          dataType: "group",
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




        // {
        //   label: "会员级别",
        //   model: "classes",
        //   item: "radio",
        //   child: [
        //     {
        //       label: '黄金',
        //       value: 3
        //     },
        //     {
        //       label: '白银',
        //       value: 2
        //     },
        //     {
        //       label: '青铜',
        //       value: 1
        //     }
        //   ]
        // },
        // {
        //   label: '短信套餐',
        //   model: 'sms',
        //   item: 'checkbox',
        //   child: [
        //     {
        //       label: 'A套餐',
        //       value: 3
        //     },
        //     {
        //       label: 'B套餐',
        //       value: 2
        //     },
        //     {
        //       label: 'C套餐',
        //       value: 1
        //     }
        //   ]
        // },
        // {
        //   label: '有效期',
        //   model: 'validity',
        //   type: 'date-picker',
        //   item: 'date-picker'
        // }