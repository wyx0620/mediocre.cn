# Set、Map、WeakSet、WeakMap

## Set

> 定义: `Set` 对象允许你存储任何类型的唯一值，无论是原始值或者是对象引用，`Set` 对象是值的集合，你可以按照插入的顺序迭代它的元素。 `Set` 中的元素只会出现一次，即 `Set` 中的元素是唯一的

### 属性

- size: 返回集合中所包含的元素的数量

### 操作方法

- add(value): 向集合中添加一个新的项
- delete(value): 从集合中删除一个值
- has(value): 如果值在集合中存在，返回 ture, 否则返回 false
- clear(): 移除集合中的所有项

### 遍历方法

- keys(): 返回键名的遍历器
- values(): 返回键值的遍历器
- entries(): 返回键值对的遍历器
- forEach(): 使用回调函数遍历每个成员

### 应用场景

```js
// 数组去重
let arr = [1, 1, 2, 3]
let unique = [...new Set(arr)]

let a = new Set([1, 2, 3])
let b = new Set([4, 3, 2])

// 并集
let union = [...new Set([...a, ...b])]
// [1,2,3,4]

// 交集
let intersect = [...new Set([...a].filter((x) => b.has(x)))]
// [2, 3]

// 差集
let difference = Array.from(new Set([...a].filter((x) => !b.has(x))))
// [1]
```

## WeakSet

> `WeakSet` 对象是一些对象值的集合, 并且其中的每个对象值都只能出现一次。在 `WeakSet` 的集合中是唯一的

`WeakSet` 的出现主要解决弱引用对象存储的场景, 其结构与 `Set` 类似

与 `Set` 的区别：

- 与 `Set` 相比，`WeakSet` 只能是对象的集合，而不能是任何类型的任意值
- `WeakSet` 集合中对象的引用为弱引用。 如果没有其他的对 `WeakSet` 中对象的引用，那么这些对象会被当成垃圾回收掉。 这也意味着 `WeakSet` 中没有存储当前对象的列表。 正因为这样，`WeakSet` 是不可枚举的

`WeakSet` 的属性跟操作方法与 `Set` 一致，不同的是 `WeakSet` 没有遍历方法，因为其成员都是弱引用，弱引用随时都会消失，遍历机制无法保证成员的存在

## Map

> `Map` 对象保存键值对，并且能够记住键的原始插入顺序。任何值(对象或者原始值) 都可以作为一个键或一个值。一个 `Map` 对象在迭代时会根据对象中元素的插入顺序来进行：一个 `for...of` 循环在每次迭代后会返回一个形式为 `[key，value]` 的数组

### 属性

- size: 返回集合中所包含的元素的数量

### 操作方法

- set(key, value): 向 Map 中加入或更新键值对
- get(key): 读取 key 对用的值，如果没有，返回 undefined
- has(key): 某个键是否在 Map 对象中，在返回 true 否则返回 false
- delete(key): 删除某个键，返回 true, 如果删除失败返回 false
- clear(): 删除所有元素

### 遍历方法

- keys()：返回键名的遍历器
- values()：返回键值的遍历器
- entries()：返回所有成员的遍历器
- forEach()：遍历 Map 的所有成员

## WeakMap

> `WeakMap` 对象是一组键/值对的集合，其中的键是弱引用的。其键必须是对象，而值可以是任意的

与 `Map` 的区别

- `Map` 的键可以是任意类型，`WeakMap` 的键只能是对象类型
- `WeakMap` 键名所指向的对象，不计入垃圾回收机制

`WeakMap` 的属性跟操作方法与 `Map` 一致，同 `WeakSet` 一样，因为是弱引用，所以 `WeakMap` 也没有遍历方法

## 类型转换

### `Map` 转为 `Array`

```js
// 解构
const map = new Map([
  [1, 1],
  [2, 2],
  [3, 3],
])
console.log([...map])
// [[1, 1], [2, 2], [3, 3]]

// Array.from()
const map = new Map([
  [1, 1],
  [2, 2],
  [3, 3],
])
console.log(Array.from(map))
// [[1, 1], [2, 2], [3, 3]]
```

### `Array` 转为 `Map`

```js
const map = new Map([
  [1, 1],
  [2, 2],
  [3, 3],
])
console.log(map)
// Map {1 => 1, 2 => 2, 3 => 3}
```

### `Map` 转为 `Object`

```js
// 非字符串键名会被转换为字符串
function mapToObj(map) {
  let obj = Object.create(null)
  for (let [key, value] of map) {
    obj[key] = value
  }
  return obj
}
const map = new Map().set('name', 'vue3js.cn').set('age', '18')
mapToObj(map)
// {name: "vue3js.cn", age: "18"}
```

### `Object` 转为 `Map`

```js
let obj = { a: 1, b: 2 }
let map = new Map(Object.entries(obj))
```
