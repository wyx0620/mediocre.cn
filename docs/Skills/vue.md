# vue

## 自定义组件中使用 v-model
1. 在父组件中
```vue
<template>
  <div>
    <child-com v-model="list"></child-com>
  </div>
</template>

<script>
import ChildCom from './childCom'

export default {
  name: 'Demo',
  components: { ChildCom },
  data() {
    return {
      list: []
    }
  }
}
</script>
```
2. 在子组件中
```vue
<template>
  <div @click="clickHandle">click</div>
</template>

<script>
export default {
  name: 'ChildCom',
  methods: {
    clickHandle() {
      this.$emit('input', new Date().getTime())
    }
  }
}
</script>
```

## 自定义组件中使用 .sync
1. 在父组件中
```vue
<template>
  <div>
    <child-com :title.sync="myTitle"></child-com>
  </div>
</template>

<script>
import ChildCom from './childCom'

export default {
  name: 'Demo',
  components: { ChildCom },
  data() {
    return {
      myTitle: '123'
    }
  }
}
</script>
```
2. 在子组件中
```vue
<template>
  <div @click="clickHandle">click</div>
</template>

<script>
export default {
  name: 'ChildCom',
  prop: {
    title: {
      type: String,
      default: ''
    }
  },
  methods: {
    clickHandle() {
      this.$emit('update:title', '456')
    }
  }
}
</script>
```
