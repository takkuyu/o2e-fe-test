const webpack = require("webpack");
const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const FixStyleOnlyEntriesPlugin = require("webpack-fix-style-only-entries");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  mode: "production",
  target: ["web", "es5"],
  entry: {
    main: "./js/main.js",
    "style.min.css": path.resolve(__dirname, "./scss/style.scss"),
  },
  output: {
    path: path.resolve(__dirname, "./dist/"),
    filename: "js/[name].min.js",
  },
  optimization: {
    minimizer: ["...", new CssMinimizerPlugin()],
    minimize: true,
  },
  module: {
    rules: [
      // Handle Javascript
      {
        test: /\.m?js$/,
        include: __dirname,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              [
                "@babel/preset-env",
                {
                  useBuiltIns: "usage",
                  corejs: "3.27",
                },
              ],
            ],
          },
        },
      },
      // Handle styles
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
          "sass-loader",
        ],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: ["**/*"],
    }),
    new FixStyleOnlyEntriesPlugin(),
    new MiniCssExtractPlugin({
      filename: "css/[name]",
    }),
  ],
  watchOptions: {
    ignored: /node_modules/,
  },
};
