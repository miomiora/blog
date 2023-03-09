---
title: Redis无法读写
icon: redis
category: 代码
tag:
    - Go
    - Redis
    - 包
date: 2023-03-09
---

在使用`github.com/gomodule/redigo/redis`包的时候，从昨天开始就频繁的出现无法访问`Redis`的状况，经常会报错

```shell :no-line-numbers
write tcp 127.0.0.1:14481->127.0.0.1:6379: use of closed network connection
read tcp 127.0.0.1:14481->127.0.0.1:6379: use of closed network connection
```

百度了一圈好像说`go-redis`不会出现这种情况，干脆直接改代码用`go-redis`了。