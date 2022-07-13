import{_ as i}from"./plugin-vue_export-helper.21dcd24c.js";import{o as e,c as n,b as l}from"./app.1c163dbd.js";const d={},s=l(`<h1 id="vue" tabindex="-1"><a class="header-anchor" href="#vue" aria-hidden="true">#</a> vue</h1><h2 id="\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u4E2D\u4F7F\u7528-v-model" tabindex="-1"><a class="header-anchor" href="#\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u4E2D\u4F7F\u7528-v-model" aria-hidden="true">#</a> \u81EA\u5B9A\u4E49\u7EC4\u4EF6\u4E2D\u4F7F\u7528 v-model</h2><ol><li>\u5728\u7236\u7EC4\u4EF6\u4E2D</li></ol><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code>&lt;template&gt;
  &lt;div&gt;
    &lt;child-com v-model=&quot;list&quot;&gt;&lt;/child-com&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
import ChildCom from &#39;./childCom&#39;

export default {
  name: &#39;Demo&#39;,
  components: { ChildCom },
  data() {
    return {
      list: []
    }
  }
}
&lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>\u5728\u5B50\u7EC4\u4EF6\u4E2D</li></ol><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code>&lt;template&gt;
  &lt;div @click=&quot;clickHandle&quot;&gt;click&lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
export default {
  name: &#39;ChildCom&#39;,
  methods: {
    clickHandle() {
      this.$emit(&#39;input&#39;, new Date().getTime())
    }
  }
}
&lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u4E2D\u4F7F\u7528-sync" tabindex="-1"><a class="header-anchor" href="#\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u4E2D\u4F7F\u7528-sync" aria-hidden="true">#</a> \u81EA\u5B9A\u4E49\u7EC4\u4EF6\u4E2D\u4F7F\u7528 .sync</h2><ol><li>\u5728\u7236\u7EC4\u4EF6\u4E2D</li></ol><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code>&lt;template&gt;
  &lt;div&gt;
    &lt;child-com :title.sync=&quot;myTitle&quot;&gt;&lt;/child-com&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
import ChildCom from &#39;./childCom&#39;

export default {
  name: &#39;Demo&#39;,
  components: { ChildCom },
  data() {
    return {
      myTitle: &#39;123&#39;
    }
  }
}
&lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>\u5728\u5B50\u7EC4\u4EF6\u4E2D</li></ol><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code>&lt;template&gt;
  &lt;div @click=&quot;clickHandle&quot;&gt;click&lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
export default {
  name: &#39;ChildCom&#39;,
  prop: {
    title: {
      type: String,
      default: &#39;&#39;
    }
  },
  methods: {
    clickHandle() {
      this.$emit(&#39;update:title&#39;, &#39;456&#39;)
    }
  }
}
&lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,11),v=[s];function a(t,c){return e(),n("div",null,v)}var u=i(d,[["render",a],["__file","vue.html.vue"]]);export{u as default};
