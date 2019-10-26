module.exports = {
  base: '/pure-vue',
  title: 'Vue组件库',
  description: 'Vue组件库',
  themeConfig: {
    head: [
      ['link', {rel: 'shortcut icon', type: "image/x-icon", href: `./favicon.ico`}]
    ],
    nav: [
      {text: '首页', link: 'https://echoheart.github.io/pure-vue/'},
      {text: '博客', link: 'https://www.echoheart.cn/'},
    ],
    sidebar: [
      '/',
      '/install/',
      '/getStart/',
      {
        title: '组件',
        collapsable: false,
        children: [
          'components/Icon',
          'components/Button',
          'components/Input',
          'components/Collapse',
          'components/Popover',
          'components/Tab',
          'components/Toast',
        ]
      },

    ]
  },
};