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