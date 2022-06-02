# Css边框

## 动画效果
:::demo
```vue
<template>
  <div class="rotate-light-wrap">
    <div class="conic"></div>
    <div class="conic conic-demo"></div>
  </div>
</template>

<style lang="scss" scoped>
.rotate-light-wrap {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  background: #000;
  .conic {
    position: relative;
    z-index: 0;
    width: 200px;
    height: 150px;
    margin: 20px;
    border-radius: 10px;
    overflow: hidden;
    padding: 2rem;
    box-sizing: border-box;
    &:before {
      content: '';
      position: absolute;
      z-index: -2;
      left: -50%;
      top: -50%;
      width: 200%;
      height: 200%;
      background-color: #1a232a;
      background-repeat: no-repeat;
      background-position: 0 0;
      background-image: conic-gradient(transparent, #a8efff, transparent 30%);
      animation: rotate 4s linear infinite;
      box-sizing: border-box;
    }
    &:after {
      content: '';
      position: absolute;
      z-index: -1;
      left: 6px;
      top: 6px;
      width: calc(100% - 12px);
      height: calc(100% - 12px);
      background: #000;
      border-radius: 5px;
      box-sizing: border-box;
    }
  }
  .conic-demo {
    &:after {
      animation: opacityChange 5s infinite linear;
      box-sizing: border-box;
    }
  }
  @keyframes rotate {
    100% {
      transform: rotate(1turn);
    }
  }
  @keyframes opacityChange {
    50% {
      opacity: .5;
    }
    100% {
      opacity: 1;
    }
  }
}
</style>
```
:::

:::demo
```vue
<template>
  <div class="gradient-border-animation">
    <div class="rainbow"></div>
  </div>
</template>

<style lang="scss" scoped>
.gradient-border-animation {
  .rainbow {
    position: relative;
    z-index: 0;
    width: 200px;
    height: 150px;
    border-radius: 10px;
    overflow: hidden;
    padding: 2rem;
    margin: auto;
    box-sizing: border-box;
    &::before {
      content: '';
      position: absolute;
      z-index: -2;
      left: -50%;
      top: -50%;
      width: 200%;
      height: 200%;
      background-color: #399953;
      background-repeat: no-repeat;
      background-size: 50% 50%, 50% 50%;
      background-position: 0 0, 100% 0, 100% 100%, 0 100%;
      background-image: linear-gradient(#399953, #399953), linear-gradient(#fbb300, #fbb300), linear-gradient(#d53e33, #d53e33), linear-gradient(#377af5, #377af5);
      animation: rotate-1 4s linear infinite;
      box-sizing: border-box;
    }
    &::after {
      content: '';
      position: absolute;
      z-index: -1;
      left: 6px;
      top: 6px;
      width: calc(100% - 12px);
      height: calc(100% - 12px);
      background: white;
      border-radius: 5px;
      animation: opacityChange-1 3s infinite alternate;
      box-sizing: border-box;
    }
  }
  @keyframes rotate-1 {
    100% {
      transform: rotate(1turn);
    }
  }
  @keyframes opacityChange-1 {
    50% {
      opacity:1;
    }
    100% {
      opacity: .5;
    }
  }
}
</style>
```
:::

:::demo
```vue
<template>
  <div class="clip-path-border-animation">
    <div class="box">Hello</div>
    <div class="bg">示意图</div>
  </div>
</template>

<style lang="scss" scoped>
.clip-path-border-animation {
  display: flex;
  flex-wrap: wrap;
  .box,.bg {
    position: relative;
    margin: auto;
    width: 160px;
    line-height: 160px;
    text-align: center;
    font-size: 24px;
    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      border: 2px solid gold;
      transition: all .5s;
      animation: clipPath 3s infinite linear;
    }
  }
  .bg::before {
    background: rgba(255, 215, 0, .5);
  }
  @keyframes clipPath {
    0%,
    100% {
      clip-path: inset(0 0 95% 0);
    }

    25% {
      clip-path: inset(0 95% 0 0);
    }
    50% {
      clip-path: inset(95% 0 0 0);
    }
    75% {
      clip-path: inset(0 0 0 95%);
    }
  }
}
</style>
```
:::

:::demo
```vue
<template>
  <div class="clip-path-border-animation-1">
    <div class="box">Hello</div>
  </div>
</template>

<style lang="scss" scoped>
.clip-path-border-animation-1 {
  display: flex;
  .box {
    position: relative;
    margin: auto;
    width: 120px;
    line-height: 64px;
    text-align: center;
    color: #fff;
    font-size: 20px;
    border: 2px solid gold;
    border-radius: 10px;
    background: gold;
    transition: all .3s;
    cursor: pointer;
    &:hover {
      filter: contrast(1.1);
    }
    &:active {
      filter: contrast(0.9);
    }
    &::before,
    &::after {
      content: "";
      position: absolute;
      top: -10px;
      left: -10px;
      right: -10px;
      bottom: -10px;
      border: 2px solid gold;
      transition: all .5s;
      animation: clipPath-1 3s infinite linear;
      border-radius: 10px;
    }
    &::after {
      animation: clipPath-1 3s infinite -1.5s linear;
    }
  }
  @keyframes clipPath-1 {
    0%,
    100% {
      clip-path: inset(0 0 98% 0);
    }

    25% {
      clip-path: inset(0 98% 0 0);
    }
    50% {
      clip-path: inset(98% 0 0 0);
    }
    75% {
      clip-path: inset(0 0 0 98%);
    }
  }
}
</style>
```
:::

:::demo
```vue
<template>
  <div class="img-border-wrap">
    <div class="skulls"></div>
  </div>
</template>

<style lang="scss" scoped>
.img-border-wrap {
  display: flex;
  .skulls {
    position: relative;
    width: 100px;
    height: 50px;
    margin: auto;
    border: 24px solid;
    border-image: url(https://skullctf.com/images/skull-border.svg);
    border-image-slice: 32;
    border-image-repeat: round;
  }
}
</style>
```
:::

:::demo
```vue
<template>
  <div class="clip-path-img-wrap">
    <div class="box"></div>
  </div>
</template>

<style lang="scss" scoped>
.clip-path-img-wrap {
  display: flex;
  .box {
    width: 200px;
    height: 100px;
    margin: auto;
    border: 10px solid;
    border-image: linear-gradient(45deg, gold, deeppink) 1;
    clip-path: inset(0px round 10px);
    animation: huerotate 6s infinite linear;
    filter: hue-rotate(360deg);
  }
  @keyframes huerotate {
    0% {
      filter: hue-rotate(0deg);
    }
    100% {
      filter: hue-rorate(360deg);
    }
  }
}
</style>
```
:::

## hover效果
:::demo
```vue
<template>
  <div class="hover-light-wrap">
    <div class="container">
      <svg width="300" height="140" OK xmlns="http://www.w3.org/2000/svg">
        <rect x="30" y="30" class="rect" height="80px" width="240px"></rect>
      </svg>
      <div class="hover-text">HOVER ME</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.hover-light-wrap {
  height: 160px;
  background: #000;
  overflow: hidden;
  .container {
    position: relative;
    width: 240px;
    height: 80px;
    margin: 10px auto;
    .hover-text {
      position: absolute;
      top: 30px;
      left: 30px;
      line-height: 80px;
      width: 240px;
      color: #fff;
      font-size: 24px;
      text-align: center;
      cursor: pointer;
    }
    .rect {
      fill: none;
      stroke-width: 3;
      stroke-linejoin: round;
      stroke: #fff;
      stroke-dasharray: 640px;
      stroke-dashoffset: 640px;
      transition: all .5s ease-in-out;
      filter: drop-shadow(0 0 2px #f24983) drop-shadow(0 0 4px #f24983) drop-shadow(0 0 8px #f24983) drop-shadow(0 0 12px #f24983);
    }
    &:hover {
      .rect {
        stroke-dasharray: 640px;
        stroke-dashoffset: 0;
      }
    }
  }
}
</style>
```
:::

:::demo
```vue
<template>
  <div class="hover-length-change">
    <div class="box">HOVER ME</div>
  </div>
</template>

<style lang="scss" scoped>
.hover-length-change {
  .box {
    position: relative;
    width: 140px;
    height: 64px;
    text-align: center;
    line-height: 64px;
    margin: auto;
    border: 1px solid #03A9F3;
    cursor: pointer;
    &::before, &::after {
      content: "";
      position: absolute;
      width: 20px;
      height: 20px;
      transition: .3s ease-in-out;
    }
    &::before {
      top: -5px;
      left: -5px;
      border-top: 1px solid #03A9F3;
      border-left: 1px solid #03A9F3;
    }
    &::after {
      right: -5px;
      bottom: -5px;
      border-bottom: 1px solid #03A9F3;
      border-right: 1px solid #03A9F3;
    }
    &:hover::before, &:hover::after {
      width: calc(100% + 9px);
      height: calc(100% + 9px);
    }
  }
}
</style>
```
:::

:::demo
```vue
<template>
  <div class="dashed-change-wrap">
    <div class="gradient">HOVER ME</div>
    <div class="outline">HOVER ME</div>
  </div>
</template>

<style lang="scss" scoped>
.dashed-change-wrap {
  display: flex;
  justify-content: space-around;
  .gradient,.outline {
    position: relative;
    width: 140px;
    height: 64px;
    text-align: center;
    line-height: 64px;
  }
  .gradient {
    background: linear-gradient(90deg, #333 50%, transparent 0) repeat-x, linear-gradient(90deg, #333 50%, transparent 0) repeat-x, linear-gradient(0deg, #333 50%, transparent 0) repeat-y, linear-gradient(0deg, #333 50%, transparent 0) repeat-y;
    background-size: 4px 1px, 4px 1px, 1px 4px, 1px 4px;
    background-position: 0 0, 0 100%, 0 0, 100% 0;
    cursor: pointer;
    &:hover {
      animation: linearGradientMove .3s infinite linear;
    }
  }
  .outline {
    outline: 1px solid #333;
    outline-offset: -1px;
    transition: all .3s linear;
    cursor: pointer;
    &:hover {
      outline: 1px solid transparent;
      background: linear-gradient(90deg, #333 50%, transparent 0) repeat-x, linear-gradient(90deg, #333 50%, transparent 0) repeat-x, linear-gradient(0deg, #333 50%, transparent 0) repeat-y, linear-gradient(0deg, #333 50%, transparent 0) repeat-y;
      background-size: 4px 1px, 4px 1px, 1px 4px, 1px 4px;
      background-position: 0 0, 0 100%, 0 0, 100% 0;
      animation: linearGradientMove .3s infinite linear;
    }
  }
  @keyframes linearGradientMove {
    100% {
      background-position: 4px 0, -4px 100%, 0 -4px, 100% 4px;
    }
  }
}
</style>
```
:::

:::demo
```vue
<template>
  <div class="hover-overflow-transform">
    <div class="box">Hover Me</div>
    <div class="box bg">Hover Me</div>
  </div>
</template>

<style lang="scss" scoped>
.hover-overflow-transform {
  height: 400px;
  background-color: #000;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
  overflow: hidden;
  .box {
    position: relative;
    width: 200px;
    height: 100px;
    line-height: 100px;
    text-align: center;
    margin-top: 20px;
    overflow: hidden;
    &::after {
      content: "Hover Me";
      position: absolute;
      top: 4px;
      bottom: 4px;
      right: 4px;
      left: 4px;
      line-height: 92px;
      font-size: 24px;
      background: #fff;
      // border-radius: 50%;
      border: 2px solid #000;
      cursor: pointer;
      color: #000;
    }
    &::before {
      content: "";
      position: absolute;
      top: 0;
      bottom: 0;
      right: -20px;
      left: 0;
      background: #9CDCFE;
      //border-radius: 50%;
      transform: rotateZ(-90deg) translate(-100%, -100%);
      transform-origin: top left;
      transition: transform .3s;
      transition-timing-function: linear;
    }
    &:hover {
      filter: contrast(1.2);
    }
    &:hover::before {
      transform: rotateZ(0deg) translate(0%, -0%);
    }
  }
  .bg {
    overflow: unset;
    &::after {
      content: "";
    }
  }
  .box:hover ~ .bg::before {
    transform: rotateZ(0deg) translate(0%, -0%);
  }
}
</style>
```
:::
