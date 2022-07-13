import{_ as i}from"./plugin-vue_export-helper.21dcd24c.js";import{o as n,c as e,b as l}from"./app.1c163dbd.js";const s={},d=l(`<h1 id="\u57FA\u7840" tabindex="-1"><a class="header-anchor" href="#\u57FA\u7840" aria-hidden="true">#</a> \u57FA\u7840</h1><h2 id="\u963B\u6B62\u5143\u7D20\u70B9\u51FB\u7A7F\u900F" tabindex="-1"><a class="header-anchor" href="#\u963B\u6B62\u5143\u7D20\u70B9\u51FB\u7A7F\u900F" aria-hidden="true">#</a> \u963B\u6B62\u5143\u7D20\u70B9\u51FB\u7A7F\u900F</h2><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code>div {
    pointer-events: none
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u7ED8\u5236\u4E09\u89D2\u5F62" tabindex="-1"><a class="header-anchor" href="#\u7ED8\u5236\u4E09\u89D2\u5F62" aria-hidden="true">#</a> \u7ED8\u5236\u4E09\u89D2\u5F62</h2><p>::: demo</p><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code>&lt;template&gt;
  &lt;div class=&quot;triangleContainer&quot;&gt;
    &lt;div class=&quot;triangle bottom&quot;&gt;&lt;/div&gt;
    &lt;div class=&quot;triangle right&quot;&gt;&lt;/div&gt;
    &lt;div class=&quot;triangle top&quot;&gt;&lt;/div&gt;
    &lt;div class=&quot;triangle left&quot;&gt;&lt;/div&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;style lang=&quot;scss&quot; scoped&gt;
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
&lt;/style&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>:::</p><h2 id="\u7ED8\u5236\u5C0F\u7BAD\u5934" tabindex="-1"><a class="header-anchor" href="#\u7ED8\u5236\u5C0F\u7BAD\u5934" aria-hidden="true">#</a> \u7ED8\u5236\u5C0F\u7BAD\u5934</h2><p>::: demo</p><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code>&lt;template&gt;
  &lt;div class=&quot;arrowContainer&quot;&gt;
    &lt;div class=&quot;arrow bottom&quot;&gt;&lt;/div&gt;
    &lt;div class=&quot;arrow top&quot;&gt;&lt;/div&gt;
    &lt;div class=&quot;arrow right&quot;&gt;&lt;/div&gt;
    &lt;div class=&quot;arrow left&quot;&gt;&lt;/div&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;style lang=&quot;scss&quot; scoped&gt;
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
    &amp;::after {
      content: &quot;&quot;;
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
&lt;/style&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>:::</p><h2 id="\u9690\u85CF\u6EDA\u52A8\u6761" tabindex="-1"><a class="header-anchor" href="#\u9690\u85CF\u6EDA\u52A8\u6761" aria-hidden="true">#</a> \u9690\u85CF\u6EDA\u52A8\u6761</h2><p>::: demo</p><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code>&lt;template&gt;
  &lt;div class=&quot;hiddenScrollbar&quot;&gt;
    &lt;div class=&quot;inner&quot;&gt;inner&lt;/div&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;style lang=&quot;scss&quot; scoped&gt;
.hiddenScrollbar {
  height: 100px;
  overflow-y: auto;
  -ms-overflow-style: none; /* IE 10+ */
  scrollbar-width: none; /* Firefox */
  &amp;::-webkit-scrollbar {
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
&lt;/style&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>:::</p>`,15),r=[d];function a(v,t){return n(),e("div",null,r)}var o=i(s,[["render",a],["__file","base.html.vue"]]);export{o as default};
