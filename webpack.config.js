const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: {
    login: "./index.js",
  },

  output: {
    path: path.resolve(__dirname, "build"),
    filename: "login.js",
    clean: true,
  },

  module: {
    rules: [
      // JS
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },

      // ✅ CSS MODULES (.module.css)
      {
        test: /\.module\.css$/i,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              modules: {
                localIdentName: "[name]__[local]__[hash:base64:5]",
              },
            },
          },
        ],
      },

      // ✅ NORMAL CSS (global.css etc)
      {
        test: /\.css$/i,
        exclude: /\.module\.css$/i,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
        ],
      },

      // IMAGES
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: "asset/resource",
        generator: {
          filename: "images/[name][contenthash][ext]",
        },
      },
    ],
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: "login.css",
    }),

    new HtmlWebpackPlugin({
      filename: "index.html",
      template: path.resolve(__dirname, "assets/templates/login.html"),
      chunks: ["login"],
      inject: "body",
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        minifyCSS: true,
        minifyJS: true,
      },
    }),
  ],

  optimization: {
    minimize: true,
  },

  mode: "production",
};
