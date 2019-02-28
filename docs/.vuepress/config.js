module.exports = {
    base:'/Vue-Start/',
    title: 'VUE-UI',
    description: 'UI框架',
    themeConfig: {
        head: [
            ['link', { rel: 'shortcut icon', type: "image/x-icon", href: `./favicon.ico` }]
        ],
        nav: [
            { text: '首页', link: 'https://echoheart.github.io/Vue-Start/' },
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