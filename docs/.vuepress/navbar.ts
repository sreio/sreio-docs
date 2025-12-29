/**
 * @see https://theme-plume.vuejs.press/config/navigation/ 查看文档了解配置详情
 *
 * Navbar 配置文件，它在 `.vuepress/plume.config.ts` 中被导入。
 * 
 * 注意：link 路径使用原有 URL 以保持向后兼容
 */

import { defineNavbarConfig } from 'vuepress-theme-plume'

export default defineNavbarConfig([
  { text: '首页', link: '/' },

  // ==================== 编程语言 ====================
  {
    text: '编程语言',
    icon: 'emojione:blue-book',
    items: [
      { text: 'Golang', icon: 'logos:go', link: '/golang/' },
      { text: 'PHP', icon: 'vscode-icons:file-type-php2', link: '/php/' },
    ]
  },

  // ==================== 数据库 ====================
  {
    text: '数据库',
    icon: 'streamline-plump-color:database',
    items: [
      { text: 'MySQL', icon: 'devicon:mysql', link: '/mysql/' },
      { text: 'Redis', icon: 'devicon:redis', link: '/redis/' },
      { text: 'MongoDB', icon: 'logos:mongodb-icon', link: '/mongodb/' },
      { text: 'ClickHouse', icon: 'devicon:clickhouse', link: '/clickhouse/' },
      { text: 'Etcd', icon: 'logos:etcd', link: '/etcd/' },
    ]
  },

  // ==================== DevOps ====================
  {
    text: 'DevOps',
    icon: 'devicon:kubernetes',
    items: [
      { text: 'Docker', icon: 'logos:docker-icon', link: '/docker/' },
      { text: 'Kubernetes', icon: 'logos:kubernetes', link: '/k8s/' },
      { text: 'Linux', icon: 'devicon:linux', link: '/linux/' },
      { text: 'Nginx', icon: 'devicon:nginx', link: '/nginx/' },
      { text: 'ELK', icon: 'simple-icons:elastic', link: '/ELK/' },
      { text: 'Git', icon: 'devicon:git', link: '/git/' },
      { text: 'GitLab', icon: 'logos:gitlab', link: '/gitlab/' },
    ]
  },

  // ==================== 中间件 ====================
  {
    text: '中间件',
    icon: 'devicon:rabbitmq',
    items: [
      { text: '消息队列', icon: 'devicon:rabbitmq', link: '/queue/' },
    ]
  },

  // ==================== 基础知识 ====================
  {
    text: '基础知识',
    icon: 'icon-park:brain',
    items: [
      { text: '数据结构与算法', icon: 'icon-park:brain', link: '/brain/' },
      { text: '网络协议', icon: 'streamline-plump-color:cloud-data-transfer-flat', link: '/network/' },
    ]
  },

  // ==================== 更多 ====================
  {
    text: '更多',
    icon: 'icon-park:more-app',
    items: [
      { text: 'AI', icon: 'streamline-flex-color:ai-chip-robot', link: '/ai/' },
      { text: '面试宝典', icon: 'openmoji:interview', link: '/interview/' },
      { text: 'IT 名词', icon: 'logos:internetexplorer', link: '/it/' },
      { text: '程序员发音', icon: 'tdesign:user-talk-1', link: '/cpwp/' },
      { text: 'VPN', icon: 'streamline-plump-color:ladder', link: '/vpn/' },
      { text: '驾照考试', icon: 'streamline-ultimate-color:adventure-car-truck-1', link: '/驾照考试/' },
      { text: '网站导航', icon: 'icon-park:other', link: '/sites/' },
    ]
  },
])
