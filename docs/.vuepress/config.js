module.exports = {
    base:'/Vue-UI/',
    title: 'VUE-UI',
    description: 'Vue-UI组件库',
    themeConfig: {
        head: [
            ['link', { rel: 'shortcut icon', type: "image/x-icon", href: `./favicon.ico` }]
        ],
        nav: [
            { text: '首页', link: 'https://echoheart.github.io/Vue-UI/' },
            { text: '博客', link: 'https://www.echoheart.cn/' },
            // { text: 'External', link: 'https://google.com' },
        ],
        sidebar: [
            '/',
            '/install/',
            '/getStart/',
            {
                title: '组件',
                children: ['components/Button']
            },
            
        ]
    },
};