# Canvas

## 刮奖效果
::: demo
```vue
<template>
  <div class="scrapeLottoBox">
    <div class="scrapeLottoBox-btn">刮开优惠</div>
    <div class="scrapeLottoBox-price"><span>¥123</span>.00</div>
    <!-- 蒙层 -->
    <canvas id="scrapeLottoCanvas" width="150" height="70"></canvas>
  </div>
</template>

<script>
export default {
  mounted() {
    this.createScrapeLotto()
  },
  methods: {
    createScrapeLotto() {
      let myCanvas = document.getElementById("scrapeLottoCanvas");
      // 搭建环境
      let cxt = myCanvas.getContext("2d");
      // 设置透明度
      cxt.globalAlpha = 1;
      cxt.fillStyle = "#ccc";
      cxt.fillRect(0, 0, 300, 140);
      // 文本
      cxt.fillStyle = "#000";
      cxt.font = "18px 微软雅黑";
      cxt.textAlign = "center";
      cxt.textBaseline = "middle";
      cxt.fillText('刮一刮', 73, 35, 100);

      // pc
      let flag = false;
      myCanvas.addEventListener('mousedown', function (e) {
        flag = true;
        drawArc(e)
      })
      myCanvas.addEventListener('mousemove', function (e) {
        if (flag === true) {
          drawArc(e)
        }
      })
      myCanvas.addEventListener('mouseup', function () {
        flag = false;
        calcArea();
      })
      // wap
      myCanvas.addEventListener('touchstart', function (e) {
        flag = true;
        drawArc(e)
      })
      myCanvas.addEventListener('touchmove', function (e) {
        if (flag === true) {
          drawArc(e)
        }
      })
      myCanvas.addEventListener('touchend', function () {
        flag = false;
        calcArea();
      })

      // 绘画区域
      function drawArc(e) {
        // 获取矩形 canvas 在页面中的绝对位置
        const canvasPos = myCanvas.getBoundingClientRect();
        // 获取页面滚动的高度(处理页面下滑后才出现刮奖，计算坐标点)
        const pageScrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        const pageScrollLeft = document.documentElement.scrollLeft || document.body.scrollLeft;
        // 点击点坐标的 X 轴距离 - 矩形左上角 X 轴距离 - 页面卷出去的 X 距离
        const mouseX = (e.pageX || e.targetTouches[0].pageX) - canvasPos.left - pageScrollLeft;
        const mouseY = (e.pageY || e.targetTouches[0].pageY) - canvasPos.top - pageScrollTop;
        // 相交部分不显示
        cxt.globalCompositeOperation = "destination-out";
        // 开始一条路径
        cxt.beginPath();
        cxt.fillStyle = "white";
        // 移动到位置 mouseX, mouseY
        cxt.moveTo(mouseX, mouseY);
        // 画一个圆 半径为 6
        cxt.arc(mouseX, mouseY, 6, 0, 2 * Math.PI);
        cxt.fill();
      }

      // 计算区域
      function calcArea() {
        // 获取像素点的数据
        const myImg = cxt.getImageData(0, 0, myCanvas.width, myCanvas.height);
        let num = 0;
        // 取 1/4 计算区域比例即可，节省计算开销
        const max = myImg.data.length / 4;
        for (let i = 0; i < myImg.data.length; i += 4) {
          if (myImg.data[i + 3] === 0) {
            num++;
          }
        }
        // 0 - 1 为区域百分比，此时 40% 时清空全部蒙层
        if (num >= max * 0.4) {
          myCanvas.remove()
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.scrapeLottoBox{
  width: 285px;
  height: 120px;
  margin: 0 auto;
  background: url('https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/6ace29d7c26e4e88a51ec638111d0a3f~tplv-k3u1fbpfcp-watermark.image') center/100% no-repeat;
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
.scrapeLottoBox-price>span{
  font-size: 40px;
  line-height: 67px;
  font-weight: 700;
}
.scrapeLottoBox>#scrapeLottoCanvas{
  position: absolute;
  left: 30px;
  top: 25px;
}
</style>
```
:::
