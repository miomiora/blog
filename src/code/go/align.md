---
title: 内存对齐
icon: zuoduiqi
category: Go
tag:
    - Go
    - 内存对齐
date: 2023-04-18
---

## 未对齐

给出一个结构体

```go
type User struct {
	A int32
	B []int32
	C string
	D bool
	E struct{}
}
```

算出每个字段的 `size` 和 `align`

```go
fmt.Printf("User{} size=%d, align=%d\n\n", unsafe.Sizeof(User{}), unsafe.Alignof(User{}))
fmt.Printf("int32 size=%d, align=%d\n", unsafe.Sizeof(int32(0)), unsafe.Alignof(int32(0)))
fmt.Printf("[]int32 size=%d, align=%d\n", unsafe.Sizeof(make([]int32, 0)), unsafe.Alignof(make([]int32, 0)))
fmt.Printf("string size=%d, align=%d\n", unsafe.Sizeof(""), unsafe.Alignof(""))
fmt.Printf("bool size=%d, align=%d\n", unsafe.Sizeof(true), unsafe.Alignof(true))
fmt.Printf("struct{} size=%d, align=%d\n", unsafe.Sizeof(K{}), unsafe.Alignof(K{}))

/*
    结果
	User{} size=56, align=8
	
	int32 size=4, align=4
	[]int32 size=24, align=8
	string size=16, align=8
	bool size=1, align=1
	struct{} size=0, align=1
*/
```

把结构体的所有字段相加的结果应该为：`4 + 24 + 16 + 1 + 0 = 45`

但存在结构体补 `0` 的情况，所以这个结构体理想的大小应该为 `8` 的倍数 `48`

## 分析

结构体 `User` 有 6 个字段，内存的分布应该为如下：

|  0 - 7   |  8 - 15   |  16 - 23  |  24 - 31  | 32 - 39  | 40 - 47  |      48 - 55      | 
|:--------:|:---------:|:---------:|:---------:|:--------:|:--------:|:-----------------:|
| 00000000 | 00000000  | 00000000  | 00000000  | 00000000 | 00000000 |     00000000      |
| 11110000 | 11111111  | 11111111  | 11111111  | 11111111 | 11111111 |     10000000      | 
| `int32`  | `[]int32` | `[]int32` | `[]int32` | `string` | `string` | `bool` `struct{}` | 


修改结构体为：
```go
type User struct {
	A int32
	D bool
	B []int32
	C string
	E struct{}
}
```

在把 `bool` 移入到 `int32` 后面后，内存分布应该为

|     0 - 7      |  8 - 15   |  16 - 23  |  24 - 31  | 32 - 39  | 40 - 47  |  48 - 55   | 
|:--------------:|:---------:|:---------:|:---------:|:--------:|:--------:|:----------:|
|    00000000    | 00000000  | 00000000  | 00000000  | 00000000 | 00000000 |  00000000  |
|    11111000    | 11111111  | 11111111  | 11111111  | 11111111 | 11111111 |  00000000  | 
| `int32` `bool` | `[]int32` | `[]int32` | `[]int32` | `string` | `string` | `struct{}` | 


这么看内存应该为 `48` 但实际上还是 `56`

同时，即使 `struct{}` 的 `size` 为 `0` 也会以偏移量 `1` 来占用内存，多余的部分会进行补 `0`

## 对齐

修改结构体为：
```go
type User struct {
	A int32
	D bool
	E struct{}
	B []int32
	C string
}
```

此时的内存分布为

|           0 - 7           |  8 - 15   |  16 - 23  |  24 - 31  | 32 - 39  | 40 - 47  | 48 - 55  |
|:-------------------------:|:---------:|:---------:|:---------:|:--------:|:--------:|:--------:|
|         00000000          | 00000000  | 00000000  | 00000000  | 00000000 | 00000000 | 00000000 |
|         11111000          | 11111111  | 11111111  | 11111111  | 11111111 | 11111111 | 00000000 |
| `int32` `bool` `struct{}` | `[]int32` | `[]int32` | `[]int32` | `string` | `string` |          | 

大小如愿变成了 `48`