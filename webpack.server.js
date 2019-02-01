const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require("webpack");
const path = require('path');

module.exports = {
    mode: 'development',

    entry: [
        "react-hot-loader/patch",
        // activate HMR for React

        'webpack-dev-server/client?http://localhost:3000',
        // bundle the client for webpack-dev-server
        // and connect to the provided endpoint

        'webpack/hot/only-dev-server',
        // bundle the client for hot reloading
        // only- means to only hot reload for successful updates

        './src/renderer/renderer.tsx'
        // the entry point
    ],

    plugins: [
        new webpack.NamedModulesPlugin(),
        // prints more readable module names in the browser console on HMR updates

        new webpack.HotModuleReplacementPlugin(),
        // enable HMR globally

        new webpack.NoEmitOnErrorsPlugin(),
        // do not emit compiled assets that include errors

        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './src/renderer/index.html'),
        }),
    ],

    devtool: "inline-source-map",

    resolve: {
        extensions: ['.js', '.json', '.ts', '.tsx'],

        // modules: ['src', 'node_modules'],
        // alias: {
        // 	rootAssets: path.resolve(__dirname, 'assets'),
        // },
    },

    output: {
        filename: 'renderer.bundle.js',
        // the output bundle

        path: path.resolve(__dirname, 'dist'),

        // publicPath: '/static/',
        // necessary for HMR to know where to load the hot update chunks
        // https://webpack.js.org/configuration/output/#output-publicpath
    },

    module: {
        rules: [{
                test: /\.tsx?$/,
                loaders: [
                    "ts-loader",
                ],
            },
            // This will cause the compiled CSS (and sourceMap) to be
            // embedded within the compiled javascript bundle and added
            // as a blob:// uri at runtime.
            {
                test: /\.(scss|css)$/,
                use: [
                    'style-loader',
                    'css-loader?sourceMap',
                    'sass-loader?sourceMap',
                ],
            },
            {
                test: /\.(jpe?g|png|svg|ico|icns)$/,
                loader: 'file-loader',
                options: {
                    name: '[path][name].[ext]',
                },
            },
            {
                test: /\.(m4a|mp4)$/,
                loader: 'file-loader',
                options: {
                    name: '[path][name].[ext]',
                },
            },
            {
                test: /\.(eot|ttf|woff2?)$/,
                loader: 'file-loader',
                options: {
                    name: '[path][name].[ext]',
                },
            },
        ]
    },

    devServer: {
        host: 'localhost',
        port: 3000,

        historyApiFallback: true,
        // respond to 404s with index.html

        hot: true,
        // enable HMR on the server
    },
};