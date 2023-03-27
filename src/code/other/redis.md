---
title: Redis启动错误
icon: redis
category: 其他
date: 2023-02-26
tag:
    - Redis
    - 数据库
---

非常奇怪的是Redis突然就打不开了

![](https://s2.loli.net/2023/03/04/ygOLEQUz8hrwCaV.png)

我以为是我原生的Redis坏了，转而去用Docker中的Redis，结果也打不开

![](https://s2.loli.net/2023/03/04/krzOPqAlLxwoKX6.png)

Docker中的也打不开，是不是端口被占用了，查一下

```shell :no-line-numbers
netstat -ano | findstr 6379
```

结果没有应用占用`6379`的端口，闷了

遂 开始百度...........
找到的方法大多就是三条
1. 修改`redis.windows.conf`文件，把`bind 127.0.0.1`的注释去掉
2. 输入命令`redis-cli.exe` 然后输入`shutdown`和`exit`
3. 检查是否有其他程序占用了`6379`端口，如果有，关闭或更换端口

😥还是不行，决定重启电脑

::: center
嗯，行了😊
:::

![](https://s2.loli.net/2023/03/04/gEq1cp4OjTXlIHK.png)

所以为什么之前Redis启动不了了😶‍🌫️