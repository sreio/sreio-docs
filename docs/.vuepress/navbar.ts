/**
 * @see https://theme-plume.vuejs.press/config/navigation/ 查看文档了解配置详情
 *
 * Navbar 配置文件，它在 `.vuepress/plume.config.ts` 中被导入。
 */

import { defineNavbarConfig } from 'vuepress-theme-plume'

export default defineNavbarConfig([
  { text: '首页', link: '/' },
  // { text: '博客', link: '/blog/' },
  // { text: '标签', link: '/blog/tags/' },
  // { text: '归档', link: '/blog/archives/' },
  {
    text: '编程语言',
    icon: 'emojione:blue-book',
    items: [
      { text: 'Golang', icon: 'logos:go', link: '/golang/'},
      { text: 'PHP', icon: 'vscode-icons:file-type-php2', link: '/php/'},
    ]
  },
  {
    text: '缓存&数据库',
    icon: 'streamline-plump-color:database',
    items: [
      { text: 'mysql', icon: 'devicon:mysql', link: '/mysql/'},
      { text: 'Redis', icon: 'devicon:redis', link: '/redis/'},
      { text: 'ELK', icon: 'streamline-plump-color:file-report-flat', link: '/ELK/'},
      { text: 'etcd', icon: 'logos:etcd', link: '/etcd/'},
      { text: 'clickhouse', icon: 'devicon:clickhouse', link: '/clickhouse/'},
      { text: 'Mongodb', icon: 'logos:mongodb-icon', link: '/mongodb/'},
    ]
  },
  {
    text: '更多',
    icon: 'icon-park:more-app',
    items: [
        { text: 'Ai', icon: 'streamline-flex-color:ai-chip-robot', link: '/ai/'},
        { text: 'Linux', icon: 'devicon:linux', link: '/linux/'},
        { text: '消息队列', icon: 'devicon:rabbitmq', link: '/queue/'},
        { text: '数据结构与算法', icon: 'icon-park:brain', link: '/brain/'},
        { text: '网络协议', icon: 'streamline-plump-color:cloud-data-transfer-flat', link: '/network/'},
        { text: '面试宝典', icon: 'openmoji:interview', link: '/interview/'},
        { text: 'IT名词介绍', icon: 'logos:internetexplorer', link: '/it/'},
        { text: 'VPN', icon: 'streamline-plump-color:ladder', link: '/vpn/'},
        { text: '驾照考试', icon: 'streamline-ultimate-color:adventure-car-truck-1', link: '/驾照考试/'},
        { text: '中国程序员容易发音错误的单词', icon: 'tdesign:user-talk-1', link: '/cpwp/'},
    ]
  },
  {  text: '网站导航', icon: 'icon-park:other', link: '/sites/'},
])
