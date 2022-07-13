import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";import{o as e,c as i,b as s}from"./app.1c163dbd.js";const l={},d=s(`<h1 id="\u6742\u9879" tabindex="-1"><a class="header-anchor" href="#\u6742\u9879" aria-hidden="true">#</a> \u6742\u9879</h1><h2 id="\u89E3\u9664\u9875\u9762\u7981\u7528debugger" tabindex="-1"><a class="header-anchor" href="#\u89E3\u9664\u9875\u9762\u7981\u7528debugger" aria-hidden="true">#</a> \u89E3\u9664\u9875\u9762\u7981\u7528debugger</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>(function () {
  &#39;use strict&#39;
  Function.prototype.constructor_ = Function.prototype.constructor
  Function.prototype.constructor = function (e) {
    if (e === &#39;debugger&#39;) {
      return function () {}
    }
    return Function.prototype.constructor_(e)
  }
})()
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="js\u5B9E\u73B0\u6309\u4E0Bf12\u5173\u95ED\u5F53\u524D\u9875\u9762\u4EE3\u7801" tabindex="-1"><a class="header-anchor" href="#js\u5B9E\u73B0\u6309\u4E0Bf12\u5173\u95ED\u5F53\u524D\u9875\u9762\u4EE3\u7801" aria-hidden="true">#</a> JS\u5B9E\u73B0\u6309\u4E0BF12\u5173\u95ED\u5F53\u524D\u9875\u9762\u4EE3\u7801</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>//\u5224\u65ADF12\u5BA1\u67E5\u5143\u7D20
function closeHandle() {
  window.close(); //\u5173\u95ED\u5F53\u524D\u7A97\u53E3(\u9632\u62BD)
  window.location = &quot;about:blank&quot;; //\u5C06\u5F53\u524D\u7A97\u53E3\u8DF3\u8F6C\u7F6E\u7A7A\u767D\u9875
}

function ck() {
  console.profile();
  console.profileEnd();
  //\u5224\u65ADprofiles\u91CC\u6709\u65E0\u5185\u5BB9,\u82E5\u6709,\u5219\u8BF4\u660E\u6309\u4E0B\u4E86F12
  if(console.clear) {
    console.clear()
  };
  if(typeof console.profiles == &quot;object&quot;) {
    return console.profiles.length &gt; 0;
  }
}

function hehe() {
  if((window.console &amp;&amp; (console.firebug || console.table &amp;&amp; /firebug/i.test(console.table()))) || (typeof opera == &#39;object&#39; &amp;&amp; typeof opera.postError == &#39;function&#39; &amp;&amp; console.profile.length &gt; 0)) {
    closeHandle();
  }
  if(typeof console.profiles == &quot;object&quot; &amp;&amp; console.profiles.length &gt; 0) {
    closeHandle();
  }
}
hehe();
window.onresize = function() {
  if((window.outerHeight - window.innerHeight) &gt; 200)
    //\u5224\u65AD\u5F53\u524D\u7A97\u53E3\u5185\u9875\u9AD8\u5EA6\u548C\u7A97\u53E3\u9AD8\u5EA6,\u5982\u679C\u5DEE\u503C\u5927\u4E8E200\uFF0C\u90A3\u4E48\u5219\u8BF4\u660E\u6D4F\u89C8\u5668\u8C03\u8BD5\u6846\u5DF2\u88AB\u6253\u5F00
    closeHandle();
}
// \u539F\u6587\u94FE\u63A5https://www.madapang.com/technology/f12.html
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="js\u5B9E\u73B0\u6309\u4E0Bf12\u8DF3\u8F6C\u5230\u5176\u4ED6\u6307\u5B9A\u9875\u9762\u4EE3\u7801" tabindex="-1"><a class="header-anchor" href="#js\u5B9E\u73B0\u6309\u4E0Bf12\u8DF3\u8F6C\u5230\u5176\u4ED6\u6307\u5B9A\u9875\u9762\u4EE3\u7801" aria-hidden="true">#</a> JS\u5B9E\u73B0\u6309\u4E0BF12\u8DF3\u8F6C\u5230\u5176\u4ED6\u6307\u5B9A\u9875\u9762\u4EE3\u7801</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>function collect() {
    //\u5F00\u59CBjavascript\u6267\u884C\u8FC7\u7A0B\u7684\u6570\u636E\u6536\u96C6
    console.profile();
    //\u914D\u5408profile\u65B9\u6CD5\uFF0C\u4F5C\u4E3A\u6570\u636E\u6536\u96C6\u7684\u7ED3\u675F
    console.profileEnd();
    //\u5224\u65ADprofiles\u91CC\u6709\u65E0\u5185\u5BB9,\u82E5\u6709,\u5219\u8BF4\u660E\u6309\u4E0B\u4E86F12  
    if (console.clear) {
        //\u6E05\u7A7A\u63A7\u5236\u53F0
        console.clear()
    };
    if (typeof console.profiles == &quot;object&quot;) {
        return console.profiles.length &gt; 0;
    }
}
function check() {
    if ((window.console &amp;&amp; (console.firebug || console.table &amp;&amp; /firebug/i.test(console.table()))) || (typeof opera == &#39;object&#39; &amp;&amp; typeof opera.postError == &#39;function&#39; &amp;&amp; console.profile.length &gt; 0)) {
        jump();
    }
    if (typeof console.profiles == &quot;object&quot; &amp;&amp; console.profiles.length &gt; 0) {
        jump();
    }
}
check();
window.onresize = function() {
    //\u5224\u65AD\u5F53\u524D\u7A97\u53E3\u5185\u9875\u9AD8\u5EA6\u548C\u7A97\u53E3\u9AD8\u5EA6
    if ((window.outerHeight - window.innerHeight) &gt; 200)
    jump();
}
function jump() {
    window.location = &quot;https://www.madapang.com&quot;;
}
// \u539F\u6587\u94FE\u63A5https://www.madapang.com/technology/f12.html
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7),a=[d];function r(c,o){return e(),i("div",null,a)}var u=n(l,[["render",r],["__file","other.html.vue"]]);export{u as default};
