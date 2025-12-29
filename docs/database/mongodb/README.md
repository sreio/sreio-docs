---
title: MongoDB
createTime: 2025/07/07 18:31:20
permalink: /mongodb/
---

# MongoDB

::: info 简介
本栏目收录 MongoDB 文档数据库的使用指南、最佳实践和实战案例。
:::

## 📖 MongoDB 简介

MongoDB 是通用、基于文档的分布式数据库，是一个介于关系数据库和非关系数据库(nosql)之间的产品，是非关系数据库当中功能最丰富，最像关系数据库的。

### 一个MongoDB文档例子
```json
{
  "_id": "5cf0029caff5056591b0ce7d",
  "firstname": "Jane",
  "lastname": "Wu",
  "address": {
    "street": "1 Circle Rd",
    "city": "Los Angeles",
    "state": "CA",
    "zip": "90404"
  },
  "hobbies": ["surfing", "coding"]
}
```
 - 没啥特别的，就是一个JSON数据，MongoDB中存储的文档数据就是类似这样的一条JSON数据，正因为存储的是JSON数据，所以MongoDB存储的数据格式非常灵活，不像MYSQL必须是固定的表结构，意思就是随时加字段、删除字段速度也是很快的。

### MongoDB特点
 - 高性能
    - MongoDB提供高性能的数据持久化。特别是，
        - 使用嵌入式数据模型可以减少数据库系统的I / O操作。
        - 支持索引，所以查询效率非常高，而且索引字段可以是嵌入式文档的字段或者数组的键。

 - 丰富的查询语言
    - MongoDB支持丰富的查询表达式，以满足各类业务查询场景。

 - 支持地理信息查询
    - 对于O2O类业务、涉及地理位置相关业务，经常需要查询附近的店铺、附近的人、判断你是否在一个商圈内，都需要地理信息检索支持。

 - 高可用
    - MongoDB的副本集提供：
        - 自动故障转移
        - 数据冗余。

    副本集是一组维护相同数据集合的 mongod实例，提供了数据冗余和高可用支持。

 - 水平拓展
    - MongoDB支持数据水平拓展，通过分片技术，将数据分布在一个集群的机器上。

### 💼 适用场景

- **内容管理系统**：文档结构灵活，适合存储各种类型的内容
- **用户数据存储**：用户画像、个性化推荐
- **物联网数据**：时序数据、设备状态数据
- **实时分析**：日志分析、用户行为分析
- **移动应用后端**：快速迭代，schema 灵活变化
- **游戏数据存储**：玩家数据、游戏状态

### 📚 官方文档与资源

- [MongoDB 官方网站](https://www.mongodb.com/) - MongoDB 官方主页
- [MongoDB 官方文档](https://www.mongodb.com/docs/) - 完整的官方文档
- [MongoDB University](https://university.mongodb.com/) - 免费在线课程
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) - 云数据库服务
- [MongoDB Compass](https://www.mongodb.com/products/compass) - 可视化管理工具
- [MongoDB 中文社区](https://mongoing.com/) - 中文技术社区

<Yiyan />