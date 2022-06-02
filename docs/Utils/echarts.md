# Echarts

## 普通地图
::: details 点击查看代码
```vue
<template>
  <div id="chartsMap" class="ChartsMap"></div>
</template>

<script>
import MapJson from ""

export default {
  name: "ChartsMap",
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
      const chartDom = document.getElementById('chartsMap');
      this.myChart = this.$echarts.init(chartDom, null, {renderer: 'svg'});
      this.myChart.showLoading()
      apiRequest({}).then(res => {
        this.list = res
        let arr = res.slice().sort((a, b) => {
          return b.value - a.value
        })
        this.maxVal = Number(arr[0].value) + 1000
        this.$nextTick(() => {
          this.drawMap()
        })
      })
    },
    drawMap() {
      this.myChart.hideLoading()
      this.$echarts.registerMap('china', MapJson);
      const option = {
        tooltip: {
          trigger: 'item',
          formatter: '{b}<br/>{c}人'
        },
        visualMap: {
          min: 0,
          max: this.maxVal,
          text: ['High', 'Low'],
          realtime: false,
          calculable: true,
          inRange: {
            color: ['lightskyblue', 'yellow', 'orangered']
          }
        },
        series: [
          {
            type: 'map',
            map: 'china',
            data: this.list
          }
        ]
      }
      option && this.myChart.setOption(option);
    },
  }
}
</script>

<style scoped>
.ChartsMap {
  height: 100%;
}
</style>
```
:::

## 地图打点
::: details 点击查看代码
```vue
<template>
  <div :id="echartsId" class="ChartsEffectMap"></div>
</template>

<script>
import MapJson from ""

export default {
  name: "ChartsEffectMap",
  props: {
    echartsId: {
      type: String,
      default: ''
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
      this.myChart = this.$echarts.init(chartDom, null, {renderer: 'svg'});
      this.myChart.showLoading()
      apiRequest({}).then(res => {
        this.list = res
        this.$nextTick(() => {
          this.drawCharts()
        })
      })
    },
    drawCharts() {
      this.myChart.hideLoading()
      this.$echarts.registerMap('mapDemo', MapJson);
      const convertData = (arr) => {
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
          formatter: params => {
            return params.name
          }
        },
        geo: [
          {
            type: 'map',
            map: 'mapDemo',
            label: {
              show: true,
              color: '#FFFFFF',
            },
            itemStyle: {
              areaColor: '#0092ff'
            },
          }
        ],
        series: [
          // {
          //   type: 'map',
          //   map: 'mapDemo',
          //   label: {
          //     show: true,
          //     color: '#FFFFFF',
          //   },
          //   itemStyle: {
          //     areaColor: '#0092ff'
          //   },
          //   geoIndex: 0,
          //   data: this.list
          // },
          {
            type: 'scatter',
            coordinateSystem: 'geo',
            data: convertData(this.list),
            symbol: "image://" + require("../../../assets/image/icon-mapDot.png"),
            symbolSize: this.scatterSize,
            label: {
              show: false
            },
            zlevel: 1,
          },
        ]
      };
      option && this.myChart.setOption(option);
    }
  }
}
</script>

<style scoped>
.ChartsEffectMap {
  width: 100%;
  height: 100%;
}
</style>
```
:::

## 普通折线图
::: details 点击查看代码
```vue
<template>
  <div id="ChartsLine" class="ChartsLine"></div>
</template>

<script>
export default {
  name: "index",
  data() {
    return {
      myChart: null
    }
  },
  methods: {
    chartsInit() {
      if (this.myChart) this.myChart.dispose()
      this.$nextTick(() => {
        this.drawLine()
      })
    },
    drawLine() {
      const chartDom = document.getElementById('ChartsLine');
      const myChart = this.$echarts.init(chartDom, null, {renderer: 'svg'});
      const option = {
        color: '#0092FF',
        xAxis: {
          type: 'category',
          boundaryGap: false,
          axisTick: false,
          axisLine: false,
          data: ['A', 'B', 'C', 'D', 'E', 'F']
        },
        yAxis: {
          type: 'value'
        },
        legend: {},
        tooltip: {
          formatter: '{a}<br>{b}：{c}人'
        },
        series: [
          {
            name: 'Test',
            data: [1, 2, 3, 4, 5, 6],
            type: 'line',
            areaStyle: {
              color: 'rgba(0,146,255)',
              opacity: 0.2
            }
          }
        ],
        dataZoom: [
          {
            type: 'inside',
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
      option && myChart.setOption(option);
    }
  }
}
</script>

<style scoped>
.ChartsLine {
  width: 100%;
  height: 100%;
}
</style>
```
:::

## 普通柱状图
::: details 点击查看代码
```vue
<template>
  <div id="ChartsBar" class="ChartsBar"></div>
</template>

<script>
export default {
  name: "index",
  data() {
    return {
      myChart: null,
      colorObj: {
        start: ['#008BB1'],
        end: ['#4DDCFE']
      }
    }
  },
  methods: {
    chartsInit() {
      if (this.myChart) this.myChart.dispose()
      this.$nextTick(() => {
        this.drawBar()
      })
    },
    drawBar() {
      const chartDom = document.getElementById('ChartsBar');
      const myChart = this.$echarts.init(chartDom, null, {renderer: 'svg'});
      const option = {
        title: {
          text: '单位：亿元',
          left: 32,
          top: 48,
          textStyle: {
            color: '#FFFFFF',
            fontSize: 15
          }
        },
        legend: {
          icon: 'circle',
          top: 10,
          right: 20,
          itemWidth: 6,
          itemHeight: 6,
          textStyle: {
            color: '#FFFFFF',
            fontSize: 15
          },
        },
        tooltip: {
          trigger: 'axis',
          formatter: (params) => {
            return '<span style="display:inline-block;margin-right:5px;width:10px;height:10px;left:5px;background:linear-gradient(to right,'+ params[0].color.colorStops[0].color+', '+params[0].color.colorStops[1].color+')"></span>'+params[0].name+"："+params[0].value+"亿元</span>";
          }
        },
        xAxis: {
          type: 'category',
          data: ['A', 'B', 'C'],
          axisLabel: {
            color: '#FFFFFF',
            fontSize: 13
          },
          axisTick: {
            show: false
          },
          axisLine: {
            lineStyle: {
              color: '#293D59'
            }
          }
        },
        yAxis: {
          type: 'value',
          axisLabel: {
            color: '#FFFFFF',
            fontSize: 15,
          },
          axisTick: {
            show: false
          },
          axisLine: {
            show: true,
            lineStyle: {
              color: '#293D59'
            }
          },
          splitLine: {
            show: false
          }
        },
        series: [
          {
            name: 'Test',
            data: [1, 2, 3],
            type: 'bar',
            barWidth: 24,
            barMinHeight: 10,
            itemStyle: {
              color: params => {
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
          height: '60%',
          left: 10,
          right: 10,
          bottom: 10,
          containLabel: true
        }
      }
      option && myChart.setOption(option);
    }
  }
}
</script>

<style scoped>
.ChartsBar {
  width: 100%;
  height: 100%;
}
</style>
```
:::

## 普通雷达图
::: details 点击查看代码
```vue
<template>
  <div id="chartsRadar" class="chartsRadar"></div>
</template>

<script>
export default {
  name: "index",
  data() {
    return {
      myChart: null,
    }
  },
  methods: {
    chartsInit() {
      if (this.myChart) this.myChart.dispose()
      this.$nextTick(() => {
        this.drawRadar()
      })
    },
    drawRadar() {
      const chartDom = document.getElementById('chartsRadar');
      this.myChart = this.$echarts.init(chartDom);
      const option = {
        color: ['#F5E87D', '#0B87E1'],
        legend: {
          icon: 'circle',
          right: 20,
          top: 120,
          itemWidth: 6,
          itemHeight: 6,
          orient: 'vertical',
          textStyle: {
            color: '#FFFFFF',
            fontSize: 15
          },
        },
        tooltip: {
          trigger: 'item'
        },
        radar: {
          indicator: [
            {name: '', max: 5},
            {name: '', max: 5},
            {name: '', max: 5},
          ],
          axisName: {
            color: '#FFFFFF',
            fontSize: 13
          },
          axisLine: {
            lineStyle: {
              color: 'rgba(255, 255, 255, 0.45)'
            }
          },
          splitLine: {
            lineStyle: {
              color: 'rgba(255, 255, 255, 0.45)'
            }
          },
          splitArea: {
            areaStyle: {
              color: 'rgba(0, 0, 0, 0)'
            }
          },
          radius: 95,
          center: ['38%', '55%']
        },
        series: [
          {
            type: 'radar',
            data: [1, 2, 3],
            areaStyle: {
              opacity: 0.2
            },
          }
        ],
      }
      option && this.myChart.setOption(option);
    }
  }
}
</script>

<style scoped>
.chartsRadar {
  width: 100%;
  height: 100%;
}
</style>
```
:::

## 普通饼图
::: details 点击查看代码
```vue
<template>
  <div id="chartsPie" class="chartsPie"></div>
</template>

<script>
export default {
  name: "index",
  data() {
    return {
      myChart: null,
      colorObj: {
        start: ['#008BB1'],
        end: ['#4DDCFE']
      }
    }
  },
  methods: {
    chartsInit() {
      if (this.myChart) this.myChart.dispose()
      this.$nextTick(() => {
        this.drawPie()
      })
    },
    drawPie() {
      const chartDom = document.getElementById('chartsPie');
      this.myChart = this.$echarts.init(chartDom);
      const option = {
        legend: {
          icon: 'circle',
          bottom: 20,
          itemWidth: 5,
          itemHeight: 5,
          textStyle: {
            color: '#FFFFFF',
            fontSize: 14
          }
        },
        tooltip: {
          trigger: 'item',
          formatter: (params) => {
            return '<span style="display:inline-block;margin-right:5px;width:10px;height:10px;left:5px;background:linear-gradient(to right,'+ params.color.colorStops[0].color+', '+params.color.colorStops[1].color+')"></span>'+params.name+"："+params.data.value+"%";
          }
        },
        series: [
          {
            type: 'pie',
            radius: ['30%', '50%'],
            center: ['50%', '50%'],
            minAngle: 10,
            itemStyle: {
              color: params => {
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
              {name: '', value: ''}
            ],
            label: {
              formatter: '{d}%',
              color: '#FFFFFF',
              fontSize: 15,
            },
            labelLine: {
              length: 20,
              length2: 30,
            },
            labelLayout: {
              width: 100,
              align: 'center',
              verticalAlign: 'bottom'
            }
          }
        ],
        grid: {
          containLabel: true
        }
      }
      option && this.myChart.setOption(option);
    }
  }
}
</script>

<style scoped>
.chartsPie {
  width: 100%;
  height: 100%;
}
</style>
```
:::

## 普通线柱图
::: details 点击查看代码
```vue
<template>
  <div id="chartsLineBar" class="chartsLineBar"></div>
</template>

<script>
export default {
  name: "LineBar",
  data() {
    return {
      myChart: null,
      colorArr: {
        line: '#F9D676',
        bar: ['#008BB1', '#4DDCFE']
      },
    }
  },
  methods: {
    chartsInit() {
      if (this.myChart) this.myChart.dispose()
      this.$nextTick(() => {
        this.drawLineBar()
      })
    },
    drawLineBar() {
      const chartDom = document.getElementById('chartsLineBar');
      this.myChart = this.$echarts.init(chartDom);
      const option = {
        color: [
          this.colorArr.line,
          {
            type: 'linear',
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
          text: '单位：点',
          left: 20,
          top: 48,
          textStyle: {
            color: '#FFFFFF',
            fontSize: 15
          }
        },
        legend: {
          icon: 'circle',
          top: 10,
          right: 20,
          itemWidth: 6,
          itemHeight: 6,
          textStyle: {
            color: '#FFFFFF',
            fontSize: 15
          },
        },
        tooltip: {
          trigger: 'axis',
          formatter: (params) => {
            let str = params[0].name + '</br>'
            params.forEach(item => {
              let bg = item.color.colorStops ? `linear-gradient(to right,${item.color.colorStops[0].color}, ${item.color.colorStops[1].color})` : item.color
              str += `<span style="display:inline-block;margin-right:5px;width:10px;height:10px;left:5px;background:${bg}"></span>${item.name}：${item.value}${item.seriesType === 'bar' ? '人' : '点'}</span></br>`
            })
            return str
          }
        },
        xAxis: {
          type: 'category',
          data: ['A', 'B', 'C'],
          axisLabel: {
            color: '#FFFFFF',
            fontSize: 12
          },
        },
        yAxis: [
          {
            type: 'value',
            axisLabel: {
              color: '#FFFFFF',
              fontSize: 15,
            },
            splitLine: {
              lineStyle: {
                color: '#416180'
              }
            }
          },
          {
            type: 'value',
            axisLabel: {
              color: '#FFFFFF',
              fontSize: 15,
            },
            splitLine: {
              show: false
            }
          }
        ],
        series: [
          {
            name: 'Test Line',
            type: 'line',
            data: [300, 280, 250]
          },
          {
            name: 'Test Bar',
            type: 'bar',
            barWidth: 28,
            data: [300, 280, 250],
            yAxisIndex: 1
          }
        ],
        grid: {
          height: '70%',
          left: 10,
          right: 10,
          bottom: 10,
          containLabel: true
        }
      }
      option && this.myChart.setOption(option);
    }
  }
}
</script>

<style scoped>
.chartsLineBar {
  width: 100%;
  height: 100%;
}
</style>
```
:::

## 词云
::: details 点击查看代码
```vue
<template>
  <div id="wordCloud" class="wordCloud"></div>
</template>

<script>
/**
 * 安装 echarts-wordcloud
 * 在 main.js 写入 require('echarts-wordcloud') // 词云
 * */
export default {
  name: "index",
  data() {
    return {
      myChart: null,
      colorArr: ['#4DDAFC', '#FACE73', '#1FEEBC']
    }
  },
  methods: {
    chartsInit() {
      if (this.myChart) this.myChart.dispose()
      this.$nextTick(() => {
        this.drawWordCloud()
      })
    },
    drawWordCloud() {
      const chartDom = document.getElementById('wordCloud');
      this.myChart = this.$echarts.init(chartDom);
      const option = {
        series: [
          {
            type: 'wordCloud',
            gridSize: 10,
            sizeRange: [16, 30],
            rotationRange: [0, 60],
            textStyle: {
              color: () => {
                return this.colorArr[Math.floor(Math.random() * this.colorArr.length)]
              }
            },
            left: 'center',
            top: 0,
            data: [
              {name: '', value: ''}
            ]
          }
        ]
      }
      option && this.myChart.setOption(option);
    }
  }
}
</script>

<style scoped>
.wordCloud {
  width: 100%;
  height: 100%;
}
</style>
```
:::
