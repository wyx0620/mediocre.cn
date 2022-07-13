import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";import{o as n,c as i,b as d}from"./app.1c163dbd.js";const a={},s=d(`<h1 id="\u65F6\u95F4\u76F8\u5173" tabindex="-1"><a class="header-anchor" href="#\u65F6\u95F4\u76F8\u5173" aria-hidden="true">#</a> \u65F6\u95F4\u76F8\u5173</h1><h2 id="\u5224\u65AD\u662F\u5426\u5728\u65F6\u95F4\u8303\u56F4\u5185" tabindex="-1"><a class="header-anchor" href="#\u5224\u65AD\u662F\u5426\u5728\u65F6\u95F4\u8303\u56F4\u5185" aria-hidden="true">#</a> \u5224\u65AD\u662F\u5426\u5728\u65F6\u95F4\u8303\u56F4\u5185</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>export const isDuringDate = (start, end) =&gt; {
  const curDate = new Date()
  const startDate = new Date(start)
  const endDate = new Date(end)
  return curDate &gt;= startDate &amp;&amp; curDate &lt;= endDate;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u65F6\u95F4\u683C\u5F0F\u5316" tabindex="-1"><a class="header-anchor" href="#\u65F6\u95F4\u683C\u5F0F\u5316" aria-hidden="true">#</a> \u65F6\u95F4\u683C\u5F0F\u5316</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>/**
 * @param {string} fmt \u65F6\u95F4\u683C\u5F0F
 * @param {date} date new Date()
 * dateFormat(&#39;YYYY\u5E74mm\u6708dd\u65E5 HH:MM:SS&#39;, new Date())
 * */
export const dateFormat = (fmt, date) =&gt; {
  let ret;
  const opt = {
    &quot;Y+&quot;: date.getFullYear().toString(),        // \u5E74
    &quot;m+&quot;: (date.getMonth() + 1).toString(),     // \u6708
    &quot;d+&quot;: date.getDate().toString(),            // \u65E5
    &quot;H+&quot;: date.getHours().toString(),           // \u65F6
    &quot;M+&quot;: date.getMinutes().toString(),         // \u5206
    &quot;S+&quot;: date.getSeconds().toString()          // \u79D2
  };
  for (let k in opt) {
    ret = new RegExp(&quot;(&quot; + k + &quot;)&quot;).exec(fmt);
    if (ret) {
      fmt = fmt.replace(ret[1], (ret[1].length === 1) ? (opt[k]) : (opt[k].padStart(ret[1].length, &quot;0&quot;)))
    }
  }
  return fmt;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u83B7\u53D6\u6307\u5B9A\u65E5\u671F\u7684\u524D\u51E0\u5929\u6216\u540E\u51E0\u5929" tabindex="-1"><a class="header-anchor" href="#\u83B7\u53D6\u6307\u5B9A\u65E5\u671F\u7684\u524D\u51E0\u5929\u6216\u540E\u51E0\u5929" aria-hidden="true">#</a> \u83B7\u53D6\u6307\u5B9A\u65E5\u671F\u7684\u524D\u51E0\u5929\u6216\u540E\u51E0\u5929</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>export const getNextDate = (date, day) =&gt; {
  const dd = new Date(date)
  dd.setDate(dd.getDate() + day)
  const y = dd.getFullYear()
  const m = dd.getMonth() + 1 &lt; 10 ? &#39;0&#39; + (dd.getMonth() + 1) : dd.getMonth() + 1
  const d = dd.getDate() &lt; 10 ? &#39;0&#39; + dd.getDate() : dd.getDate()
  return y + &#39;-&#39; + m + &#39;-&#39; + d
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u83B7\u53D6\u67D0\u4E2A\u65E5\u671F\u7684\u5F53\u6708\u7B2C\u4E00\u5929\u548C\u5F53\u6708\u6700\u540E\u4E00\u5929" tabindex="-1"><a class="header-anchor" href="#\u83B7\u53D6\u67D0\u4E2A\u65E5\u671F\u7684\u5F53\u6708\u7B2C\u4E00\u5929\u548C\u5F53\u6708\u6700\u540E\u4E00\u5929" aria-hidden="true">#</a> \u83B7\u53D6\u67D0\u4E2A\u65E5\u671F\u7684\u5F53\u6708\u7B2C\u4E00\u5929\u548C\u5F53\u6708\u6700\u540E\u4E00\u5929</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>export const getFirstAndLastDate = (date) =&gt; {
  const year = date.getFullYear()
  let month = date.getMonth() + 1
  month = month &lt; 10 ? &#39;0&#39; + month : month
  const lastDate = new Date(year, month, 0).getDate()
  return {
    first: year + &#39;-&#39; + month + &#39;-01 00:00:00&#39;,
    last: year + &#39;-&#39; + month + &#39;-&#39; + lastDate + &#39; 23:59:59&#39;
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u6839\u636E\u8EAB\u4EFD\u8BC1\u83B7\u53D6\u51FA\u751F\u65E5\u671F" tabindex="-1"><a class="header-anchor" href="#\u6839\u636E\u8EAB\u4EFD\u8BC1\u83B7\u53D6\u51FA\u751F\u65E5\u671F" aria-hidden="true">#</a> \u6839\u636E\u8EAB\u4EFD\u8BC1\u83B7\u53D6\u51FA\u751F\u65E5\u671F</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>export const birthdayByIdCard = (code) =&gt; {
    if (code) {
        return \`\${code.slice(6, 10)}\u5E74\${code.slice(10, 12)}\u6708\${code.slice(12, 14)}\u65E5\`
    } else {
        return &#39;&#39;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u6839\u636E\u8EAB\u4EFD\u8BC1\u83B7\u53D6\u6027\u522B" tabindex="-1"><a class="header-anchor" href="#\u6839\u636E\u8EAB\u4EFD\u8BC1\u83B7\u53D6\u6027\u522B" aria-hidden="true">#</a> \u6839\u636E\u8EAB\u4EFD\u8BC1\u83B7\u53D6\u6027\u522B</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>export const genderByIdCard = (code) =&gt; {
    if (code) {
        return code.substr(16, 1) % 2 === 1 ? &#39;\u7537&#39; : &#39;\u5973&#39;
    } else {
        return &#39;&#39;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,13),t=[s];function r(l,c){return n(),i("div",null,t)}var o=e(a,[["render",r],["__file","time.html.vue"]]);export{o as default};
