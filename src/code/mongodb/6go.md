---
title: Go实现CRUD操作
icon: mongodb
category: MongoDB
tag:
    - Go
    - MongoDB
    - 数据库
    - 包
date: 2023-03-27
---

怎么忍得住不用 `Go` 来试试的，选用的包为 `github.com/mongodb/mongo-go-driver`

## 预备

在正式开始之前，有一个东西在这个包中是必须得了解的，那就是 `bson` 以下是官方注释

|   类型   |                     说明                     |                              示例                              |
|:------:|:------------------------------------------:|:------------------------------------------------------------:|
| bson.D | BSON文档的有序表示，在需要顺序的场合比较重要，也就是 `MongoDB` 的命令 | `bson.D{{"foo", "bar"}, {"hello","world"}, {"pi", 3.14159}}` |
| bson.E |         主要作为bson.D的一个元素，通常在一个D中跟使用         |                    `bson.E{"foo", "bar"}`                    |
| bson.M |    BSON文档的无序表示`map[string]interface{}`     |   `bson.M{"foo": "bar", "hello": "world", "pi": 3.14159}`    |
| bson.A |               BSON文档数组的有序表示                |  `bson.A{"bar", "world", 3.14159, bson.D{{"qux", 12345}}}`   |

```go :no-line-numbers
// 下面go使用到的结构体
type User struct {
	Name string `json:"name"`
	Age  int    `json:"age"`
}
```

## 连接

```go
ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
defer cancel()

client, err := mongo.Connect(ctx, options.Client().ApplyURI("mongodb://localhost:27017"))
defer func() {
	if err = client.Disconnect(ctx); err != nil {
		panic(err)
	}
}()
```

## 选择集合

```go
collection := client.Database("miodb").Collection("user")
```

## 增

- 插入单条数据

```go :no-line-numbers
InsertOne(ctx context.Context, document interface{}, opts ...*options.InsertOneOptions) (*InsertOneResult, error)
```
示例：因为传参的 `document` 是 `interface{}` 的数据类型，直接用结构体就可以了，用 `bson` 构建文档数据也可以
```go
res, err := collection.InsertOne(ctx, User{"miomiora1", 19})
fmt.Println(res.InsertedID)
```

- 插入多条数据

```go :no-line-numbers
InsertMany(ctx context.Context, documents []interface{}, opts ...*options.InsertManyOptions) (*InsertManyResult, error)
```

插入多条数据的时候有说法了，因为传参的 `document` 是 `[]interface{}` 也就是说如果想直接用结构体切片是不能直接传进去的，下面提供两种方法：

::: code-tabs#shell

@tab 方式一

```go
// 创建一个新的[]interface{}的切片，并循环把结构体切片给放进去
userList := []User{{"miomiora1", 19}, {"miomiora2", 20}, {"miomiora3", 21}}

var userInterface []interface{}
for _, u := range userList {
	userInterface = append(userInterface, interface{}(u))
}

res, err := collection.InsertMany(ctx, userInterface)
id := res.InsertedIDs
fmt.Println(id)
```

@tab 方式二

```go
// 直接用[]interface{}创建切片
userInterface := []interface{}{
	User{"miomiora1", 19},
	User{"miomiora2", 20},
	User{"miomiora3", 21},
}

res, err := collection.InsertMany(ctx, userInterface)
id := res.InsertedIDs
fmt.Println(id)
```
:::

## 过滤器

在接下来的 改、查、删 等操作中，都会使用到过滤器，这里的过滤器就推荐使用 `bson` 来操作了，在前面提到的 `bson` 有序以及无序的问题，如果是顺序不重要的语句，可以使用M来操作。

- 不等于

`bson.M{"name": bson.M{"$ne": "miomiora"}}`

- 大于

`bson.M{"age": bson.M{"$gt": 10}}`

- 大于等于

`bson.M{"age": bson.M{"$gte": 10}}`

- 小于

`bson.M{"age": bson.M{"$lt": 10}}`

- 小于等于

`bson.M{"age": bson.M{"$lte": 10}}`

- 包含

`bson.M{"name": bson.M{"$in": []string{"hanamaru", "yui"}}`

- 不包含
  
`bson.M{"name": bson.M{"$nin": []string{"hanamaru", "yui"}}`

- 或

`bson.M{"$or": []bson.M{{"name": "miomiora"}, {"age": bson.M{"$gt": 10}}}}`

- 正则

| 表达式  |       说明        |
|:----:|:---------------:|
| `^`  |  匹配以指定模式开头的字符串  |
| `$`  |  匹配以指定模式结尾的字符串  |
| `.`  | 匹配除换行符以外的任何单个字符 |
| `*`  |  匹配前面的模式零次或多次   |
| `+`  |  匹配前面的模式一次或多次   |
| `?`  |  匹配前面的模式零次或一次   |
| `[]` |   匹配括号中的任何字符    |
| `\d` |    匹配任何数字字符     |
| `\w` |   匹配任何字母数字字符    |
| `\s` |    匹配任何空格字符     |
| `\D` |    匹配任何非数字字符    |
| `\W` |   匹配任何非字母数字字符   |
| `\S` |    匹配任何非空格字符    |

示例：以 m 开头，中间可以出现任何字母数字字符，并且以 1 结尾

`bson.M{"name": bson.M{"$regex": "^m\\w*1$"}}`

- 全部文档

`bson.D{{}}`

## 查

- 查找单条文档

```go :no-line-numbers
FindOne(ctx context.Context, filter interface{}, opts ...*options.FindOneOptions) *SingleResult
```

- 查找多条文档

```go :no-line-numbers
Find(ctx context.Context, filter interface{}, opts ...*options.FindOptions) (cur *Cursor, err error)
```

```go
// 定义过滤器
filter := bson.M{"$or": []bson.M{{"name": "miomiora"}, {"age": bson.M{"$gt": 10}}}}

// 根据过滤器查找多条文档
cur, err := collection.Find(ctx, filter)
if err != nil {
	fmt.Println("collection.Find(ctx, filter) err ", err.Error())
	return
}
// 关闭游标
defer func(cur *mongo.Cursor, ctx context.Context) {
	err := cur.Close(ctx)
	if err != nil {
		panic(err)
	}
}(cur, ctx)

// 从游标中获取查找到的数据，并存入 userList中
var userList []User
err = cur.All(ctx, &userList)
if err != nil {
	fmt.Println("cur.All err ", err.Error())
	return
}

fmt.Println(userList)
```

## 改

- 修改单条

```go :no-line-numbers
UpdateOne(ctx context.Context, filter interface{}, update interface{}, opts ...*options.UpdateOptions) (*UpdateResult, error)
```

修改的 `update` 参数也可以直接传入结构体，但没指定的字段会初始化为零值（不推荐）

- 修改多条

```go :no-line-numbers
UpdateMany(ctx context.Context, filter interface{}, update interface{}, opts ...*options.UpdateOptions) (*UpdateResult, error)
```

```go
// 定义过滤器，这里的意思为 name 包含 miomiora 的文档
filter := bson.M{"name": bson.M{"$regex": "miomiora"}}

// 定义更新的数据，意为把 name 包含 miomiora 的文档中的 name 都改成 “批量修改”
update := bson.M{"$set": bson.M{"name": "批量修改"}}
many, err := collection.UpdateMany(ctx, filter, update)
fmt.Println(many)
```

## 删

- 删除单条

```go :no-line-numbers
DeleteOne(ctx context.Context, filter interface{}, opts ...*options.DeleteOptions) (*DeleteResult, error)
```

- 删除多条

```go :no-line-numbers
DeleteMany(ctx context.Context, filter interface{}, opts ...*options.DeleteOptions) (*DeleteResult, error)
```

```go
// 删除刚刚批量更新的文档，以及 name 为 yui 的文档
filter := bson.M{"$or": []bson.M{
	{"name": "批量修改"},
	{"name": "yui"},
}}

many, err := collection.DeleteMany(ctx, filter)
if err != nil {
	fmt.Println("collection.DeleteMany(ctx, filter) err ", err.Error())
	return
}

fmt.Println(many)
```