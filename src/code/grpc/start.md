---
title: 编写一个简单的 gRPC 应用
icon: golang
category: gRPC
tag:
    - Go
    - gRPC
date: 2023-03-12
---

## 安装序列化工具

`protoc` https://github.com/protocolbuffers/protobuf/releases

## 添加到环境变量

把`protoc`的`bin`目录添加到`path`的环境变量下即可

## 安装gRPC编译器

```shell :no-line-numbers
go install google.golang.org/protobuf/cmd/protoc-gen-go@v1.28
go install google.golang.org/grpc/cmd/protoc-gen-go-grpc@v1.2
```

## 编写`protoc`文件

```protobuf
// 指定protoc语法版本
syntax = "proto3";

// 生成的代码包 . 表示当前目录，分号隔开，service表示生成的代码包名
option go_package = ".;service";

// 定义了一个rpc的service
service SayHello {
  // 理解为Go中的func，传入HelloRequest返回HelloResponse
  rpc SayHello(HelloRequest) returns (HelloResponse) {}
}

// HelloRequest定义，理解为Go中的struct，Java中的class
message HelloRequest {
  // =1 表示该变量唯一标识
  string requestName = 1;
}

message HelloResponse {
  string responseMsg = 1;
}
```

## 生成代码

```shell :no-line-numbers
# 表示使用hello.proto文件生成，并且把生成的文件放在当前的目录下
protoc --go_out=. hello.proto
protoc --go-grpc_out=. hello.proto

# java版本
protoc --plugin=protoc-gen-grpc-java=protoc-gen-grpc-java.exe --grpc-java_out=java --proto_path=proto proto/mio-api.proto
protoc --java_out=java --proto_path=proto proto/mio-api.proto
```

## 实现接口

`hello-server`
```go
package main

import (
	"context"
	pb "demo01/hello-server/proto"
	"errors"
	"fmt"
	"google.golang.org/grpc"
	"google.golang.org/grpc/metadata"
	"net"
)

// hello server
type server struct {
	pb.UnimplementedSayHelloServer
}

// SayHello 实际上编写业务的地方，生成的hello.pb.go不要动
func (s server) SayHello(ctx context.Context, 
    response *pb.HelloRequest) (*pb.HelloResponse, error) {

	// 获取元数据的信息
	md, ok := metadata.FromIncomingContext(ctx)
	if !ok {
		return nil, errors.New("未传输token")
	}

	var appId string
	var appKey string

	if v, ok := md["appid"]; ok {
		appId = v[0]
	}

	if v, ok := md["appkey"]; ok {
		appKey = v[0]
	}

	// 数据库查找
	if appId != "miomiora" || appKey != "123321" {
		return nil, errors.New("token 不正确")
	}

	return &pb.HelloResponse{ResponseMsg: "hello " + response.RequestName}, nil
}

func main() {
	// 开启端口
	listen, _ := net.Listen("tcp", ":9090")
	// 创建grpc服务
	newServer := grpc.NewServer()
	pb.RegisterSayHelloServer(newServer, &server{})

	// 启动服务
	err := newServer.Serve(listen)
	if err != nil {
		fmt.Println("启动grpc服务器失败！")
	}
}
```


`hello-client`
```go
package main

import (
	"context"
	pb "demo01/hello-client/proto"
	"fmt"
	"google.golang.org/grpc"
	"google.golang.org/grpc/credentials/insecure"
)

type ClientTokenAuth struct {
}

func (c *ClientTokenAuth) GetRequestMetadata(ctx context.Context, 
    uri ...string) (map[string]string, error) {
    
	return map[string]string{
		"appId":  "miomiora1",
		"appKey": "123321",
	}, nil
}

func (c *ClientTokenAuth) RequireTransportSecurity() bool {
	return false
}

func main() {
	var opts []grpc.DialOption
	opts = append(opts, grpc.WithTransportCredentials(insecure.NewCredentials()))
	opts = append(opts, grpc.WithPerRPCCredentials(new(ClientTokenAuth)))

	dial, err := grpc.Dial("127.0.0.1:9090", opts...)
	if err != nil {
		fmt.Println("监听错误")
	}
	defer dial.Close()

	// 建立链接
	client := pb.NewSayHelloClient(dial)

	// 执行rpc的调用
	hello, err := client.SayHello(context.Background(), &pb.HelloRequest{RequestName: "miomiora"})
	if err != nil {
		fmt.Println("响应失败")
		return
	}

	fmt.Println(hello.ResponseMsg)
}
```

## 运行

先运行`server`后运行`client`即可