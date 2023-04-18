---
title: nil、空结构体、空接口
icon: kongbaiwendang
category: Go
tag:
    - Go
    - nil
    - 空结构体
    - 空接口
date: 2023-04-18
---

## nil

`nil` 数据结构：

```go
// builtin.go
// nil is a predeclared identifier representing the zero value for a
// pointer, channel, func, interface, map, or slice type.
var nil Type // Type must be a pointer, channel, func, interface, map, or slice type
```

- `nil` 为空，但不为空指针
- `nil` 为 pointer、channel、func、interface、map、slice 这 6 种类型的的零值
- 每种类型的 `nil` 不同，无法比较
```go
var m map[string]string
var i *int
fmt.Println(i == m) // 无效运算: i == m(类型 *int 和 map[string]string 不匹配)
```

## 空结构体

- 空结构体的值不为 `nil`
- 空结构体的指针也不为 `nil`, 但同为 `zerobase`
```go
// malloc.go
// base address for all 0-byte allocations
var zerobase uintptr 

...

// 所有 size == 0 的内存都会分配 zerobase 的地址
func mallocgc(size uintptr, typ *_type, needzero bool) unsafe.Pointer {
	if gcphase == _GCmarktermination {
		throw("mallocgc called with gcphase == _GCmarktermination")
	}

	if size == 0 {
		return unsafe.Pointer(&zerobase)
	}
	
	...
}

type K struct {}

var k1 K
// false
fmt.Println(&k1 == nil)
```

## 空接口

- 结构底层为 `iface` 空接口为 `eface`
```go
type iface struct {
	tab  *itab
	data unsafe.Pointer
}

type eface struct {
	_type *_type
	data  unsafe.Pointer
}
```
- 空接口不一定是 `nil` 接口, 当 `i1 = &i2` 时, 空接口的 `eface` 下的 `_type` 就有值了
```go
var i1 interface{}
var i2 interface{}

fmt.Println(i1 == nil) // true
fmt.Println(i2 == nil) // true

i1 = &i2
fmt.Println(i1 == nil) // false
```
- 只有当 `eface` 中的 `_type` 和 `data` 都为 `nil` 才为 `nil` 接口

## 总结

- `nil` 是多个类型（6种）的零值或空值
- 空结构体的指针和值都不为 `nil`
- 空接口零值是 `nil` 一旦有了类型信息就不是 `nil`