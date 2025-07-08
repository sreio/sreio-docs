---
pageLayout: home
config:
  -
    type: custom
---

<Yiyan />


<CardGrid>
  <Card title="tip" icon="openmoji:star">
    记录学习中遇到的知识点和各种有趣的小技巧。 <CustomDateTime />
  </Card>

  <RepoCard repo="sreio/sreio-docs" />
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







