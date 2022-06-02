# Css文本

## 自定义选定的文本样式
::: demo
```vue
<template>
  <div class="textSelection">这是一段选中会变粉色的文本。。。</div>
</template>

<style lang="scss" scoped>
.textSelection::selection {
  color: #FFFFFF;
  background-color: hotpink;
}
</style>
```
:::

## 禁止选择文本
::: demo
```vue
<template>
  <div class="textNoSelection">这是一段禁止选择的文本。。。</div>
</template>

<style lang="scss" scoped>
.textNoSelection {
  user-select: none;
}
</style>
```
:::

## 单行文本溢出时显示省略号
::: demo
```vue
<template>
  <div class="oneLineEllipsis">世界上最大的幸福莫过于为人民幸福而奋斗。心中装着百姓，手中握有真理，脚踏人间正道，我们信心十足、力量十足。</div>
</template>

<style lang="scss" scoped>
.oneLineEllipsis {
  width: 300px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
</style>
```
:::

## 多行文本溢出时显示省略号
::: demo
```vue
<template>
  <div class="moreLineEllipsis">面对深刻复杂演变的国际形势，中俄矢志不渝深化背靠背战略协作，肩并肩维护国际公平正义。这是对中俄两国乃至世界都具有深远影响的战略抉择，过去、现在、将来都不会动摇。</div>
</template>

<style lang="scss" scoped>
.moreLineEllipsis {
  width: 300px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  /* 行数 */
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
</style>
```
:::

## hover 下划线动效
::: demo
```vue
<template>
  <div class="hoverTextEffect">
    历史征程风云激荡，中国共产党人带领亿万人民经千难而百折不挠、历万险而矢志不渝，成就了百年大党的恢宏气象。
    <span>不忘初心，方得始终。</span>
    我们唯有踔厉奋发、笃行不怠，方能不负历史、不负时代、不负人民。
  </div>
</template>

<style lang="scss" scoped>
.hoverTextEffect {
  span {
    font-weight: bold;
    background: linear-gradient(90deg, #ff3c41, #fc0, #0ebeff) no-repeat 0 100%;
    background-size: 0 3px;
    cursor: pointer;
    transition: 1s all;
    &:hover, &:active {
      color: #00CCCC;
      background-size: 100% 3px;
    }
  }
}
</style>
```
:::
