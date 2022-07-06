import { defineUserConfig } from 'vuepress'
import type { DefaultThemeOptions } from '@vuepress/theme-default'
import { navbar, sidebar } from './configs/index'
import * as path from 'path'

const isProd = process.env.NODE_ENV === 'production'

export default defineUserConfig<DefaultThemeOptions>({
    // 站点配置
    base: '/mediocre.cn/',
    head: [
        // favicon
        ['link', { rel: 'icon', sizes: '16x16', href: '/images/icons/favicon-16x16.svg' }],
        ['link', { rel: 'icon', sizes: '32x32', href: '/images/icons/favicon-32x32.svg' }],
        // PWA 的 Manifest 文件
        ['link', { rel: 'manifest', href: '/manifest.webmanifest' }],
        ['meta', { name: 'application-name', content: 'Time flies' }],
        ['meta', { name: 'apple-mobile-web-app-title', content: 'Time flies' }],
        // 控制状态栏显示样式
        ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
        ['link', { rel: 'apple-touch-icon', href: '/images/icons/apple-touch-icon.png' }],
        ['link', { rel: 'mask-icon', href: '/images/icons/safari-pinned-tab.svg', color: '#5BBAD5' }],
        ['meta', { name: 'msapplication-TileColor', content: '#3EAF7C' }],
        ['meta', { name: 'theme-color', content: '#3EAF7C' }],
    ],
    locales: {
        '/': {
            lang: 'zh-CN',
            title: 'Time flies',
            description: '随想随记',
        }
    },
    // 主题和它的配置
    theme: '@vuepress/theme-default',
    themeConfig: {
        logo: '/images/logo.svg',
        locales: {
            '/': {
                notFound: ['我们怎么到这来了？', '这里什么都没有'],
                backToHome: '返回首页',
                navbar: navbar.zh,
                sidebar: sidebar.zh,
                // Markdown自定义容器的 type 名称
                tip: '提示',
                warning: '注意',
                danger: '警告',
                // a11y
                openInNewWindow: '在新窗口打开',
                toggleDarkMode: '切换夜间模式',
                toggleSidebar: '切换侧边栏',
            }
        },
        contributors: false,
        themePlugins: {},
    },
    // 插件
    plugins: [
        [
            'vuepress-plugin-typescript',
            {
                tsLoaderOptions:
                    {
                        transpileOnly: true
                    }
            }
        ],
        [
            '@snippetors/vuepress-plugin-code-copy',
            {
                backgroundTransition: false,
                successText: '复制成功！'
            }
        ],
        [
            '@vuepress/register-components',
            {
                componentsDir: path.resolve(__dirname, './components')
            }
        ],
        [
            'vuepress-plugin-demoblock-plus',
            {
                theme: 'dark-plus',
                customClass: 'demoBlockCustom',
                cssPreprocessor: 'scss'
            }
        ],
        [
            '@vuepress/plugin-pwa'
        ],
        [
            '@vuepress/plugin-pwa-popup',
            {
                locales: {
                    '/': {
                        message: '发现新内容可用',
                        buttonText: '刷新',
                    }
                }
            }
        ]
    ]
})
