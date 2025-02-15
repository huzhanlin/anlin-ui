<template>
  <al-container class="wrapper">
    <template slot="header">
      <al-form ref="alform" :form-item="item" :model="model" inline>
        <template>
          <el-button-group>
            <el-button
              type="primary"
              icon="el-icon-search"
              size="small"
              @click="submit"
              >查询</el-button
            >
            <el-button icon="el-icon-refresh" size="small" @click="reset"
              >重置</el-button
            >
          </el-button-group>
          <el-button class="lt" @click="addMethods">新增</el-button>
        </template>
      </al-form>
    </template>
    <template slot="content">
      <al-table
        v-loading="loading"
        :buttons="buttons"
        :header-cell-style="{ backgroundColor: '#f9f9f9' }"
        :column="column"
        :data="tableData"
        border
        @delete="deleteMethods"
        @update="updateMethods"
      ></al-table>
    </template>
    <template slot="footer">
      <al-pagination
        :page-data="pageData"
        @size-change="sizeChange"
        @current-change="currentChange"
      ></al-pagination>
    </template>
  </al-container>
</template>

<script>
export default {
  data() {
    return {
      model: {
        smsTemplatename: '',
        smsTemplatetype: ''
      },
      item: [
        {
          placeholder: '模板名称',
          model: 'smsTemplatename',
          item: 'input'
        },
        {
          placeholder: '模板类型',
          model: 'smsTemplatetype',
          item: 'select',
          child: []
        }
      ],

      loading: false,
      column: [
        {
          type: 'index',
          label: '#',
          align: 'center'
        },
        {
          label: '名称',
          prop: 'smsTemplatename',
          width: '100px',
          showOverflowTooltip: true
        },
        {
          label: '状态',
          prop: 'templateStatus',
          align: 'center',
          text: {
            0: '审核中',
            1: '已通过',
            2: '审核失败'
          }
        },
        {
          label: '类型',
          prop: 'smsTemplatetype',
          align: 'center',
          text: []
        },
        {
          label: '创建时间',
          prop: 'smsCreatdate',
          align: 'center'
        }
      ],
      tableData: [],
      buttons: [
        {
          name: '修改',
          method: 'update',
          type: 'primary',
          plain: true,
          disabled: {
            templateStatus: '2'
          }
        },
        {
          name: '删除',
          method: 'delete',
          type: 'danger',
          plain: true,
          disabled: {
            templateStatus: '1'
          }
        }
      ],

      pageData: {
        page: 1,
        size: 10,
        total: 0
      }
    }
  },
  created() {
    this.column[3].text = ['短信通知', '验证码','推广短信']
    this.item[1].child = [
      {
        value: 0,
        label: '短信通知'
      },
      {
        value: 1,
        label: '验证码'
      },
      {
        value: 2,
        label: '推广短信'
      }
    ]
  },
  mounted() {
    this.initMethods()
  },
  methods: {
    deleteMethods(scope) {
      this.$confirm('此操作将永久删除该模板, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
        .then(() => {            
          this.$notify({
            title: '事件操作反馈',
            message: '执行删除点击数据的操作'
          })  
        })          
        .catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          })
        })
    },
    updateMethods(scope) {
      this.$notify({
        title: '事件操作反馈',
        message: '打开修改短信模板的弹窗'
      })
    },
    initMethods() {
      this.loading = true
      // 以查询数据和分页数据调用接口
      const params = Object.assign({}, this.model, this.pageData)
      setTimeout(() => {
        const res = {
          total: 20,
          data: [
            {
              smsTemplatename: '测试短信模板',
              templateStatus: 2,
              smsTemplatetype: 2,
              smsCreatdate: '2021/02/02'
            },
            {
              smsTemplatename: '短信验证',
              templateStatus: 1,
              smsTemplatetype: 1,
              smsCreatdate: '2021/02/02'
            },
            {
              smsTemplatename: '短信通知',
              templateStatus: 0,
              smsTemplatetype: 0,
              smsCreatdate: '2021/02/02'
            }
          ]
        } 
        this.tableData = res.data
        this.pageData.total = res.total
        this.loading = false
      }, 1000)
    },
    submit() {
      this.$notify({
        title: '事件操作反馈',
        message: '根据搜索条件查询数据'
      })
      this.pageData.page = 1
      this.pageData.size = 10
      this.initMethods()
    },
    reset() {
      this.$notify({
        title: '事件操作反馈',
        message: '重置搜索条件并重新查询数据'
      })
      this.$refs.alform.reset('alForm')
      this.initMethods()
    },

    addMethods() {
      this.$notify({
        title: '事件操作反馈',
        message: '打开新增短信模板的弹窗'
      })
    },

    sizeChange(data) {
      this.pageData.size = data
      this.$notify({
        title: '事件操作反馈',
        message: `当前请求数据条目数为${data}`
      })
      this.initMethods()
    },
    currentChange(data) {
      this.pageData.page = data
      this.$notify({
        title: '事件操作反馈',
        message: `当前请求数据页码为${data}`
      })
      this.initMethods()
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

<style scoped>
.wrapper {
  border: 1px solid #eee;
}
</style>