import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";import{o as i,c as n,b as l}from"./app.1c163dbd.js";const s={},d=l(`<h1 id="css\u6587\u672C" tabindex="-1"><a class="header-anchor" href="#css\u6587\u672C" aria-hidden="true">#</a> Css\u6587\u672C</h1><h2 id="\u81EA\u5B9A\u4E49\u9009\u5B9A\u7684\u6587\u672C\u6837\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u81EA\u5B9A\u4E49\u9009\u5B9A\u7684\u6587\u672C\u6837\u5F0F" aria-hidden="true">#</a> \u81EA\u5B9A\u4E49\u9009\u5B9A\u7684\u6587\u672C\u6837\u5F0F</h2><p>::: demo</p><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code>&lt;template&gt;
  &lt;div class=&quot;textSelection&quot;&gt;\u8FD9\u662F\u4E00\u6BB5\u9009\u4E2D\u4F1A\u53D8\u7C89\u8272\u7684\u6587\u672C\u3002\u3002\u3002&lt;/div&gt;
&lt;/template&gt;

&lt;style lang=&quot;scss&quot; scoped&gt;
.textSelection::selection {
  color: #FFFFFF;
  background-color: hotpink;
}
&lt;/style&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>:::</p><h2 id="\u7981\u6B62\u9009\u62E9\u6587\u672C" tabindex="-1"><a class="header-anchor" href="#\u7981\u6B62\u9009\u62E9\u6587\u672C" aria-hidden="true">#</a> \u7981\u6B62\u9009\u62E9\u6587\u672C</h2><p>::: demo</p><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code>&lt;template&gt;
  &lt;div class=&quot;textNoSelection&quot;&gt;\u8FD9\u662F\u4E00\u6BB5\u7981\u6B62\u9009\u62E9\u7684\u6587\u672C\u3002\u3002\u3002&lt;/div&gt;
&lt;/template&gt;

&lt;style lang=&quot;scss&quot; scoped&gt;
.textNoSelection {
  user-select: none;
}
&lt;/style&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>:::</p><h2 id="\u5355\u884C\u6587\u672C\u6EA2\u51FA\u65F6\u663E\u793A\u7701\u7565\u53F7" tabindex="-1"><a class="header-anchor" href="#\u5355\u884C\u6587\u672C\u6EA2\u51FA\u65F6\u663E\u793A\u7701\u7565\u53F7" aria-hidden="true">#</a> \u5355\u884C\u6587\u672C\u6EA2\u51FA\u65F6\u663E\u793A\u7701\u7565\u53F7</h2><p>::: demo</p><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code>&lt;template&gt;
  &lt;div class=&quot;oneLineEllipsis&quot;&gt;\u4E16\u754C\u4E0A\u6700\u5927\u7684\u5E78\u798F\u83AB\u8FC7\u4E8E\u4E3A\u4EBA\u6C11\u5E78\u798F\u800C\u594B\u6597\u3002\u5FC3\u4E2D\u88C5\u7740\u767E\u59D3\uFF0C\u624B\u4E2D\u63E1\u6709\u771F\u7406\uFF0C\u811A\u8E0F\u4EBA\u95F4\u6B63\u9053\uFF0C\u6211\u4EEC\u4FE1\u5FC3\u5341\u8DB3\u3001\u529B\u91CF\u5341\u8DB3\u3002&lt;/div&gt;
&lt;/template&gt;

&lt;style lang=&quot;scss&quot; scoped&gt;
.oneLineEllipsis {
  width: 300px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
&lt;/style&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>:::</p><h2 id="\u591A\u884C\u6587\u672C\u6EA2\u51FA\u65F6\u663E\u793A\u7701\u7565\u53F7" tabindex="-1"><a class="header-anchor" href="#\u591A\u884C\u6587\u672C\u6EA2\u51FA\u65F6\u663E\u793A\u7701\u7565\u53F7" aria-hidden="true">#</a> \u591A\u884C\u6587\u672C\u6EA2\u51FA\u65F6\u663E\u793A\u7701\u7565\u53F7</h2><p>::: demo</p><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code>&lt;template&gt;
  &lt;div class=&quot;moreLineEllipsis&quot;&gt;\u9762\u5BF9\u6DF1\u523B\u590D\u6742\u6F14\u53D8\u7684\u56FD\u9645\u5F62\u52BF\uFF0C\u4E2D\u4FC4\u77E2\u5FD7\u4E0D\u6E1D\u6DF1\u5316\u80CC\u9760\u80CC\u6218\u7565\u534F\u4F5C\uFF0C\u80A9\u5E76\u80A9\u7EF4\u62A4\u56FD\u9645\u516C\u5E73\u6B63\u4E49\u3002\u8FD9\u662F\u5BF9\u4E2D\u4FC4\u4E24\u56FD\u4E43\u81F3\u4E16\u754C\u90FD\u5177\u6709\u6DF1\u8FDC\u5F71\u54CD\u7684\u6218\u7565\u6289\u62E9\uFF0C\u8FC7\u53BB\u3001\u73B0\u5728\u3001\u5C06\u6765\u90FD\u4E0D\u4F1A\u52A8\u6447\u3002&lt;/div&gt;
&lt;/template&gt;

&lt;style lang=&quot;scss&quot; scoped&gt;
.moreLineEllipsis {
  width: 300px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  /* \u884C\u6570 */
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
&lt;/style&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>:::</p><h2 id="hover-\u4E0B\u5212\u7EBF\u52A8\u6548" tabindex="-1"><a class="header-anchor" href="#hover-\u4E0B\u5212\u7EBF\u52A8\u6548" aria-hidden="true">#</a> hover \u4E0B\u5212\u7EBF\u52A8\u6548</h2><p>::: demo</p><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code>&lt;template&gt;
  &lt;div class=&quot;hoverTextEffect&quot;&gt;
    \u5386\u53F2\u5F81\u7A0B\u98CE\u4E91\u6FC0\u8361\uFF0C\u4E2D\u56FD\u5171\u4EA7\u515A\u4EBA\u5E26\u9886\u4EBF\u4E07\u4EBA\u6C11\u7ECF\u5343\u96BE\u800C\u767E\u6298\u4E0D\u6320\u3001\u5386\u4E07\u9669\u800C\u77E2\u5FD7\u4E0D\u6E1D\uFF0C\u6210\u5C31\u4E86\u767E\u5E74\u5927\u515A\u7684\u6062\u5B8F\u6C14\u8C61\u3002
    &lt;span&gt;\u4E0D\u5FD8\u521D\u5FC3\uFF0C\u65B9\u5F97\u59CB\u7EC8\u3002&lt;/span&gt;
    \u6211\u4EEC\u552F\u6709\u8E14\u5389\u594B\u53D1\u3001\u7B03\u884C\u4E0D\u6020\uFF0C\u65B9\u80FD\u4E0D\u8D1F\u5386\u53F2\u3001\u4E0D\u8D1F\u65F6\u4EE3\u3001\u4E0D\u8D1F\u4EBA\u6C11\u3002
  &lt;/div&gt;
&lt;/template&gt;

&lt;style lang=&quot;scss&quot; scoped&gt;
.hoverTextEffect {
  span {
    font-weight: bold;
    background: linear-gradient(90deg, #ff3c41, #fc0, #0ebeff) no-repeat 0 100%;
    background-size: 0 3px;
    cursor: pointer;
    transition: 1s all;
    &amp;:hover, &amp;:active {
      color: #00CCCC;
      background-size: 100% 3px;
    }
  }
}
&lt;/style&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>:::</p>`,21),a=[d];function t(v,r){return i(),n("div",null,a)}var o=e(s,[["render",t],["__file","text.html.vue"]]);export{o as default};
