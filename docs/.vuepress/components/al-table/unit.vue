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