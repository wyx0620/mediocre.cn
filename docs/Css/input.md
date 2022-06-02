# Css输入框

## 自适应宽度的输入框
::: demo
```vue
<template>
  <div class="autoWidthInput">
    <input placeholder="请输入...">
  </div>
</template>

<style lang="scss">
.autoWidthInput {
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  input {
    width: 100%;
    font-size: 2rem;
    line-height: 2;
    border: 0;
    outline: 0;
    text-decoration: 4px solid underline;
    text-underline-offset: 10px;
    text-align: center;
    background: linear-gradient(currentColor,currentColor) center bottom 6px no-repeat;
    background-size: 10rem 4px;
  }
  input:focus {
    text-decoration-color: dodgerblue;
    background-image: linear-gradient(dodgerblue,dodgerblue)
  }
}
</style>
```
:::

## 修改 placeholder 样式
::: demo
```vue
<template>
  <div class="inputPlaceholder">
    <input placeholder="请输入..." />
  </div>
</template>

<style lang="scss" scoped>
.inputPlaceholder {
  input {
    height: 32px;
    font-size: 16px;
    line-height: 32px;
  }
  input::-webkit-input-placeholder {
    color: blueviolet;
  }
}
</style>
```
:::

## 修改光标颜色
::: demo
```vue
<template>
  <div class="inputCaretColor">
    <input placeholder="请输入..." />
  </div>
</template>

<style lang="scss" scoped>
.inputCaretColor {
  margin: 0 auto;
  input {
    caret-color: dodgerblue;
  }
}
</style>
```
:::

## 删除 type="number" 末尾的箭头
::: demo
```vue
<template>
  <div class="inputNumberNoArrow">
    <input type="number" placeholder="请输入数字..." />
  </div>
</template>

<style lang="scss" scoped>
.inputNumberNoArrow {
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
}
</style>
```
:::

## 删除输入状态线
::: demo
```vue
<template>
  <div class="inputNoOutline">
    <input placeholder="请输入..." />
  </div>
</template>

<style lang="scss" scoped>
.inputNoOutline {
  input {
    outline: none;
  }
}
</style>
```
:::
