module.exports = {
  title: 'ডাটা প্রক্রিয়া',
  description: 'উপাত্ত হতে তথ্যের সন্ধান',
  theme: '@vuepress/theme-blog', 
  themeConfig: {
    modifyBlogPluginOptions(blogPluginOptions) {
      return blogPluginOptions
    },
    nav: [
      {
        text: 'Blog',
        link: '/',
      },
      {
        text: 'Tags',
        link: '/tag/',
      },
    ],
    footer: {
      contact: [
        {
          type: 'facebook',
          link: 'https://www.facebook.com/prokria',
        }
      ],
      copyright: [
        {
          text: 'Copyright © 2020-present ProKria',
          link: '',
        },
      ],
    },
  },
  head: [
    ['link', { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon.png" }]
  ]
}
