<template>
  <div>
    <al-form
      :model="model"
      :formItem="formItem"
    >
      <template v-slot:test="scope">        
        <el-input v-model="model[scope.row.model]"></el-input>
        <div style="color: red">请输入正确的验证码(6位数字)</div>
      </template>
      <el-button @click="goto" type="warning">跳转新页面</el-button>
      <el-button @click="send" type="success">发送表单数据</el-button>
    </al-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      model: {
        code: '999999'
      },
      formItem: [
        {
          item: 'slot',
          label: '验证码(插槽)',
          name: 'test',
          model: 'code',
          width: '100px'
        }
      ],
    };
  },
  methods: {
    goto() {
      console.log(this.model);
      this.$notify({
        title: "事件操作反馈",
        message: `跳转新的页面事件逻辑`,
      });
    },
    send(data) {
      console.log(this.model);
      this.$notify({
        title: "事件操作反馈",
        message: `实现发送数据到...`,
      });
    },
  },
};
</script>