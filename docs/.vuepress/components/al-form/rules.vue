<template>
  <div>
    <al-form
      :model="model"
      :formItem="formItem"
      :rules="rules"
      label-width="100px"
      ref="alform"
      @submit="submit"
      @reset="reset"
    >
      <template v-slot:test="scope">        
        <el-input v-model="model[scope.row.model]" showPassword></el-input>
        <div style="color: red">请输入正确的密码(推荐字母和数字组合)</div>
      </template>
      <el-button @click="clear" type="warning">清除表单</el-button>
      <el-button @click="send" type="success">发送数据</el-button>
    </al-form>
  </div>
</template>

<script>
export default {
  data() {
    const checkPass = (rule, value, callback) => {
      if(value === this.model.pass) {
        callback()
      } else {
        callback(new Error('两次输入密码不一致!'))
      }
    }
    return {
      model: {
        pass: '',
        name: '',
        checkPass: ''
      },
      rules: {
        name: { required: true, message: '请输入您的姓名', trigger: 'blur' },
        pass: { required: true, message: '请输入密码', trigger: 'blur' },
        checkPass: [
          { required: true, message: '请再次输入同样的密码', trigger: 'blur' },
          { validator: checkPass, trigger: 'blur' }
        ]
      },
      formItem: [
        {
          item: 'input',
          label: '姓名(必填)',
          model: 'name'
        },
        {
          item: 'slot',
          label: '密码(插槽)',
          name: 'test',
          model: 'pass'
        },
        {
          item: 'input',
          label: '重复密码',
          model: 'checkPass',
          type: 'checkPass',
          clearable: true,
          showPassword: true
        }
      ],
    };
  },
  methods: {
    clear() {
      this.$refs.alform.reset('alForm')
    },
    send(data) {
      this.$refs.alform.submit('alForm')
    },
    submit() {
      console.log(this.model);
      this.$notify({
        title: "事件操作反馈",
        message: `form经过正确的验证后执行的事件`,
      });
    },
    reset() {
      console.log(this.model);
      this.$notify({
        title: "事件操作反馈",
        message: `form经过重置后执行的事件`,
      });
    }
  },
};
</script>