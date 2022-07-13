import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";import{o as i,c as n,b as l}from"./app.1c163dbd.js";const d={},s=l(`<h1 id="css\u8F93\u5165\u6846" tabindex="-1"><a class="header-anchor" href="#css\u8F93\u5165\u6846" aria-hidden="true">#</a> Css\u8F93\u5165\u6846</h1><h2 id="\u81EA\u9002\u5E94\u5BBD\u5EA6\u7684\u8F93\u5165\u6846" tabindex="-1"><a class="header-anchor" href="#\u81EA\u9002\u5E94\u5BBD\u5EA6\u7684\u8F93\u5165\u6846" aria-hidden="true">#</a> \u81EA\u9002\u5E94\u5BBD\u5EA6\u7684\u8F93\u5165\u6846</h2><p>::: demo</p><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code>&lt;template&gt;
  &lt;div class=&quot;autoWidthInput&quot;&gt;
    &lt;input placeholder=&quot;\u8BF7\u8F93\u5165...&quot;&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;style lang=&quot;scss&quot;&gt;
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
&lt;/style&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>:::</p><h2 id="\u4FEE\u6539-placeholder-\u6837\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u4FEE\u6539-placeholder-\u6837\u5F0F" aria-hidden="true">#</a> \u4FEE\u6539 placeholder \u6837\u5F0F</h2><p>::: demo</p><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code>&lt;template&gt;
  &lt;div class=&quot;inputPlaceholder&quot;&gt;
    &lt;input placeholder=&quot;\u8BF7\u8F93\u5165...&quot; /&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;style lang=&quot;scss&quot; scoped&gt;
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
&lt;/style&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>:::</p><h2 id="\u4FEE\u6539\u5149\u6807\u989C\u8272" tabindex="-1"><a class="header-anchor" href="#\u4FEE\u6539\u5149\u6807\u989C\u8272" aria-hidden="true">#</a> \u4FEE\u6539\u5149\u6807\u989C\u8272</h2><p>::: demo</p><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code>&lt;template&gt;
  &lt;div class=&quot;inputCaretColor&quot;&gt;
    &lt;input placeholder=&quot;\u8BF7\u8F93\u5165...&quot; /&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;style lang=&quot;scss&quot; scoped&gt;
.inputCaretColor {
  margin: 0 auto;
  input {
    caret-color: dodgerblue;
  }
}
&lt;/style&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>:::</p><h2 id="\u5220\u9664-type-number-\u672B\u5C3E\u7684\u7BAD\u5934" tabindex="-1"><a class="header-anchor" href="#\u5220\u9664-type-number-\u672B\u5C3E\u7684\u7BAD\u5934" aria-hidden="true">#</a> \u5220\u9664 type=&quot;number&quot; \u672B\u5C3E\u7684\u7BAD\u5934</h2><p>::: demo</p><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code>&lt;template&gt;
  &lt;div class=&quot;inputNumberNoArrow&quot;&gt;
    &lt;input type=&quot;number&quot; placeholder=&quot;\u8BF7\u8F93\u5165\u6570\u5B57...&quot; /&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;style lang=&quot;scss&quot; scoped&gt;
.inputNumberNoArrow {
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
}
&lt;/style&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>:::</p><h2 id="\u5220\u9664\u8F93\u5165\u72B6\u6001\u7EBF" tabindex="-1"><a class="header-anchor" href="#\u5220\u9664\u8F93\u5165\u72B6\u6001\u7EBF" aria-hidden="true">#</a> \u5220\u9664\u8F93\u5165\u72B6\u6001\u7EBF</h2><p>::: demo</p><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code>&lt;template&gt;
  &lt;div class=&quot;inputNoOutline&quot;&gt;
    &lt;input placeholder=&quot;\u8BF7\u8F93\u5165...&quot; /&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;style lang=&quot;scss&quot; scoped&gt;
.inputNoOutline {
  input {
    outline: none;
  }
}
&lt;/style&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>:::</p>`,21),t=[s];function a(u,v){return i(),n("div",null,t)}var o=e(d,[["render",a],["__file","input.html.vue"]]);export{o as default};
