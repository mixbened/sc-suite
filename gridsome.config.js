module.exports = {
  siteName: 'START.CODE',
  siteDescription: 'Bridging the Gap between IT and everyone else',
  templates: {
    ContentfulBlogPost: '/blog/:slug',
    ContentfulKurs: '/kurs/:title'
  },
  siteUrl: 'https://www.start-code.de',
  plugins: [
    {
      use: '@gridsome/source-contentful',
      options: {
        space: 'eovx6y1kjmti', // required
        accessToken: 'ztcW9731F331Sf_WzIzn-qH3ZDn6d9lIeS7ibUpmBF8', // required
        host: 'cdn.contentful.com',
        environment: 'master',
        typeName: 'Contentful'
      }
    },
    {
      use: '@gridsome/plugin-google-analytics',
      options: {
        id: 'UA-141593661-1'
      }
    },
    {
      use: '@gridsome/plugin-sitemap',
      options: {
        cacheTime: 600000
      }
    }
  ],
  css: {
    loaderOptions: {
      scss: {
      }
    }
  },
  devServer: {
    host: '0.0.0.0',
    port: 8080
  }
}
