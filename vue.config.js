module.exports = {
  devServer: {
    open: true,
    port: '8088',
    proxy: {
      '/api': {
        target: 'http://146.56.224.139:3000/v1/graphql',
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          '^/api': '',
        },
      },
    },
    publicPath: process.env.NODE_ENV === 'production' ? '/jinghongbbs/' : '/',
  },
};
