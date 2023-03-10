---
title: Go发请求
icon: zizhuqingqiulei
category: 代码
tag:
    - Go
    - net/http
    - 请求
date: 2023-03-07
---

用Go发请求，去 https://pkg.go.dev/ 找了一圈，还是打算用`net/http`来发请求

根据官方文档，最简单的发请求就是

```go
resp, err := http.Get("http://example.com/")

resp, err := http.Post("http://example.com/upload", "image/jpeg", &buf)

resp, err := http.PostForm("http://example.com/form",
    url.Values{"key": {"Value"}, "id": {"123"}})
```
但是我要设置请求头等其他的请求内容的话，就不能用上面的方法了，大概的步骤是通过`http.Newquest()`新建一个请求实例，并在这个请求实例中设置更丰富地请求内容。然后想要真正地发起这个请求的话，必须得用`&http.Client{}`创建一个http客户端实例，然后通过这个实例去调用上面新建的请求

```go
// 创建一个http客户端
client := &http.Client{}

// 创建对应的请求
newRequest, err := http.NewRequest("GET", "http://localhost:8080/api/user", nil)
if err != nil {
	fmt.Println("[request err] NewRequest ", err.Error())
	return
}

// 填入请求头相关的参数
newRequest.Header.Set("timestamp", strconv.FormatInt(time.Now().Unix(), 10))

// 客户端执行请求
response, err := client.Do(newRequest)
if err != nil {
	fmt.Println("[do request err] client.Do ", err.Error())
	return
}
// 要记得关闭
defer response.Body.Close()

// 获取响应的Body内容
context, err := io.ReadAll(response.Body)
if err != nil {
	fmt.Println("[io.ReadAll(response.Body) err]", err.Error())
	return
}

// 测试一下response里面的内容
fmt.Println("Status: ", response.Status)
fmt.Println("Body: ", string(context))
```


