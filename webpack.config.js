const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    // context: __dirname + '../../../assets/js/',
    entry: [
        './assets/js/lib/modernizr-custom.js', 
        './assets/js/main.js',
    ],
    output: {
        filename: 'main.bundle.js',
        publicPath: '/assets/dev/',
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery"
        }),
        new ExtractTextPlugin("main.css"),
    ],
    module: {
        rules: [
            {
                test: /\.modernizrrc.js$/,
                loader: "modernizr-loader"
            },
            {
                test: /\.modernizrrc(\.json)?$/,
                loader: "json-loader"
            },
            { 
                test: /\.scss$/, 
                loader: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    // loader: "css-loader!sass-loader",
                    use: ['css-loader', 'sass-loader']
                }),
            }
        ],
    },
    resolve: {
        alias: {
            modernizr$: path.resolve(__dirname, "assets/js/lib/.modernizrrc"),
            normalize: path.join(__dirname, '/node_modules/normalize.css')
        }
    }
}