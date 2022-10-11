# 常用方法

## 图片转base64
```javascript
function imgToBase64(url) {
  let img = new Image()
  img.src = url
  img.onload = () => {
    const canvas = document.createElement('canvas')
    canvas.width = img.width
    canvas.height = img.height
    const ctx = canvas.getContext('2d')
    ctx.drawImage(img, 0, 0, img.width, img.height)
    const dataUrl = canvas.toDataURL('image/png')
    console.log(dataUrl)
  }
}
```

## 每隔n个字符添加东西
```javascript
function strInsert(str, n) {
    let reg = new RegExp('\\W{1,' + n + '}', 'g')
    return str.match(reg).join('\n')
}
```

## 获取URL参数
```javascript
export const getUrl = function (name) {
  const arrLast = window.location.href.split('?')[1]
  if (typeof (arrLast) !== 'undefined') {
    const items = arrLast.split('&')
    for (let i = 0; i < items.length; i++) {
      if (items[i].split('=')[0] === name && items[i].split('=')[1]) {
        return items[i].split('=')[1]
      }
    }
  }
}
```

## 当前系统环境判读
```javascript
export const getPhoneType = () => {
  const browser = {
    versions: () => {
      const u = navigator.userAgent
      const app = navigator.appVersion
      return {
        // 移动终端浏览器版本信息
        trident: u.indexOf('Trident') > -1, // IE内核
        presto: u.indexOf('Presto') > -1, // opera内核
        webKit: u.indexOf('AppleWebKit') > -1, // 苹果、谷歌内核
        gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1, // 火狐内核
        mobile:
          !!u.match(/AppleWebKit.*Mobile/i) ||
          !!u.match(
            /MIDP|SymbianOS|NOKIA|SAMSUNG|LG|NEC|TCL|Alcatel|BIRD|DBTEL|Dopod|PHILIPS|HAIER|LENOVO|MOT-|Nokia|SonyEricsson|SIE-|Amoi|ZTE/
          ), // 是否为移动终端
        ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), // ios终端
        android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, // android终端或者uc浏览器
        iPhone: u.indexOf('iPhone') > -1 || u.indexOf('Mac') > -1, // 是否为iPhone或者QQHD浏览器
        iPad: u.indexOf('iPad') > -1, // 是否iPad
        webApp: u.indexOf('Safari') == -1 // 是否web应该程序，没有头部与底部
      }
    },
    language: (navigator.browserLanguage || navigator.language).toLowerCase()
  }
  if (
    browser.versions.iPhone ||
    browser.versions.iPad ||
    browser.versions.ios
  ) {
    return 'ios'
  }
  if (browser.versions.android) {
    return 'android'
  }
}
```

## 下载文件
```vue
<script>
export default {
  methods: {
    fileDownloadHandle(url, name) {
      this.getBlobHandle(url).then(blob => {
        this.saveFileHandle(blob, name)
      })
    },
    getBlobHandle(url) {
      return new Promise(resolve => {
        const xhr = new XMLHttpRequest()
        xhr.open('GET', url, true)
        xhr.responseType = 'blob'
        xhr.onload = () => {
          if (xhr.status === 200) {
            resolve(xhr.response)
          }
        }
        xhr.send()
      })
    },
    saveFileHandle(blob, name) {
      if (window.navigator['msSaveOrOpenBlob']) {
        window.navigator['msSaveBlob'](blob, name)
      } else {
        const link = document.createElement('a')
        const body = document.querySelector('body')
        link.href = window.URL.createObjectURL(blob)
        link.download = name
        link.style.display = 'none'
        body.appendChild(link)
        link.click()
        body.removeChild(link)
        window.URL.revokeObjectURL(link.href)
      }
    },
  }
}
</script>
```

## 实现 lodash.get 嵌套调用
```javascript
function get (source, path, defaultValue = undefined) {
  // a[3].b -> a.3.b
  const paths = path.replace(/\[(\d+)\]/g, '.$1').split('.')
  let result = source
  for (const p of paths) {
    result = Object(result)[p]
    if (result === undefined) {
      return defaultValue
    }
  }
  return result
}
```

## 判断一个数值为整数
```javascript
// ES6
Number.isInteger(num)

// ES5
if (!Number.isInteger) {
  Number.isInteger = function(num) {
    return typeof num == "number" && num % 1 == 0
  }
}
```

## json 格式化
```javascript
function transitionJsonToString(jsonObj, callback) {
  // 转换后的jsonObj受体对象
  let _jsonObj = null;
  // 判断传入的jsonObj对象是不是字符串，如果是字符串需要先转换为对象，再转换为字符串，这样做是为了保证转换后的字符串为双引号
  if (Object.prototype.toString.call(jsonObj) !== '[object String]') {
    try {
      _jsonObj = JSON.stringify(jsonObj);
    } catch (error) {
      // 转换失败错误信息
      console.error('您传递的json数据格式有误，请核对...');
      console.error(error);
      callback(error);
    }
  } else {
    try {
      jsonObj = jsonObj.replace(/(\')/g, '"');
      _jsonObj = JSON.stringify(JSON.parse(jsonObj));
    } catch (error) {
      // 转换失败错误信息
      console.error('您传递的json数据格式有误，请核对...');
      console.error(error);
      callback(error);
    }
  }
  return _jsonObj;
}

function formatJson(jsonObj, callback) {
  // 正则表达式匹配规则变量
  const reg = null;
  // 转换后的字符串变量
  let formatted = '';
  // 换行缩进位数
  let pad = 0;
  // 一个tab对应空格位数
  const PADDING = '&nbsp;&nbsp;&nbsp;&nbsp;';
  // json对象转换为字符串变量
  let jsonString = transitionJsonToString(jsonObj, callback);
  if (!jsonString) {
    return jsonString;
  }
  // 存储需要特殊处理的字符串段
  const _index = [];
  // 存储需要特殊处理的“再数组中的开始位置变量索引
  let _indexStart = null;
  // 存储需要特殊处理的“再数组中的结束位置变量索引
  let _indexEnd = null;
  // 将jsonString字符串内容通过\r\n符分割成数组
  let jsonArray = [];
  // 正则匹配到{,}符号则在两边添加回车换行
  jsonString = jsonString.replace(/([\{\}])/g, '\r\n$1\r\n');
  // 正则匹配到[,]符号则在两边添加回车换行
  jsonString = jsonString.replace(/([\[\]])/g, '\r\n$1\r\n');
  // 正则匹配到,符号则在两边添加回车换行
  jsonString = jsonString.replace(/(\,)/g, '$1\r\n');
  // 正则匹配到要超过一行的换行需要改为一行
  jsonString = jsonString.replace(/(\r\n\r\n)/g, '\r\n');
  // 正则匹配到单独处于一行的,符号时需要去掉换行，将,置于同行
  jsonString = jsonString.replace(/\r\n\,/g, ',');
  // 特殊处理双引号中的内容
  jsonArray = jsonString.split('\r\n');
  jsonArray.forEach(function (node, index) {
    // 获取当前字符串段中"的数量
    const num = node.match(/\"/g) ? node.match(/\"/g).length : 0;
    // 判断num是否为奇数来确定是否需要特殊处理
    if (num % 2 && !_indexStart) {
      _indexStart = index;
    }
    if (num % 2 && _indexStart && _indexStart != index) {
      _indexEnd = index;
    }
    // 将需要特殊处理的字符串段的其实位置和结束位置信息存入，并对应重置开始时和结束变量
    if (_indexStart && _indexEnd) {
      _index.push({
        start: _indexStart,
        end: _indexEnd,
      });
      _indexStart = null;
      _indexEnd = null;
    }
  });
  // 开始处理双引号中的内容，将多余的"去除
  _index.reverse().forEach(function (item, index) {
    const newArray = jsonArray.slice(item.start, item.end + 1);
    jsonArray.splice(
      item.start,
      item.end + 1 - item.start,
      newArray.join('')
    );
  });
  // 奖处理后的数组通过\r\n连接符重组为字符串
  jsonString = jsonArray.join('\r\n');
  // 将匹配到:后为回车换行加大括号替换为冒号加大括号
  jsonString = jsonString.replace(/\:\r\n\{/g, ':{');
  // 将匹配到:后为回车换行加中括号替换为冒号加中括号
  jsonString = jsonString.replace(/\:\r\n\[/g, ':[');
  // 将上述转换后的字符串再次以\r\n分割成数组
  jsonArray = jsonString.split('\r\n');
  // 将转换完成的字符串根据PADDING值来组合成最终的形态
  jsonArray.forEach(function (item, index) {
    // console.log(item);
    let i = 0;
    // 表示缩进的位数，以tab作为计数单位
    let indent = 0;
    // 表示缩进的位数，以空格作为计数单位
    let padding = '';
    if (item.match(/\{$/) || item.match(/\[$/)) {
      // 匹配到以{和[结尾的时候indent加1
      indent += 1;
    } else if (
      item.match(/\}$/) ||
      item.match(/\]$/) ||
      item.match(/\},$/) ||
      item.match(/\],$/)
    ) {
      // 匹配到以}和]结尾的时候indent减1
      if (pad !== 0) {
        pad -= 1;
      }
    } else {
      indent = 0;
    }
    for (i = 0; i < pad; i++) {
      padding += PADDING;
    }
    formatted += padding + item + '<br />';
    pad += indent;
  });
  // 返回的数据需要去除两边的空格
  return formatted.trim();
}
```

## 用户名处理
### 只保留姓氏
```javascript
function formatName(name) {
  const reg = /(?<=.)./g
  return name.replace(reg, '*')
}
```
### 中间字符特殊处理
```javascript
function formatName(name) {
  let str = ''
  if (name.length === 2) {
    str = name.substr(0, 1) + '*'
  } else if (name.length > 2) {
    let char = ''
    for (let i = 0; i < name.length - 2; i++) {
      char += '*'
    }
    str = name.substr(0, 1) + char + name.substr(-1, 1)
  } else {
    str = name
  }
  return str
}
```

## 手机号特殊处理
```javascript
function formatPhone(phone) {
  return phone.substr(0, 3) + '****' + phone.substr(7)
}
```

## 数字转换
### 数字转金额
```javascript
function ToString(n) {
    if (!/^(0|[1-9]\d*)(\.\d+)?$/.test(n)){
        return "数据非法";  //判断数据是否大于0
    }

    let unit = "千百拾亿千百拾万千百拾元角分", str = "";
    n += "00";  

    let indexpoint = n.indexOf('.');  // 如果是小数，截取小数点前面的位数

    if (indexpoint >= 0){

        n = n.substring(0, indexpoint) + n.substr(indexpoint+1, 2);   // 若为小数，截取需要使用的unit单位
    }

    unit = unit.substr(unit.length - n.length);  // 若为整数，截取需要使用的unit单位
    for (let i=0; i < n.length; i++){
        str += "零壹贰叁肆伍陆柒捌玖".charAt(n.charAt(i)) + unit.charAt(i);  //遍历转化为大写的数字
    }

    return str.replace(/零(千|百|拾|角)/g, "零").replace(/(零)+/g, "零").replace(/零(万|亿|元)/g, "$1").replace(/(亿)万|壹(拾)/g, "$1$2").replace(/^元零?|零分/g, "").replace(/元$/g, "元整"); // 替换掉数字里面的零字符，得到结果

}
```
### 数字转大写
```javascript
function numberToUppercase(n) {
  if (!/^(0|[1-9]\d*)(\.\d+)?$/.test(n)){
    return ''
  }
  let unit = "千百十亿千百十万千百十个"
  let str = ''
  n += ''
  unit = unit.substr(unit.length - n.length)
  for (let i = 0; i < n.length; i++){
    str += '零一二三四五六七八九'.charAt(n.charAt(i)) + unit.charAt(i)
  }
  return str.replace(/零(千|百|十)/g, "零").replace(/(零)+/g, "零").replace(/零(万|亿|个)/g, "$1").replace(/(亿)万|一(十)/g, "$1$2").replace(/个$/g, "");
}
```
### 数字转英文字母
```javascript
function numberToLetter(index) {
  // 从 0 开始
  return String.fromCharCode(index + 65)
}
```

## 改变数组中元素位置
### 交换位置
```javascript
function swapArr(arr, index1, index2) {
  arr[index1] = arr.splice(index2, 1, arr[index1])[0]
  return arr
}
```
### 置顶移动
```javascript
function toFirst(fieldData, index) {
  if (index !== 0) {
    fieldData.unshift(fieldData.splice(index , 1)[0])
  }
}
```
### 上移一格
```javascript
function upGo(fieldData, index) {
  if (index !== 0) {
    fieldData[index] = fieldData.splice(index-1, 1, fieldData[index])[0]
  } else {
    fieldData.push(fieldData.shift())
  }
}
```
### 下移一格
```javascript
function downGo(fieldData, index) {
  if (index !== fieldData.length - 1) {
    fieldData[index] = fieldData.splice(index+1, 1, fieldData[index])[0]
  } else {
    fieldData.unshift(fieldData.splice(index,1)[0])
  }
}
```

## 找出数组中符合条件的项
```javascript
const find = (arr, query) => {
    return arr.filter(item => Object.keys(query).every(key => item[key] === query[key]))
}
```

## 统计字符串中相同字符出现的次数
```javascript
const arr = 'abcdaabc'

const info = arr.split('').reduce((p, k) => (p[k]++ || (p[k] = 1), p), {})

(function(s,o){return o={},s.replace(/./g,function(m){o[m]=1+o[m]||1;}),o;})(arr)
```

## 生成6位的数字验证码
```javascript
('000000' + Math.floor(Math.random() * 999999)).slice(-6)

'' + Math.floor(Math.random() * 999999)

console.log(/\d{6}/.exec(Math.random())[0])

Math.random().toString().slice(-6)

Math.random().toFixed(6).slice(-6)
```

## '?key1=value1&key2=value2' 转换成json
```javascript
const query = (search = '') => ((querystring = '') => (q => (querystring.split('&').forEach(item => (kv => kv[0] && (q[kv[0]] = kv[1]))(item.split('='))), q))({}))(search.split('?')[1])
```

## 16进制颜色代码生成
```javascript
(function(){return '#'+('00000'+(Math.random()*0x1000000<<0).toString(16)).slice(-6)})()
```

## 圣诞树
```javascript
(n => {
    [...Array(n - 2)].map((_, i) => 3 + i).forEach(j => {
        [...Array(j)].map((_, k) => 1 + k).forEach(x => {
            let sc = 2 * x - 1, spc = (2 * n - 1 - sc) / 2;
            console.log(" ".repeat(spc) + "*".repeat(sc));
        });
    });
    console.log(" ".repeat(n - 1) + "*");
    console.log("~".repeat(n - 1) + "*~#~~###~~~~##~");
})(5)
```
