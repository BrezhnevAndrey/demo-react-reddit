const path = require("path");
const nodeExternals = require("webpack-node-externals");
const NODE_ENV = process.env.NODE_ENV;
const IS_DEV = NODE_ENV === "development";
const IS_PROD = NODE_ENV === "production";
const { DefinePlugin } = require("webpack");

function setupDevtool() {
  if (IS_DEV) return "eval";
  if (IS_PROD) return false;
}

module.exports = {
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx", ".json"],
  },
  mode: NODE_ENV ? NODE_ENV : "development",
  target: "node",
  entry: path.resolve(__dirname, "../src/server/server.js"),
  output: {
    path: path.resolve(__dirname, "../dist/server"),
    filename: "server.js",
  },
  module: {
    rules: [
      {
        test: /\.[tj]sx?$/,
        use: ["ts-loader"],
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: "css-loader",
            options: {
              modules: {
                mode: "local",
                localIdentName: "[name]__[local]--[hash:base64:5]",
              },
              onlyLocals: true,
            },
          },
          "less-loader",
          {
            loader: "sass-resources-loader",
            options: {
              resources: path.resolve("./src", "variable.less"),
            },
          },
        ],
      },
      {
        test: /\.(woff|woff2|ttf|eot)$/,
        use: "file-loader",
      },
    ],
  },
  externals: [nodeExternals()],
  optimization: {
    minimize: false,
  },
  devtool: setupDevtool(),
  plugins: [
    new DefinePlugin({
      "process.env.CLIENT_ID": `'${process.env.CLIENT_ID}'`,
      "process.env.REDIRECT_URI": `'${process.env.REDIRECT_URI}'`
    }),
  ],
};
