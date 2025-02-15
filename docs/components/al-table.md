### 1. 默认视图

**基础的显示界面**

::: demo
``` html
<template>
  <al-table></al-table>
</template>
```
:::

<br/>

### 2. 属性

**纯数据展示使用*column/tableData***

支持el-table中所有的属性

::: demo column是表格中需要展示的行标题，tableData是表格的数据
``` html
<template>
  <al-table :column="column" :data="tableData" :header-cell-style="{ backgroundColor: '#333' }" ></al-table>
</template>

<script>
export default {
  data() {
    return {
      column: [
        {
          label: '姓名',
          prop: 'name'
        },
        {
          label: '性别',
          prop: 'sex'
        },
        {
          label: '年龄',
          prop: 'age'
        }
      ],
      tableData: [
        {
          name: "王二",
          sex: '女',
          age: 18
        },
        {
          name: "张三",
          sex: '男',
          age: 25
        },
        {
          name: "李四",
          sex: '男',
          age: 20
        }
      ]
    }
  }
}
</script>

<style>
table {
  padding: 0;
  margin: 0;
}
</style>
```
:::

<br/>

**支持在column中的属性(text)**

如：性别为 0/1 的时候需要转化成文本形式（女性/男性）
    <br/>
    同时支持el-table-column中的属性

::: demo
``` html
<template>
  <al-table :column="column" :data="tableData" :header-cell-style="{ backgroundColor: '#333' }" ></al-table>
</template>

<script>
export default {
  data() {
    return {
      column: [
        {
          label: '姓名',
          prop: 'name',
          width: '80px'
        },
        {
          label: '性别',
          prop: 'sex',
          align: 'center',
          text: {
            0: '女性',
            1: '男性'
          }
        },
        {
          label: '年龄',
          prop: 'age',
          align: 'center'
        }
      ],
      tableData: [
        {
          name: "王二",
          sex: 0,
          age: 18
        },
        {
          name: "张三",
          sex: 1,
          age: 25
        }
      ]
    }
  }
}
</script>

<style>
table {
  padding: 0;
  margin: 0;
}
</style>
```
:::

<br/>

**支持在column中的属性(link)**

link: 'detail' 表示跳转的url路径，不需要在前面加'/'

target: 'self' 表示是否以打开新窗口的方式改变url 

paramsList: ['companyID','id'] 表示追加在url后面的参数(应该是table表格内部存在的属性)

otherParams   是一个对象，如果需要在url后面追加自定义参数的话，请使用它

::: demo
``` html
<template>
  <al-table :otherParams="otherParams" :column="column" :data="tableData" :header-cell-style="{ backgroundColor: '#333' }" ></al-table>
</template>

<script>
export default {
  data() {
    return {
      otherParams: {
        classes: 'vip'
      },
      column: [
        {
          label: '姓名',
          prop: 'name',
          width: '80px'
        },        
        {
          label: '详细资料',
          prop: 'info',
          link: 'detail',
          target: 'self',
          paramsList: ['id']
        },
        {
          label: '销售公司资料',
          prop: 'company',
          link: 'companyDetail',
          target: 'blank',
          paramsList: ['companyID','id']
        }
      ],
      tableData: [
        {
          name: "王二",
          info: "查看详情",  
          company: '阿里',
          id: 1,
          companyID: 10000        
        },
        {
          name: "张三",
          info: "查看详情", 
          company: '腾讯营', 
          id: 2,
          companyID: 10001
        }
      ]
    }
  }
}
</script>

<style>
table {
  padding: 0;
  margin: 0;
}
</style>
```
:::

<br/>

**支持在column中的属性(img)**

img: true  表示展示在表格内的数据是一张图片

使用el-avatar展示图片，可以传递el-avatar支持的所有属性

::: demo
``` html
<template>
  <al-table :column="column" :data="tableData" :header-cell-style="{ backgroundColor: '#333' }" ></al-table>
</template>

<script>
export default {
  data() {
    return {
      column: [
        {
          label: '头像',
          prop: 'avatar',
          img: true
        },
        {
          label: '头像',
          prop: 'avatar',
          img: true,
          fit: 'fill',
          shape: 'square',
          size: 'small' 
        },
        {
          label: '姓名',
          prop: 'name',
          width: '80px'
        },
        {
          label: '年龄',
          prop: 'age',
          align: 'center'
        }
      ],
      tableData: [
        {
          avatar: 'http://photocq.photo.store.qq.com/psc?/436341146/WmaLtG4DKwtTVCYYotv*PfQHE0V5nzQrkOBilSnZNaKieL2P82reRHWvVxTh3c.lt5zpB4mOA4Eh2VcRgeH5D4ZwEJISIHHsvAu0Mk27b.8!/b&bo=OASgBQAAAAARF7k!&rf=viewer_4',
          name: "王二",
          age: 18
        },
        {
          avatar: '',
          name: "张三",
          age: 25
        }
      ]
    }
  }
}
</script>

<style>
table {
  padding: 0;
  margin: 0;
}
</style>
```
:::

<br/>

**支持在column中的属性(unit)**

unit: '公斤'  表示在table的数据后面追加的文本，一般用于单位或者附加的说明


::: demo
``` html
<template>
  <al-table :column="column" :data="tableData" :header-cell-style="{ backgroundColor: '#333' }" ></al-table>
</template>

<script>
export default {
  data() {
    return {
      column: [
        {
          label: '姓名',
          prop: 'name',
          width: '120px',
          unit: '(技术部)'
        },
        {
          label: '年龄',
          prop: 'age',
          align: 'center',
          unit: '岁'
        },
        {
          label: '体重',
          prop: 'weight',
          unit: '公斤'
        }
      ],
      tableData: [
        {
          name: "王二",
          age: 18,
          weight: 50
        },
        {
          name: "张三",
          age: 25,
          weight: 60
        }
      ]
    }
  }
}
</script>

<style>
table {
  padding: 0;
  margin: 0;
}
</style>
```
:::

<br/>

**支持在column中的属性(slot插槽和其它)**

type: 'index' 展示表格行数

type: 'selection'   让表格可以多选

slot: true        开启插槽

name: 'job'     插槽名称(和template中 v-slot:job 匹配)

::: demo
``` html
<template>
  <al-table :column="column" :data="tableData" :header-cell-style="{ backgroundColor: '#333' }" >
    <template v-slot:job="scope">
      <el-tooltip :content="scope.row.introduce">
        <el-tag>{{scope.row.work}}</el-tag>
      </el-tooltip>      
    </template>
  </al-table>
</template>

<script>
export default {
  data() {
    return {
      column: [
        {
          type: 'selection',
          width: '80px'
        },
        {
          label: '#',
          type: 'index'
        },       
        {
          label: '姓名',
          prop: 'name'
        },
        {
          label: '年龄',
          prop: 'age'
        },
        {
          label: '职业(插槽)',
          slot: true,
          name: 'job',
          prop: 'work'
        }
      ],
      tableData: [
        {
          name: "王二",
          age: 18,
          work: '机械工程师',
          introduce: '机械工程师通常指的是从事机械行业专业人士'
        },
        {
          name: "张三",
          age: 25,
          work: '程序员',
          introduce: '程序员是从事程序开发、程序维护的专业人员'
        }
      ]
    }
  }
}
</script>

<style>
table {
  padding: 0;
  margin: 0;
}
</style>
```
:::

<br/>

**表格定位**

operation 属性控制操作栏,支持el-table-column的属性

同时column数组中的对象也支持fixed属性，可以设置定位方向

::: demo
``` html
<template>
  <al-table :operation="operation" :buttons="buttons" :column="column" :data="tableData" :header-cell-style="{ backgroundColor: '#333' }" ></al-table>
</template>

<script>
export default {
  data() {
    return {
      operation: {
        fixed: 'right',
        align: 'center',
        label: '按钮操作'
      },
      buttons: [
        {
          method: 'delete',
          name: '删除'
        }
      ],
      column: [
        {
          label: '姓名',
          prop: 'name',
          fixed: 'left'
        },
        {
          label: '性别',
          prop: 'sex',
          width: '400px'
        },
        {
          label: '年龄',
          prop: 'age',
          width: '400px'
        }
      ],
      tableData: [
        {
          name: "王二",
          sex: '女',
          age: 18
        },
        {
          name: "张三",
          sex: '男',
          age: 25
        },
        {
          name: "李四",
          sex: '男',
          age: 20
        }
      ]
    }
  }
}
</script>

<style>
table {
  padding: 0;
  margin: 0;
}
</style>
```
:::

<br/>

### 3. 事件

**包含多选事件，操作区域的按钮事情，操作区域的slot事件**

type: 'slot'  表示在操作区开启一个插槽

name: 'delete'  插槽的name值为delete，需要和template的v-slot:delete相对应

同时支持el-table中对应的事件 比如示例中的（@cell-click="cellClick"）

::: demo
``` html
<template>
  <al-table @cell-click="cellClick" :buttons="buttons" :column="column" :data="tableData"
  @update="update" @selection-change="handleSelectionChange"
  :header-cell-style="{ backgroundColor: '#333' }" >
    <template v-slot:delete="scope">
      <el-button @click="deleteMethod(scope)">删除数据/插槽({{scope.row.name}})</el-button>
    </template>
  </al-table>
</template>

<script>
export default {
  data() {
    return {
      buttons: [
        {
          name: '修改',
          method: 'update'
        },
        {
          type: 'slot',
          name: 'delete'
        }
      ],
      column: [
        {
          type: 'selection'
        },
        {
          label: '姓名',
          prop: 'name'
        },
        {
          label: '年龄',
          prop: 'age'
        }
      ],
      tableData: [
        {
          name: "王二",
          age: 18,
          id: 1
        },
        {
          name: "张三",
          age: 25,
          id: 2
        }
      ]
    }
  },
  methods: {
    handleSelectionChange(data) {
      console.log(data)
      this.$notify({
        title: "事件操作反馈",
        message: `当用户选择了多选框的时候，会返回对应的数据(Array)。详细数据请打开控制台查看`,
      });
    },
    update(scope) {
      console.log(scope.row)
      this.$notify({
        title: '事件操作反馈',
        message: '修改按钮的操作，参数类型为Object。详细数据请打开控制台查看'
      })
    },
    deleteMethod(scope) {
      console.log(scope.row)
      this.$notify({
        title: '事件操作反馈',
        message: '删除按钮的操作(插槽)，参数类型为Object。详细数据请打开控制台查看'
      })
    },
    cellClick(scope) {
      console.log(scope)
      this.$notify({
        title: '事件操作反馈',
        message: '单击表格行执行的事件操作。详细数据请打开控制台查看'
      })
    }
  }
}
</script>

<style>
table {
  padding: 0;
  margin: 0;
}
</style>
```
:::

<br/>

**rowButton 操作栏的行插槽以及事件应用示例**

rowButton 为内置插槽，可以直接使用，需要满足对应的条件

  1. :buttons="buttons"  属性应该存在，并且需要length长度不小于1，length值越大，表格的操作栏所占用的宽度越大

  2. 如需要参考示例中使用，请注意v-model="scope.row.value"的双向绑定

::: demo
``` html
<template>
  <al-table :buttons="buttons" :column="column" :data="tableData"  :header-cell-style="{ backgroundColor: '#333' }" >
    <template v-slot:rowButton="scope">
      <el-select style="width: 90px" v-model="scope.row.value" placeholder="请选择">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value">          
        </el-option>
      </el-select>
      <el-button :disabled="!scope.row.value" @click="submit(scope)">执行</el-button>
    </template>
  </al-table>
</template>

<script>
export default {
  data() {
    return {
      buttons: [
        {},{}
      ],
      options: [
        {
          value: 'delete',
          label: '删除'
        }, {
          value: 'update',
          label: '修改'
        }, {
          value: 'unabled',
          label: '启用'
        }, {
          value: 'disabled',
          label: '禁用'
        }
      ],
      column: [
        {
          label: '姓名',
          prop: 'name'
        },
        {
          label: '年龄',
          prop: 'age'
        }
      ],
      tableData: [
        {
          name: "王二",
          age: 18,
          id: 1
        },
        {
          name: "张三",
          age: 25,
          id: 2
        }
      ]
    }
  },
  methods: {
    submit(scope) {
      switch(scope.row.value) {
        case "delete":
          this.deleteMethod(scope.row)
          break; 
        case "update":
          this.updateMethod(scope.row)
          break;
        case "unabled":
          this.unabledMethod(scope.row)
          break;
        case "disabled":
          this.disabledMethod(scope.row)
          break;
      }
    },
    deleteMethod(row) {
      console.log(row);
      this.$notify({
        title: '事件操作反馈',
        message: '删除事件的操作，参数为当前行的对象。详情请打开控制台查看'
      })
    },
    updateMethod(row) {
      console.log(row);
      this.$notify({
        title: '事件操作反馈',
        message: '修改事件的操作，参数为当前行的对象。详情请打开控制台查看'
      })
    },
    unabledMethod(row) {
      console.log(row);
      this.$notify({
        title: '事件操作反馈',
        message: '启用事件的操作，参数为当前行的对象。详情请打开控制台查看'
      })
    },
    disabledMethod(row) {
      console.log(row);
      this.$notify({
        title: '事件操作反馈',
        message: '禁用事件的操作，参数为当前行的对象。详情请打开控制台查看'
      })
    }
  }
}
</script>

<style>
table {
  padding: 0;
  margin: 0;
}
</style>
```
:::


<br/>

### 4. 说明

**al-form Attributes**

|参数|说明|类型|可选值|默认值|
|-|-|-|-|-|
|data|显示的数据|Array|—|—|
|column|需要显示的数据行|Array|—|[]|
|operation|表格的操作栏设置|Object|—|{}|
|buttons|表格的操作栏按钮组|Array|—|[]|
|otherParams|配合column中的link添加全局的参数|Object|—|{}|

<br/>

**al-form Methods**

|事件名称|说明|参数|
|-|-|-|
|cell-click|当某个单元格被点击时会触发该事件|—|
|selection-change|当用户勾选表格复选框项发生变化时会触发该事件|—|

<br/>

**Slot**

|插槽处|说明|name|
|-|-|-|
|属性column内|自定义显示表格项目内容|column数组中对象的自定义name|
|属性buttons内|buttons操作栏中某一个对象的插槽|对象中自定义name|
|操作栏|整个操作栏的插槽|rowButton|


<!-- <ClientOnly>
  <al-table-operation/>
</ClientOnly> -->