import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";import{o as i,c as e,b as s}from"./app.1c163dbd.js";const l={},d=s(`<h1 id="canvas" tabindex="-1"><a class="header-anchor" href="#canvas" aria-hidden="true">#</a> Canvas</h1><h2 id="\u522E\u5956\u6548\u679C" tabindex="-1"><a class="header-anchor" href="#\u522E\u5956\u6548\u679C" aria-hidden="true">#</a> \u522E\u5956\u6548\u679C</h2><p>::: demo</p><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code>&lt;template&gt;
  &lt;div class=&quot;scrapeLottoBox&quot;&gt;
    &lt;div class=&quot;scrapeLottoBox-btn&quot;&gt;\u522E\u5F00\u4F18\u60E0&lt;/div&gt;
    &lt;div class=&quot;scrapeLottoBox-price&quot;&gt;&lt;span&gt;\xA5123&lt;/span&gt;.00&lt;/div&gt;
    &lt;!-- \u8499\u5C42 --&gt;
    &lt;canvas id=&quot;scrapeLottoCanvas&quot; width=&quot;150&quot; height=&quot;70&quot;&gt;&lt;/canvas&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
export default {
  mounted() {
    this.createScrapeLotto()
  },
  methods: {
    createScrapeLotto() {
      let myCanvas = document.getElementById(&quot;scrapeLottoCanvas&quot;);
      // \u642D\u5EFA\u73AF\u5883
      let cxt = myCanvas.getContext(&quot;2d&quot;);
      // \u8BBE\u7F6E\u900F\u660E\u5EA6
      cxt.globalAlpha = 1;
      cxt.fillStyle = &quot;#ccc&quot;;
      cxt.fillRect(0, 0, 300, 140);
      // \u6587\u672C
      cxt.fillStyle = &quot;#000&quot;;
      cxt.font = &quot;18px \u5FAE\u8F6F\u96C5\u9ED1&quot;;
      cxt.textAlign = &quot;center&quot;;
      cxt.textBaseline = &quot;middle&quot;;
      cxt.fillText(&#39;\u522E\u4E00\u522E&#39;, 73, 35, 100);

      // pc
      let flag = false;
      myCanvas.addEventListener(&#39;mousedown&#39;, function (e) {
        flag = true;
        drawArc(e)
      })
      myCanvas.addEventListener(&#39;mousemove&#39;, function (e) {
        if (flag === true) {
          drawArc(e)
        }
      })
      myCanvas.addEventListener(&#39;mouseup&#39;, function () {
        flag = false;
        calcArea();
      })
      // wap
      myCanvas.addEventListener(&#39;touchstart&#39;, function (e) {
        flag = true;
        drawArc(e)
      })
      myCanvas.addEventListener(&#39;touchmove&#39;, function (e) {
        if (flag === true) {
          drawArc(e)
        }
      })
      myCanvas.addEventListener(&#39;touchend&#39;, function () {
        flag = false;
        calcArea();
      })

      // \u7ED8\u753B\u533A\u57DF
      function drawArc(e) {
        // \u83B7\u53D6\u77E9\u5F62 canvas \u5728\u9875\u9762\u4E2D\u7684\u7EDD\u5BF9\u4F4D\u7F6E
        const canvasPos = myCanvas.getBoundingClientRect();
        // \u83B7\u53D6\u9875\u9762\u6EDA\u52A8\u7684\u9AD8\u5EA6(\u5904\u7406\u9875\u9762\u4E0B\u6ED1\u540E\u624D\u51FA\u73B0\u522E\u5956\uFF0C\u8BA1\u7B97\u5750\u6807\u70B9)
        const pageScrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        const pageScrollLeft = document.documentElement.scrollLeft || document.body.scrollLeft;
        // \u70B9\u51FB\u70B9\u5750\u6807\u7684 X \u8F74\u8DDD\u79BB - \u77E9\u5F62\u5DE6\u4E0A\u89D2 X \u8F74\u8DDD\u79BB - \u9875\u9762\u5377\u51FA\u53BB\u7684 X \u8DDD\u79BB
        const mouseX = (e.pageX || e.targetTouches[0].pageX) - canvasPos.left - pageScrollLeft;
        const mouseY = (e.pageY || e.targetTouches[0].pageY) - canvasPos.top - pageScrollTop;
        // \u76F8\u4EA4\u90E8\u5206\u4E0D\u663E\u793A
        cxt.globalCompositeOperation = &quot;destination-out&quot;;
        // \u5F00\u59CB\u4E00\u6761\u8DEF\u5F84
        cxt.beginPath();
        cxt.fillStyle = &quot;white&quot;;
        // \u79FB\u52A8\u5230\u4F4D\u7F6E mouseX, mouseY
        cxt.moveTo(mouseX, mouseY);
        // \u753B\u4E00\u4E2A\u5706 \u534A\u5F84\u4E3A 6
        cxt.arc(mouseX, mouseY, 6, 0, 2 * Math.PI);
        cxt.fill();
      }

      // \u8BA1\u7B97\u533A\u57DF
      function calcArea() {
        // \u83B7\u53D6\u50CF\u7D20\u70B9\u7684\u6570\u636E
        const myImg = cxt.getImageData(0, 0, myCanvas.width, myCanvas.height);
        let num = 0;
        // \u53D6 1/4 \u8BA1\u7B97\u533A\u57DF\u6BD4\u4F8B\u5373\u53EF\uFF0C\u8282\u7701\u8BA1\u7B97\u5F00\u9500
        const max = myImg.data.length / 4;
        for (let i = 0; i &lt; myImg.data.length; i += 4) {
          if (myImg.data[i + 3] === 0) {
            num++;
          }
        }
        // 0 - 1 \u4E3A\u533A\u57DF\u767E\u5206\u6BD4\uFF0C\u6B64\u65F6 40% \u65F6\u6E05\u7A7A\u5168\u90E8\u8499\u5C42
        if (num &gt;= max * 0.4) {
          myCanvas.remove()
        }
      }
    }
  }
}
&lt;/script&gt;

&lt;style lang=&quot;scss&quot; scoped&gt;
.scrapeLottoBox{
  width: 285px;
  height: 120px;
  margin: 0 auto;
  background: url(&#39;https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/6ace29d7c26e4e88a51ec638111d0a3f~tplv-k3u1fbpfcp-watermark.image&#39;) center/100% no-repeat;
  position: relative;
}
.scrapeLottoBox-btn{
  font-size: 20px;
  color: #fff;
  width: 50px;
  position: absolute;
  right: 25px;
  top: 30px;
  text-align: center;
}
.scrapeLottoBox-price{
  color: #f51e55;
  width: 150px;
  text-align: center;
  position: absolute;
  left: 30px;
  top: 25px;
  font-size: 16px;
}
.scrapeLottoBox-price&gt;span{
  font-size: 40px;
  line-height: 67px;
  font-weight: 700;
}
.scrapeLottoBox&gt;#scrapeLottoCanvas{
  position: absolute;
  left: 30px;
  top: 25px;
}
&lt;/style&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>:::</p>`,5),v=[d];function a(t,c){return i(),e("div",null,v)}var m=n(l,[["render",a],["__file","canvas.html.vue"]]);export{m as default};
