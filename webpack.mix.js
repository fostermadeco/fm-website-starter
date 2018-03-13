const mix = require('laravel-mix');

mix.setPublicPath('./');

// transpiles to es2015 https://babeljs.io/learn-es2015/
mix.babel([
    'assets/js/lib/modernizr-custom.js',
    'assets/js/main.js',
], 'public/assets/main.js');

mix.sass('assets/scss/main.scss', 'public/assets');

mix.autoload({
    jquery: ['$', 'window.jQuery', 'jQuery'],
});

mix.copy('assets/images', 'public/images');
mix.copy('assets/fonts', 'public/fonts');

mix.webpackConfig({
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
        ],
    },
    resolve: {
        alias: {
            modernizr$: path.resolve(__dirname, "assets/js/lib/.modernizrrc"),
        }
    }
});

if (!mix.config.production) {
    mix.browserSync({
        proxy: 'fm-example.test',
        files: ['assets/**/*', 'index.php'],
        // open: 'external',
        host: 'fm-example.test',
        port: 3000,
        open: false,
    });
}

if(mix.config.production) {
    mix.version();
}
