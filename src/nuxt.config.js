module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'nuxt-ssr-firebase',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'A example repo for using nuxt with firebase hosting and cloud functions' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Roboto',
      },
      {
        rel: 'stylesheet',
        href: 'https://cdn.muicss.com/mui-0.9.35/css/mui.min.css',
      },
    ],
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  css: [
    {
      src: '@/assets/styles/main.css',
      lang: 'css',
    },
  ],
  /*
  ** Build configuration
  */
  buildDir: 'nuxt',
  build: {
    extractCSS: true,
    babel: {
      presets: ({ isServer }) => [
        [
          '@nuxt/babel-preset-app',
          {
            targets: isServer
              ? { node: '8.11.1' }
              : { browsers: ['defaults'] },
          },
        ],
      ],
    },
    /*
    ** Run ESLint on save
    */
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
          options: {
            fix: true,
          },
        });
      }
    },
  },
};
