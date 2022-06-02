import type { NavbarConfig } from '@vuepress/theme-default'

export const zh: NavbarConfig = [
    {
        text: '首页',
        link: '/Home'
    },
    {
        text: 'Css',
        children: [
            '/Css/base',
            '/Css/text',
            '/Css/input',
            '/Css/border',
            '/Css/animation',
            '/Css/canvas'
        ]
    },
    {
        text: 'JavaScript',
        children: [
            '/JavaScript/base',
            '/JavaScript/time',
            '/JavaScript/validate',
            '/JavaScript/utils'
        ]
    },
    {
        text: '技巧',
        children: [
            '/Skills/vue',
            '/Skills/other',
        ]
    },
    {
        text: '车轮滚滚',
        children: [
            '/Utils/vue',
            '/Utils/echarts',
            '/Utils/mobile',
        ]
    },
    {
        text: '学习',
        children: [
            {
                text: '笔记',
                children: [
                    '/Study/note/files',
                    '/Study/note/writing',
                    '/Study/note/word',
                    '/Study/note/sentence',
                    '/Study/note/expounding',
                    '/Study/note/speech',
                    '/Study/note/judgment',
                    '/Study/note/quantity',
                    '/Study/note/data',
                    '/Study/note/hotspot',
                ]
            }
        ]
    },
    {
        text: '杂货铺',
        children: [
            '/Another/base'
        ]
    }
]
