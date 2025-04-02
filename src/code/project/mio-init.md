---
title: Go Web 脚手架
icon: xiangmu
category: 项目
tag:
    - 项目
    - mio-init
date: 2025-04-01
---

### 目录结构

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

### zap 日志
### jwt
### GORM
### MySQL
### Redis
### 双 `token` 登录验证

- `Access Token` 用于验证登录，过期时间设置的比较短（15分钟）
- `Refresh Token` 用于刷新 `Access Token`，过期时间设置的比较长（7天）
- 登录
  - 生成双 `Token`，保存 `Refresh Token` 至 `Redis` (`refresh:token:[Refresh Token]:[userId]` 可进一步存储通过 `userId` 找到 `Refresh Token`)
  - `Refresh Token` 通过 `Set-Cookie (HttpOnly Secure)` 返回，`Access Token` 通过 `Body` 返回
- 登出
  - 删除 `Refresh Token`，并把 `Access Token` 拉入黑名单(`Redis` 设置 `Access Token` 剩余有效期一致的 `TLL`) 
- 验证
  - 验证 `Access Token` 是否有效，有效则放行
  - `Access Token` 无效，则验证 `Refresh Token` 是否生效，有效则生成新的双 `Token` 返回给前端，且同时删除老的 `Refresh Token` (刷新 `Token` 需要前端配合重新发起请求)
- 未做
  - 记录用户设备哈希 或者 `IP` 的哈希值，防止 `Token` 被盗用
