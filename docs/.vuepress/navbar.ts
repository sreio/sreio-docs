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

  // 后端开发
  {
    text: '后端开发',
    icon: 'emojione:blue-book',
    items: [
      { text: 'Golang', icon: 'logos:go', link: '/golang/' },
      { text: 'PHP', icon: 'vscode-icons:file-type-php2', link: '/php/' },
    ]
  },

  // 数据存储
  {
    text: '数据存储',
    icon: 'streamline-plump-color:database',
    items: [
      { text: 'MySQL', icon: 'devicon:mysql', link: '/mysql/' },
      { text: 'Redis', icon: 'devicon:redis', link: '/redis/' },
      { text: 'MongoDB', icon: 'logos:mongodb-icon', link: '/mongodb/' },
      { text: 'ClickHouse', icon: 'devicon:clickhouse', link: '/clickhouse/' },
      { text: 'Etcd', icon: 'logos:etcd', link: '/etcd/' },
    ]
  },

  // 中间件
  {
    text: '中间件',
    icon: 'devicon:rabbitmq',
    items: [
      { text: '消息队列', icon: 'devicon:rabbitmq', link: '/queue/' },
      { text: 'ELK', icon: 'streamline-plump-color:file-report-flat', link: '/ELK/' },
    ]
  },

  // 运维 & 系统
  {
    text: '运维 & 系统',
    icon: 'devicon:linux',
    items: [
      { text: 'Linux', icon: 'devicon:linux', link: '/linux/' },
      { text: '网络协议', icon: 'streamline-plump-color:cloud-data-transfer-flat', link: '/network/' },
      { text: 'VPN', icon: 'streamline-plump-color:ladder', link: '/vpn/' },
    ]
  },

  // 计算机基础
  {
    text: '计算机基础',
    icon: 'icon-park:brain',
    items: [
      { text: '数据结构与算法', icon: 'icon-park:brain', link: '/brain/' },
      { text: 'IT名词介绍', icon: 'logos:internetexplorer', link: '/it/' },
      { text: '面试宝典', icon: 'openmoji:interview', link: '/interview/' },
    ]
  },

  // 更多
  {
    text: '更多',
    icon: 'icon-park:more-app',
    items: [
      { text: 'AI 技术', icon: 'streamline-flex-color:ai-chip-robot', link: '/ai/' },
      { text: '网站导航', icon: 'icon-park:other', link: '/sites/' },
      { text: '驾照考试', icon: 'streamline-ultimate-color:adventure-car-truck-1', link: '/驾照考试/' },
      { text: '单词发音', icon: 'tdesign:user-talk-1', link: '/cpwp/' },
    ]
  },
])
