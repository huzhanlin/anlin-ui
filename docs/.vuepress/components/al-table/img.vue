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