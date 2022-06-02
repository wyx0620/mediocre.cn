# Css动画

## 下雪效果
::: demo
```vue
<template>
  <div class="snowWrap">
    <div v-for="item in 160" :key="item + 1" class="snow"></div>
  </div>
</template>

<style lang="scss" scoped>
.snowWrap {
  width: 300px;
  height: 300px;
  background: radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%);
  overflow: hidden;
  filter: drop-shadow(0 0 10px white);
  margin: 0 auto;
}

@function random_range($min, $max) {
  $rand: random();
  $random_range: $min + floor($rand * (($max - $min) + 1));
  @return $random_range;
}

.snowWrap .snow {
  $total: 160;
  position: absolute;
  width: 10px;
  height: 10px;
  background: white;
  border-radius: 50%;

  @for $i from 1 through $total {
    $random-x: random(300000) * 0.001px;
    $random-offset: random_range(-100000, 100000) * 0.0001px;
    $random-x-end: $random-x + $random-offset;
    $random-x-end-yoyo: $random-x + calc($random-offset / 2);
    $random-yoyo-time: calc(random_range(30000, 80000) / 100000);
    $random-yoyo-y: $random-yoyo-time * 300px;
    $random-scale: random(10000) * 0.0001;
    $fall-duration: random_range(10, 30) * 1s;
    $fall-delay: random(30) * -1s;

    &:nth-child(#{$i}) {
      opacity: random(10000) * 0.0001;
      transform: translate($random-x, -10px) scale($random-scale);
      animation: fall-#{$i} $fall-duration $fall-delay linear infinite;
    }

    @keyframes fall-#{$i} {
      #{percentage($random-yoyo-time)} {
        transform: translate($random-x-end, $random-yoyo-y) scale($random-scale);
      }

      to {
        transform: translate($random-x-end-yoyo, 300px) scale($random-scale);
      }
    }
  }
}
</style>
```
:::
