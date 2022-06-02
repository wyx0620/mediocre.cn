# Vue

## 在 Vue 中使用百度地图
- [百度地图POI分类](https://lbsyun.baidu.com/index.php?title=lbscloud/poitags)

1. 在 ```public/index.html``` 中引入百度地图 ```JavaScript API GL v1.0```
```html
<script type="text/javascript" src="//api.map.baidu.com/api?type=webgl&v=1.0&ak=你的密钥"></script>
```
2. 新建 Map.vue 写入
::: details 点击查看代码
```vue
<template>
  <div class="mapCom">
    <van-field
        :value="keyWords"
        readonly
        clickable
        placeholder="请输入地址"
        @click="clickHandle"
    />
    <div id="allMap" ref="allMap" />
    <van-overlay :show="showOverlay" z-index="10">
      <div class="suggestWrap">
        <van-field
            id="suggestId"
            ref="suggest"
            v-model="keyWords"
            type="text"
            name="keyWords"
            placeholder="请输入地址"
        >
          <template slot="right-icon">
            <span @click="closeOverlayHandle">取消</span>
          </template>
        </van-field>
        <div v-if="keyWords.length > 0" class="resultList">
          <van-loading v-if="suggestLoading" class="resultList-loading" size="24px">加载中...</van-loading>
          <template v-if="!suggestLoading">
            <div
                v-for="(item, index) in suggestList"
                :key="index + 1"
                class="resultList-item"
                @click="suggestClickHandle(item)"
            >
              <div class="resultList-item-title">{{ item.business }}</div>
              <div class="resultList-item-address">
                {{ item.province + item.city + item.district + item.street + item.streetNumber }}
              </div>
            </div>
          </template>
        </div>
      </div>
    </van-overlay>
    <div class="resultList">
      <van-loading v-if="listLoading" class="resultList-loading" size="24px">加载中...</van-loading>
      <template v-if="!listLoading">
        <div
            v-for="(item, index) in searchResult"
            :key="index + 1"
            class="resultList-item"
            @click="searchClickHandle(item)"
        >
          <div class="resultList-item-title">{{ item.title }}</div>
          <div class="resultList-item-address">{{ item.address }}</div>
        </div>
      </template>
      <div v-if="listFinished" class="resultList-end">没有更多了</div>
    </div>
  </div>
</template>

<script>
import defaultIcon from '../assets/images/icon-location.png'
import moveIcon from '../assets/images/icon-location-1.png'
import { Dialog } from 'vant'

export default {
  name: 'Map',
  components: {},
  props: {},
  data () {
    return {
      // 输入框值
      keyWords: '',
      // 附近地点搜索中
      listLoading: false,
      // 没有更多附近地点
      listFinished: true,
      // 附近地点搜索结果
      searchResult: [],
      // 显示遮罩层
      showOverlay: false,
      // 输入建议搜索中
      suggestLoading: false,
      // 输入建议结果
      suggestList: [],
      // 地图中心 control 组件
      centerControl: null
    }
  },
  mounted () {
    this.init()
  },
  methods: {
    init () {
      this.$nextTick(() => {
        this.mapInit()
      })
    },
    mapInit () {
      // 在指定的容器内创建地图实例
      // eslint-disable-next-line no-undef
      window.BD_MAP = new BMapGL.Map('allMap')
      // 获取当前经纬度并初始化地图、搜索附近
      this.getGeoBySdkHandle(res => {
        const { longitude, latitude } = res
        // 初始化地图
        // eslint-disable-next-line no-undef
        window.BD_MAP.centerAndZoom(new BMapGL.Point(longitude, latitude), 18)
        // 设置地图最小和最大级别
        window.BD_MAP.setMinZoom(14) // 1:1km
        window.BD_MAP.setMaxZoom(18) // 1:50m
        // 搜索附近
        this.mapSearchNearbyHandle(longitude, latitude)
      })
      // 设置默认图标到地图中心位置
      this.setIconToMapCenter(defaultIcon, 32, 32)
      // 通过输入框输入获取建议列表
      this.getSuggestList()
      // 地图拖拽动态效果
      window.BD_MAP.addEventListener('dragstart', () => {
        this.setIconToMapCenter(moveIcon, 32, 32)
      })
      // 地图拖拽后搜索
      window.BD_MAP.addEventListener('dragend', () => {
        const location = this.getMapCenter()
        this.setIconToMapCenter(defaultIcon, 32, 32)
        this.mapSearchNearbyHandle(location.lng, location.lat)
      })
    },
    // 设置图标到地图中心位置
    setIconToMapCenter (icon, iconWidth, iconHeight) {
      if (this.centerControl) window.BD_MAP.removeControl(this.centerControl)
      const mapDom = this.$refs.allMap
      const x = (mapDom.clientWidth - iconWidth) / 2
      const y = (mapDom.clientHeight - iconHeight) / 2
      this.setMapControl(icon, x, y, iconWidth, iconHeight)
    },
    // 获取地图中心点
    getMapCenter () {
      const cen = window.BD_MAP.getCenter()
      return {
        lng: cen.lng.toFixed(6),
        lat: cen.lat.toFixed(6)
      }
    },
    // 在地图上添加 Control 标记
    setMapControl (icon, offsetX = 0, offsetY = 0, width = 32, height = 32) {
      // eslint-disable-next-line no-undef
      const control = new BMapGL.Control()
      // eslint-disable-next-line no-undef
      control.defaultAnchor = BMAP_ANCHOR_TOP_RIGHT
      // eslint-disable-next-line no-undef
      control.defaultOffset = new BMapGL.Size(offsetX, offsetY)
      control.initialize = map => {
        const div = document.createElement('div')
        div.style.width = width + 'px'
        div.style.height = height + 'px'
        div.style.backgroundImage = `url(${icon})`
        div.style.backgroundSize = 'cover'
        // 添加DOM元素到地图中
        map.getContainer().appendChild(div)
        return div
      }
      window.BD_MAP.addControl(control)
      this.centerControl = control
    },
    // 地图搜索附近范围
    mapSearchNearbyHandle (lng, lat, keywords = ['小区', '酒店'], rang = 1000, size = 20) {
      this.listLoading = true
      this.listFinished = false
      // eslint-disable-next-line no-undef
      const localSearch = new BMapGL.LocalSearch(window.BD_MAP, {
        onSearchComplete: res => {
          let list = []
          for (let i = 0; i < keywords.length; i++) {
            list = list.concat(res[i]._pois)
          }
          this.searchResult = list
          this.listLoading = false
          this.listFinished = true
        },
        pageCapacity: size
      })
      // eslint-disable-next-line no-undef
      localSearch.searchNearby(keywords, new BMapGL.Point(lng, lat), rang)
    },
    // 定位SDK辅助定位
    getGeoBySdkHandle (callback) {
      // eslint-disable-next-line no-undef
      const geolocation = new BMapGL.Geolocation()
      // 开启SDK辅助定位
      geolocation.enableSDKLocation()
      geolocation.getCurrentPosition(res => {
        // eslint-disable-next-line no-undef
        if (geolocation.getStatus() === BMAP_STATUS_SUCCESS) {
          callback && callback(res)
        }
      })
    },
    // 通过输入框输入获取建议列表
    getSuggestList () {
      // eslint-disable-next-line no-undef
      const autocomplete = new BMapGL.Autocomplete({
        input: 'suggestId',
        location: window.BD_MAP,
        onSearchComplete: res => {
          autocomplete.hide()
          this.suggestList = res._pois
        }
      })
    },
    // 输入框点击打开遮罩层
    clickHandle () {
      this.showOverlay = true
      this.suggestList = []
      this.$nextTick(() => {
        this.$refs.suggest.focus()
      })
    },
    // 关闭遮罩层
    closeOverlayHandle () {
      this.showOverlay = false
      this.keyWords = ''
    },
    // 搜索结果列表选中
    searchClickHandle (item) {
      Dialog({ message: JSON.stringify(item) })
    },
    // 建议结果列表选中
    suggestClickHandle (item) {
      Dialog({ message: JSON.stringify(item) })
    },
    // 根据地址描述获得坐标信息
    getInfoByGeoHandle(address, city) {
      // eslint-disable-next-line no-undef
      const geocoder = new BMapGL.Geocoder()
      geocoder.getPoint(address, point => {
        console.log('----根据地址描述获得坐标信息----', point)
      }, city)
    },
    // 根据坐标点获得该地点的地址描述
    getInfoByPointHandle(point) {
      // eslint-disable-next-line no-undef
      const geocoder = new BMapGL.Geocoder()
      geocoder.getLocation(point, res => {
        console.log('----根据坐标点获得该地点的地址描述----', res)
      })
    },
  }
}
</script>

<style lang="scss" scoped>
.mapCom {
  height: 100%;
  background-color: #FFFFFF;
  display: flex;
  flex-direction: column;
  #allMap {
    height: 500px;
  }
  .resultList {
    overflow-y: auto;
    background-color: #FFFFFF;
    padding: 20px;
    margin-top: -20px;
    border-radius: 20px 20px 0 0;
    box-sizing: border-box;
    position: relative;
    z-index: 2;
    flex: 1;
    &-loading {
      text-align: center;
    }
    &-item {
      border-bottom: 1px solid #EEEEEE;
      box-sizing: border-box;
      padding: 20px 10px 10px;
      &-title {
        font-size: 30px;
        font-weight: bold;
        margin-bottom: 10px;
      }
      &-address {
        font-size: 24px;
      }
    }
    &-end {
      font-size: 24px;
      color: #969799;
      text-align: center;
      margin-top: 20px;
    }
  }
  .suggestWrap {
    height: 100%;
    display: flex;
    flex-direction: column;
  }
}
</style>
```
:::

## 树形选择器
### 自己封装
::: details 点击查看代码
```vue
<template>
  <el-select
    :value="valueTitle"
    :clearable="clearable"
    :size="size"
    :placeholder="placeholder"
    @clear="clearHandle">
    <el-option
      :value="valueTitle"
      :label="valueTitle">
      <el-tree
        id="tree-option"
        ref="selectTree"
        :accordion="accordion"
        :data="options"
        :props="props"
        :node-key="props.value"
        :default-expanded-keys="defaultExpandedKey"
        @node-click="handleNodeClick"
      />
    </el-option>
  </el-select>
</template>

<script>
export default {
  name: 'SelectTree',
  props: {
    /* 大小 */
    size: {
      type: String,
      default: () => {
        return 'mini'
      }
    },
    /* 提示语 */
    placeholder: {
      type: String,
      default: () => {
        return '请选择'
      }
    },
    /* 配置项 */
    props: {
      type: Object,
      default: () => {
        return {
          // ID字段名
          value: 'id',
          // 显示名称
          label: 'label',
          // 子级字段名
          children: 'children'
        }
      }
    },
    /* 选项列表数据(树形结构的对象数组) */
    options: {
      type: Array,
      default: () => {
        return []
      }
    },
    /* 初始值 */
    value: {
      type: Number,
      default: () => {
        return null
      }
    },
    /* 可清空选项 */
    clearable: {
      type: Boolean,
      default: () => {
        return true
      }
    },
    /* 自动收起 */
    accordion: {
      type: Boolean,
      default: () => {
        return false
      }
    }
  },
  data() {
    return {
      // 初始值
      valueId: this.value,
      valueTitle: '',
      defaultExpandedKey: []
    }
  },
  watch: {
    value() {
      this.valueId = this.value
      this.initHandle()
    }
  },
  mounted() {
    this.initHandle()
  },
  methods: {
    // 初始化值
    initHandle() {
      if (this.valueId) {
        // 初始化显示
        this.valueTitle = this.$refs.selectTree.getNode(this.valueId).data[this.props.label]
        // 设置默认选中
        this.$refs.selectTree.setCurrentKey(this.valueId)
        // 设置默认展开
        this.defaultExpandedKey = [this.valueId]
      }
      this.$nextTick(() => {
        const scrollWrap = document.querySelectorAll('.el-scrollbar .el-select-dropdown__wrap')[0]
        const scrollBar = document.querySelectorAll('.el-scrollbar .el-scrollbar__bar')
        scrollWrap.style.cssText = 'margin: 0px; max-height: none; overflow: hidden;'
        scrollBar.forEach(ele => ele.style.width = 0)
      })
    },
    // 切换选项
    handleNodeClick(node) {
      this.valueTitle = node[this.props.label]
      this.valueId = node[this.props.value]
      this.$emit('input', this.valueId)
      this.$emit('selectTreeChange', this.valueId)
      this.defaultExpandedKey = []
    },
    // 清除选中
    clearHandle() {
      this.valueTitle = ''
      this.valueId = null
      this.defaultExpandedKey = []
      this.clearSelected()
      this.$emit('input', null)
      this.$emit('selectTreeChange', null)
    },
    /* 清空选中样式 */
    clearSelected() {
      const allNode = document.querySelectorAll('#tree-option .el-tree-node')
      allNode.forEach((element) => element.classList.remove('is-current'))
    }
  }
}
</script>

<style scoped>
.el-scrollbar .el-scrollbar__view .el-select-dropdown__item {
  height: auto;
  max-height: 274px;
  padding: 0;
  overflow: hidden;
  overflow-y: auto;
}

.el-select-dropdown__item.selected {
  font-weight: normal;
}

ul li >>> .el-tree .el-tree-node__content {
  height: auto;
  padding: 0 20px;
}

.el-tree-node__label {
  font-weight: normal;
}

.el-tree >>> .is-current .el-tree-node__label {
  color: #409EFF;
  font-weight: 700;
}

.el-tree >>> .is-current .el-tree-node__children .el-tree-node__label {
  color: #606266;
  font-weight: normal;
}
</style>
```
:::
### 使用 VueTreeselect
1. 安装
```shell
npm install --save @riophae/vue-treeselect
```
2. 示例
```vue
<!-- Vue SFC -->
<template>
  <div id="app">
    <treeselect v-model="value" :multiple="true" :options="options" />
  </div>
</template>

<script>
  // import the component
  import Treeselect from '@riophae/vue-treeselect'
  // import the styles
  import '@riophae/vue-treeselect/dist/vue-treeselect.css'

  export default {
    // register the component
    components: { Treeselect },
    data() {
      return {
        // define the default value
        value: null,
        // define options
        options: [ {
          id: 'a',
          label: 'a',
          children: [ {
            id: 'aa',
            label: 'aa',
          }, {
            id: 'ab',
            label: 'ab',
          } ],
        }, {
          id: 'b',
          label: 'b',
        }, {
          id: 'c',
          label: 'c',
        } ],
      }
    },
  }
</script>
```

## 在 Vue 中使用打印功能
### 使用 vue-easy-print 实现
1. 安装
```shell
npm install vue-easy-print --save
```
2. 页面中引入并使用
```vue
<template>
  <vue-easy-print $ref="printDemo">
    <div>要打印的内容</div>
  </vue-easy-print>
</template>

<script>
import vueEasyPrint from 'vue-easy-print'

export default {
  name: 'demo',
  components: { vueEasyPrint },
  methods: {
    printHandle() {
      this.$refs.printDemo.print()
    }
  }
}
</script>
```
### 使用 vue-print-nb 实现
1. 安装
```shell
npm install vue-print-nb --save
```
2. 引入
:::: code-group
::: code-group-item 全局引入
```javascript
import Print from 'vue-print-nb'

Vue.use(Print)
```
:::
::: code-group-item 局部引入
```vue
<script>
import print from 'vue-print-nb'

export default {
  name: 'demo',
  directives: {
    print
  }
}
</script>
```
:::
::::
3. 使用
```vue
<template>
  <el-button v-print="printOptions" type="primary" size="small">打印</el-button>
  <div id="printDemo">要打印的内容</div>
</template>

<script>
export default {
  name: 'demo',
  data() {
    return {
      printOptions: {
        id: 'printDemo',
        beforeOpenCallback() {
          console.log('打开之前')
        },
        openCallback() {
          console.log('执行了打印')
        },
        closeCallback() {
          console.log('关闭了打印工具')
        }
      }
    }
  }
}
</script>
```
### 打印中的问题
1. 去除页眉和页脚
```vue
<style media="print">
@page{
  size: auto;
  margin: 3mm;
}
</style>
```
2. 背景色丢失
```css
body {
    -webkit-print-color-adjust: exact;
}
```

## 在 Vue 中使用导出功能
### 使用 vue-to-pdf 实现
1. 安装
```shell
npm i vue-to-pdf --save
```
2. 引入
```javascript
import vueToPdf from 'vue-to-pdf'
 
Vue.use(vueToPdf)
```
3. 使用
```vue
<template>
  <div>
    <el-button size="small" @click="exportPdfHandle">导出</el-button>
    <div ref="demo">要导出的内容</div>
  </div>
</template>

<script>
export default {
  name: 'demo',
  methods: {
    exportPdfHandle() {
      this.$PDFSave(this.$refs.demo, '测试')
    }
  }
}
</script>
```
### 使用 html2canvas 和 jspdf 实现
1.安装
```shell
npm install html2canvas jspdf --save-dev
```
2.新建 canvas2pdf.js
```javascript
import jsPDF from 'jspdf'
import html2canvas from 'html2canvas'
import logoImg from '../assets/images/pdf-logo.png'

export const exportPdf = (options, callback, errorBack) => {
  html2canvas(options.dom, {
    letterRendering: true,//每个字是否分别绘制，如果这样做，需要设置字间距
    allowTaint: true,//是否允许跨域图片污染画布
    scale: 2,//绘制的缩放比例（支持小数），默认是浏览器的缩放比，值越大，画面质量越高，但是会增加文件大小
    ignoreElements: options.ignoreElements,
    onclone: options.onclone || null
  }).then(canvas => {
    const pdf = new jsPDF("", "pt", "a4");
    //a4纸的尺寸[595.28,841.89]，html页面生成的canvas在pdf中图片的宽高
    let ctx = canvas.getContext('2d'),
      a4w = 595.28, a4h = 799.89,//a4纸的尺寸[595.28,841.89]，上下保留20的边距
      imgHeight = Math.floor(a4h * canvas.width / a4w),//按A4显示比例换算一页图像的像素高度
      renderedHeight = 0;

    while(renderedHeight < canvas.height) {
      let page = document.createElement("canvas");
      page.width = canvas.width;
      page.height = Math.min(imgHeight, canvas.height - renderedHeight);//可能内容不足一页

      //用getImageData剪裁指定区域，并画到前面创建的canvas对象中
      page.getContext('2d').putImageData(ctx.getImageData(0, renderedHeight, canvas.width, Math.min(imgHeight, canvas.height - renderedHeight)), 0, 0);
      //添加图像到页面，保留10mm边距
      pdf.addImage(page.toDataURL('image/jpeg', 1.0), 'JPEG', 0, 21, a4w, Math.min(a4h, a4w * page.height / page.width));
      //添加页眉logo
      pdf.addImage(logoImg, 'PNG', 0, 0, 62.5, 18.75);

      renderedHeight += imgHeight;
      if(renderedHeight < canvas.height)
        pdf.addPage();//如果后面还有内容，添加一个空页

    }
    // pdf.save(`${fileName}.pdf`);
    callback && callback(canvas, pdf)
  }).catch(err => {
    errorBack && errorBack()
    console.log('出错了', err)
  })
}
```

## 文件上传
### 使用 element-ui
```vue
<template>
  <el-upload
      action=""
      accept=".jpg,.jpeg,.png,.doc,.docx,.xls,.xlsx"
      :file-list="fileList"
      :before-upload="fileBeforeUploadHandle"
      :http-request="fileUploadHandle"
      :before-remove="fileBeforeRemoveHandle"
      :on-remove="fileRemoveHandle"
  >
    <el-button size="small" type="primary">选取文件</el-button>
    <div slot="tip" class="el-upload__tip">只能上传jpg/png/doc/docx/xls/xlsx文件，且不超过50M</div>
  </el-upload>
</template>

<script>
export default {
  data() {
    return {
      fileList: []
    }
  },
  methods: {
    fileBeforeUploadHandle(file) {
      const oversize = file.size / 1024 /1024 > 50
      if (oversize) {
        this.$message.error('上传文件大小不能超过 50M！')
      }
    },
    fileUploadHandle(file) {
      // (file.file).then(res => {
      //   this.fileList.push({name: res.fileName, url:res.path})
      // })
    },
    fileBeforeRemoveHandle(file, fileList) {
      return this.$confirm(`确定移除文件【 ${ file.name }】？`);
    },
    fileRemoveHandle(file, fileList) {
      this.fileList = fileList
    },
  }
}
</script>
```
