// src/setupProxy.js
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api', // This will proxy requests to paths starting with /api
    createProxyMiddleware({
      target: 'http://localhost:3001', // Backend server URL
      changeOrigin: true,
      onProxyReq: (proxyReq, req, res) => {
        // Add CORS headers to the proxy request if needed
        proxyReq.setHeader('Access-Control-Allow-Origin', '*');
        proxyReq.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
        proxyReq.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
      },
    })
  );
};
