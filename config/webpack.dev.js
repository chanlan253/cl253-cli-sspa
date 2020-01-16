const path = require("path");
const webpack = require("webpack");
const merge = require("webpack-merge");
const AppConfig = require("../app.config");
const webpackConfigBase = require("./webpack.base");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const chalk = require("chalk");

console.log(`${chalk.green("The current running environments：")}${chalk.blue("development")}`);

const webpackConfigDev = {
  mode: "development",
  devtool: "cheap-module-eval-source-map",
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      hash: true, //防止相同缓存
      filename: "index.html",
      templateParameters: {
        title: AppConfig.title || "",
        dlls: [
          "https://static.253.com/js/common_dll/sspa.dll.js",
          "https://static.253.com/js/common_dll/react.dll.js",
          "https://static.253.com/js/common_dll/react_redux.dll.js",
          "https://static.253.com/js/common_dll/common.dll.js"
        ]
      }
    }),
    new webpack.HotModuleReplacementPlugin()
  ],

  devServer: {
    clientLogLevel: "warning",
    contentBase: path.join(__dirname, `../dist`),
    historyApiFallback: true,
    inline: true,
    open: AppConfig.autoOpen || false,
    headers: {
      "Access-Control-Allow-Origin": "*"
    },
    hot: true,
    noInfo: false,
    overlay: {
      errors: true
    },
    host: "0.0.0.0",
    port: AppConfig.port,
    proxy: AppConfig.proxy || {}
  }
};
module.exports = merge(webpackConfigBase, webpackConfigDev);

console.log(`${chalk.green("Run address：")}${chalk.blue("http://localhost:%s")}`, AppConfig.port);
