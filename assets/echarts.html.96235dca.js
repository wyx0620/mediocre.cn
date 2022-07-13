import{_ as i}from"./plugin-vue_export-helper.21dcd24c.js";import{o as n,c as e,b as s}from"./app.1c163dbd.js";const l={},d=s(`<h1 id="echarts" tabindex="-1"><a class="header-anchor" href="#echarts" aria-hidden="true">#</a> Echarts</h1><h2 id="\u666E\u901A\u5730\u56FE" tabindex="-1"><a class="header-anchor" href="#\u666E\u901A\u5730\u56FE" aria-hidden="true">#</a> \u666E\u901A\u5730\u56FE</h2><p>::: details \u70B9\u51FB\u67E5\u770B\u4EE3\u7801</p><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code>&lt;template&gt;
  &lt;div id=&quot;chartsMap&quot; class=&quot;ChartsMap&quot;&gt;&lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
import MapJson from &quot;&quot;

export default {
  name: &quot;ChartsMap&quot;,
  data() {
    return {
      MapJson,
      list: [],
      maxVal: null
    }
  },
  mounted() {
    this.getList()
  },
  methods: {
    getList() {
      const chartDom = document.getElementById(&#39;chartsMap&#39;);
      this.myChart = this.$echarts.init(chartDom, null, {renderer: &#39;svg&#39;});
      this.myChart.showLoading()
      apiRequest({}).then(res =&gt; {
        this.list = res
        let arr = res.slice().sort((a, b) =&gt; {
          return b.value - a.value
        })
        this.maxVal = Number(arr[0].value) + 1000
        this.$nextTick(() =&gt; {
          this.drawMap()
        })
      })
    },
    drawMap() {
      this.myChart.hideLoading()
      this.$echarts.registerMap(&#39;china&#39;, MapJson);
      const option = {
        tooltip: {
          trigger: &#39;item&#39;,
          formatter: &#39;{b}&lt;br/&gt;{c}\u4EBA&#39;
        },
        visualMap: {
          min: 0,
          max: this.maxVal,
          text: [&#39;High&#39;, &#39;Low&#39;],
          realtime: false,
          calculable: true,
          inRange: {
            color: [&#39;lightskyblue&#39;, &#39;yellow&#39;, &#39;orangered&#39;]
          }
        },
        series: [
          {
            type: &#39;map&#39;,
            map: &#39;china&#39;,
            data: this.list
          }
        ]
      }
      option &amp;&amp; this.myChart.setOption(option);
    },
  }
}
&lt;/script&gt;

&lt;style scoped&gt;
.ChartsMap {
  height: 100%;
}
&lt;/style&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>:::</p><h2 id="\u5730\u56FE\u6253\u70B9" tabindex="-1"><a class="header-anchor" href="#\u5730\u56FE\u6253\u70B9" aria-hidden="true">#</a> \u5730\u56FE\u6253\u70B9</h2><p>::: details \u70B9\u51FB\u67E5\u770B\u4EE3\u7801</p><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code>&lt;template&gt;
  &lt;div :id=&quot;echartsId&quot; class=&quot;ChartsEffectMap&quot;&gt;&lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
import MapJson from &quot;&quot;

export default {
  name: &quot;ChartsEffectMap&quot;,
  props: {
    echartsId: {
      type: String,
      default: &#39;&#39;
    },
    scatterSize: {
      type: Number,
      default: 20
    }
  },
  data() {
    return {
      MapJson,
      list: [],
      myChart: null
    }
  },
  mounted() {
    this.getList()
  },
  methods: {
    getList() {
      const chartDom = document.getElementById(this.echartsId);
      this.myChart = this.$echarts.init(chartDom, null, {renderer: &#39;svg&#39;});
      this.myChart.showLoading()
      apiRequest({}).then(res =&gt; {
        this.list = res
        this.$nextTick(() =&gt; {
          this.drawCharts()
        })
      })
    },
    drawCharts() {
      this.myChart.hideLoading()
      this.$echarts.registerMap(&#39;mapDemo&#39;, MapJson);
      const convertData = (arr) =&gt; {
        const res = [];
        for (let i in arr) {
          res.push({
            name: arr[i].merchant,
            value: [arr[i].longitude, arr[i].latitude, arr[i].value]
          });
        }
        return res;
      }
      const option = {
        tooltip: {
          formatter: params =&gt; {
            return params.name
          }
        },
        geo: [
          {
            type: &#39;map&#39;,
            map: &#39;mapDemo&#39;,
            label: {
              show: true,
              color: &#39;#FFFFFF&#39;,
            },
            itemStyle: {
              areaColor: &#39;#0092ff&#39;
            },
          }
        ],
        series: [
          // {
          //   type: &#39;map&#39;,
          //   map: &#39;mapDemo&#39;,
          //   label: {
          //     show: true,
          //     color: &#39;#FFFFFF&#39;,
          //   },
          //   itemStyle: {
          //     areaColor: &#39;#0092ff&#39;
          //   },
          //   geoIndex: 0,
          //   data: this.list
          // },
          {
            type: &#39;scatter&#39;,
            coordinateSystem: &#39;geo&#39;,
            data: convertData(this.list),
            symbol: &quot;image://&quot; + require(&quot;../../../assets/image/icon-mapDot.png&quot;),
            symbolSize: this.scatterSize,
            label: {
              show: false
            },
            zlevel: 1,
          },
        ]
      };
      option &amp;&amp; this.myChart.setOption(option);
    }
  }
}
&lt;/script&gt;

&lt;style scoped&gt;
.ChartsEffectMap {
  width: 100%;
  height: 100%;
}
&lt;/style&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>:::</p><h2 id="\u666E\u901A\u6298\u7EBF\u56FE" tabindex="-1"><a class="header-anchor" href="#\u666E\u901A\u6298\u7EBF\u56FE" aria-hidden="true">#</a> \u666E\u901A\u6298\u7EBF\u56FE</h2><p>::: details \u70B9\u51FB\u67E5\u770B\u4EE3\u7801</p><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code>&lt;template&gt;
  &lt;div id=&quot;ChartsLine&quot; class=&quot;ChartsLine&quot;&gt;&lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
export default {
  name: &quot;index&quot;,
  data() {
    return {
      myChart: null
    }
  },
  methods: {
    chartsInit() {
      if (this.myChart) this.myChart.dispose()
      this.$nextTick(() =&gt; {
        this.drawLine()
      })
    },
    drawLine() {
      const chartDom = document.getElementById(&#39;ChartsLine&#39;);
      const myChart = this.$echarts.init(chartDom, null, {renderer: &#39;svg&#39;});
      const option = {
        color: &#39;#0092FF&#39;,
        xAxis: {
          type: &#39;category&#39;,
          boundaryGap: false,
          axisTick: false,
          axisLine: false,
          data: [&#39;A&#39;, &#39;B&#39;, &#39;C&#39;, &#39;D&#39;, &#39;E&#39;, &#39;F&#39;]
        },
        yAxis: {
          type: &#39;value&#39;
        },
        legend: {},
        tooltip: {
          formatter: &#39;{a}&lt;br&gt;{b}\uFF1A{c}\u4EBA&#39;
        },
        series: [
          {
            name: &#39;Test&#39;,
            data: [1, 2, 3, 4, 5, 6],
            type: &#39;line&#39;,
            areaStyle: {
              color: &#39;rgba(0,146,255)&#39;,
              opacity: 0.2
            }
          }
        ],
        dataZoom: [
          {
            type: &#39;inside&#39;,
            show: true,
            startValue: 0,
            endValue: 3,
          }
        ],
        grid: {
          top: 50,
          bottom: 0,
          left: 10,
          right: 20,
          containLabel: true
        }
      };
      option &amp;&amp; myChart.setOption(option);
    }
  }
}
&lt;/script&gt;

&lt;style scoped&gt;
.ChartsLine {
  width: 100%;
  height: 100%;
}
&lt;/style&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>:::</p><h2 id="\u666E\u901A\u67F1\u72B6\u56FE" tabindex="-1"><a class="header-anchor" href="#\u666E\u901A\u67F1\u72B6\u56FE" aria-hidden="true">#</a> \u666E\u901A\u67F1\u72B6\u56FE</h2><p>::: details \u70B9\u51FB\u67E5\u770B\u4EE3\u7801</p><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code>&lt;template&gt;
  &lt;div id=&quot;ChartsBar&quot; class=&quot;ChartsBar&quot;&gt;&lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
export default {
  name: &quot;index&quot;,
  data() {
    return {
      myChart: null,
      colorObj: {
        start: [&#39;#008BB1&#39;],
        end: [&#39;#4DDCFE&#39;]
      }
    }
  },
  methods: {
    chartsInit() {
      if (this.myChart) this.myChart.dispose()
      this.$nextTick(() =&gt; {
        this.drawBar()
      })
    },
    drawBar() {
      const chartDom = document.getElementById(&#39;ChartsBar&#39;);
      const myChart = this.$echarts.init(chartDom, null, {renderer: &#39;svg&#39;});
      const option = {
        title: {
          text: &#39;\u5355\u4F4D\uFF1A\u4EBF\u5143&#39;,
          left: 32,
          top: 48,
          textStyle: {
            color: &#39;#FFFFFF&#39;,
            fontSize: 15
          }
        },
        legend: {
          icon: &#39;circle&#39;,
          top: 10,
          right: 20,
          itemWidth: 6,
          itemHeight: 6,
          textStyle: {
            color: &#39;#FFFFFF&#39;,
            fontSize: 15
          },
        },
        tooltip: {
          trigger: &#39;axis&#39;,
          formatter: (params) =&gt; {
            return &#39;&lt;span style=&quot;display:inline-block;margin-right:5px;width:10px;height:10px;left:5px;background:linear-gradient(to right,&#39;+ params[0].color.colorStops[0].color+&#39;, &#39;+params[0].color.colorStops[1].color+&#39;)&quot;&gt;&lt;/span&gt;&#39;+params[0].name+&quot;\uFF1A&quot;+params[0].value+&quot;\u4EBF\u5143&lt;/span&gt;&quot;;
          }
        },
        xAxis: {
          type: &#39;category&#39;,
          data: [&#39;A&#39;, &#39;B&#39;, &#39;C&#39;],
          axisLabel: {
            color: &#39;#FFFFFF&#39;,
            fontSize: 13
          },
          axisTick: {
            show: false
          },
          axisLine: {
            lineStyle: {
              color: &#39;#293D59&#39;
            }
          }
        },
        yAxis: {
          type: &#39;value&#39;,
          axisLabel: {
            color: &#39;#FFFFFF&#39;,
            fontSize: 15,
          },
          axisTick: {
            show: false
          },
          axisLine: {
            show: true,
            lineStyle: {
              color: &#39;#293D59&#39;
            }
          },
          splitLine: {
            show: false
          }
        },
        series: [
          {
            name: &#39;Test&#39;,
            data: [1, 2, 3],
            type: &#39;bar&#39;,
            barWidth: 24,
            barMinHeight: 10,
            itemStyle: {
              color: params =&gt; {
                const { start, end } = this.colorObj
                return new this.$echarts.graphic.LinearGradient(
                  0, 0, 1, 0,
                  [
                    {offset: 0, color: start[params.dataIndex]},
                    {offset: 1, color: end[params.dataIndex]}
                  ]
                )
              }
            },
          }
        ],
        grid: {
          height: &#39;60%&#39;,
          left: 10,
          right: 10,
          bottom: 10,
          containLabel: true
        }
      }
      option &amp;&amp; myChart.setOption(option);
    }
  }
}
&lt;/script&gt;

&lt;style scoped&gt;
.ChartsBar {
  width: 100%;
  height: 100%;
}
&lt;/style&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>:::</p><h2 id="\u666E\u901A\u96F7\u8FBE\u56FE" tabindex="-1"><a class="header-anchor" href="#\u666E\u901A\u96F7\u8FBE\u56FE" aria-hidden="true">#</a> \u666E\u901A\u96F7\u8FBE\u56FE</h2><p>::: details \u70B9\u51FB\u67E5\u770B\u4EE3\u7801</p><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code>&lt;template&gt;
  &lt;div id=&quot;chartsRadar&quot; class=&quot;chartsRadar&quot;&gt;&lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
export default {
  name: &quot;index&quot;,
  data() {
    return {
      myChart: null,
    }
  },
  methods: {
    chartsInit() {
      if (this.myChart) this.myChart.dispose()
      this.$nextTick(() =&gt; {
        this.drawRadar()
      })
    },
    drawRadar() {
      const chartDom = document.getElementById(&#39;chartsRadar&#39;);
      this.myChart = this.$echarts.init(chartDom);
      const option = {
        color: [&#39;#F5E87D&#39;, &#39;#0B87E1&#39;],
        legend: {
          icon: &#39;circle&#39;,
          right: 20,
          top: 120,
          itemWidth: 6,
          itemHeight: 6,
          orient: &#39;vertical&#39;,
          textStyle: {
            color: &#39;#FFFFFF&#39;,
            fontSize: 15
          },
        },
        tooltip: {
          trigger: &#39;item&#39;
        },
        radar: {
          indicator: [
            {name: &#39;&#39;, max: 5},
            {name: &#39;&#39;, max: 5},
            {name: &#39;&#39;, max: 5},
          ],
          axisName: {
            color: &#39;#FFFFFF&#39;,
            fontSize: 13
          },
          axisLine: {
            lineStyle: {
              color: &#39;rgba(255, 255, 255, 0.45)&#39;
            }
          },
          splitLine: {
            lineStyle: {
              color: &#39;rgba(255, 255, 255, 0.45)&#39;
            }
          },
          splitArea: {
            areaStyle: {
              color: &#39;rgba(0, 0, 0, 0)&#39;
            }
          },
          radius: 95,
          center: [&#39;38%&#39;, &#39;55%&#39;]
        },
        series: [
          {
            type: &#39;radar&#39;,
            data: [1, 2, 3],
            areaStyle: {
              opacity: 0.2
            },
          }
        ],
      }
      option &amp;&amp; this.myChart.setOption(option);
    }
  }
}
&lt;/script&gt;

&lt;style scoped&gt;
.chartsRadar {
  width: 100%;
  height: 100%;
}
&lt;/style&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>:::</p><h2 id="\u666E\u901A\u997C\u56FE" tabindex="-1"><a class="header-anchor" href="#\u666E\u901A\u997C\u56FE" aria-hidden="true">#</a> \u666E\u901A\u997C\u56FE</h2><p>::: details \u70B9\u51FB\u67E5\u770B\u4EE3\u7801</p><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code>&lt;template&gt;
  &lt;div id=&quot;chartsPie&quot; class=&quot;chartsPie&quot;&gt;&lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
export default {
  name: &quot;index&quot;,
  data() {
    return {
      myChart: null,
      colorObj: {
        start: [&#39;#008BB1&#39;],
        end: [&#39;#4DDCFE&#39;]
      }
    }
  },
  methods: {
    chartsInit() {
      if (this.myChart) this.myChart.dispose()
      this.$nextTick(() =&gt; {
        this.drawPie()
      })
    },
    drawPie() {
      const chartDom = document.getElementById(&#39;chartsPie&#39;);
      this.myChart = this.$echarts.init(chartDom);
      const option = {
        legend: {
          icon: &#39;circle&#39;,
          bottom: 20,
          itemWidth: 5,
          itemHeight: 5,
          textStyle: {
            color: &#39;#FFFFFF&#39;,
            fontSize: 14
          }
        },
        tooltip: {
          trigger: &#39;item&#39;,
          formatter: (params) =&gt; {
            return &#39;&lt;span style=&quot;display:inline-block;margin-right:5px;width:10px;height:10px;left:5px;background:linear-gradient(to right,&#39;+ params.color.colorStops[0].color+&#39;, &#39;+params.color.colorStops[1].color+&#39;)&quot;&gt;&lt;/span&gt;&#39;+params.name+&quot;\uFF1A&quot;+params.data.value+&quot;%&quot;;
          }
        },
        series: [
          {
            type: &#39;pie&#39;,
            radius: [&#39;30%&#39;, &#39;50%&#39;],
            center: [&#39;50%&#39;, &#39;50%&#39;],
            minAngle: 10,
            itemStyle: {
              color: params =&gt; {
                const { start, end } = this.colorObj
                return new this.$echarts.graphic.LinearGradient(
                  0, 0, 1, 0,
                  [
                    {offset: 0, color: start[params.dataIndex]},
                    {offset: 1, color: end[params.dataIndex]}
                  ]
                )
              }
            },
            data: [
              {name: &#39;&#39;, value: &#39;&#39;}
            ],
            label: {
              formatter: &#39;{d}%&#39;,
              color: &#39;#FFFFFF&#39;,
              fontSize: 15,
            },
            labelLine: {
              length: 20,
              length2: 30,
            },
            labelLayout: {
              width: 100,
              align: &#39;center&#39;,
              verticalAlign: &#39;bottom&#39;
            }
          }
        ],
        grid: {
          containLabel: true
        }
      }
      option &amp;&amp; this.myChart.setOption(option);
    }
  }
}
&lt;/script&gt;

&lt;style scoped&gt;
.chartsPie {
  width: 100%;
  height: 100%;
}
&lt;/style&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>:::</p><h2 id="\u666E\u901A\u7EBF\u67F1\u56FE" tabindex="-1"><a class="header-anchor" href="#\u666E\u901A\u7EBF\u67F1\u56FE" aria-hidden="true">#</a> \u666E\u901A\u7EBF\u67F1\u56FE</h2><p>::: details \u70B9\u51FB\u67E5\u770B\u4EE3\u7801</p><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code>&lt;template&gt;
  &lt;div id=&quot;chartsLineBar&quot; class=&quot;chartsLineBar&quot;&gt;&lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
export default {
  name: &quot;LineBar&quot;,
  data() {
    return {
      myChart: null,
      colorArr: {
        line: &#39;#F9D676&#39;,
        bar: [&#39;#008BB1&#39;, &#39;#4DDCFE&#39;]
      },
    }
  },
  methods: {
    chartsInit() {
      if (this.myChart) this.myChart.dispose()
      this.$nextTick(() =&gt; {
        this.drawLineBar()
      })
    },
    drawLineBar() {
      const chartDom = document.getElementById(&#39;chartsLineBar&#39;);
      this.myChart = this.$echarts.init(chartDom);
      const option = {
        color: [
          this.colorArr.line,
          {
            type: &#39;linear&#39;,
            x: 0,
            y: 1,
            x2: 0,
            y2: 0,
            colorStops: [
              {offset: 0, color: this.colorArr.bar[0]},
              {offset: 1, color: this.colorArr.bar[1]}
            ],
            global: false
          }
        ],
        title: {
          text: &#39;\u5355\u4F4D\uFF1A\u70B9&#39;,
          left: 20,
          top: 48,
          textStyle: {
            color: &#39;#FFFFFF&#39;,
            fontSize: 15
          }
        },
        legend: {
          icon: &#39;circle&#39;,
          top: 10,
          right: 20,
          itemWidth: 6,
          itemHeight: 6,
          textStyle: {
            color: &#39;#FFFFFF&#39;,
            fontSize: 15
          },
        },
        tooltip: {
          trigger: &#39;axis&#39;,
          formatter: (params) =&gt; {
            let str = params[0].name + &#39;&lt;/br&gt;&#39;
            params.forEach(item =&gt; {
              let bg = item.color.colorStops ? \`linear-gradient(to right,\${item.color.colorStops[0].color}, \${item.color.colorStops[1].color})\` : item.color
              str += \`&lt;span style=&quot;display:inline-block;margin-right:5px;width:10px;height:10px;left:5px;background:\${bg}&quot;&gt;&lt;/span&gt;\${item.name}\uFF1A\${item.value}\${item.seriesType === &#39;bar&#39; ? &#39;\u4EBA&#39; : &#39;\u70B9&#39;}&lt;/span&gt;&lt;/br&gt;\`
            })
            return str
          }
        },
        xAxis: {
          type: &#39;category&#39;,
          data: [&#39;A&#39;, &#39;B&#39;, &#39;C&#39;],
          axisLabel: {
            color: &#39;#FFFFFF&#39;,
            fontSize: 12
          },
        },
        yAxis: [
          {
            type: &#39;value&#39;,
            axisLabel: {
              color: &#39;#FFFFFF&#39;,
              fontSize: 15,
            },
            splitLine: {
              lineStyle: {
                color: &#39;#416180&#39;
              }
            }
          },
          {
            type: &#39;value&#39;,
            axisLabel: {
              color: &#39;#FFFFFF&#39;,
              fontSize: 15,
            },
            splitLine: {
              show: false
            }
          }
        ],
        series: [
          {
            name: &#39;Test Line&#39;,
            type: &#39;line&#39;,
            data: [300, 280, 250]
          },
          {
            name: &#39;Test Bar&#39;,
            type: &#39;bar&#39;,
            barWidth: 28,
            data: [300, 280, 250],
            yAxisIndex: 1
          }
        ],
        grid: {
          height: &#39;70%&#39;,
          left: 10,
          right: 10,
          bottom: 10,
          containLabel: true
        }
      }
      option &amp;&amp; this.myChart.setOption(option);
    }
  }
}
&lt;/script&gt;

&lt;style scoped&gt;
.chartsLineBar {
  width: 100%;
  height: 100%;
}
&lt;/style&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>:::</p><h2 id="\u8BCD\u4E91" tabindex="-1"><a class="header-anchor" href="#\u8BCD\u4E91" aria-hidden="true">#</a> \u8BCD\u4E91</h2><p>::: details \u70B9\u51FB\u67E5\u770B\u4EE3\u7801</p><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code>&lt;template&gt;
  &lt;div id=&quot;wordCloud&quot; class=&quot;wordCloud&quot;&gt;&lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
/**
 * \u5B89\u88C5 echarts-wordcloud
 * \u5728 main.js \u5199\u5165 require(&#39;echarts-wordcloud&#39;) // \u8BCD\u4E91
 * */
export default {
  name: &quot;index&quot;,
  data() {
    return {
      myChart: null,
      colorArr: [&#39;#4DDAFC&#39;, &#39;#FACE73&#39;, &#39;#1FEEBC&#39;]
    }
  },
  methods: {
    chartsInit() {
      if (this.myChart) this.myChart.dispose()
      this.$nextTick(() =&gt; {
        this.drawWordCloud()
      })
    },
    drawWordCloud() {
      const chartDom = document.getElementById(&#39;wordCloud&#39;);
      this.myChart = this.$echarts.init(chartDom);
      const option = {
        series: [
          {
            type: &#39;wordCloud&#39;,
            gridSize: 10,
            sizeRange: [16, 30],
            rotationRange: [0, 60],
            textStyle: {
              color: () =&gt; {
                return this.colorArr[Math.floor(Math.random() * this.colorArr.length)]
              }
            },
            left: &#39;center&#39;,
            top: 0,
            data: [
              {name: &#39;&#39;, value: &#39;&#39;}
            ]
          }
        ]
      }
      option &amp;&amp; this.myChart.setOption(option);
    }
  }
}
&lt;/script&gt;

&lt;style scoped&gt;
.wordCloud {
  width: 100%;
  height: 100%;
}
&lt;/style&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>:::</p>`,33),v=[d];function a(r,c){return n(),e("div",null,v)}var u=i(l,[["render",a],["__file","echarts.html.vue"]]);export{u as default};
