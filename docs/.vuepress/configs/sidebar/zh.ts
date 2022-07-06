import type { SidebarConfig } from '@vuepress/theme-default'

export const zh: SidebarConfig = {
    '/Home': [
        {
            text: '首页',
            children: [
                '/Home'
            ]
        }
    ],
    '/Css': [
        {
            text: 'Css',
            children: [
                '/Css/base.md',
                '/Css/text.md',
                '/Css/input.md',
                '/Css/border.md',
                '/Css/animation.md',
                '/Css/canvas.md',
            ]
        }
    ],
    '/JavaScript': [
        {
            text: 'JavaScript',
            children: [
                '/JavaScript/base.md',
                '/JavaScript/time.md',
                '/JavaScript/validate.md',
                '/JavaScript/utils.md'
            ]
        }
    ],
    '/Skills': [
        {
            text: '技巧',
            children: [
                '/Skills/vue.md',
                '/Skills/other.md',
            ]
        },
    ],
    '/Utils': [
        {
            text: '车轮滚滚',
            children: [
                '/Utils/vue.md',
                '/Utils/echarts.md',
                '/Utils/mobile.md',
            ]
        }
    ],
    '/Study': [
        {
            text: '笔记',
            children: [
                '/Study/note/files.md',
                '/Study/note/writing.md',
                '/Study/note/word.md',
                '/Study/note/sentence.md',
                '/Study/note/expounding.md',
                '/Study/note/speech.md',
                '/Study/note/judgment.md',
                '/Study/note/quantity.md',
                '/Study/note/data.md',
                '/Study/note/hotspot.md',
                '/Study/note/template.md'
            ]
        }
    ],
    '/Another': [
        {
            text: '杂货铺',
            children: [
                '/Another/base.md'
            ]
        }
    ]
}
