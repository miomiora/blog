---
title: Gin的Web开发脚手架
icon: houduankaifa
category: Gin
tag:
    - Go
    - Gin   
date: 2023-04-09
---

## 不太行的

前后端分离的项目中，传统的 `MVC` 架构中的 `V` 已经被抽离出去

在我之前做的项目中的架构分层都感觉不是很行，在我之前的 `mio-api` 项目分层如下

```shell :no-line-numbers
│  go.mod
│  go.sum
│  main.go
│  settings.yaml
│
├─api
│  │  init.go
│  │
│  ├─interfaceApi
│  │      create.go
│  │      delete.go
│  │      init.go
│  │      invoke.go
│  │      read.go
│  │      update.go
│  │      utils.go
│  │
│  └─userApi
│          delete.go
│          init.go
│          login.go
│          read.go
│          register.go
│          update.go
│          utils.go
│
├─config
│      gin.go
│      init.go
│      mysql.go
│      redis.go
│
├─database
│      init.go
│      mysql.go
│      redis.go
│
├─middleware
│      authAdmin.go
│      authUser.go
│      cors.go
│      refreshToken.go
│
├─model
│      interfaceInfo.go
│      user.go
│      userInterface.go
│
├─routes
│      init.go
│      interfaceRouter.go
│      userRouter.go
│
└─utils
        constant.go
        isNumber.go
        regexpString.go
        response.go
        validToken.go
```

其中 `api` 存放的为 `Gin` 处理路由的主要 `handler`

但其中杂糅的非常厉害，基本上属于一个函数解决所有事情。

比如 `api/userApi/login.go` 中代码如下

```go
func (UserApi) UserLogin(c *gin.Context) {
	var userDTO model.UserInfo
	var user model.User
	// 获取用户登录信息, 同时校验是否为空, 以及长度是否合法
	result := bindContextJson(c, &user)
	if !result {
		return
	}

	// 帐号是否合法(字母开头，允许字母数字下划线)：^[a-zA-Z][a-zA-Z0-9_]*$
	matched := utils.MatchString(`^[a-zA-Z][a-zA-Z0-9_]*$`, user.UserAccount)
	if !matched {
		c.JSON(http.StatusForbidden, utils.ResponseError(utils.ParamsError, "账号不合法！"))
		return
	}
	// 加密密码
	password := encryptString(user.UserPassword)

	// 查询数据库中是否存在该用户，并且同时把取出来的数据存入userDTO中
	affected := db.Take(&model.User{},
		"user_account = ? and user_password = ?", user.UserAccount, password).
		Scan(&userDTO).RowsAffected
	if affected == 0 {
		c.JSON(http.StatusForbidden, utils.ResponseError(utils.ParamsError, "账号不存在！"))
		return
	}

	// 记录用户的登录状态, 使用redis+token
	token := uuid.NewString()
	tokenKey := utils.TokenPrefix + token
	// 存入redis, 并且把用户ip存入redis
	err := client.HSet(ctx, tokenKey, "id", userDTO.ID, "client_ip", c.ClientIP()).Err()

	if err != nil {
		fmt.Println("[api UserLogin err] Conn.Do HSET : " + err.Error())
		c.JSON(http.StatusInternalServerError, utils.ResponseError(utils.RedisError, "存储Token失败！"))
		return
	}
	// 设置有效期
	err = client.Expire(ctx, tokenKey, utils.TokenTimeout).Err()
	if err != nil {
		fmt.Println("[api UserLogin err] Conn.Do EXPIRE : " + err.Error())
		c.JSON(http.StatusInternalServerError, utils.ResponseError(utils.RedisError, "设置Token有效期失败！"))
		return
	}

	// 封装user和token
	res := &gin.H{
		"user":  userDTO,
		"token": token,
	}
	c.JSON(http.StatusOK, utils.ResponseOK(res))
}
```

也就是把参数校验、业务处理、数据库操作、返回响应等等内容全部写在了一个函数中，这非常不好

## CLD 分层

1、Controller，控制层，服务入口，负责处理路由，参数校验，请求转发。

2、Logic/Service，业务逻辑（服务）层，一般是业务逻辑的入口，可以认为从这里开始，所有的请求参数一定是合法的。业务逻辑和业务流程也都在这一层中。

3、DAO/Repository，DAO层，这一层主要负责和数据、存储打交道。将下层存储以更简单的函数、接口形式暴露给 Logic 层来使用。负责数据的持久化工作。

在 `CLD` 分层的架构下，新的 `Gin` 项目脚手架应该为如下

```shell :no-line-numbers
│  config.yml
│  go.mod
│  go.sum
│  main.go
│
├─config
│      config.go
│
├─controller
├─dao
│  ├─mysql
│  │      mysql.go
│  │
│  └─redis
│         redis.go
│
├─logger
│      logger.go
│
├─logic
├─model
└─router
        router.go
```

处理响应的流程应该为:

1. 匹配路由，执行路由绑定的 `controller` 层的函数
2. 进入 `controller` 层，该层主要做三件事:
   - 参数校验（`c.ShouldBind()`）
   - 业务处理（调用 `logic` 层中业务处理的函数）
   - 返回响应（ `c.JSON()` ）
3. 在完成 `controller` 层中的参数校验后，进入 `logic` 层进行业务的处理
   - 在此层中的已经确定参数是一定正确的
   - 调用 `dao` 层的数据库操作
4. 进入 `dao` 层，这一层只提供对外暴露的操作数据库的方法
   - `func QueryUserById(id int) (model.User, error)`
5. 并对数据库操作的结果进行判断业务处理是否成功，把结果返回给 `controller`层
6. `controller` 层进行最后的响应