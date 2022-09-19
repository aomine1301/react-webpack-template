const path = require('path')
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require('webpack')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");
module.exports = {
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: "./src/index.html",
        }),

        new MiniCssExtractPlugin(),
        new webpack.HotModuleReplacementPlugin(),

    ],
    entry: {
        main: "./src/index.tsx",
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "main.js",
        publicPath: "",
    },
    mode: "development",
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'dist'),
        },
        hot: true,
        open: true,
        // clientLogLevel: 'silent',
        port: 3001
    },
    devtool: "inline-source-map",
    resolve: {
        extensions: ['.tsx', '.ts', '.jsx', '.js'],
    },
    module: {
        rules: [
            {
                test: /\.(js|ts)x?$/,    // add |ts
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
            {
                test: /.s?css$/,
                use: [MiniCssExtractPlugin.loader, {
                    loader: 'css-loader',
                    options: {
                        sourceMap: true,
                        importLoaders: 2,
                        modules: {
                            localIdentName: '[local]__[name]-[contenthash:base64:5]',
                        },
                    },
                }, "sass-loader"],
            },
            {
                test: /\.(png|jpg|jpeg|gif)$/i,
                type: "asset/resource",
            },
            {
                test: /\.svg$/,
                use: ['@svgr/webpack'],
            }

        ]
    }
}
