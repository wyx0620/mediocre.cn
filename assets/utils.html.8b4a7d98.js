import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";import{o as i,c as n,b as a}from"./app.1c163dbd.js";const s={},d=a(`<h1 id="\u5E38\u7528\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u5E38\u7528\u65B9\u6CD5" aria-hidden="true">#</a> \u5E38\u7528\u65B9\u6CD5</h1><h2 id="\u56FE\u7247\u8F6Cbase64" tabindex="-1"><a class="header-anchor" href="#\u56FE\u7247\u8F6Cbase64" aria-hidden="true">#</a> \u56FE\u7247\u8F6Cbase64</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>function imgToBase64(url) {
  let img = new Image()
  img.src = url
  img.onload = () =&gt; {
    const canvas = document.createElement(&#39;canvas&#39;)
    canvas.width = img.width
    canvas.height = img.height
    const ctx = canvas.getContext(&#39;2d&#39;)
    ctx.drawImage(img, 0, 0, img.width, img.height)
    const dataUrl = canvas.toDataURL(&#39;image/png&#39;)
    console.log(dataUrl)
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u6BCF\u9694n\u4E2A\u5B57\u7B26\u6DFB\u52A0\u4E1C\u897F" tabindex="-1"><a class="header-anchor" href="#\u6BCF\u9694n\u4E2A\u5B57\u7B26\u6DFB\u52A0\u4E1C\u897F" aria-hidden="true">#</a> \u6BCF\u9694n\u4E2A\u5B57\u7B26\u6DFB\u52A0\u4E1C\u897F</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>function strInsert(str, n) {
    let reg = new RegExp(&#39;\\\\W{1,&#39; + n + &#39;}&#39;, &#39;g&#39;)
    return str.match(reg).join(&#39;\\n&#39;)
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u83B7\u53D6url\u53C2\u6570" tabindex="-1"><a class="header-anchor" href="#\u83B7\u53D6url\u53C2\u6570" aria-hidden="true">#</a> \u83B7\u53D6URL\u53C2\u6570</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>export const getUrl = function (name) {
  const arrLast = window.location.href.split(&#39;?&#39;)[1]
  if (typeof (arrLast) !== &#39;undefined&#39;) {
    const items = arrLast.split(&#39;&amp;&#39;)
    for (let i = 0; i &lt; items.length; i++) {
      if (items[i].split(&#39;=&#39;)[0] === name &amp;&amp; items[i].split(&#39;=&#39;)[1]) {
        return items[i].split(&#39;=&#39;)[1]
      }
    }
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u5F53\u524D\u7CFB\u7EDF\u73AF\u5883\u5224\u8BFB" tabindex="-1"><a class="header-anchor" href="#\u5F53\u524D\u7CFB\u7EDF\u73AF\u5883\u5224\u8BFB" aria-hidden="true">#</a> \u5F53\u524D\u7CFB\u7EDF\u73AF\u5883\u5224\u8BFB</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>export const getPhoneType = () =&gt; {
  const browser = {
    versions: () =&gt; {
      const u = navigator.userAgent
      const app = navigator.appVersion
      return {
        // \u79FB\u52A8\u7EC8\u7AEF\u6D4F\u89C8\u5668\u7248\u672C\u4FE1\u606F
        trident: u.indexOf(&#39;Trident&#39;) &gt; -1, // IE\u5185\u6838
        presto: u.indexOf(&#39;Presto&#39;) &gt; -1, // opera\u5185\u6838
        webKit: u.indexOf(&#39;AppleWebKit&#39;) &gt; -1, // \u82F9\u679C\u3001\u8C37\u6B4C\u5185\u6838
        gecko: u.indexOf(&#39;Gecko&#39;) &gt; -1 &amp;&amp; u.indexOf(&#39;KHTML&#39;) == -1, // \u706B\u72D0\u5185\u6838
        mobile:
          !!u.match(/AppleWebKit.*Mobile/i) ||
          !!u.match(
            /MIDP|SymbianOS|NOKIA|SAMSUNG|LG|NEC|TCL|Alcatel|BIRD|DBTEL|Dopod|PHILIPS|HAIER|LENOVO|MOT-|Nokia|SonyEricsson|SIE-|Amoi|ZTE/
          ), // \u662F\u5426\u4E3A\u79FB\u52A8\u7EC8\u7AEF
        ios: !!u.match(/\\(i[^;]+;( U;)? CPU.+Mac OS X/), // ios\u7EC8\u7AEF
        android: u.indexOf(&#39;Android&#39;) &gt; -1 || u.indexOf(&#39;Linux&#39;) &gt; -1, // android\u7EC8\u7AEF\u6216\u8005uc\u6D4F\u89C8\u5668
        iPhone: u.indexOf(&#39;iPhone&#39;) &gt; -1 || u.indexOf(&#39;Mac&#39;) &gt; -1, // \u662F\u5426\u4E3AiPhone\u6216\u8005QQHD\u6D4F\u89C8\u5668
        iPad: u.indexOf(&#39;iPad&#39;) &gt; -1, // \u662F\u5426iPad
        webApp: u.indexOf(&#39;Safari&#39;) == -1 // \u662F\u5426web\u5E94\u8BE5\u7A0B\u5E8F\uFF0C\u6CA1\u6709\u5934\u90E8\u4E0E\u5E95\u90E8
      }
    },
    language: (navigator.browserLanguage || navigator.language).toLowerCase()
  }
  if (
    browser.versions.iPhone ||
    browser.versions.iPad ||
    browser.versions.ios
  ) {
    return &#39;ios&#39;
  }
  if (browser.versions.android) {
    return &#39;android&#39;
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u4E0B\u8F7D\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u4E0B\u8F7D\u6587\u4EF6" aria-hidden="true">#</a> \u4E0B\u8F7D\u6587\u4EF6</h2><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code>&lt;script&gt;
export default {
  methods: {
    fileDownloadHandle(url, name) {
      this.getBlobHandle(url).then(blob =&gt; {
        this.saveFileHandle(blob, name)
      })
    },
    getBlobHandle(url) {
      return new Promise(resolve =&gt; {
        const xhr = new XMLHttpRequest()
        xhr.open(&#39;GET&#39;, url, true)
        xhr.responseType = &#39;blob&#39;
        xhr.onload = () =&gt; {
          if (xhr.status === 200) {
            resolve(xhr.response)
          }
        }
        xhr.send()
      })
    },
    saveFileHandle(blob, name) {
      if (window.navigator[&#39;msSaveOrOpenBlob&#39;]) {
        window.navigator[&#39;msSaveBlob&#39;](blob, name)
      } else {
        const link = document.createElement(&#39;a&#39;)
        const body = document.querySelector(&#39;body&#39;)
        link.href = window.URL.createObjectURL(blob)
        link.download = name
        link.style.display = &#39;none&#39;
        body.appendChild(link)
        link.click()
        body.removeChild(link)
        window.URL.revokeObjectURL(link.href)
      }
    },
  }
}
&lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u5B9E\u73B0-lodash-get-\u5D4C\u5957\u8C03\u7528" tabindex="-1"><a class="header-anchor" href="#\u5B9E\u73B0-lodash-get-\u5D4C\u5957\u8C03\u7528" aria-hidden="true">#</a> \u5B9E\u73B0 lodash.get \u5D4C\u5957\u8C03\u7528</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>function get (source, path, defaultValue = undefined) {
  // a[3].b -&gt; a.3.b
  const paths = path.replace(/\\[(\\d+)\\]/g, &#39;.$1&#39;).split(&#39;.&#39;)
  let result = source
  for (const p of paths) {
    result = Object(result)[p]
    if (result === undefined) {
      return defaultValue
    }
  }
  return result
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u5224\u65AD\u4E00\u4E2A\u6570\u503C\u4E3A\u6574\u6570" tabindex="-1"><a class="header-anchor" href="#\u5224\u65AD\u4E00\u4E2A\u6570\u503C\u4E3A\u6574\u6570" aria-hidden="true">#</a> \u5224\u65AD\u4E00\u4E2A\u6570\u503C\u4E3A\u6574\u6570</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>// ES6
Number.isInteger(num)

// ES5
if (!Number.isInteger) {
  Number.isInteger = function(num) {
    return typeof num == &quot;number&quot; &amp;&amp; num % 1 == 0
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u7528\u6237\u540D\u5904\u7406" tabindex="-1"><a class="header-anchor" href="#\u7528\u6237\u540D\u5904\u7406" aria-hidden="true">#</a> \u7528\u6237\u540D\u5904\u7406</h2><h3 id="\u53EA\u4FDD\u7559\u59D3\u6C0F" tabindex="-1"><a class="header-anchor" href="#\u53EA\u4FDD\u7559\u59D3\u6C0F" aria-hidden="true">#</a> \u53EA\u4FDD\u7559\u59D3\u6C0F</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>function formatName(name) {
  const reg = /(?&lt;=.)./g
  return name.replace(reg, &#39;*&#39;)
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u4E2D\u95F4\u5B57\u7B26\u7279\u6B8A\u5904\u7406" tabindex="-1"><a class="header-anchor" href="#\u4E2D\u95F4\u5B57\u7B26\u7279\u6B8A\u5904\u7406" aria-hidden="true">#</a> \u4E2D\u95F4\u5B57\u7B26\u7279\u6B8A\u5904\u7406</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>function formatName(name) {
  let str = &#39;&#39;
  if (name.length === 2) {
    str = name.substr(0, 1) + &#39;*&#39;
  } else if (name.length &gt; 2) {
    let char = &#39;&#39;
    for (let i = 0; i &lt; name.length - 2; i++) {
      char += &#39;*&#39;
    }
    str = name.substr(0, 1) + char + name.substr(-1, 1)
  } else {
    str = name
  }
  return str
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u624B\u673A\u53F7\u7279\u6B8A\u5904\u7406" tabindex="-1"><a class="header-anchor" href="#\u624B\u673A\u53F7\u7279\u6B8A\u5904\u7406" aria-hidden="true">#</a> \u624B\u673A\u53F7\u7279\u6B8A\u5904\u7406</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>function formatPhone(phone) {
  return phone.substr(0, 3) + &#39;****&#39; + phone.substr(7)
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u6570\u5B57\u8F6C\u6362" tabindex="-1"><a class="header-anchor" href="#\u6570\u5B57\u8F6C\u6362" aria-hidden="true">#</a> \u6570\u5B57\u8F6C\u6362</h2><h3 id="\u6570\u5B57\u8F6C\u91D1\u989D" tabindex="-1"><a class="header-anchor" href="#\u6570\u5B57\u8F6C\u91D1\u989D" aria-hidden="true">#</a> \u6570\u5B57\u8F6C\u91D1\u989D</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>function ToString(n) {
    if (!/^(0|[1-9]\\d*)(\\.\\d+)?$/.test(n)){
        return &quot;\u6570\u636E\u975E\u6CD5&quot;;  //\u5224\u65AD\u6570\u636E\u662F\u5426\u5927\u4E8E0
    }

    let unit = &quot;\u5343\u767E\u62FE\u4EBF\u5343\u767E\u62FE\u4E07\u5343\u767E\u62FE\u5143\u89D2\u5206&quot;, str = &quot;&quot;;
    n += &quot;00&quot;;  

    let indexpoint = n.indexOf(&#39;.&#39;);  // \u5982\u679C\u662F\u5C0F\u6570\uFF0C\u622A\u53D6\u5C0F\u6570\u70B9\u524D\u9762\u7684\u4F4D\u6570

    if (indexpoint &gt;= 0){

        n = n.substring(0, indexpoint) + n.substr(indexpoint+1, 2);   // \u82E5\u4E3A\u5C0F\u6570\uFF0C\u622A\u53D6\u9700\u8981\u4F7F\u7528\u7684unit\u5355\u4F4D
    }

    unit = unit.substr(unit.length - n.length);  // \u82E5\u4E3A\u6574\u6570\uFF0C\u622A\u53D6\u9700\u8981\u4F7F\u7528\u7684unit\u5355\u4F4D
    for (let i=0; i &lt; n.length; i++){
        str += &quot;\u96F6\u58F9\u8D30\u53C1\u8086\u4F0D\u9646\u67D2\u634C\u7396&quot;.charAt(n.charAt(i)) + unit.charAt(i);  //\u904D\u5386\u8F6C\u5316\u4E3A\u5927\u5199\u7684\u6570\u5B57
    }

    return str.replace(/\u96F6(\u5343|\u767E|\u62FE|\u89D2)/g, &quot;\u96F6&quot;).replace(/(\u96F6)+/g, &quot;\u96F6&quot;).replace(/\u96F6(\u4E07|\u4EBF|\u5143)/g, &quot;$1&quot;).replace(/(\u4EBF)\u4E07|\u58F9(\u62FE)/g, &quot;$1$2&quot;).replace(/^\u5143\u96F6?|\u96F6\u5206/g, &quot;&quot;).replace(/\u5143$/g, &quot;\u5143\u6574&quot;); // \u66FF\u6362\u6389\u6570\u5B57\u91CC\u9762\u7684\u96F6\u5B57\u7B26\uFF0C\u5F97\u5230\u7ED3\u679C

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u6570\u5B57\u8F6C\u5927\u5199" tabindex="-1"><a class="header-anchor" href="#\u6570\u5B57\u8F6C\u5927\u5199" aria-hidden="true">#</a> \u6570\u5B57\u8F6C\u5927\u5199</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>function numberToUppercase(n) {
  if (!/^(0|[1-9]\\d*)(\\.\\d+)?$/.test(n)){
    return &#39;&#39;
  }
  let unit = &quot;\u5343\u767E\u5341\u4EBF\u5343\u767E\u5341\u4E07\u5343\u767E\u5341\u4E2A&quot;
  let str = &#39;&#39;
  n += &#39;&#39;
  unit = unit.substr(unit.length - n.length)
  for (let i = 0; i &lt; n.length; i++){
    str += &#39;\u96F6\u4E00\u4E8C\u4E09\u56DB\u4E94\u516D\u4E03\u516B\u4E5D&#39;.charAt(n.charAt(i)) + unit.charAt(i)
  }
  return str.replace(/\u96F6(\u5343|\u767E|\u5341)/g, &quot;\u96F6&quot;).replace(/(\u96F6)+/g, &quot;\u96F6&quot;).replace(/\u96F6(\u4E07|\u4EBF|\u4E2A)/g, &quot;$1&quot;).replace(/(\u4EBF)\u4E07|\u4E00(\u5341)/g, &quot;$1$2&quot;).replace(/\u4E2A$/g, &quot;&quot;);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u6570\u5B57\u8F6C\u82F1\u6587\u5B57\u6BCD" tabindex="-1"><a class="header-anchor" href="#\u6570\u5B57\u8F6C\u82F1\u6587\u5B57\u6BCD" aria-hidden="true">#</a> \u6570\u5B57\u8F6C\u82F1\u6587\u5B57\u6BCD</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>function numberToLetter(index) {
  // \u4ECE 0 \u5F00\u59CB
  return String.fromCharCode(index + 65)
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u6539\u53D8\u6570\u7EC4\u4E2D\u5143\u7D20\u4F4D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u6539\u53D8\u6570\u7EC4\u4E2D\u5143\u7D20\u4F4D\u7F6E" aria-hidden="true">#</a> \u6539\u53D8\u6570\u7EC4\u4E2D\u5143\u7D20\u4F4D\u7F6E</h2><h3 id="\u4EA4\u6362\u4F4D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u4EA4\u6362\u4F4D\u7F6E" aria-hidden="true">#</a> \u4EA4\u6362\u4F4D\u7F6E</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>function swapArr(arr, index1, index2) {
  arr[index1] = arr.splice(index2, 1, arr[index1])[0]
  return arr
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u7F6E\u9876\u79FB\u52A8" tabindex="-1"><a class="header-anchor" href="#\u7F6E\u9876\u79FB\u52A8" aria-hidden="true">#</a> \u7F6E\u9876\u79FB\u52A8</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>function toFirst(fieldData, index) {
  if (index !== 0) {
    fieldData.unshift(fieldData.splice(index , 1)[0])
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u4E0A\u79FB\u4E00\u683C" tabindex="-1"><a class="header-anchor" href="#\u4E0A\u79FB\u4E00\u683C" aria-hidden="true">#</a> \u4E0A\u79FB\u4E00\u683C</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>function upGo(fieldData, index) {
  if (index !== 0) {
    fieldData[index] = fieldData.splice(index-1, 1, fieldData[index])[0]
  } else {
    fieldData.push(fieldData.shift())
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u4E0B\u79FB\u4E00\u683C" tabindex="-1"><a class="header-anchor" href="#\u4E0B\u79FB\u4E00\u683C" aria-hidden="true">#</a> \u4E0B\u79FB\u4E00\u683C</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>function downGo(fieldData, index) {
  if (index !== fieldData.length - 1) {
    fieldData[index] = fieldData.splice(index+1, 1, fieldData[index])[0]
  } else {
    fieldData.unshift(fieldData.splice(index,1)[0])
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u627E\u51FA\u6570\u7EC4\u4E2D\u7B26\u5408\u6761\u4EF6\u7684\u9879" tabindex="-1"><a class="header-anchor" href="#\u627E\u51FA\u6570\u7EC4\u4E2D\u7B26\u5408\u6761\u4EF6\u7684\u9879" aria-hidden="true">#</a> \u627E\u51FA\u6570\u7EC4\u4E2D\u7B26\u5408\u6761\u4EF6\u7684\u9879</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>const find = (arr, query) =&gt; {
    return arr.filter(item =&gt; Object.keys(query).every(key =&gt; item[key] === query[key]))
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u7EDF\u8BA1\u5B57\u7B26\u4E32\u4E2D\u76F8\u540C\u5B57\u7B26\u51FA\u73B0\u7684\u6B21\u6570" tabindex="-1"><a class="header-anchor" href="#\u7EDF\u8BA1\u5B57\u7B26\u4E32\u4E2D\u76F8\u540C\u5B57\u7B26\u51FA\u73B0\u7684\u6B21\u6570" aria-hidden="true">#</a> \u7EDF\u8BA1\u5B57\u7B26\u4E32\u4E2D\u76F8\u540C\u5B57\u7B26\u51FA\u73B0\u7684\u6B21\u6570</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>const arr = &#39;abcdaabc&#39;

const info = arr.split(&#39;&#39;).reduce((p, k) =&gt; (p[k]++ || (p[k] = 1), p), {})

(function(s,o){return o={},s.replace(/./g,function(m){o[m]=1+o[m]||1;}),o;})(arr)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u751F\u62106\u4F4D\u7684\u6570\u5B57\u9A8C\u8BC1\u7801" tabindex="-1"><a class="header-anchor" href="#\u751F\u62106\u4F4D\u7684\u6570\u5B57\u9A8C\u8BC1\u7801" aria-hidden="true">#</a> \u751F\u62106\u4F4D\u7684\u6570\u5B57\u9A8C\u8BC1\u7801</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>(&#39;000000&#39; + Math.floor(Math.random() * 999999)).slice(-6)

&#39;&#39; + Math.floor(Math.random() * 999999)

console.log(/\\d{6}/.exec(Math.random())[0])

Math.random().toString().slice(-6)

Math.random().toFixed(6).slice(-6)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="key1-value1-key2-value2-\u8F6C\u6362\u6210json" tabindex="-1"><a class="header-anchor" href="#key1-value1-key2-value2-\u8F6C\u6362\u6210json" aria-hidden="true">#</a> &#39;?key1=value1&amp;key2=value2&#39; \u8F6C\u6362\u6210json</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>const query = (search = &#39;&#39;) =&gt; ((querystring = &#39;&#39;) =&gt; (q =&gt; (querystring.split(&#39;&amp;&#39;).forEach(item =&gt; (kv =&gt; kv[0] &amp;&amp; (q[kv[0]] = kv[1]))(item.split(&#39;=&#39;))), q))({}))(search.split(&#39;?&#39;)[1])
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_16\u8FDB\u5236\u989C\u8272\u4EE3\u7801\u751F\u6210" tabindex="-1"><a class="header-anchor" href="#_16\u8FDB\u5236\u989C\u8272\u4EE3\u7801\u751F\u6210" aria-hidden="true">#</a> 16\u8FDB\u5236\u989C\u8272\u4EE3\u7801\u751F\u6210</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>(function(){return &#39;#&#39;+(&#39;00000&#39;+(Math.random()*0x1000000&lt;&lt;0).toString(16)).slice(-6)})()
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="\u5723\u8BDE\u6811" tabindex="-1"><a class="header-anchor" href="#\u5723\u8BDE\u6811" aria-hidden="true">#</a> \u5723\u8BDE\u6811</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>(n =&gt; {
    [...Array(n - 2)].map((_, i) =&gt; 3 + i).forEach(j =&gt; {
        [...Array(j)].map((_, k) =&gt; 1 + k).forEach(x =&gt; {
            let sc = 2 * x - 1, spc = (2 * n - 1 - sc) / 2;
            console.log(&quot; &quot;.repeat(spc) + &quot;*&quot;.repeat(sc));
        });
    });
    console.log(&quot; &quot;.repeat(n - 1) + &quot;*&quot;);
    console.log(&quot;~&quot;.repeat(n - 1) + &quot;*~#~~###~~~~##~&quot;);
})(5)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,50),l=[d];function r(v,c){return i(),n("div",null,l)}var m=e(s,[["render",r],["__file","utils.html.vue"]]);export{m as default};
