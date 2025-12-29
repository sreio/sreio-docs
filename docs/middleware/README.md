---
title: 中间件
createTime: 2025/12/20 17:30:00
permalink: /middleware/
---

# 中间件

::: info 简介
本栏目收录各类中间件服务的使用指南，包括消息队列、RPC 框架等。
:::

## 📖 技术概述

中间件是位于操作系统和应用程序之间的软件层，为分布式系统提供通信、数据管理、安全等基础服务。合理使用中间件可以提升系统的可靠性、可扩展性和可维护性。

### 主要中间件类型

- **消息队列**：实现异步通信和系统解耦
  - **RabbitMQ**：基于 AMQP 协议的消息队列，功能丰富，支持多种消息模式
  - **Kafka**：高吞吐量的分布式流处理平台，适合大数据场景

- **RPC 框架**：远程过程调用，实现服务间通信
  - **gRPC**：Google 开源的高性能 RPC 框架，基于 HTTP/2 和 Protocol Buffers
  - **Thrift**：Facebook 开源的跨语言 RPC 框架

### 官方文档资源

- [RabbitMQ 官方文档](https://www.rabbitmq.com/docs) - 消息队列中间件
- [Apache Kafka 官方文档](https://kafka.apache.org/documentation/) - 分布式流处理平台
- [gRPC 官方文档](https://grpc.io/docs/) - 高性能 RPC 框架
- [Apache Thrift 官方文档](https://thrift.apache.org/docs/) - 跨语言服务开发框架

## 📬 中间件列表

<CardGrid>
  <LinkCard title="消息队列" icon="devicon:rabbitmq" href="/queue/" description="RabbitMQ 和 Kafka 消息队列教程" />
</CardGrid>

<Yiyan />
