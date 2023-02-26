---
title: 端口占用
icon: wangluoduankou
category: 错误
date: 2023-02-26
tag:
    - 端口占用
---

## Windows端口占用

前后端要两个端口，MySQL和Redis又要两个端口，很奇怪的是其中之一会因为端口占用而起不来服务，每次又会去百度搜对应的查看端口和杀死进程的代码。 在自己不用百度记下来之前，今天就记在博客中。

> 查看对应的端口

```shell
netstat -ano | findstr 端口号
```

> 杀死对应的Pid进程

```shell
taskkill /pid 端口号 -t -f
```
