---
pageLayout: home
config:
  -
    type: custom
---

<Yiyan />

<CardGrid>
  <Card title="💡 关于本站" icon="openmoji:star">
    记录学习中遇到的知识点和各种有趣的小技巧。 <CustomDateTime />
  </Card>

  <RepoCard repo="sreio/sreio-docs" />
</CardGrid>

## 📚 文档分类

### 编程语言
<CardGrid>
  <LinkCard title="Golang" icon="logos:go" href="/golang/" description="Go 语言从入门到进阶，并发编程、gRPC 等" />
  <LinkCard title="PHP" icon="vscode-icons:file-type-php2" href="/php/" description="PHP 开发与 Laravel 框架深度解析" />
</CardGrid>

### 数据库
<CardGrid>
  <LinkCard title="MySQL" icon="devicon:mysql" href="/mysql/" description="关系型数据库，MySQL 45讲和实践技巧" />
  <LinkCard title="Redis" icon="devicon:redis" href="/redis/" description="高性能内存缓存数据库" />
  <LinkCard title="MongoDB" icon="logos:mongodb-icon" href="/mongodb/" description="文档型 NoSQL 数据库" />
  <LinkCard title="ClickHouse" icon="devicon:clickhouse" href="/clickhouse/" description="列式存储分析数据库" />
  <LinkCard title="Etcd" icon="logos:etcd" href="/etcd/" description="分布式键值存储系统" />
</CardGrid>

### DevOps & 运维
<CardGrid>
  <LinkCard title="Docker" icon="logos:docker-icon" href="/docker/" description="容器化技术从入门到实践" />
  <LinkCard title="Kubernetes" icon="logos:kubernetes" href="/k8s/" description="容器编排平台" />
  <LinkCard title="Linux" icon="devicon:linux" href="/linux/" description="Linux 系统管理与运维" />
  <LinkCard title="Nginx" icon="devicon:nginx" href="/nginx/" description="高性能 Web 服务器" />
  <LinkCard title="ELK" icon="simple-icons:elastic" href="/ELK/" description="日志收集分析系统" />
  <LinkCard title="Git" icon="devicon:git" href="/git/" description="分布式版本控制" />
  <LinkCard title="GitLab" icon="logos:gitlab" href="/gitlab/" description="代码托管与 CI/CD" />
</CardGrid>

### 中间件
<CardGrid>
  <LinkCard title="消息队列" icon="devicon:rabbitmq" href="/queue/" description="RabbitMQ 与 Kafka 消息队列" />
</CardGrid>

### 基础知识
<CardGrid>
  <LinkCard title="数据结构与算法" icon="icon-park:brain" href="/brain/" description="算法入门、数据结构实现和算法案例" />
  <LinkCard title="网络协议" icon="streamline-plump-color:cloud-data-transfer-flat" href="/network/" description="HTTP、TCP/IP、IPv4/IPv6 等网络协议" />
</CardGrid>

### 其他
<CardGrid>
  <LinkCard title="AI" icon="streamline-flex-color:ai-chip-robot" href="/ai/" description="人工智能、LLM、Transformer" />
  <LinkCard title="面试宝典" icon="openmoji:interview" href="/interview/" description="技术面试题集与经验分享" />
  <LinkCard title="IT 名词" icon="logos:internetexplorer" href="/it/" description="IT 术语词汇表" />
  <LinkCard title="程序员发音" icon="tdesign:user-talk-1" href="/cpwp/" description="技术名词发音指南" />
  <LinkCard title="网站导航" icon="icon-park:other" href="/sites/" description="常用技术网站导航" />
</CardGrid>

<br/>

::: code-tabs

@tab main.go
```go
package main

import (
    "fmt"
    "time"
)

func main() {
    fmt.Printf("Hello, it's %s time.", time.Now().In(time.FixedZone("CST", 8*3600)).Format(time.DateTime))
}
```

@tab main.php
```php
<?php
date_default_timezone_set('Asia/Shanghai');
echo sprintf(
    "Hello, it's %s time.",
    date('Y-m-d H:i:s')
);
```

@tab main.js
```js
const now = new Date().toLocaleString('en-US', {
  timeZone: 'Asia/Shanghai',
  hour12: false
});
console.log(`Hello, it's ${now} time.`);
```

@tab main.ts
```ts
const now: string = new Date().toLocaleString('en-US', {
  timeZone: 'Asia/Shanghai',
  hour12: false
});
console.log(`Hello, it's ${now} time.`);
```

@tab main.py
```python
#!/usr/bin/env python3
from datetime import datetime
from zoneinfo import ZoneInfo

now = datetime.now(ZoneInfo('Asia/Shanghai'))
print(f"Hello, it's {now.strftime('%Y-%m-%d %H:%M:%S')} time.")
```

@tab main.rs
```rust
use chrono::{DateTime, FixedOffset, Utc};

fn main() {
    // UTC+8 for Shanghai
    let offset = FixedOffset::east(8 * 3600);
    let now: DateTime<FixedOffset> = Utc::now().with_timezone(&offset);
    println!("Hello, it's {} time.", now.format("%Y-%m-%d %H:%M:%S"));
}
```

@tab Main.java
```java
import java.time.ZonedDateTime;
import java.time.format.DateTimeFormatter;
import java.time.ZoneId;

public class Main {
    public static void main(String[] args) {
        ZonedDateTime now = ZonedDateTime.now(ZoneId.of("Asia/Shanghai"));
        String formatted = now.format(DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss"));
        System.out.println("Hello, it's " + formatted + " time.");
    }
}
```

@tab main.c
```c
#include <stdio.h>
#include <time.h>

int main() {
    time_t t = time(NULL) + 8 * 3600; // UTC+8 for Shanghai
    struct tm *tm = gmtime(&t);
    char buf[20];
    strftime(buf, sizeof(buf), "%Y-%m-%d %H:%M:%S", tm);
    printf("Hello, it's %s time.", buf);
    return 0;
}
```

@tab main.cpp
```cpp
#include <iostream>
#include <chrono>
#include <ctime>

int main() {
    using namespace std::chrono;
    auto now = system_clock::now() + hours(8); // UTC+8 for Shanghai
    std::time_t t = system_clock::to_time_t(now);
    char buf[20];
    std::strftime(buf, sizeof(buf), "%Y-%m-%d %H:%M:%S", std::gmtime(&t));
    std::cout << "Hello, it's " << buf << " time.";
    return 0;
}
```

@tab script.sh
```sh
#!/usr/bin/env bash
now=$(TZ='Asia/Shanghai' date '+%Y-%m-%d %H:%M:%S')
echo "Hello, it's $now time."
```

@tab time.sql
```sql
-- MySQL 示例，使用上海时区（UTC+8）
SELECT CONCAT(
  'Hello, it\'s ',
  DATE_FORMAT(CONVERT_TZ(NOW(), '+00:00', '+08:00'), '%Y-%m-%d %H:%i:%s'),
  ' time.'
) AS message;
```

:::







