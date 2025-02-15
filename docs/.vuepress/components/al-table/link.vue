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