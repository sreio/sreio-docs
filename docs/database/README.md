---
title: 数据库
createTime: 2025/12/20 17:30:00
permalink: /database/
---

# 数据库

::: info 简介
本栏目收录各类数据库和缓存系统的使用指南，包括关系型数据库、NoSQL、缓存等。
:::

## 📖 技术概述

数据库是现代应用程序的核心组件，负责数据的持久化存储、查询和管理。根据数据模型和使用场景的不同，数据库可分为关系型数据库（RDBMS）、NoSQL 数据库、内存数据库等多种类型。

### 主要数据库类型

- **关系型数据库**：如 MySQL、PostgreSQL，适用于结构化数据和事务处理
- **键值存储**：如 Redis，提供高性能缓存和数据存储
- **文档数据库**：如 MongoDB，适合半结构化数据存储
- **列式数据库**：如 ClickHouse，专为 OLAP 分析场景优化
- **分布式协调**：如 Etcd，提供分布式配置和服务发现

### 官方文档资源

- [MySQL 官方文档](https://dev.mysql.com/doc/) - 世界上最流行的开源关系型数据库
- [Redis 官方文档](https://redis.io/docs/) - 高性能内存数据库
- [MongoDB 官方文档](https://www.mongodb.com/docs/) - 领先的文档型 NoSQL 数据库
- [ClickHouse 官方文档](https://clickhouse.com/docs/) - 高性能列式分析数据库
- [Etcd 官方文档](https://etcd.io/docs/) - 分布式可靠键值存储
- [PostgreSQL 官方文档](https://www.postgresql.org/docs/) - 功能强大的开源关系型数据库

## 💾 数据库列表

<CardGrid>
  <LinkCard title="MySQL" icon="devicon:mysql" href="/mysql/" description="关系型数据库，MySQL 45讲和实践技巧" />
  <LinkCard title="Redis" icon="devicon:redis" href="/redis/" description="内存缓存数据库，高性能键值存储" />
  <LinkCard title="MongoDB" icon="logos:mongodb-icon" href="/mongodb/" description="文档型 NoSQL 数据库" />
  <LinkCard title="ClickHouse" icon="devicon:clickhouse" href="/clickhouse/" description="列式存储分析数据库" />
  <LinkCard title="Etcd" icon="logos:etcd" href="/etcd/" description="分布式键值存储系统" />
</CardGrid>

<Yiyan />
