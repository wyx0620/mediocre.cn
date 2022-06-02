# 基础

## 阻止点击事件冒泡
```javascript
event.stopPropagation()
```

## 实现一个 promise
```javascript
class CustomPromise {
  static resolve (value) {
    if (value && value.then) {
      return value 
    }
    return new CustomPromise(resolve => resolve(value))
  }

  constructor (fn) {
    this.value = undefined
    this.reason = undefined
    this.status = 'PENDING'

    // 维护一个 resolve/pending 的函数队列
    this.resolveFns = []
    this.rejectFns = []

    const resolve = (value) => {
      // 注意此处的 setTimeout
      setTimeout(() => {
        this.status = 'RESOLVED'
        this.value = value
        this.resolveFns.forEach(({ fn, resolve: res, reject: rej }) => res(fn(value)))
      })
    }

    const reject = (e) => {
      setTimeout(() => {
        this.status = 'REJECTED'
        this.reason = e
        this.rejectFns.forEach(({ fn, resolve: res, reject: rej }) => rej(fn(e)))
      })
    }

    fn(resolve, reject)
  }
  
  then (fn) {
    if (this.status === 'RESOLVED') {
      const result = fn(this.value)
      // 需要返回一个 Promise
      // 如果状态为 resolved，直接执行
      return CustomPromise.resolve(result)
    }
    if (this.status === 'PENDING') {
      // 也是返回一个 Promise
      return new CustomPromise((resolve, reject) => {
        // 推进队列中，resolved 后统一执行
        this.resolveFns.push({ fn, resolve, reject }) 
      })
    }
  }

  catch (fn) {
    if (this.status === 'REJECTED') {
      const result = fn(this.value)
      return CustomPromise.resolve(result)
    }
    if (this.status === 'PENDING') {
      return new CustomPromise((resolve, reject) => {
        this.rejectFns.push({ fn, resolve, reject }) 
      })
    }
  }
}
```

## 事件监听
### 监听某一类型的事件
```javascript
monitorEvents()

monitorEvents(document.body, 'click')
```

### 停止监听
```javascript
unmonitorEvents()

unmonitorEvents(document.body)
```

### 获取 DOM 元素的监听器
```javascript
getEventListeners()

getEventListeners(document.body)
```
