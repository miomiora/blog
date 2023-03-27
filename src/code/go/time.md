---
title: 时间戳的比较
icon: timefill
category: Go
tag:
    - Go
    - 时间戳
date: 2023-03-07
---

起因是我需要往一个请求头中塞一个时间，并且还要用时间来比较当前的时间，起初

```go
time.Now().String()
// 2023-03-07 16:06:22.6212138 +0800 CST m=+0.002775201

time.Now().GoString()
// time.Date(2023, time.March, 7, 16, 7, 30, 188558700, time.Local)
```

如果是这样的字符串形式那我另一头接收到必须得解析一遍

但实际上直接用`time.Now().String()`或者`time.Now().GoString()`的字符串丢给`time.Parse()`都会报错，也就是说自带的`String`类方法都不能直接解析回去😥

那我想用用自带的`After()`和`Before()`的比较时间的方法就不行了😪

那为了方便就用时间戳来了`time.Now().Unix()`只需要另一头拿到时间戳的字符串，把他转成int64做比较即可

```go
// 拿到当前的时间戳
start := time.Now().Unix()
start2 := strconv.FormatInt(start, 10)

time.Sleep(time.Second * 5)

// 拿到睡眠5秒后的时间戳
end := time.Now().Unix()
end2 := strconv.FormatInt(end, 10)

// 把时间戳字符串转换为int64
atoi, _ := strconv.ParseInt(start2, 10, 64)
atoi2, _ := strconv.ParseInt(end2, 10, 64)

// 结果均为 5
fmt.Println("1:  ", end-start)
fmt.Println("2:  ", atoi2-atoi)
```
