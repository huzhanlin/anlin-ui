### 1. 默认视图

**注：不使用默认插槽的情况下**

1. 自动生成的submit按钮功能附带el-form的提交验证 
2. 自动生成的reset按钮功能附带el-form的清空

::: demo 基础的按钮表单(可使用默认slot替换)
``` html
<template>
  <al-form @submit="submit" @reset="reset"></al-form>
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
```
:::

<br/>

### 2. 在al-form中使用formItem属性(Array)
**item: input(支持el-input上的属性)**

以下简单的演示：formItem中数组下对象提供的item的一种(el-input)

::: demo 当有大量的formItem数据时，建议新建一个js文件，引入的方式使用
``` html
<template>
  <div>
    <al-form
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
```
:::


<br/>

**item: select(支持el-select上的属性)**

以下简单的演示：formItem中数组下对象提供的item的一种(el-select)

::: demo 现在这里新添加了一个属性model，对应着form表单的绑定数据，如果需要验证提交按钮，请打开控制台
``` html
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
```
:::


<br/>

**item: radio(支持el-radio上的属性)**

以下简单的演示：formItem中数组下对象提供的item的一种(el-radio)

::: demo 请注意model中对radio的同级model赋值，因为单选一般用于必选之一。
``` html
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
```
:::


<br/>

**item: checkbox(支持el-checkbox上的属性)**

以下简单的演示：formItem中数组下对象提供的item的一种(el-checkbox)

::: demo 请注意在model对象中指定对应的checkbox内model的值(Array)，否则会报错。
``` html
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
```
:::


<br/>

**item: time-select(支持el-time-select上的属性)**

以下简单的演示：formItem中数组下对象提供的item的一种(el-time-select)

::: demo 请注意 time-picker 标签内的model对应的类型（date或者string），根据实际业务进行转换
``` html
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
```
:::


<br/>

**item: date-picker(支持el-date-picker上的属性)**

以下简单的演示：formItem中数组下对象提供的item的一种(el-date-picker)

::: demo 请注意 time-picker 标签内的model对应的类型（date或者string），根据实际业务进行转换
``` html
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
```
:::


<br/>

**item: slot(用于以上场景不满足业务的情况下使用)**

以下简单的演示：formItem中数组下对象提供的item的一种(slot)

::: demo 请注意formItem内的name属性，应该和 v-slot:**** 一致
``` html
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
```
:::


<br/>

### 3. 表单验证

支持原生属性/rules对象/自定义验证

**这里出现了*ref="alform"*，可以通过这个属性调用组件内的事件(包含submit,reset)，事件执行完毕之后会触发emit，返回对应相同名称的事件**


::: demo this.$refs.alform.submit('alForm')中的alForm 是al-form组件中表单的ref,调用submit事件会检查验证是否通过；同样调用reset事件会让form表单重置
``` html
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
```
:::


<br/>

### 4. 说明

**al-form Attributes**

|参数|说明|类型|可选值|默认值|
|-|-|-|-|-|
|formItem|表单数据的元素集合|Array|—|[]|
|model|表单数据对象(对应formItem数组内的对象中model)|Object|—|{}|
|rules|表单验证规则(对应formItem数组内的对象中model)|Object|—|—|


**al-form Methods**

|事件名称|说明|参数|
|-|-|-|
|submit|表单校验之后emit回来的事件方法|—|
|reset|表单重置之后emit回来的事件方法|—|


**Slot**

|插槽处|说明|name|
|-|-|-|
|属性formItem内|自定义显示表单项目内容|formItem数组中对象的自定义name|
|标签内slot|默认覆盖按钮事件的自定义内容|default|


<!-- <ClientOnly>
  <al-form-rules/>
</ClientOnly> -->