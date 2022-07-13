import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";import{o as i,c as n,b as s}from"./app.1c163dbd.js";const d={},r=s(`<h1 id="\u57FA\u7840" tabindex="-1"><a class="header-anchor" href="#\u57FA\u7840" aria-hidden="true">#</a> \u57FA\u7840</h1><h2 id="\u963B\u6B62\u70B9\u51FB\u4E8B\u4EF6\u5192\u6CE1" tabindex="-1"><a class="header-anchor" href="#\u963B\u6B62\u70B9\u51FB\u4E8B\u4EF6\u5192\u6CE1" aria-hidden="true">#</a> \u963B\u6B62\u70B9\u51FB\u4E8B\u4EF6\u5192\u6CE1</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>event.stopPropagation()
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="\u5B9E\u73B0\u4E00\u4E2A-promise" tabindex="-1"><a class="header-anchor" href="#\u5B9E\u73B0\u4E00\u4E2A-promise" aria-hidden="true">#</a> \u5B9E\u73B0\u4E00\u4E2A promise</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>class CustomPromise {
  static resolve (value) {
    if (value &amp;&amp; value.then) {
      return value 
    }
    return new CustomPromise(resolve =&gt; resolve(value))
  }

  constructor (fn) {
    this.value = undefined
    this.reason = undefined
    this.status = &#39;PENDING&#39;

    // \u7EF4\u62A4\u4E00\u4E2A resolve/pending \u7684\u51FD\u6570\u961F\u5217
    this.resolveFns = []
    this.rejectFns = []

    const resolve = (value) =&gt; {
      // \u6CE8\u610F\u6B64\u5904\u7684 setTimeout
      setTimeout(() =&gt; {
        this.status = &#39;RESOLVED&#39;
        this.value = value
        this.resolveFns.forEach(({ fn, resolve: res, reject: rej }) =&gt; res(fn(value)))
      })
    }

    const reject = (e) =&gt; {
      setTimeout(() =&gt; {
        this.status = &#39;REJECTED&#39;
        this.reason = e
        this.rejectFns.forEach(({ fn, resolve: res, reject: rej }) =&gt; rej(fn(e)))
      })
    }

    fn(resolve, reject)
  }
  
  then (fn) {
    if (this.status === &#39;RESOLVED&#39;) {
      const result = fn(this.value)
      // \u9700\u8981\u8FD4\u56DE\u4E00\u4E2A Promise
      // \u5982\u679C\u72B6\u6001\u4E3A resolved\uFF0C\u76F4\u63A5\u6267\u884C
      return CustomPromise.resolve(result)
    }
    if (this.status === &#39;PENDING&#39;) {
      // \u4E5F\u662F\u8FD4\u56DE\u4E00\u4E2A Promise
      return new CustomPromise((resolve, reject) =&gt; {
        // \u63A8\u8FDB\u961F\u5217\u4E2D\uFF0Cresolved \u540E\u7EDF\u4E00\u6267\u884C
        this.resolveFns.push({ fn, resolve, reject }) 
      })
    }
  }

  catch (fn) {
    if (this.status === &#39;REJECTED&#39;) {
      const result = fn(this.value)
      return CustomPromise.resolve(result)
    }
    if (this.status === &#39;PENDING&#39;) {
      return new CustomPromise((resolve, reject) =&gt; {
        this.rejectFns.push({ fn, resolve, reject }) 
      })
    }
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u4E8B\u4EF6\u76D1\u542C" tabindex="-1"><a class="header-anchor" href="#\u4E8B\u4EF6\u76D1\u542C" aria-hidden="true">#</a> \u4E8B\u4EF6\u76D1\u542C</h2><h3 id="\u76D1\u542C\u67D0\u4E00\u7C7B\u578B\u7684\u4E8B\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u76D1\u542C\u67D0\u4E00\u7C7B\u578B\u7684\u4E8B\u4EF6" aria-hidden="true">#</a> \u76D1\u542C\u67D0\u4E00\u7C7B\u578B\u7684\u4E8B\u4EF6</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>monitorEvents()

monitorEvents(document.body, &#39;click&#39;)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u505C\u6B62\u76D1\u542C" tabindex="-1"><a class="header-anchor" href="#\u505C\u6B62\u76D1\u542C" aria-hidden="true">#</a> \u505C\u6B62\u76D1\u542C</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>unmonitorEvents()

unmonitorEvents(document.body)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u83B7\u53D6-dom-\u5143\u7D20\u7684\u76D1\u542C\u5668" tabindex="-1"><a class="header-anchor" href="#\u83B7\u53D6-dom-\u5143\u7D20\u7684\u76D1\u542C\u5668" aria-hidden="true">#</a> \u83B7\u53D6 DOM \u5143\u7D20\u7684\u76D1\u542C\u5668</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>getEventListeners()

getEventListeners(document.body)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,12),a=[r];function l(v,c){return i(),n("div",null,a)}var m=e(d,[["render",l],["__file","base.html.vue"]]);export{m as default};
