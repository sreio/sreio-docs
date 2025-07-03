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
      {
        text: 'Golang基础入门', 
        link: '/golang_study/',
        icon: 'logos:go',
      },
      {
        text: 'php',
        items: [
          { text: '示例', link: '/notes/php/readme.md' },
          { text: '示例-markdown', link: '/notes/demo/markdown.md' },
        ]
      },
      {
        text: 'golang',
        items: [
          { text: '示例', link: '/notes/demo/README.md' },
          { text: '示例-markdown', link: '/notes/demo/markdown.md' },
        ]
      },
    ]
  },
  {
    text: '缓存&数据库',
    icon: 'streamline-plump-color:database',
    items: [
      {
        text: 'mysql',
        items: [
          { text: '示例', link: '/notes/demo/README.md' },
          { text: '示例-markdown', link: '/notes/demo/markdown.md' },
        ]
      },
      {
        text: 'redis',
        items: [
          { text: '示例', link: '/notes/demo/README.md' },
          { text: '示例-markdown', link: '/notes/demo/markdown.md' },
        ]
      },
      {
        text: 'ELK',
        items: [
          { text: '示例', link: '/notes/demo/README.md' },
          { text: '示例-markdown', link: '/notes/demo/markdown.md' },
        ]
      },
    ]
  },

  {
    text: '更多',
    icon: 'icon-park:more-app',
    items: [
        {
          text: '网络',
          icon: 'streamline-ultimate-color:network',
          items: [
            {
              text: 'mysql',
              link: '/notes/demo/README.md'
            },
          ]
        },
        {
          text: '数据结构与算法',
          icon: 'arcticons:algorithms',
          items: [
            {
              text: 'mysql',
              link: '/notes/demo/README.md'
            },
          ]
        },
        {
          text: 'Linux',
          icon: 'devicon:linux',
          items: [
            {
              text: 'mysql',
              link: '/notes/demo/README.md'
            },
          ]
        },
        {
          text: '面试宝典',
          items: [
            {
              text: 'mysql',
              link: '/notes/demo/README.md'
            },
          ]
        }
    ]
  },
  {
    text: '其他',
    icon: 'streamline-stickies-color:lab-tools',
    items: [
      {
        text: '工具',
        items: [
          { text: '示例', link: '/notes/demo/README.md' },
          { text: '示例-markdown', link: '/notes/demo/markdown.md' },
        ]
      },
      {
        text: '探索',
        items: [
          { text: '示例', link: '/notes/demo/README.md' },
          { text: '示例-markdown', link: '/notes/demo/markdown.md' },
        ]
      },
      {
        text: '游戏',
        items: [
          { text: '示例', link: '/notes/demo/README.md' },
          { text: '示例-markdown', link: '/notes/demo/markdown.md' },
        ]
      },
      {
        text: 'VPN',
        items: [
          { text: '示例', link: '/notes/demo/README.md' },
          { text: '示例-markdown', link: '/notes/demo/markdown.md' },
        ]
      },
      {
        text: '驾照考试',
        items: [
          { text: '示例', link: '/notes/demo/README.md' },
          { text: '示例-markdown', link: '/notes/demo/markdown.md' },
        ]
      },
    ]
  },
])
