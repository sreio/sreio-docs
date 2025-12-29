---
title: Nginx
createTime: 2025/12/20 17:30:00
permalink: /nginx/
---

# Nginx

::: info 简介
本栏目收录 Nginx Web 服务器的配置、优化和实战案例。
:::

## 📖 Nginx 技术介绍

Nginx（发音为 "engine-x"）是由 Igor Sysoev 于 2004 年开发的高性能 Web 服务器和反向代理服务器。以其稳定性、丰富的功能集、简单的配置和低资源消耗而闻名，成为全球使用最广泛的 Web 服务器之一。

### 🎯 核心功能

- **Web 服务器**：高性能的静态内容服务
- **反向代理**：代理后端应用服务器
- **负载均衡**：多种负载均衡算法（轮询、权重、IP Hash 等）
- **HTTP 缓存**：提升响应速度，减轻后端压力
- **SSL/TLS 终止**：HTTPS 加密连接处理
- **HTTP/2 支持**：支持 HTTP/2 协议
- **邮件代理**：SMTP、POP3、IMAP 代理

### ⭐ 技术优势

1. **高并发处理**：采用事件驱动架构，单机可处理数万并发连接
2. **低内存占用**：相比 Apache，内存占用更少
3. **高可靠性**：经过多年生产环境验证，稳定性极高
4. **热部署**：支持不停机更新配置和升级
5. **模块化设计**：丰富的第三方模块生态
6. **配置简洁**：配置文件清晰易懂

### 🔧 Nginx vs Apache

| 特性 | Nginx | Apache |
|------|-------|--------|
| 并发处理 | 异步非阻塞 | 同步阻塞 |
| 静态文件性能 | 优秀 | 良好 |
| 内存占用 | 低 | 较高 |
| 模块系统 | 编译时加载 | 动态加载 |
| 配置方式 | 集中式配置 | 分布式配置(.htaccess) |
| 动态内容 | 需要代理 | 原生支持 |

### 💼 适用场景

- **静态资源服务**：图片、CSS、JS 等静态文件服务
- **反向代理服务器**：为后端应用提供统一入口
- **负载均衡器**：分发流量到多个后端服务器
- **API 网关**：统一管理和转发 API 请求
- **CDN 节点**：内容分发网络的边缘节点
- **微服务架构**：作为服务网格的入口

### 📚 官方文档与资源

- [Nginx 官方网站](https://nginx.org/) - Nginx 开源版官方主页
- [Nginx 官方文档](https://nginx.org/en/docs/) - 完整的官方文档
- [Nginx Plus](https://www.nginx.com/) - Nginx 商业版
- [OpenResty](https://openresty.org/) - 基于 Nginx 的 Web 平台
- [Nginx 配置生成器](https://www.digitalocean.com/community/tools/nginx) - 在线配置生成工具
- [Nginx 中文文档](https://www.nginx.cn/doc/) - 中文翻译文档

<Yiyan />
