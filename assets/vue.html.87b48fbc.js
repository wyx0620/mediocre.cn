import{_ as i}from"./plugin-vue_export-helper.21dcd24c.js";import{o as e,c as n,b as l}from"./app.1c163dbd.js";const s={},d=l(`<h1 id="vue" tabindex="-1"><a class="header-anchor" href="#vue" aria-hidden="true">#</a> Vue</h1><h2 id="\u5728-vue-\u4E2D\u4F7F\u7528\u767E\u5EA6\u5730\u56FE" tabindex="-1"><a class="header-anchor" href="#\u5728-vue-\u4E2D\u4F7F\u7528\u767E\u5EA6\u5730\u56FE" aria-hidden="true">#</a> \u5728 Vue \u4E2D\u4F7F\u7528\u767E\u5EA6\u5730\u56FE</h2><ul><li><a href="https://lbsyun.baidu.com/index.php?title=lbscloud/poitags" target="_blank" rel="noopener noreferrer">\u767E\u5EA6\u5730\u56FEPOI\u5206\u7C7B</a></li></ul><ol><li>\u5728 <code>public/index.html</code> \u4E2D\u5F15\u5165\u767E\u5EA6\u5730\u56FE <code>JavaScript API GL v1.0</code></li></ol><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code>&lt;script type=&quot;text/javascript&quot; src=&quot;//api.map.baidu.com/api?type=webgl&amp;v=1.0&amp;ak=\u4F60\u7684\u5BC6\u94A5&quot;&gt;&lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="2"><li>\u65B0\u5EFA Map.vue \u5199\u5165 ::: details \u70B9\u51FB\u67E5\u770B\u4EE3\u7801</li></ol><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code>&lt;template&gt;
  &lt;div class=&quot;mapCom&quot;&gt;
    &lt;van-field
        :value=&quot;keyWords&quot;
        readonly
        clickable
        placeholder=&quot;\u8BF7\u8F93\u5165\u5730\u5740&quot;
        @click=&quot;clickHandle&quot;
    /&gt;
    &lt;div id=&quot;allMap&quot; ref=&quot;allMap&quot; /&gt;
    &lt;van-overlay :show=&quot;showOverlay&quot; z-index=&quot;10&quot;&gt;
      &lt;div class=&quot;suggestWrap&quot;&gt;
        &lt;van-field
            id=&quot;suggestId&quot;
            ref=&quot;suggest&quot;
            v-model=&quot;keyWords&quot;
            type=&quot;text&quot;
            name=&quot;keyWords&quot;
            placeholder=&quot;\u8BF7\u8F93\u5165\u5730\u5740&quot;
        &gt;
          &lt;template slot=&quot;right-icon&quot;&gt;
            &lt;span @click=&quot;closeOverlayHandle&quot;&gt;\u53D6\u6D88&lt;/span&gt;
          &lt;/template&gt;
        &lt;/van-field&gt;
        &lt;div v-if=&quot;keyWords.length &gt; 0&quot; class=&quot;resultList&quot;&gt;
          &lt;van-loading v-if=&quot;suggestLoading&quot; class=&quot;resultList-loading&quot; size=&quot;24px&quot;&gt;\u52A0\u8F7D\u4E2D...&lt;/van-loading&gt;
          &lt;template v-if=&quot;!suggestLoading&quot;&gt;
            &lt;div
                v-for=&quot;(item, index) in suggestList&quot;
                :key=&quot;index + 1&quot;
                class=&quot;resultList-item&quot;
                @click=&quot;suggestClickHandle(item)&quot;
            &gt;
              &lt;div class=&quot;resultList-item-title&quot;&gt;{{ item.business }}&lt;/div&gt;
              &lt;div class=&quot;resultList-item-address&quot;&gt;
                {{ item.province + item.city + item.district + item.street + item.streetNumber }}
              &lt;/div&gt;
            &lt;/div&gt;
          &lt;/template&gt;
        &lt;/div&gt;
      &lt;/div&gt;
    &lt;/van-overlay&gt;
    &lt;div class=&quot;resultList&quot;&gt;
      &lt;van-loading v-if=&quot;listLoading&quot; class=&quot;resultList-loading&quot; size=&quot;24px&quot;&gt;\u52A0\u8F7D\u4E2D...&lt;/van-loading&gt;
      &lt;template v-if=&quot;!listLoading&quot;&gt;
        &lt;div
            v-for=&quot;(item, index) in searchResult&quot;
            :key=&quot;index + 1&quot;
            class=&quot;resultList-item&quot;
            @click=&quot;searchClickHandle(item)&quot;
        &gt;
          &lt;div class=&quot;resultList-item-title&quot;&gt;{{ item.title }}&lt;/div&gt;
          &lt;div class=&quot;resultList-item-address&quot;&gt;{{ item.address }}&lt;/div&gt;
        &lt;/div&gt;
      &lt;/template&gt;
      &lt;div v-if=&quot;listFinished&quot; class=&quot;resultList-end&quot;&gt;\u6CA1\u6709\u66F4\u591A\u4E86&lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
import defaultIcon from &#39;../assets/images/icon-location.png&#39;
import moveIcon from &#39;../assets/images/icon-location-1.png&#39;
import { Dialog } from &#39;vant&#39;

export default {
  name: &#39;Map&#39;,
  components: {},
  props: {},
  data () {
    return {
      // \u8F93\u5165\u6846\u503C
      keyWords: &#39;&#39;,
      // \u9644\u8FD1\u5730\u70B9\u641C\u7D22\u4E2D
      listLoading: false,
      // \u6CA1\u6709\u66F4\u591A\u9644\u8FD1\u5730\u70B9
      listFinished: true,
      // \u9644\u8FD1\u5730\u70B9\u641C\u7D22\u7ED3\u679C
      searchResult: [],
      // \u663E\u793A\u906E\u7F69\u5C42
      showOverlay: false,
      // \u8F93\u5165\u5EFA\u8BAE\u641C\u7D22\u4E2D
      suggestLoading: false,
      // \u8F93\u5165\u5EFA\u8BAE\u7ED3\u679C
      suggestList: [],
      // \u5730\u56FE\u4E2D\u5FC3 control \u7EC4\u4EF6
      centerControl: null
    }
  },
  mounted () {
    this.init()
  },
  methods: {
    init () {
      this.$nextTick(() =&gt; {
        this.mapInit()
      })
    },
    mapInit () {
      // \u5728\u6307\u5B9A\u7684\u5BB9\u5668\u5185\u521B\u5EFA\u5730\u56FE\u5B9E\u4F8B
      // eslint-disable-next-line no-undef
      window.BD_MAP = new BMapGL.Map(&#39;allMap&#39;)
      // \u83B7\u53D6\u5F53\u524D\u7ECF\u7EAC\u5EA6\u5E76\u521D\u59CB\u5316\u5730\u56FE\u3001\u641C\u7D22\u9644\u8FD1
      this.getGeoBySdkHandle(res =&gt; {
        const { longitude, latitude } = res
        // \u521D\u59CB\u5316\u5730\u56FE
        // eslint-disable-next-line no-undef
        window.BD_MAP.centerAndZoom(new BMapGL.Point(longitude, latitude), 18)
        // \u8BBE\u7F6E\u5730\u56FE\u6700\u5C0F\u548C\u6700\u5927\u7EA7\u522B
        window.BD_MAP.setMinZoom(14) // 1:1km
        window.BD_MAP.setMaxZoom(18) // 1:50m
        // \u641C\u7D22\u9644\u8FD1
        this.mapSearchNearbyHandle(longitude, latitude)
      })
      // \u8BBE\u7F6E\u9ED8\u8BA4\u56FE\u6807\u5230\u5730\u56FE\u4E2D\u5FC3\u4F4D\u7F6E
      this.setIconToMapCenter(defaultIcon, 32, 32)
      // \u901A\u8FC7\u8F93\u5165\u6846\u8F93\u5165\u83B7\u53D6\u5EFA\u8BAE\u5217\u8868
      this.getSuggestList()
      // \u5730\u56FE\u62D6\u62FD\u52A8\u6001\u6548\u679C
      window.BD_MAP.addEventListener(&#39;dragstart&#39;, () =&gt; {
        this.setIconToMapCenter(moveIcon, 32, 32)
      })
      // \u5730\u56FE\u62D6\u62FD\u540E\u641C\u7D22
      window.BD_MAP.addEventListener(&#39;dragend&#39;, () =&gt; {
        const location = this.getMapCenter()
        this.setIconToMapCenter(defaultIcon, 32, 32)
        this.mapSearchNearbyHandle(location.lng, location.lat)
      })
    },
    // \u8BBE\u7F6E\u56FE\u6807\u5230\u5730\u56FE\u4E2D\u5FC3\u4F4D\u7F6E
    setIconToMapCenter (icon, iconWidth, iconHeight) {
      if (this.centerControl) window.BD_MAP.removeControl(this.centerControl)
      const mapDom = this.$refs.allMap
      const x = (mapDom.clientWidth - iconWidth) / 2
      const y = (mapDom.clientHeight - iconHeight) / 2
      this.setMapControl(icon, x, y, iconWidth, iconHeight)
    },
    // \u83B7\u53D6\u5730\u56FE\u4E2D\u5FC3\u70B9
    getMapCenter () {
      const cen = window.BD_MAP.getCenter()
      return {
        lng: cen.lng.toFixed(6),
        lat: cen.lat.toFixed(6)
      }
    },
    // \u5728\u5730\u56FE\u4E0A\u6DFB\u52A0 Control \u6807\u8BB0
    setMapControl (icon, offsetX = 0, offsetY = 0, width = 32, height = 32) {
      // eslint-disable-next-line no-undef
      const control = new BMapGL.Control()
      // eslint-disable-next-line no-undef
      control.defaultAnchor = BMAP_ANCHOR_TOP_RIGHT
      // eslint-disable-next-line no-undef
      control.defaultOffset = new BMapGL.Size(offsetX, offsetY)
      control.initialize = map =&gt; {
        const div = document.createElement(&#39;div&#39;)
        div.style.width = width + &#39;px&#39;
        div.style.height = height + &#39;px&#39;
        div.style.backgroundImage = \`url(\${icon})\`
        div.style.backgroundSize = &#39;cover&#39;
        // \u6DFB\u52A0DOM\u5143\u7D20\u5230\u5730\u56FE\u4E2D
        map.getContainer().appendChild(div)
        return div
      }
      window.BD_MAP.addControl(control)
      this.centerControl = control
    },
    // \u5730\u56FE\u641C\u7D22\u9644\u8FD1\u8303\u56F4
    mapSearchNearbyHandle (lng, lat, keywords = [&#39;\u5C0F\u533A&#39;, &#39;\u9152\u5E97&#39;], rang = 1000, size = 20) {
      this.listLoading = true
      this.listFinished = false
      // eslint-disable-next-line no-undef
      const localSearch = new BMapGL.LocalSearch(window.BD_MAP, {
        onSearchComplete: res =&gt; {
          let list = []
          for (let i = 0; i &lt; keywords.length; i++) {
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
    // \u5B9A\u4F4DSDK\u8F85\u52A9\u5B9A\u4F4D
    getGeoBySdkHandle (callback) {
      // eslint-disable-next-line no-undef
      const geolocation = new BMapGL.Geolocation()
      // \u5F00\u542FSDK\u8F85\u52A9\u5B9A\u4F4D
      geolocation.enableSDKLocation()
      geolocation.getCurrentPosition(res =&gt; {
        // eslint-disable-next-line no-undef
        if (geolocation.getStatus() === BMAP_STATUS_SUCCESS) {
          callback &amp;&amp; callback(res)
        }
      })
    },
    // \u901A\u8FC7\u8F93\u5165\u6846\u8F93\u5165\u83B7\u53D6\u5EFA\u8BAE\u5217\u8868
    getSuggestList () {
      // eslint-disable-next-line no-undef
      const autocomplete = new BMapGL.Autocomplete({
        input: &#39;suggestId&#39;,
        location: window.BD_MAP,
        onSearchComplete: res =&gt; {
          autocomplete.hide()
          this.suggestList = res._pois
        }
      })
    },
    // \u8F93\u5165\u6846\u70B9\u51FB\u6253\u5F00\u906E\u7F69\u5C42
    clickHandle () {
      this.showOverlay = true
      this.suggestList = []
      this.$nextTick(() =&gt; {
        this.$refs.suggest.focus()
      })
    },
    // \u5173\u95ED\u906E\u7F69\u5C42
    closeOverlayHandle () {
      this.showOverlay = false
      this.keyWords = &#39;&#39;
    },
    // \u641C\u7D22\u7ED3\u679C\u5217\u8868\u9009\u4E2D
    searchClickHandle (item) {
      Dialog({ message: JSON.stringify(item) })
    },
    // \u5EFA\u8BAE\u7ED3\u679C\u5217\u8868\u9009\u4E2D
    suggestClickHandle (item) {
      Dialog({ message: JSON.stringify(item) })
    },
    // \u6839\u636E\u5730\u5740\u63CF\u8FF0\u83B7\u5F97\u5750\u6807\u4FE1\u606F
    getInfoByGeoHandle(address, city) {
      // eslint-disable-next-line no-undef
      const geocoder = new BMapGL.Geocoder()
      geocoder.getPoint(address, point =&gt; {
        console.log(&#39;----\u6839\u636E\u5730\u5740\u63CF\u8FF0\u83B7\u5F97\u5750\u6807\u4FE1\u606F----&#39;, point)
      }, city)
    },
    // \u6839\u636E\u5750\u6807\u70B9\u83B7\u5F97\u8BE5\u5730\u70B9\u7684\u5730\u5740\u63CF\u8FF0
    getInfoByPointHandle(point) {
      // eslint-disable-next-line no-undef
      const geocoder = new BMapGL.Geocoder()
      geocoder.getLocation(point, res =&gt; {
        console.log(&#39;----\u6839\u636E\u5750\u6807\u70B9\u83B7\u5F97\u8BE5\u5730\u70B9\u7684\u5730\u5740\u63CF\u8FF0----&#39;, res)
      })
    },
  }
}
&lt;/script&gt;

&lt;style lang=&quot;scss&quot; scoped&gt;
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
    &amp;-loading {
      text-align: center;
    }
    &amp;-item {
      border-bottom: 1px solid #EEEEEE;
      box-sizing: border-box;
      padding: 20px 10px 10px;
      &amp;-title {
        font-size: 30px;
        font-weight: bold;
        margin-bottom: 10px;
      }
      &amp;-address {
        font-size: 24px;
      }
    }
    &amp;-end {
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
&lt;/style&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>:::</p><h2 id="\u6811\u5F62\u9009\u62E9\u5668" tabindex="-1"><a class="header-anchor" href="#\u6811\u5F62\u9009\u62E9\u5668" aria-hidden="true">#</a> \u6811\u5F62\u9009\u62E9\u5668</h2><h3 id="\u81EA\u5DF1\u5C01\u88C5" tabindex="-1"><a class="header-anchor" href="#\u81EA\u5DF1\u5C01\u88C5" aria-hidden="true">#</a> \u81EA\u5DF1\u5C01\u88C5</h3><p>::: details \u70B9\u51FB\u67E5\u770B\u4EE3\u7801</p><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code>&lt;template&gt;
  &lt;el-select
    :value=&quot;valueTitle&quot;
    :clearable=&quot;clearable&quot;
    :size=&quot;size&quot;
    :placeholder=&quot;placeholder&quot;
    @clear=&quot;clearHandle&quot;&gt;
    &lt;el-option
      :value=&quot;valueTitle&quot;
      :label=&quot;valueTitle&quot;&gt;
      &lt;el-tree
        id=&quot;tree-option&quot;
        ref=&quot;selectTree&quot;
        :accordion=&quot;accordion&quot;
        :data=&quot;options&quot;
        :props=&quot;props&quot;
        :node-key=&quot;props.value&quot;
        :default-expanded-keys=&quot;defaultExpandedKey&quot;
        @node-click=&quot;handleNodeClick&quot;
      /&gt;
    &lt;/el-option&gt;
  &lt;/el-select&gt;
&lt;/template&gt;

&lt;script&gt;
export default {
  name: &#39;SelectTree&#39;,
  props: {
    /* \u5927\u5C0F */
    size: {
      type: String,
      default: () =&gt; {
        return &#39;mini&#39;
      }
    },
    /* \u63D0\u793A\u8BED */
    placeholder: {
      type: String,
      default: () =&gt; {
        return &#39;\u8BF7\u9009\u62E9&#39;
      }
    },
    /* \u914D\u7F6E\u9879 */
    props: {
      type: Object,
      default: () =&gt; {
        return {
          // ID\u5B57\u6BB5\u540D
          value: &#39;id&#39;,
          // \u663E\u793A\u540D\u79F0
          label: &#39;label&#39;,
          // \u5B50\u7EA7\u5B57\u6BB5\u540D
          children: &#39;children&#39;
        }
      }
    },
    /* \u9009\u9879\u5217\u8868\u6570\u636E(\u6811\u5F62\u7ED3\u6784\u7684\u5BF9\u8C61\u6570\u7EC4) */
    options: {
      type: Array,
      default: () =&gt; {
        return []
      }
    },
    /* \u521D\u59CB\u503C */
    value: {
      type: Number,
      default: () =&gt; {
        return null
      }
    },
    /* \u53EF\u6E05\u7A7A\u9009\u9879 */
    clearable: {
      type: Boolean,
      default: () =&gt; {
        return true
      }
    },
    /* \u81EA\u52A8\u6536\u8D77 */
    accordion: {
      type: Boolean,
      default: () =&gt; {
        return false
      }
    }
  },
  data() {
    return {
      // \u521D\u59CB\u503C
      valueId: this.value,
      valueTitle: &#39;&#39;,
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
    // \u521D\u59CB\u5316\u503C
    initHandle() {
      if (this.valueId) {
        // \u521D\u59CB\u5316\u663E\u793A
        this.valueTitle = this.$refs.selectTree.getNode(this.valueId).data[this.props.label]
        // \u8BBE\u7F6E\u9ED8\u8BA4\u9009\u4E2D
        this.$refs.selectTree.setCurrentKey(this.valueId)
        // \u8BBE\u7F6E\u9ED8\u8BA4\u5C55\u5F00
        this.defaultExpandedKey = [this.valueId]
      }
      this.$nextTick(() =&gt; {
        const scrollWrap = document.querySelectorAll(&#39;.el-scrollbar .el-select-dropdown__wrap&#39;)[0]
        const scrollBar = document.querySelectorAll(&#39;.el-scrollbar .el-scrollbar__bar&#39;)
        scrollWrap.style.cssText = &#39;margin: 0px; max-height: none; overflow: hidden;&#39;
        scrollBar.forEach(ele =&gt; ele.style.width = 0)
      })
    },
    // \u5207\u6362\u9009\u9879
    handleNodeClick(node) {
      this.valueTitle = node[this.props.label]
      this.valueId = node[this.props.value]
      this.$emit(&#39;input&#39;, this.valueId)
      this.$emit(&#39;selectTreeChange&#39;, this.valueId)
      this.defaultExpandedKey = []
    },
    // \u6E05\u9664\u9009\u4E2D
    clearHandle() {
      this.valueTitle = &#39;&#39;
      this.valueId = null
      this.defaultExpandedKey = []
      this.clearSelected()
      this.$emit(&#39;input&#39;, null)
      this.$emit(&#39;selectTreeChange&#39;, null)
    },
    /* \u6E05\u7A7A\u9009\u4E2D\u6837\u5F0F */
    clearSelected() {
      const allNode = document.querySelectorAll(&#39;#tree-option .el-tree-node&#39;)
      allNode.forEach((element) =&gt; element.classList.remove(&#39;is-current&#39;))
    }
  }
}
&lt;/script&gt;

&lt;style scoped&gt;
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

ul li &gt;&gt;&gt; .el-tree .el-tree-node__content {
  height: auto;
  padding: 0 20px;
}

.el-tree-node__label {
  font-weight: normal;
}

.el-tree &gt;&gt;&gt; .is-current .el-tree-node__label {
  color: #409EFF;
  font-weight: 700;
}

.el-tree &gt;&gt;&gt; .is-current .el-tree-node__children .el-tree-node__label {
  color: #606266;
  font-weight: normal;
}
&lt;/style&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>:::</p><h3 id="\u4F7F\u7528-vuetreeselect" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528-vuetreeselect" aria-hidden="true">#</a> \u4F7F\u7528 VueTreeselect</h3><ol><li>\u5B89\u88C5</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>npm install --save @riophae/vue-treeselect
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="2"><li>\u793A\u4F8B</li></ol><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code>&lt;!-- Vue SFC --&gt;
&lt;template&gt;
  &lt;div id=&quot;app&quot;&gt;
    &lt;treeselect v-model=&quot;value&quot; :multiple=&quot;true&quot; :options=&quot;options&quot; /&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
  // import the component
  import Treeselect from &#39;@riophae/vue-treeselect&#39;
  // import the styles
  import &#39;@riophae/vue-treeselect/dist/vue-treeselect.css&#39;

  export default {
    // register the component
    components: { Treeselect },
    data() {
      return {
        // define the default value
        value: null,
        // define options
        options: [ {
          id: &#39;a&#39;,
          label: &#39;a&#39;,
          children: [ {
            id: &#39;aa&#39;,
            label: &#39;aa&#39;,
          }, {
            id: &#39;ab&#39;,
            label: &#39;ab&#39;,
          } ],
        }, {
          id: &#39;b&#39;,
          label: &#39;b&#39;,
        }, {
          id: &#39;c&#39;,
          label: &#39;c&#39;,
        } ],
      }
    },
  }
&lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u5728-vue-\u4E2D\u4F7F\u7528\u6253\u5370\u529F\u80FD" tabindex="-1"><a class="header-anchor" href="#\u5728-vue-\u4E2D\u4F7F\u7528\u6253\u5370\u529F\u80FD" aria-hidden="true">#</a> \u5728 Vue \u4E2D\u4F7F\u7528\u6253\u5370\u529F\u80FD</h2><h3 id="\u4F7F\u7528-vue-easy-print-\u5B9E\u73B0" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528-vue-easy-print-\u5B9E\u73B0" aria-hidden="true">#</a> \u4F7F\u7528 vue-easy-print \u5B9E\u73B0</h3><ol><li>\u5B89\u88C5</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>npm install vue-easy-print --save
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="2"><li>\u9875\u9762\u4E2D\u5F15\u5165\u5E76\u4F7F\u7528</li></ol><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code>&lt;template&gt;
  &lt;vue-easy-print $ref=&quot;printDemo&quot;&gt;
    &lt;div&gt;\u8981\u6253\u5370\u7684\u5185\u5BB9&lt;/div&gt;
  &lt;/vue-easy-print&gt;
&lt;/template&gt;

&lt;script&gt;
import vueEasyPrint from &#39;vue-easy-print&#39;

export default {
  name: &#39;demo&#39;,
  components: { vueEasyPrint },
  methods: {
    printHandle() {
      this.$refs.printDemo.print()
    }
  }
}
&lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u4F7F\u7528-vue-print-nb-\u5B9E\u73B0" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528-vue-print-nb-\u5B9E\u73B0" aria-hidden="true">#</a> \u4F7F\u7528 vue-print-nb \u5B9E\u73B0</h3><ol><li>\u5B89\u88C5</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>npm install vue-print-nb --save
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="2"><li>\u5F15\u5165 :::: code-group ::: code-group-item \u5168\u5C40\u5F15\u5165</li></ol><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>import Print from &#39;vue-print-nb&#39;

Vue.use(Print)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>::: ::: code-group-item \u5C40\u90E8\u5F15\u5165</p><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code>&lt;script&gt;
import print from &#39;vue-print-nb&#39;

export default {
  name: &#39;demo&#39;,
  directives: {
    print
  }
}
&lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>::: :::: 3. \u4F7F\u7528</p><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code>&lt;template&gt;
  &lt;el-button v-print=&quot;printOptions&quot; type=&quot;primary&quot; size=&quot;small&quot;&gt;\u6253\u5370&lt;/el-button&gt;
  &lt;div id=&quot;printDemo&quot;&gt;\u8981\u6253\u5370\u7684\u5185\u5BB9&lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
export default {
  name: &#39;demo&#39;,
  data() {
    return {
      printOptions: {
        id: &#39;printDemo&#39;,
        beforeOpenCallback() {
          console.log(&#39;\u6253\u5F00\u4E4B\u524D&#39;)
        },
        openCallback() {
          console.log(&#39;\u6267\u884C\u4E86\u6253\u5370&#39;)
        },
        closeCallback() {
          console.log(&#39;\u5173\u95ED\u4E86\u6253\u5370\u5DE5\u5177&#39;)
        }
      }
    }
  }
}
&lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u6253\u5370\u4E2D\u7684\u95EE\u9898" tabindex="-1"><a class="header-anchor" href="#\u6253\u5370\u4E2D\u7684\u95EE\u9898" aria-hidden="true">#</a> \u6253\u5370\u4E2D\u7684\u95EE\u9898</h3><ol><li>\u53BB\u9664\u9875\u7709\u548C\u9875\u811A</li></ol><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code>&lt;style media=&quot;print&quot;&gt;
@page{
  size: auto;
  margin: 3mm;
}
&lt;/style&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>\u80CC\u666F\u8272\u4E22\u5931</li></ol><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code>body {
    -webkit-print-color-adjust: exact;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u5728-vue-\u4E2D\u4F7F\u7528\u5BFC\u51FA\u529F\u80FD" tabindex="-1"><a class="header-anchor" href="#\u5728-vue-\u4E2D\u4F7F\u7528\u5BFC\u51FA\u529F\u80FD" aria-hidden="true">#</a> \u5728 Vue \u4E2D\u4F7F\u7528\u5BFC\u51FA\u529F\u80FD</h2><h3 id="\u4F7F\u7528-vue-to-pdf-\u5B9E\u73B0" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528-vue-to-pdf-\u5B9E\u73B0" aria-hidden="true">#</a> \u4F7F\u7528 vue-to-pdf \u5B9E\u73B0</h3><ol><li>\u5B89\u88C5</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>npm i vue-to-pdf --save
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="2"><li>\u5F15\u5165</li></ol><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>import vueToPdf from &#39;vue-to-pdf&#39;
 
Vue.use(vueToPdf)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>\u4F7F\u7528</li></ol><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code>&lt;template&gt;
  &lt;div&gt;
    &lt;el-button size=&quot;small&quot; @click=&quot;exportPdfHandle&quot;&gt;\u5BFC\u51FA&lt;/el-button&gt;
    &lt;div ref=&quot;demo&quot;&gt;\u8981\u5BFC\u51FA\u7684\u5185\u5BB9&lt;/div&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
export default {
  name: &#39;demo&#39;,
  methods: {
    exportPdfHandle() {
      this.$PDFSave(this.$refs.demo, &#39;\u6D4B\u8BD5&#39;)
    }
  }
}
&lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u4F7F\u7528-html2canvas-\u548C-jspdf-\u5B9E\u73B0" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528-html2canvas-\u548C-jspdf-\u5B9E\u73B0" aria-hidden="true">#</a> \u4F7F\u7528 html2canvas \u548C jspdf \u5B9E\u73B0</h3><p>1.\u5B89\u88C5</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>npm install html2canvas jspdf --save-dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>2.\u65B0\u5EFA canvas2pdf.js</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>import jsPDF from &#39;jspdf&#39;
import html2canvas from &#39;html2canvas&#39;
import logoImg from &#39;../assets/images/pdf-logo.png&#39;

export const exportPdf = (options, callback, errorBack) =&gt; {
  html2canvas(options.dom, {
    letterRendering: true,//\u6BCF\u4E2A\u5B57\u662F\u5426\u5206\u522B\u7ED8\u5236\uFF0C\u5982\u679C\u8FD9\u6837\u505A\uFF0C\u9700\u8981\u8BBE\u7F6E\u5B57\u95F4\u8DDD
    allowTaint: true,//\u662F\u5426\u5141\u8BB8\u8DE8\u57DF\u56FE\u7247\u6C61\u67D3\u753B\u5E03
    scale: 2,//\u7ED8\u5236\u7684\u7F29\u653E\u6BD4\u4F8B\uFF08\u652F\u6301\u5C0F\u6570\uFF09\uFF0C\u9ED8\u8BA4\u662F\u6D4F\u89C8\u5668\u7684\u7F29\u653E\u6BD4\uFF0C\u503C\u8D8A\u5927\uFF0C\u753B\u9762\u8D28\u91CF\u8D8A\u9AD8\uFF0C\u4F46\u662F\u4F1A\u589E\u52A0\u6587\u4EF6\u5927\u5C0F
    ignoreElements: options.ignoreElements,
    onclone: options.onclone || null
  }).then(canvas =&gt; {
    const pdf = new jsPDF(&quot;&quot;, &quot;pt&quot;, &quot;a4&quot;);
    //a4\u7EB8\u7684\u5C3A\u5BF8[595.28,841.89]\uFF0Chtml\u9875\u9762\u751F\u6210\u7684canvas\u5728pdf\u4E2D\u56FE\u7247\u7684\u5BBD\u9AD8
    let ctx = canvas.getContext(&#39;2d&#39;),
      a4w = 595.28, a4h = 799.89,//a4\u7EB8\u7684\u5C3A\u5BF8[595.28,841.89]\uFF0C\u4E0A\u4E0B\u4FDD\u755920\u7684\u8FB9\u8DDD
      imgHeight = Math.floor(a4h * canvas.width / a4w),//\u6309A4\u663E\u793A\u6BD4\u4F8B\u6362\u7B97\u4E00\u9875\u56FE\u50CF\u7684\u50CF\u7D20\u9AD8\u5EA6
      renderedHeight = 0;

    while(renderedHeight &lt; canvas.height) {
      let page = document.createElement(&quot;canvas&quot;);
      page.width = canvas.width;
      page.height = Math.min(imgHeight, canvas.height - renderedHeight);//\u53EF\u80FD\u5185\u5BB9\u4E0D\u8DB3\u4E00\u9875

      //\u7528getImageData\u526A\u88C1\u6307\u5B9A\u533A\u57DF\uFF0C\u5E76\u753B\u5230\u524D\u9762\u521B\u5EFA\u7684canvas\u5BF9\u8C61\u4E2D
      page.getContext(&#39;2d&#39;).putImageData(ctx.getImageData(0, renderedHeight, canvas.width, Math.min(imgHeight, canvas.height - renderedHeight)), 0, 0);
      //\u6DFB\u52A0\u56FE\u50CF\u5230\u9875\u9762\uFF0C\u4FDD\u755910mm\u8FB9\u8DDD
      pdf.addImage(page.toDataURL(&#39;image/jpeg&#39;, 1.0), &#39;JPEG&#39;, 0, 21, a4w, Math.min(a4h, a4w * page.height / page.width));
      //\u6DFB\u52A0\u9875\u7709logo
      pdf.addImage(logoImg, &#39;PNG&#39;, 0, 0, 62.5, 18.75);

      renderedHeight += imgHeight;
      if(renderedHeight &lt; canvas.height)
        pdf.addPage();//\u5982\u679C\u540E\u9762\u8FD8\u6709\u5185\u5BB9\uFF0C\u6DFB\u52A0\u4E00\u4E2A\u7A7A\u9875

    }
    // pdf.save(\`\${fileName}.pdf\`);
    callback &amp;&amp; callback(canvas, pdf)
  }).catch(err =&gt; {
    errorBack &amp;&amp; errorBack()
    console.log(&#39;\u51FA\u9519\u4E86&#39;, err)
  })
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u6587\u4EF6\u4E0A\u4F20" tabindex="-1"><a class="header-anchor" href="#\u6587\u4EF6\u4E0A\u4F20" aria-hidden="true">#</a> \u6587\u4EF6\u4E0A\u4F20</h2><h3 id="\u4F7F\u7528-element-ui" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528-element-ui" aria-hidden="true">#</a> \u4F7F\u7528 element-ui</h3><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code>&lt;template&gt;
  &lt;el-upload
      action=&quot;&quot;
      accept=&quot;.jpg,.jpeg,.png,.doc,.docx,.xls,.xlsx&quot;
      :file-list=&quot;fileList&quot;
      :before-upload=&quot;fileBeforeUploadHandle&quot;
      :http-request=&quot;fileUploadHandle&quot;
      :before-remove=&quot;fileBeforeRemoveHandle&quot;
      :on-remove=&quot;fileRemoveHandle&quot;
  &gt;
    &lt;el-button size=&quot;small&quot; type=&quot;primary&quot;&gt;\u9009\u53D6\u6587\u4EF6&lt;/el-button&gt;
    &lt;div slot=&quot;tip&quot; class=&quot;el-upload__tip&quot;&gt;\u53EA\u80FD\u4E0A\u4F20jpg/png/doc/docx/xls/xlsx\u6587\u4EF6\uFF0C\u4E14\u4E0D\u8D85\u8FC750M&lt;/div&gt;
  &lt;/el-upload&gt;
&lt;/template&gt;

&lt;script&gt;
export default {
  data() {
    return {
      fileList: []
    }
  },
  methods: {
    fileBeforeUploadHandle(file) {
      const oversize = file.size / 1024 /1024 &gt; 50
      if (oversize) {
        this.$message.error(&#39;\u4E0A\u4F20\u6587\u4EF6\u5927\u5C0F\u4E0D\u80FD\u8D85\u8FC7 50M\uFF01&#39;)
      }
    },
    fileUploadHandle(file) {
      // (file.file).then(res =&gt; {
      //   this.fileList.push({name: res.fileName, url:res.path})
      // })
    },
    fileBeforeRemoveHandle(file, fileList) {
      return this.$confirm(\`\u786E\u5B9A\u79FB\u9664\u6587\u4EF6\u3010 \${ file.name }\u3011\uFF1F\`);
    },
    fileRemoveHandle(file, fileList) {
      this.fileList = fileList
    },
  }
}
&lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,54),v=[d];function a(r,t){return e(),n("div",null,v)}var m=i(s,[["render",a],["__file","vue.html.vue"]]);export{m as default};
