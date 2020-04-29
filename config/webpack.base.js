const path = require("path");
const webpack = require("webpack");
const AppConfig = require("../app.config");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HappyPack = require("happypack");
const StatsPlugin = require("stats-webpack-plugin");
const os = require("os");
const happyThreadPool = HappyPack.ThreadPool({ size: os.cpus().length });
const isDev = process.env.NODE_ENV === "development";
const resolve = relatedPath => {
  return path.join(__dirname, relatedPath);
};
module.exports = {
  context: resolve("../"),
  entry: {
    main: "./src/main.js",
    store: "./src/redux/index.js"
  },
  output: {
    path: resolve(`../dist`),
    filename: isDev ? "js/[name].js" : "js/[name].[contenthash:8].js",
    chunkFilename: isDev ? "js/[id].js" : "js/[id].[contenthash:8].js",
    publicPath: isDev ? `http://localhost:${AppConfig.port}/` : `/${AppConfig.publicPath}/`,
    libraryTarget: "umd",
    library: AppConfig.publicPath
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".less", ".json"],
    modules: ["../node_modules"],
    alias: {
      "@": resolve(`../src`),
      components: resolve(`../src/components`),
      pages: resolve(`../src/pages`),
      assets: resolve(`../src/assets`),
      ...(AppConfig.alias || {})
    }
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /(node_modules|bower_components)/,
        loader: "happypack/loader?id=babel"
      },
      {
        //加载src里的
        test: /\.(css|less)$/,
        include: [path.resolve(__dirname, "../src")],
        exclude: [path.resolve(__dirname, "../src/assets")],
        use: [
          isDev
            ? "style-loader"
            : {
                loader: MiniCssExtractPlugin.loader,
                options: {
                  hmr: isDev,
                  reloadAll: isDev
                }
              },
          {
            loader: "css-loader",
            options: {
              importLoaders: 2, // 之前有2个loaders
              sourceMap: !isDev,
              modules: {
                mode: "local",
                localIdentName: "[local]--[hash:base64:5]"
              }
            }
          },
          {
            loader: "postcss-loader",
            options: {
              plugins: [require("autoprefixer")]
            }
          },
          {
            loader: "less-loader",
            options: {
              modifyVars: {
                hack: `true; @import "${resolve(`../src/assets/style/theme.less`)}";`
              }
            }
          }
        ]
      },

      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: "url-loader",
        options: {
          limit: 10240,
          name: path.posix.join("img", "[name].[hash:7].[ext]")
        }
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: "url-loader",
        options: {
          limit: 10240,
          name: path.posix.join("media", "name].[hash:7].[ext]")
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: "url-loader",
        options: {
          limit: 10240,
          name: path.posix.join("fonts", "[name].[hash:7].[ext]")
        }
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: isDev ? "css/[name].css" : "css/[name].[contenthash].css",
      chunkFilename: isDev ? "css/[id].css" : "css/[id].[contenthash].css"
    }),
    // 定义环境变量为开发环境
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV),
      "process.env.NODE_BOOT": JSON.stringify(process.env.NODE_BOOT || "none"),
      "process.env.title": JSON.stringify(AppConfig.title),
      "process.env.baseName": JSON.stringify(AppConfig.publicPath)
    }),
    new HappyPack({
      id: "babel",
      loaders: [
        {
          loader: "babel-loader",
          options: {
            presets: [
              [
                "@babel/preset-env",
                {
                  useBuiltIns: "usage",
                  targets: {
                    browsers: ["last 2 versions"]
                  },
                  corejs: 2
                }
              ],
              "@babel/preset-react"
            ],
            plugins: [
              [
                "@babel/transform-runtime",
                {
                  absoluteRuntime: false,
                  corejs: 2,
                  helpers: true,
                  regenerator: true,
                  useESModules: false
                }
              ],
              [
                "@babel/plugin-proposal-decorators",
                {
                  legacy: true
                }
              ],
              "@babel/plugin-proposal-class-properties",
              [
                "import",
                {
                  libraryName: "antd",
                  libraryDirectory: "es",
                  style: false // `style: true` 会加载 less 文件
                }
              ]
            ]
          }
        },
        {
          loader: "eslint-loader", // 指定启用eslint-loader
          options: {
            quiet: true
          }
        }
      ],
      threadPool: happyThreadPool,
      verbose: false
    }),
    new StatsPlugin("manifest.json", {
      chunkModules: false,
      entrypoints: true,
      logging: false,
      source: false,
      chunks: false,
      modules: false,
      assets: false,
      children: false,
      chunkGroups: false,
      outputPath: false,
      exclude: [/node_modules/]
    }),
    new webpack.DllReferencePlugin({
      manifest: require("./dll/common_manifest.json"),
      context: "www.253.com"
    }),
    new webpack.DllReferencePlugin({
      manifest: require("./dll/react_manifest.json"),
      context: "www.253.com"
    }),
    new webpack.DllReferencePlugin({
      manifest: require("./dll/react_redux_manifest.json"),
      context: "www.253.com"
    }),
    new webpack.DllReferencePlugin({
      manifest: require("./dll/sspa_manifest.json"),
      context: "www.253.com"
    }),
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/)
  ],
  node: {
    setImmediate: false,
    dgram: "empty",
    fs: "empty",
    net: "empty",
    tls: "empty",
    child_process: "empty"
  }
};
