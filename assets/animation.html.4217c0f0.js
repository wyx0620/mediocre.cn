import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";import{o as i,c as e,b as d}from"./app.1c163dbd.js";const a={},l=d(`<h1 id="css\u52A8\u753B" tabindex="-1"><a class="header-anchor" href="#css\u52A8\u753B" aria-hidden="true">#</a> Css\u52A8\u753B</h1><h2 id="\u4E0B\u96EA\u6548\u679C" tabindex="-1"><a class="header-anchor" href="#\u4E0B\u96EA\u6548\u679C" aria-hidden="true">#</a> \u4E0B\u96EA\u6548\u679C</h2><p>::: demo</p><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code>&lt;template&gt;
  &lt;div class=&quot;snowWrap&quot;&gt;
    &lt;div v-for=&quot;item in 160&quot; :key=&quot;item + 1&quot; class=&quot;snow&quot;&gt;&lt;/div&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;style lang=&quot;scss&quot; scoped&gt;
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

    &amp;:nth-child(#{$i}) {
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
&lt;/style&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>:::</p>`,5),s=[l];function r(v,m){return i(),e("div",null,s)}var t=n(a,[["render",r],["__file","animation.html.vue"]]);export{t as default};
