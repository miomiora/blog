---
title: Redis启动错误
icon: redis
category: 错误
date: 2023-02-26
tag:
    - redis
---

非常奇怪的是Redis突然就打不开了

![](https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/17292/asdasdf75YGY.png)

我以为是我原生的Redis坏了，转而去用Docker中的Redis，结果也打不开

![](https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/17292/asdfasd2q.png)

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

![](https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/17292/GWV84RWHPJZE.png)

所以为什么之前Redis启动不了了😶‍🌫️