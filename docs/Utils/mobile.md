# 移动端

## input框键盘带搜索按键
```vue
<template>
  <form action="JavaScript:return true" style="width: 100%">
    <input
        type="search"
        v-model="keywords"
        placeholder="输入关键字进行搜索"
        @keyup.enter="keyupHandle"
    />
  </form>
</template>

<script>
export default {
  data() {
    return {
      keywords: ''
    }
  },
  methods: {
    keyupHandle() {}
  }
}
</script>

<style>
/* 隐藏清除按钮 */
input[type=search]::-webkit-search-cancel-button {
  -webkit-appearance: none;
}
/* 隐藏搜索图标 */
input[type=search]::-webkit-search-decoration {
  display: none;
}
</style>
```

## 适配iPad
```javascript
<script>
    /(pad|pod|iPad|iPod|iOS)/i.test(navigator.userAgent)&&(head=document.getElementsByTagName('head'),viewport=document.createElement('meta'),viewport.name='viewport',viewport.content='target-densitydpi=device-dpi, width=480px, user-scalable=no',head.length>0&&head[head.length-1].appendChild(viewport));
  </script>
```
