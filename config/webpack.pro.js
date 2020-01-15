const webpack = require("webpack");
const path = require("path");
const AppConfig = require("../app.config");
const merge = require("webpack-merge");
const webpackConfigBase = require("./webpack.base");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const TerserJSPlugin = require("terser-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const chalk = require("chalk");

console.log(`${chalk.green("The current running environments：")}${chalk.blue("production")}`);
const webpackConfigProd = {
  mode: "production",
  devtool: "source-map",
  optimization: {
    splitChunks: {
      chunks: "async",
      name: true,
      minChunks: 2,
      cacheGroups: {
        vendors: {
          maxSize: 500 * 1024,
          minChunks: 1,
          test: /[\\/]node_modules[\\/]/,
          priority: -10
        },
        default: {
          maxSize: 800 * 1024,
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true
        }
      }
    },
    minimize: true,
    minimizer: [
      new TerserJSPlugin({
        sourceMap: false,
        cache: path.resolve(".cache"),
        parallel: true, // 开启多进程压缩
        chunkFilter: chunk => {
          if (chunk.name === "vendors") {
            return false;
          }
          return true;
        },
        terserOptions: {
          compress: {
            drop_console: false
          }
        }
      }),
      new OptimizeCSSAssetsPlugin({
        sourceMap: false
      })
    ]
  },
  plugins: [new CleanWebpackPlugin()]
};

module.exports = merge(webpackConfigBase, webpackConfigProd);
