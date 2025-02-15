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