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