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