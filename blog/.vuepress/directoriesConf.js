module.exports = [
    {
        id: 'post',
        dirname: '_posts',
        path: '/',
    },
    {
        id: 'visualization', // Unique id for current classifier
        dirname: '_visualization', // Matched directory name
        path: '/visualization/', // Entry page for current classifier
        title: 'visualization', // Entry and pagination page titles for current classifier.
        layout: 'IndexWriting', // Layout component name for entry page.
        frontmatter: { //Front matter for entry page.
            tag: 'vuepress'
        },
        itemLayout: 'visualization', // Layout for matched pages.
        itemPermalink: '/visualization/:year/:month/:day/:slug', // Permalink for matched pages.
        pagination: { // Pagination behavior
            lengthPerPage: 5,
        },
    },
    {
        id: 'analysis', // Unique id for current classifier
        dirname: '_analysis', // Matched directory name
        path: '/analysis/', // Entry page for current classifier
        title: 'analysis', // Entry and pagination page titles for current classifier.
        layout: 'IndexWriting', // Layout component name for entry page.
        frontmatter: { //Front matter for entry page.
            tag: 'vuepress'
        },
        itemLayout: 'analysis', // Layout for matched pages.
        itemPermalink: '/analysis/:year/:month/:day/:slug', // Permalink for matched pages.
        pagination: { // Pagination behavior
            lengthPerPage: 5,
        },
    }
]