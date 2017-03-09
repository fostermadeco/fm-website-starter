const webpack = require('webpack');
const path = require('path');

module.exports = {
    // context: __dirname + '../../../assets/js/',
    entry: [
        './assets/js/lib/modernizr-custom.js', 
        './assets/js/entry.js',
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
            }
        ],
    },
    resolve: {
        alias: {
            modernizr$: path.resolve(__dirname, "assets/js/lib/.modernizrrc")
        }
    }
}