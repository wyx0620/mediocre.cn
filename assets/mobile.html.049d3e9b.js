import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";import{o as i,c as n,b as d}from"./app.1c163dbd.js";const a={},s=d(`<h1 id="\u79FB\u52A8\u7AEF" tabindex="-1"><a class="header-anchor" href="#\u79FB\u52A8\u7AEF" aria-hidden="true">#</a> \u79FB\u52A8\u7AEF</h1><h2 id="input\u6846\u952E\u76D8\u5E26\u641C\u7D22\u6309\u952E" tabindex="-1"><a class="header-anchor" href="#input\u6846\u952E\u76D8\u5E26\u641C\u7D22\u6309\u952E" aria-hidden="true">#</a> input\u6846\u952E\u76D8\u5E26\u641C\u7D22\u6309\u952E</h2><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code>&lt;template&gt;
  &lt;form action=&quot;JavaScript:return true&quot; style=&quot;width: 100%&quot;&gt;
    &lt;input
        type=&quot;search&quot;
        v-model=&quot;keywords&quot;
        placeholder=&quot;\u8F93\u5165\u5173\u952E\u5B57\u8FDB\u884C\u641C\u7D22&quot;
        @keyup.enter=&quot;keyupHandle&quot;
    /&gt;
  &lt;/form&gt;
&lt;/template&gt;

&lt;script&gt;
export default {
  data() {
    return {
      keywords: &#39;&#39;
    }
  },
  methods: {
    keyupHandle() {}
  }
}
&lt;/script&gt;

&lt;style&gt;
/* \u9690\u85CF\u6E05\u9664\u6309\u94AE */
input[type=search]::-webkit-search-cancel-button {
  -webkit-appearance: none;
}
/* \u9690\u85CF\u641C\u7D22\u56FE\u6807 */
input[type=search]::-webkit-search-decoration {
  display: none;
}
&lt;/style&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u9002\u914Dipad" tabindex="-1"><a class="header-anchor" href="#\u9002\u914Dipad" aria-hidden="true">#</a> \u9002\u914DiPad</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>&lt;script&gt;
    /(pad|pod|iPad|iPod|iOS)/i.test(navigator.userAgent)&amp;&amp;(head=document.getElementsByTagName(&#39;head&#39;),viewport=document.createElement(&#39;meta&#39;),viewport.name=&#39;viewport&#39;,viewport.content=&#39;target-densitydpi=device-dpi, width=480px, user-scalable=no&#39;,head.length&gt;0&amp;&amp;head[head.length-1].appendChild(viewport));
  &lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),l=[s];function t(r,v){return i(),n("div",null,l)}var m=e(a,[["render",t],["__file","mobile.html.vue"]]);export{m as default};
