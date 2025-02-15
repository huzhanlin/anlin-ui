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