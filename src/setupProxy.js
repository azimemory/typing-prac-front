const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    ['/api','/login'],
    createProxyMiddleware({
      target: 'http://193.123.232.255',
      changeOrigin: true,
    })
  );
};