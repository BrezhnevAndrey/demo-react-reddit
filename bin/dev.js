const webpack = require("webpack");
const [webpackClientConfig, webpackServerConfig] = require("../webpack.config");
const nodemon = require("nodemon");
const path = require("path");
const webpackDevMiddleware = require("webpack-dev-middleware");
const webpackHotMiddleware = require("webpack-hot-middleware");
const express = require("express");

const hmrServer = express();
const clientCompiler = webpack(webpackClientConfig);

hmrServer.use(
  webpackDevMiddleware(clientCompiler, {
    // подключаем webpackDevMiddleware
    publicPath: webpackClientConfig.output.publicPath,
    serverSideRender: true, //записывает информацию о bundle в rquest local
    noInfo: true, // убирает информацию webpack из консоли
    watchOptions: {
      ignore: "/dist/", // отключает автоматическую компиляцию файлов в папке dist при их изменении
    },
    writeToDisk: true, // позволяет webpackDevMiddleware записывать bundle в папку dist
    stats: "errors-only", // выключает логи успешной компиляции
  })
);

hmrServer.use(
  webpackHotMiddleware(clientCompiler, {
    // подключаем webpackHotMiddleware
    path: "/static/__webpack_hmr",
  })
);

hmrServer.listen(3001, () => {
  console.log("HMR server successful started"); // запускает сервер на 3001 портуы
});

const compiler = webpack(webpackServerConfig);

compiler.run((err) => {
  if (err) {
    console.log("Compilation failed: ", err);
  }

  compiler.watch({}, (err) => {
    if (err) {
      console.log("Compilation failed: ", err);
    }
    console.log("Compilation was successfully");
  });

  nodemon({
    script: path.resolve(__dirname, "../dist/server/server.js"),
    watch: [
      path.resolve(__dirname, "../dist/server"),
      path.resolve(__dirname, "../dist/client"),
    ],
    delay: 2000,
  });
});
