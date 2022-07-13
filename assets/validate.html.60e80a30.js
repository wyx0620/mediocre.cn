import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";import{o as i,c as n,b as r}from"./app.1c163dbd.js";const d={},a=r(`<h1 id="\u6821\u9A8C\u76F8\u5173" tabindex="-1"><a class="header-anchor" href="#\u6821\u9A8C\u76F8\u5173" aria-hidden="true">#</a> \u6821\u9A8C\u76F8\u5173</h1><h2 id="\u624B\u673A\u53F7\u9A8C\u8BC1" tabindex="-1"><a class="header-anchor" href="#\u624B\u673A\u53F7\u9A8C\u8BC1" aria-hidden="true">#</a> \u624B\u673A\u53F7\u9A8C\u8BC1</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>export function validateMobile (phone) {
  return /^1[3456789]\\d{9}$/.test(phone)
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u90AE\u7BB1\u9A8C\u8BC1" tabindex="-1"><a class="header-anchor" href="#\u90AE\u7BB1\u9A8C\u8BC1" aria-hidden="true">#</a> \u90AE\u7BB1\u9A8C\u8BC1</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>export function validateEmail(email) {
    const reg = /^(([^&lt;&gt;()\\[\\]\\\\.,;:\\s@&quot;]+(\\.[^&lt;&gt;()\\[\\]\\\\.,;:\\s@&quot;]+)*)|(&quot;.+&quot;))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$/
    return reg.test(email)
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u8EAB\u4EFD\u8BC1\u53F7\u9A8C\u8BC1" tabindex="-1"><a class="header-anchor" href="#\u8EAB\u4EFD\u8BC1\u53F7\u9A8C\u8BC1" aria-hidden="true">#</a> \u8EAB\u4EFD\u8BC1\u53F7\u9A8C\u8BC1</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>export function validatePersonId (card) {
  const reg = /(^[1-9]\\d{5}(18|19|([23]\\d))\\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\\d{3}[0-9Xx]$)|(^[1-9]\\d{5}\\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\\d{2}$)/
  return reg.test(card)
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="aes\u52A0\u89E3\u5BC6" tabindex="-1"><a class="header-anchor" href="#aes\u52A0\u89E3\u5BC6" aria-hidden="true">#</a> AES\u52A0\u89E3\u5BC6</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>const CryptoJS = require(&#39;crypto-js&#39;);  //\u5B89\u88C5\u5E76\u5F15\u7528AES\u6E90\u7801js

const key = CryptoJS.enc.Utf8.parse(&quot;1234123412ABCDEF&quot;);  //\u5341\u516D\u4F4D\u5341\u516D\u8FDB\u5236\u6570\u4F5C\u4E3A\u5BC6\u94A5
const iv = CryptoJS.enc.Utf8.parse(&#39;ABCDEF1234123412&#39;);   //\u5341\u516D\u4F4D\u5341\u516D\u8FDB\u5236\u6570\u4F5C\u4E3A\u5BC6\u94A5\u504F\u79FB\u91CF

//\u89E3\u5BC6\u65B9\u6CD5
export const Decrypt = (word) =&gt; {
  let encryptedHexStr = CryptoJS.enc.Hex.parse(word);
  let srcs = CryptoJS.enc.Base64.stringify(encryptedHexStr);
  let decrypt = CryptoJS.AES.decrypt(srcs, key, { iv: iv, mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7 });
  let decryptedStr = decrypt.toString(CryptoJS.enc.Utf8);
  return decryptedStr.toString();
}

//\u52A0\u5BC6\u65B9\u6CD5
export const Encrypt = (word) =&gt; {
  let srcs = CryptoJS.enc.Utf8.parse(word);
  let encrypted = CryptoJS.AES.encrypt(srcs, key, { iv: iv, mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7 });
  return encrypted.ciphertext.toString().toUpperCase();
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u5305\u542B\u4E2D\u6587" tabindex="-1"><a class="header-anchor" href="#\u5305\u542B\u4E2D\u6587" aria-hidden="true">#</a> \u5305\u542B\u4E2D\u6587</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>export function validateCN (str) {
  return /[\\u4e00-\\u9fa5]/g.test(str)
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,11),s=[a];function t(c,l){return i(),n("div",null,s)}var u=e(d,[["render",t],["__file","validate.html.vue"]]);export{u as default};
