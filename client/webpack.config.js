const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");

module.exports = {
    mode: "development",
    devtool: "source-map",
    entry: { home: ["@babel/polyfill", "./src/index.js", "./src/css/index.scss"] },
    output: {
        path: path.resolve(__dirname, "dist/javascripts"),
        filename: "webpack-bundle.js",
        assetModuleFilename: "../assets/[name][ext]",
    },
    plugins: [new MiniCssExtractPlugin({ filename: "../css/index.css" })],
    module: {
        rules: [
            {
                test: /\.js$/,
                include: [path.resolve(__dirname, "client/src")],
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env"],
                        plugins: ["@babel/plugin-proposal-class-properties"],
                    },
                },
            },
            {
                test: /\.scss$/,
                use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
                exclude: /node_modules/,
            },
            {
                test: /\.(png|jpg|svg)$/,
                type: "asset/resource",
            },
        ],
    },
};
