# [Proxy](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy)

## 语法

```js
const proxy = new Proxy(target, handler)
```

- `target`  
  要使用 `Proxy` 包装的对象（可以是任何类型的对象，包括原生数组、函数，甚至另一个代理）。
- `handler`  
  一个通常以函数作为属性的对象，各属性中的函数分别定义了在执行各种操作是代理 `proxy` 的行为。

## 方法

[Proxy.revocable](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy/revocable)
创建一个可撤销的 `Proxy` 对象。

## handler 对象的方法

`handler` 对象是一个容纳一批特定属性的占位符对象。包含有 `Proxy` 的各个捕获器（trap）。

所有的捕获器是可选的。如果没有定义某个捕获器，那么就会保留源对象的默认行为。

|                方法                |                                    描述                                     |
| :--------------------------------: | :-------------------------------------------------------------------------: |
|      handler.getPrototypeOf()      |                     Object.getPrototypeOf 方法的捕捉器                      |
|      handler.setPrototypeOf()      |                     Object.setPrototypeOf 方法的捕捉器                      |
|       handler.isExtensible()       |                      Object.isExtensible 方法的捕捉器                       |
|    handler.preventExtensions()     |                    Object.preventExtensions 方法的捕捉器                    |
| handler.getOwnPropertyDescriptor() |                Object.getOwnPropertyDescriptor 方法的捕捉器                 |
|      handler.defineProperty()      |                     Object.defineProperty 方法的捕捉器                      |
|           handler.has()            |                              in 操作符的捕捉器                              |
|           handler.get()            |                            属性读取操作的捕捉器                             |
|           handler.set()            |                            属性设置操作的捕捉器                             |
|      handler.deleteProperty()      |                            delete 操作符的捕捉器                            |
|         handler.ownKeys()          | Object.getOwnPropertyNames 方法和 Object.getOwnPropertySymbols 方法的捕捉器 |
|          handler.apply()           |                            函数调用操作的捕捉器                             |
|        handler.construct()         |                             new 操作符的捕捉器                              |
