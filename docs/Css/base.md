# 基础

## 阻止元素点击穿透
```css
div {
    pointer-events: none
}
```

## 绘制三角形
::: demo
```vue
<template>
  <div class="triangleContainer">
    <div class="triangle bottom"></div>
    <div class="triangle right"></div>
    <div class="triangle top"></div>
    <div class="triangle left"></div>
  </div>
</template>

<style lang="scss" scoped>
.triangleContainer {
  display: flex;
  align-items: center;
  justify-content: center;
  .triangle {
    display: inline-block;
    margin-right: 10px;
    border: solid 10px transparent;
  }
  .bottom {
    border-top-color: #0097a7;
  }
  .top {
    border-bottom-color: #b2ebf2;
  }
  .left {
    border-right-color: #00bcd4;
  }
  .right {
    border-left-color: #009688;
  }
}
</style>
```
:::

## 绘制小箭头
::: demo
```vue
<template>
  <div class="arrowContainer">
    <div class="arrow bottom"></div>
    <div class="arrow top"></div>
    <div class="arrow right"></div>
    <div class="arrow left"></div>
  </div>
</template>

<style lang="scss" scoped>
.arrowContainer {
  display: flex;
  align-items: center;
  justify-content: center;
  .arrow {
    width: 0;
    height: 0;
    border: 16px solid;
    border-color: transparent #cddc39 transparent transparent;
    margin-right: 10px;
    position: relative;
    &::after {
      content: "";
      position: absolute;
      right: -20px;
      top: -16px;
      border: 16px solid;
      border-color: transparent #fff transparent transparent;
    }
  }
  .bottom {
    transform: rotate(270deg);
  }
  .top {
    transform: rotate(90deg);
  }
  .left {
    transform: rotate(180deg);
  }
  .right {
    transform: rotate(0deg);
  }
}
</style>
```
:::

## 隐藏滚动条
::: demo
```vue
<template>
  <div class="hiddenScrollbar">
    <div class="inner">inner</div>
  </div>
</template>

<style lang="scss" scoped>
.hiddenScrollbar {
  height: 100px;
  overflow-y: auto;
  -ms-overflow-style: none; /* IE 10+ */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none; /* Chrome Safari */
  }
  .inner {
    height: 200px;
    color: #FFFFFF;
    font-size: 30px;
    text-align: center;
    background-color: blueviolet;
  }
}
</style>
```
:::
