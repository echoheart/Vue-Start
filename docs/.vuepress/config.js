module.exports = {
    base:'/Vue-start/',
    title: 'VUE-UI',
    description: 'UI框架',
    themeConfig: {
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Guide', link: '/install/' },
            { text: 'External', link: 'https://google.com' },
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