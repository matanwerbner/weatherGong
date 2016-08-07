var webpack = require("webpack");
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: "./app/index.js",
    output: {
        path: "./www/",
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel', // 'babel-loader' is also a legal name to reference
                query: {
                    presets: ['es2015']
                }
            }, {
                test: /\.css$/,
                loader: "style-loader!css-loader?importLoaders=1"
            }, {
                test: /\.png$/,
                loader: "url-loader?limit=100000"
            }, {
                test: /\.jpg$/,
                loader: "file-loader"
            }, {
                test: /.(png|woff(2)?|eot|ttf|svg)(\?[a-z0-9=\.]+)?$/,
                loader: 'url-loader?limit=100000&name=./dist/fonts/[hash].[ext]'
            },
            {
                test: /\.html$/,
                loader: "html"
            },
            {
                test: /\.scss$/,
                loaders: ["style", "css", "sass"]
            }]
    },

    devtool: "source-map",
    debug: true,
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: true,
            mangle: false,
            compress: {
                drop_debugger: false
            }
        }),
        new HtmlWebpackPlugin({
            template: 'pug!templates/index.pug',
            hash: true
        })
    ]

};