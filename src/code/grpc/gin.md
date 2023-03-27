---
title: gRPC和Gin同时作为服务器
icon: golang
category: gRPC
tag:
    - Go
    - Gin
date: 2023-03-13
---

是这样的，我想让我的`Gin`后端同时也作为`gRPC`的`provider`

那么在一个程序中监听两个端口这个时候就出问题了

```go
package main

import (
	"mio-api/routes"
	"mio-api/server"
)

func main() {
	// 启动rpc服务器
	server.StartRPC()
	// 启动gin服务器
	routes.StartGin()
}
```

无论我怎么调整这两行代码的顺序 `gRPC`的服务器总是起不来，原本的代码如下

```go
package server

import (
	"fmt"
	"google.golang.org/grpc"
	pb "mio-api/proto"
	"net"
)

type RPCServer struct {
	pb.UnimplementedMioApiServer
}

func StartRPC() {
	// 开启grpc端口监听
	// 开启端口
	listen, _ := net.Listen("tcp", ":2175")
	// 创建grpc服务
	newServer := grpc.NewServer()
	pb.RegisterMioApiServer(newServer, &RPCServer{})

	// 启动服务
	err := newServer.Serve(listen)
	if err != nil {
		fmt.Println("[Error] 启动grpc服务器失败！ ", err.Error())
	}
}
```

解决方案，得把启动`gRPC`服务的代码丢进`goroutine`中运行：
```go
// 启动服务
go func() {
	err := newServer.Serve(listen)
	if err != nil {
		fmt.Println("[Error] 启动grpc服务器失败！ ", err.Error())
	}
}()
```
