---
title: mio-api
icon: api-fill
category: 项目
tag:
    - 项目
    - API开放平台
date: 2023-03-14
---
## 项目简介

mio-api开放平台，使用Go作为主要后端，Spring Cloud Gateway作为网关进行鉴权、转发、染色，gRPC作为网关调用Go后端方法的方式

地址：https://github.com/miomiora/mio-api

## 运行效果

![](https://s2.loli.net/2023/03/14/3dFKHOBPuEJNLqM.png)

![](https://s2.loli.net/2023/03/14/UO94MkwVecElp5x.png)

项目启动需要启动：mio-api-frontend、mio-api、mio-api-gateway、mio-api-interface

## 功能简介

技术栈：Gin、Gorm、Redis、MySQL、gRPC、Vue3、Vite

### mio-api

用户模块：登录、注册、登出、修改信息、密码

管理员模块：用户管理、接口管理

Redis+Token单点登录

gRPC 提供方

### mio-api-frontend

主要给`mio-api`后端提供前端可视化界面

### mio-api-client

为调用接口的`sdk`方便开发者快速调用相关的`api`

### mio-api-gateway

对调用`api`接口进行鉴权，鉴权需要通过`gRPC`向`mio-api`验证请求携带的`accessKey`是否有效，并且验证`secretKey`与携带的`sign`是否匹配，如果鉴权成功则给请求添加相应请求头，并转发路由到真实的接口地址

### mio-api-interface

`api`接口实际处理的模块，将接收从网关转发过来的请求进行响应，并且验证请求头是否包含网关添加的请求头，防止绕过网关直接访问真实地址的行为



