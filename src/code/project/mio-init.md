---
title: Go Web 脚手架
icon: xiangmu
category: 项目
tag:
    - 项目
    - mio-init
date: 2025-04-01
---

- 目录结构

```shell
├── config/          # 配置加载
├── docs/            # Swagger文档
├── logger/          # 日志配置
├── util/            # 工具
├── internal/        # 项目内部代码
│   ├── core/        # 核心初始化
│   ├── ctrls/       # HTTP 路由和请求处理（Gin 的 handlers）
│   ├── service/     # 业务逻辑层
│   ├── repository/  # 数据访问层（数据库/外部API）
│   ├── middleware/  # 中间件（验证、跨域）
│   ├── router/      # HTTP 路由
│   └── model/       # 数据模型（DTO/Entity）
└── main.go          # 应用入口
```

- zap 日志
- jwt
- GORM
- MySQL
- Redis
- 双 `token` 登录验证
