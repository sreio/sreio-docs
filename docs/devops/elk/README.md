---
title: ELK
createTime: 2025/07/07 18:13:03
permalink: /ELK/
---

# ELK Stack

::: tip 简介
`ELK` 是 `Elasticsearch`、`Logstash`、`Kibana` 的简称，这三者是核心套件实现`日志采集`、`分析`、`展示`，但并非全部。
:::

## 📖 ELK 技术介绍

ELK Stack 是目前最流行的开源日志分析解决方案，由 Elastic 公司开发和维护。ELK 能够从各种来源采集、搜索、分析和可视化大量数据，广泛应用于日志分析、系统监控、安全分析等场景。

### 🎯 核心组件

- **Elasticsearch**：`实时全文搜索和分析引擎，提供搜集、分析、存储数据三大功能`；是一套开放 REST 和 JAVA API 等结构提供高效搜索功能，可扩展的分布式系统。它构建于 Apache Lucene 搜索引擎库之上。

- **Logstash**：是一个用来`搜集、分析、过滤日志的工具`。它支持几乎任何类型的日志，包括系统日志、错误日志和自定义应用程序日志。它可以从许多来源接收日志，这些来源包括 syslog、消息传递（例如 RabbitMQ）和 JMX，它能够以多种方式输出数据，包括电子邮件、websockets 和 Elasticsearch。

- **Kibana**：是一个基于 Web 的图形界面，用于`搜索、分析和可视化存储在 Elasticsearch 指标中的日志数据`。它利用 Elasticsearch 的 REST 接口来检索数据，不仅允许用户创建他们自己的数据的定制仪表板视图，还允许他们以特殊的方式查询和过滤数据。

- **Filebeat**：是一个轻量级的日志采集工具，可以采集日志，并实时写入到 Elasticsearch 中。

### ⭐ 技术优势

1. **实时分析**：近实时的数据采集、索引和查询能力
2. **可扩展性**：支持 PB 级数据的分布式存储和分析
3. **强大的搜索**：全文检索、聚合分析、复杂查询
4. **丰富的可视化**：多种图表类型，自定义仪表板
5. **生态系统**：Beats 家族提供各种数据采集器
6. **开源免费**：基础功能完全开源，企业版提供高级特性

### 🏗️ ELK 架构

![ELK 架构](./1-1.png)

**数据流程：**
1. **数据源** → 各种应用、服务器、网络设备产生日志
2. **Filebeat/Logstash** → 采集和处理日志数据
3. **Elasticsearch** → 存储和索引数据
4. **Kibana** → 可视化展示和查询

### 💼 适用场景

- **日志分析**：集中式日志管理和分析
- **系统监控**：服务器性能监控、应用 APM
- **安全分析**：安全日志分析、威胁检测
- **业务分析**：用户行为分析、业务指标监控
- **问题排查**：快速定位系统故障和性能问题
- **合规审计**：满足日志审计和合规要求

### 📚 官方文档与资源

- [Elastic 官方网站](https://www.elastic.co/) - Elastic 公司官方主页
- [Elasticsearch 官方文档](https://www.elastic.co/guide/en/elasticsearch/reference/current/index.html) - ES 完整文档
- [Logstash 官方文档](https://www.elastic.co/guide/en/logstash/current/index.html) - Logstash 配置指南
- [Kibana 官方文档](https://www.elastic.co/guide/en/kibana/current/index.html) - Kibana 使用手册
- [Filebeat 官方文档](https://www.elastic.co/guide/en/beats/filebeat/current/index.html) - Filebeat 配置文档
- [Elastic 中文社区](https://elasticsearch.cn/) - 中文技术社区


- `Elasticsearch`是`实时全文搜索和分析引擎，提供搜集、分析、存储数据三大功能`；是一套开放REST和JAVA API等结构提供高效搜索功能，可扩展的分布式系统。它构建于Apache Lucene搜索引擎库之上。

- `Logstash`是一个用来`搜集、分析、过滤日志的工具`。它支持几乎任何类型的日志，包括系统日志、错误日志和自定义应用程序日志。它可以从许多来源接收日志，这些来源包括 syslog、消息传递（例如 RabbitMQ）和JMX，它能够以多种方式输出数据，包括电子邮件、websockets和Elasticsearch。

- ` Kibana`是一个基于Web的图形界面，用于`搜索、分析和可视化存储在 Elasticsearch指标中的日志数据`。它利用Elasticsearch的REST接口来检索数据，不仅允许用户创建他们自己的数据的定制仪表板视图，还允许他们以特殊的方式查询和过滤数据。

- `filebeat` 是一个轻量级的日志采集工具，可以采集日志，并实时写入到 Elasticsearch 中。

![img](./1-1.png)

### 安装

```shell
docker pull elasticsearch:7.1.1
docker pull kibana:7.1.1
docker pull logstash:7.1.1


docker run -d --restart=always --name es7 -p 9200:9200 -p 9300:9300 -e "discovery.type=single-node" elasticsearch:7.6.0
docker run -di --name kibana -p 5601:5601 kibana:7.6.0
```

### 操作示例

- [go操作es](/golang/third_libraries/go_elasticsearch.md)
- [php操作es](/php/demo/laravel-es.md)