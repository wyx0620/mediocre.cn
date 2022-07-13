import{_ as i}from"./plugin-vue_export-helper.21dcd24c.js";import{o as n,c as e,b as l}from"./app.1c163dbd.js";const s={},d=l(`<h1 id="css\u8FB9\u6846" tabindex="-1"><a class="header-anchor" href="#css\u8FB9\u6846" aria-hidden="true">#</a> Css\u8FB9\u6846</h1><h2 id="\u52A8\u753B\u6548\u679C" tabindex="-1"><a class="header-anchor" href="#\u52A8\u753B\u6548\u679C" aria-hidden="true">#</a> \u52A8\u753B\u6548\u679C</h2><p>:::demo</p><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code>&lt;template&gt;
  &lt;div class=&quot;rotate-light-wrap&quot;&gt;
    &lt;div class=&quot;conic&quot;&gt;&lt;/div&gt;
    &lt;div class=&quot;conic conic-demo&quot;&gt;&lt;/div&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;style lang=&quot;scss&quot; scoped&gt;
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
    &amp;:before {
      content: &#39;&#39;;
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
    &amp;:after {
      content: &#39;&#39;;
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
    &amp;:after {
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
&lt;/style&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>:::</p><p>:::demo</p><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code>&lt;template&gt;
  &lt;div class=&quot;gradient-border-animation&quot;&gt;
    &lt;div class=&quot;rainbow&quot;&gt;&lt;/div&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;style lang=&quot;scss&quot; scoped&gt;
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
    &amp;::before {
      content: &#39;&#39;;
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
    &amp;::after {
      content: &#39;&#39;;
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
&lt;/style&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>:::</p><p>:::demo</p><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code>&lt;template&gt;
  &lt;div class=&quot;clip-path-border-animation&quot;&gt;
    &lt;div class=&quot;box&quot;&gt;Hello&lt;/div&gt;
    &lt;div class=&quot;bg&quot;&gt;\u793A\u610F\u56FE&lt;/div&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;style lang=&quot;scss&quot; scoped&gt;
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
    &amp;::before {
      content: &quot;&quot;;
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
&lt;/style&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>:::</p><p>:::demo</p><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code>&lt;template&gt;
  &lt;div class=&quot;clip-path-border-animation-1&quot;&gt;
    &lt;div class=&quot;box&quot;&gt;Hello&lt;/div&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;style lang=&quot;scss&quot; scoped&gt;
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
    &amp;:hover {
      filter: contrast(1.1);
    }
    &amp;:active {
      filter: contrast(0.9);
    }
    &amp;::before,
    &amp;::after {
      content: &quot;&quot;;
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
    &amp;::after {
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
&lt;/style&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>:::</p><p>:::demo</p><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code>&lt;template&gt;
  &lt;div class=&quot;img-border-wrap&quot;&gt;
    &lt;div class=&quot;skulls&quot;&gt;&lt;/div&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;style lang=&quot;scss&quot; scoped&gt;
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
&lt;/style&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>:::</p><p>:::demo</p><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code>&lt;template&gt;
  &lt;div class=&quot;clip-path-img-wrap&quot;&gt;
    &lt;div class=&quot;box&quot;&gt;&lt;/div&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;style lang=&quot;scss&quot; scoped&gt;
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
&lt;/style&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>:::</p><h2 id="hover\u6548\u679C" tabindex="-1"><a class="header-anchor" href="#hover\u6548\u679C" aria-hidden="true">#</a> hover\u6548\u679C</h2><p>:::demo</p><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code>&lt;template&gt;
  &lt;div class=&quot;hover-light-wrap&quot;&gt;
    &lt;div class=&quot;container&quot;&gt;
      &lt;svg width=&quot;300&quot; height=&quot;140&quot; OK xmlns=&quot;http://www.w3.org/2000/svg&quot;&gt;
        &lt;rect x=&quot;30&quot; y=&quot;30&quot; class=&quot;rect&quot; height=&quot;80px&quot; width=&quot;240px&quot;&gt;&lt;/rect&gt;
      &lt;/svg&gt;
      &lt;div class=&quot;hover-text&quot;&gt;HOVER ME&lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;style lang=&quot;scss&quot; scoped&gt;
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
    &amp;:hover {
      .rect {
        stroke-dasharray: 640px;
        stroke-dashoffset: 0;
      }
    }
  }
}
&lt;/style&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>:::</p><p>:::demo</p><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code>&lt;template&gt;
  &lt;div class=&quot;hover-length-change&quot;&gt;
    &lt;div class=&quot;box&quot;&gt;HOVER ME&lt;/div&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;style lang=&quot;scss&quot; scoped&gt;
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
    &amp;::before, &amp;::after {
      content: &quot;&quot;;
      position: absolute;
      width: 20px;
      height: 20px;
      transition: .3s ease-in-out;
    }
    &amp;::before {
      top: -5px;
      left: -5px;
      border-top: 1px solid #03A9F3;
      border-left: 1px solid #03A9F3;
    }
    &amp;::after {
      right: -5px;
      bottom: -5px;
      border-bottom: 1px solid #03A9F3;
      border-right: 1px solid #03A9F3;
    }
    &amp;:hover::before, &amp;:hover::after {
      width: calc(100% + 9px);
      height: calc(100% + 9px);
    }
  }
}
&lt;/style&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>:::</p><p>:::demo</p><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code>&lt;template&gt;
  &lt;div class=&quot;dashed-change-wrap&quot;&gt;
    &lt;div class=&quot;gradient&quot;&gt;HOVER ME&lt;/div&gt;
    &lt;div class=&quot;outline&quot;&gt;HOVER ME&lt;/div&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;style lang=&quot;scss&quot; scoped&gt;
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
    &amp;:hover {
      animation: linearGradientMove .3s infinite linear;
    }
  }
  .outline {
    outline: 1px solid #333;
    outline-offset: -1px;
    transition: all .3s linear;
    cursor: pointer;
    &amp;:hover {
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
&lt;/style&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>:::</p><p>:::demo</p><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code>&lt;template&gt;
  &lt;div class=&quot;hover-overflow-transform&quot;&gt;
    &lt;div class=&quot;box&quot;&gt;Hover Me&lt;/div&gt;
    &lt;div class=&quot;box bg&quot;&gt;Hover Me&lt;/div&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;style lang=&quot;scss&quot; scoped&gt;
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
    &amp;::after {
      content: &quot;Hover Me&quot;;
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
    &amp;::before {
      content: &quot;&quot;;
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
    &amp;:hover {
      filter: contrast(1.2);
    }
    &amp;:hover::before {
      transform: rotateZ(0deg) translate(0%, -0%);
    }
  }
  .bg {
    overflow: unset;
    &amp;::after {
      content: &quot;&quot;;
    }
  }
  .box:hover ~ .bg::before {
    transform: rotateZ(0deg) translate(0%, -0%);
  }
}
&lt;/style&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>:::</p>`,33),v=[d];function a(r,t){return n(),e("div",null,v)}var m=i(s,[["render",a],["__file","border.html.vue"]]);export{m as default};
