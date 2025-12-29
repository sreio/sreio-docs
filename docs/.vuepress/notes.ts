/**
 * @see https://theme-plume.vuejs.press/guide/document/ 查看文档了解配置详情。
 *
 * Notes 配置文件，它在 `.vuepress/plume.config.ts` 中被导入。
 *
 * ==================== 目录分类规范 ====================
 * 
 * 📚 languages/     - 编程语言相关 (golang, php, python, java...)
 * 💾 database/      - 数据库与缓存 (mysql, redis, mongodb, clickhouse, etcd...)
 * 🛠️ devops/        - DevOps 与运维 (docker, k8s, linux, nginx, elk, git...)
 * 📬 middleware/    - 中间件服务 (queue/消息队列, rpc...)
 * 📐 fundamentals/  - 基础知识 (algorithm/算法, network/网络, design-pattern/设计模式...)
 * 🤖 ai/            - 人工智能 (llm, ml, transformer...)
 * 💼 interview/     - 面试相关 (按技术栈分类)
 * 📖 reference/     - 参考资料 (glossary/术语, pronunciation/发音, sites/导航...)
 * 🔧 tools/         - 工具指南 (vpn, ide, terminal...)
 * 🚗 life/          - 生活相关 (driving/驾照, hobbies...)
 * 
 * 注意：link 配置使用原有路径以保持 URL 向后兼容
 * ==================================================
 */

import { defineNoteConfig, defineNotesConfig } from 'vuepress-theme-plume'

// ==================== 编程语言 ====================
// 物理路径: /languages/golang/  |  URL路径: /golang/
const golangConfig = defineNoteConfig({
  dir: '/languages/golang/',
  link: '/golang/',  // 保持原有 URL
  sidebar: 'auto'
})

// 物理路径: /languages/php/  |  URL路径: /php/
const phpConfig = defineNoteConfig({
  dir: '/languages/php/',
  link: '/php/',  // 保持原有 URL
  sidebar: 'auto',
})

// ==================== 数据库 ====================
const mysqlConfig = defineNoteConfig({
  dir: '/database/mysql/',
  link: '/mysql/',  // 保持原有 URL
  sidebar: 'auto',
})

const redisConfig = defineNoteConfig({
  dir: '/database/redis/',
  link: '/redis/',  // 保持原有 URL
  sidebar: 'auto',
})

const mongodbConfig = defineNoteConfig({
  dir: '/database/mongodb/',
  link: '/mongodb/',  // 保持原有 URL
  sidebar: 'auto',
})

const clickhouseConfig = defineNoteConfig({
  dir: '/database/clickhouse/',
  link: '/clickhouse/',  // 保持原有 URL
  sidebar: 'auto',
})

const etcdConfig = defineNoteConfig({
  dir: '/database/etcd/',
  link: '/etcd/',  // 保持原有 URL
  sidebar: 'auto',
})

// ==================== DevOps ====================
const dockerConfig = defineNoteConfig({
  dir: '/devops/docker/',
  link: '/docker/',  // 新 URL (原来在 linux 下)
  sidebar: 'auto',
})

const k8sConfig = defineNoteConfig({
  dir: '/devops/k8s/',
  link: '/k8s/',  // 新 URL (原来在 linux 下)
  sidebar: 'auto',
})

const linuxConfig = defineNoteConfig({
  dir: '/devops/linux/',
  link: '/linux/',  // 保持原有 URL
  sidebar: 'auto',
})

const nginxConfig = defineNoteConfig({
  dir: '/devops/nginx/',
  link: '/nginx/',  // 新 URL (原来在 linux 下)
  sidebar: 'auto',
})

const elkConfig = defineNoteConfig({
  dir: '/devops/elk/',
  link: '/ELK/',  // 保持原有 URL (注意大写)
  sidebar: 'auto',
})

const gitConfig = defineNoteConfig({
  dir: '/devops/git/',
  link: '/git/',  // 新 URL (原来在 linux 下)
  sidebar: 'auto',
})

const gitlabConfig = defineNoteConfig({
  dir: '/devops/gitlab/',
  link: '/gitlab/',  // 新 URL (原来在 linux 下)
  sidebar: 'auto',
})

// ==================== 中间件 ====================
const queueConfig = defineNoteConfig({
  dir: '/middleware/queue/',
  link: '/queue/',  // 保持原有 URL
  sidebar: 'auto',
})

// ==================== 基础知识 ====================
const algorithmConfig = defineNoteConfig({
  dir: '/fundamentals/algorithm/',
  link: '/brain/',  // 保持原有 URL
  sidebar: 'auto',
})

const networkConfig = defineNoteConfig({
  dir: '/fundamentals/network/',
  link: '/network/',  // 保持原有 URL
  sidebar: 'auto',
})

// ==================== AI ====================
const aiConfig = defineNoteConfig({
  dir: '/ai/',
  link: '/ai/',
  sidebar: 'auto',
})

// ==================== 面试 ====================
const interviewConfig = defineNoteConfig({
  dir: '/interview/',
  link: '/interview/',
  sidebar: 'auto',
})

// ==================== 参考资料 ====================
const glossaryConfig = defineNoteConfig({
  dir: '/reference/glossary/',
  link: '/it/',  // 保持原有 URL
  sidebar: 'auto',
})

const pronunciationConfig = defineNoteConfig({
  dir: '/reference/pronunciation/',
  link: '/cpwp/',  // 保持原有 URL
  sidebar: 'auto',
})

const sitesConfig = defineNoteConfig({
  dir: '/reference/sites/',
  link: '/sites/',  // 保持原有 URL
  sidebar: 'auto',
})

// ==================== 工具 ====================
const vpnConfig = defineNoteConfig({
  dir: '/tools/vpn/',
  link: '/vpn/',  // 保持原有 URL
  sidebar: 'auto',
})

// ==================== 生活 ====================
const drivingConfig = defineNoteConfig({
  dir: '/life/driving/',
  link: '/驾照考试/',  // 保持原有 URL
  sidebar: 'auto',
})

/**
 * 导出所有的 note 配置
 * 
 * 添加新目录时，请按照以下步骤：
 * 1. 在对应分类下创建 defineNoteConfig
 * 2. 将配置添加到下方 notes 数组中
 * 3. 如需在导航栏显示，同时更新 navbar.ts
 */
export default defineNotesConfig({
  dir: '/',
  link: '/',
  notes: [
    // 编程语言
    golangConfig,
    phpConfig,

    // 数据库
    mysqlConfig,
    redisConfig,
    mongodbConfig,
    clickhouseConfig,
    etcdConfig,

    // DevOps
    dockerConfig,
    k8sConfig,
    linuxConfig,
    nginxConfig,
    elkConfig,
    gitConfig,
    gitlabConfig,

    // 中间件
    queueConfig,

    // 基础知识
    algorithmConfig,
    networkConfig,

    // AI
    aiConfig,

    // 面试
    interviewConfig,

    // 参考资料
    glossaryConfig,
    pronunciationConfig,
    sitesConfig,

    // 工具
    vpnConfig,

    // 生活
    drivingConfig,
  ],
})
