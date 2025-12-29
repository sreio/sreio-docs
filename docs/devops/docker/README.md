---
title: Docker
createTime: 2025/12/20 17:32:59
permalink: /docker/
---

# Docker

::: info 简介
本栏目收录 Docker 容器化技术相关的学习资料，从入门到实践的完整学习路径。
:::

## 📖 Docker 技术介绍

Docker 是一个开源的容器化平台，由 Solomon Hykes 于 2013 年创建。Docker 彻底改变了软件开发和部署方式，通过容器技术实现应用的快速交付和环境一致性,成为云原生时代的核心技术之一。

### 🎯 核心概念

- **镜像（Image）**：只读的应用模板，包含运行应用所需的所有内容
- **容器（Container）**：镜像的运行实例，轻量级的隔离环境
- **仓库（Repository）**：存储和分发镜像的中心化服务
- **Dockerfile**：定义镜像构建步骤的文本文件
- **Docker Compose**：定义和运行多容器应用的工具

### ⭐ 技术优势

1. **环境一致性**：开发、测试、生产环境完全一致，"在我机器上能运行"成为历史
2. **轻量高效**：相比虚拟机，容器启动快（秒级）、资源占用少
3. **快速部署**：打包一次，到处运行，简化部署流程
4. **版本控制**：镜像支持版本管理，方便回滚和追溯
5. **资源隔离**：进程、网络、文件系统隔离，提高安全性
6. **弹性扩展**：轻松实现水平扩展和负载均衡

### 🔧 Docker vs 虚拟机

| 特性 | Docker 容器 | 虚拟机 |
|------|------------|--------|
| 启动时间 | 秒级 | 分钟级 |
| 硬盘使用 | MB 级 | GB 级 |
| 性能 | 接近原生 | 较弱 |
| 系统支持量 | 单机支持上千个容器 | 一般几十个 |
| 隔离性 | 进程级隔离 | 系统级隔离 |

### 💼 适用场景

- **微服务架构**：容器化每个微服务，独立部署和扩展
- **持续集成/持续部署**：CI/CD 流水线中的构建和测试环境
- **开发环境统一**：团队成员使用相同的开发环境
- **应用隔离**：不同应用及其依赖隔离运行
- **云原生应用**：与 Kubernetes 等编排工具配合使用

### 📚 官方文档与资源

- [Docker 官方网站](https://www.docker.com/) - Docker 官方主页
- [Docker 官方文档](https://docs.docker.com/) - 完整的官方文档
- [Docker Hub](https://hub.docker.com/) - 官方镜像仓库
- [Docker Compose 文档](https://docs.docker.com/compose/) - 多容器编排工具
- [Dockerfile 参考](https://docs.docker.com/engine/reference/builder/) - Dockerfile 指令详解
- [Play with Docker](https://labs.play-with-docker.com/) - 在线 Docker 练习环境
- [Awesome Docker](https://awesome-docker.netlify.app/) - Docker 资源精选列表

<Yiyan />
