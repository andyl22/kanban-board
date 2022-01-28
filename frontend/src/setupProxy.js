const { createProxyMiddleware } = require("http-proxy-middleware");

const proxyTarget =
  process.env.NODE_ENV !== "production"
    ? "http://backend:3001"
    : "https://andyl22-kanban-board.herokuapp.com";

module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: proxyTarget,
      changeOrigin: true,
    })
  );
};