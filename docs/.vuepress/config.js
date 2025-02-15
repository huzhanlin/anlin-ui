module.exports = {
  title: 'anlin-ui',
  description: '基于element-ui二次封装的组件库',
  markdown: {
    lineNumbers: true
  },
  themeConfig: {
    lastUpdated: '最后更新时间',
    activeHeaderLinks: true,
    nav: [
      { text: '主页', link: '/' },
      { text: '指南', link: '/guide/' },
      { text: '组件', link: '/components/' },
      { text: '函数', link: '/function/' },
      { text: '正则', link: '/regexp/' },
    ],
    sidebar: {
      '/components/':[
        ['', '说明'],
        ['al-form','表单(al-form)'],
        ['al-table','表格(al-table)'],       
        ['al-pagination','分页(al-pagination)'],
        ['al-menu','无限层级菜单(al-menu)'],
        ['al-container','布局(al-container)'],
        ['al-icon','图标(al-icon)'],
      ],
      '/function/':[
        ['','说明'],
        ['db','本地存储(命名空间)'],
        ['theme','element主色(primary)']
      ],
      '/guide/':[
        ['','指南']
      ]
    }
  },
  plugins: ['demo-container', '@vuepress/back-to-top'],
  // themeConfig: {
  //   logo: 'logo.jpg',
  // },
  // configureWebpack: {
  //   resolve: {
  //     alias: {
  //       '@alias': ''
  //     }
  //   }
  // }
}