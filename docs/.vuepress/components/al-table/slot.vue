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