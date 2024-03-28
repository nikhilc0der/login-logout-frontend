const { createProxyMiddleware } = require("http-proxy-middleware");
const proxy = {
  target: process.env.YOUR_BACKEND_API || "http://localhost:4000",
  changeOrigin: true,
};
module.exports = function (app) {
  app.use("/api", createProxyMiddleware(proxy));
};
