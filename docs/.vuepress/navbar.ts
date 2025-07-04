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
      {
        text: 'mysql',
        icon: 'devicon:mysql',
        items: [
          { text: '实践技巧', link: '/notes/demo/README.md' },
          { text: 'Mysql45讲', link: '/notes/demo/markdown.md' },
        ]
      },
      {
        text: 'Redis',
        icon: 'devicon:redis',
        items: [
          { text: '数据结构', link: '/notes/demo/README.md' },
        ]
      },
      { text: 'ELK', icon: 'streamline-plump-color:file-report-flat', link: '/notes/demo/README.md'},
      { text: 'etcd', icon: 'logos:etcd', link: '/notes/demo/README.md'},
      { text: 'clickhouse', icon: 'devicon:clickhouse', link: '/notes/demo/README.md'},
      { text: 'Mongodb', icon: 'logos:mongodb-icon', link: '/notes/demo/README.md'},
    ]
  },
  {
    text: '更多',
    icon: 'icon-park:more-app',
    items: [
        { text: 'Linux', icon: 'devicon:linux', link: '/notes/demo/README.md'},
        { text: '消息队列', icon: 'devicon:rabbitmq', link: '/notes/demo/README.md'},
        { text: '数据结构与算法', icon: 'icon-park:brain', link: '/notes/demo/README.md'},
        { text: '网络协议', icon: 'streamline-plump-color:cloud-data-transfer-flat', link: '/notes/demo/README.md'},
        { text: '面试宝典', icon: 'openmoji:interview', link: '/notes/demo/README.md'},
        { text: 'VPN', icon: 'streamline-plump-color:ladder', link: '/notes/demo/README.md'},
        { text: '驾照考试', icon: 'streamline-ultimate-color:adventure-car-truck-1', link: '/notes/demo/README.md'},
    ]
  },
  {
    text: '杂录',
    icon: 'icon-park:other',
    items: [
      { text: '工具', icon: 'twemoji:hammer-and-wrench', link: '/other/tools/'},
      { text: '探索', icon: 'streamline-stickies-color:lab-tools', link: '/other/streamline/'},
      { text: '游戏', icon: 'icon-park:game', link: '/other/game/'},
    ]
  },
])
