module.exports = {
  devServer: {
    open: true,
    port: '8088',
    proxy: {
      '/api': {
        target: 'http://www.congb19.top/api',
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
