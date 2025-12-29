---
title: Kubernetes
createTime: 2025/12/20 17:33:02
permalink: /k8s/
---

# Kubernetes (K8s)

::: info 简介
本栏目收录 Kubernetes 容器编排相关的学习资料，帮助你掌握云原生时代的核心技术。
:::

## 📖 Kubernetes 技术介绍

Kubernetes（简称 K8s）是 Google 于 2014 年开源的容器编排平台，源自 Google 内部使用 15 年的 Borg 系统。K8s 已成为云原生应用的事实标准，被广泛应用于生产环境中管理容器化应用。

### 🎯 核心概念

- **Pod**：K8s 中最小的部署单元，包含一个或多个容器
- **Service**：为 Pod 提供稳定的网络访问入口
- **Deployment**：管理 Pod 的副本和更新策略
- **Namespace**：资源隔离和多租户管理
- **ConfigMap/Secret**：配置和敏感信息管理
- **Ingress**：HTTP/HTTPS 路由规则
- **StatefulSet**：有状态应用管理
- **DaemonSet**：在每个节点上运行守护进程

### ⭐ 技术优势

1. **自动化运维**：自动部署、扩缩容、故障恢复
2. **服务发现与负载均衡**：内置服务发现和负载均衡机制
3. **存储编排**：自动挂载存储系统（本地存储、云存储等）
4. **自我修复**：自动重启失败容器、替换和重新调度容器
5. **配置管理**：统一管理应用配置和密钥
6. **水平扩展**：通过简单命令即可扩展应用
7. **批处理执行**：支持批处理和 CI/CD 工作负载
8. **多云支持**：可运行在任何云平台或本地环境

### 🏗️ K8s 架构

**控制平面（Master）组件：**
- **API Server**：集群的入口，所有操作都通过 API Server
- **etcd**：分布式键值存储，保存集群状态
- **Scheduler**：负责 Pod 调度到合适的节点
- **Controller Manager**：维护集群的期望状态

**工作节点（Node）组件：**
- **Kubelet**：节点代理，管理容器生命周期
- **Kube-proxy**：维护网络规则和负载均衡
- **Container Runtime**：容器运行时（如 Docker、containerd）

### 💼 适用场景

- **微服务架构**：管理大规模微服务集群
- **云原生应用**：构建可扩展的云原生应用
- **混合云/多云**：统一管理不同云平台的资源
- **DevOps 平台**：作为 CI/CD 流水线的运行环境
- **大数据处理**：运行 Spark、Hadoop 等大数据应用
- **机器学习**：MLOps 平台的基础设施

### 📚 官方文档与资源

- [Kubernetes 官方网站](https://kubernetes.io/) - K8s 官方主页
- [Kubernetes 官方文档](https://kubernetes.io/docs/) - 完整的官方文档
- [Kubernetes 中文文档](https://kubernetes.io/zh-cn/docs/) - 官方中文文档
- [kubectl 命令参考](https://kubernetes.io/docs/reference/kubectl/) - kubectl 命令行工具文档
- [Helm 官方网站](https://helm.sh/) - K8s 包管理器
- [Minikube](https://minikube.sigs.k8s.io/) - 本地 K8s 学习环境
- [Kubernetes Blog](https://kubernetes.io/blog/) - K8s 官方博客
- [CNCF](https://www.cncf.io/) - 云原生计算基金会

<Yiyan />
