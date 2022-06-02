# 杂项

## 解除页面禁用debugger
```javascript
(function () {
  'use strict'
  Function.prototype.constructor_ = Function.prototype.constructor
  Function.prototype.constructor = function (e) {
    if (e === 'debugger') {
      return function () {}
    }
    return Function.prototype.constructor_(e)
  }
})()
```

## JS实现按下F12关闭当前页面代码
```javascript
//判断F12审查元素
function closeHandle() {
  window.close(); //关闭当前窗口(防抽)
  window.location = "about:blank"; //将当前窗口跳转置空白页
}

function ck() {
  console.profile();
  console.profileEnd();
  //判断profiles里有无内容,若有,则说明按下了F12
  if(console.clear) {
    console.clear()
  };
  if(typeof console.profiles == "object") {
    return console.profiles.length > 0;
  }
}

function hehe() {
  if((window.console && (console.firebug || console.table && /firebug/i.test(console.table()))) || (typeof opera == 'object' && typeof opera.postError == 'function' && console.profile.length > 0)) {
    closeHandle();
  }
  if(typeof console.profiles == "object" && console.profiles.length > 0) {
    closeHandle();
  }
}
hehe();
window.onresize = function() {
  if((window.outerHeight - window.innerHeight) > 200)
    //判断当前窗口内页高度和窗口高度,如果差值大于200，那么则说明浏览器调试框已被打开
    closeHandle();
}
// 原文链接https://www.madapang.com/technology/f12.html
```

## JS实现按下F12跳转到其他指定页面代码
```javascript
function collect() {
    //开始javascript执行过程的数据收集
    console.profile();
    //配合profile方法，作为数据收集的结束
    console.profileEnd();
    //判断profiles里有无内容,若有,则说明按下了F12  
    if (console.clear) {
        //清空控制台
        console.clear()
    };
    if (typeof console.profiles == "object") {
        return console.profiles.length > 0;
    }
}
function check() {
    if ((window.console && (console.firebug || console.table && /firebug/i.test(console.table()))) || (typeof opera == 'object' && typeof opera.postError == 'function' && console.profile.length > 0)) {
        jump();
    }
    if (typeof console.profiles == "object" && console.profiles.length > 0) {
        jump();
    }
}
check();
window.onresize = function() {
    //判断当前窗口内页高度和窗口高度
    if ((window.outerHeight - window.innerHeight) > 200)
    jump();
}
function jump() {
    window.location = "https://www.madapang.com";
}
// 原文链接https://www.madapang.com/technology/f12.html
```
