---
title: map
icon: golang1
category: Go
tag:
    - Go
    - map   
date: 2023-03-27
---

## 并发问题

主要体现在 `runtime.map` 的扩容操作中，一个在 `扩容` 一个在 `驱逐`

- 解决方案：
  1. 加锁：但会严重影响 `map` 的性能
  2. 使用 `sync.Map` 使用了两个 `map` 分离了扩容的问题，数据结构如下

```go
type Map struct {
    // 锁，主要是锁 dirty map
	mu Mutex
	
	// 不会触发扩容操作（查、改）走这个 read map
	read atomic.Pointer[readOnly]
	
	// 可能引发扩容操作（增）走 dirty map
	dirty map[any]*entry
	
	// 未命中 read map 的计数，如果超过了 len(dirty map) 则会把 dirty map 提升为 read map
	misses int
}

type readOnly struct {
    // read map 本体
	m       map[any]*entry
	
	// 是否有追加操作，如果为 true 则代表 dirty map 中包含 m 没有的 key
	// 当 read map 未命中的时候会去 dirty map 查找新值
	amended bool
}
```

## 无序

可以把`map`的`key`使用一个`slice`接收，再把`slice`进行排序，最后使用`for range`对`map`进行输出

