const navConf = require('./navConf.js');
const directoriesConf = require('./directoriesConf.js');

module.exports = {
  title: 'ডাটা প্রক্রিয়া',
  description: 'উপাত্ত হতে তথ্যের সন্ধান',
  theme: '@vuepress/theme-blog', 
  themeConfig: {
    modifyBlogPluginOptions(blogPluginOptions) {
      return blogPluginOptions
    },
    nav: navConf,
    directories: directoriesConf,
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
          link: 'https://prokria.com',
        },
      ],
    },
  },
  head: [
    ['link', { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon.png" }]
  ]
}
