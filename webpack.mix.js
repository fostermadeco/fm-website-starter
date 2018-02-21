const mix = require('laravel-mix');
mix.setPublicPath('./');

mix.js([
    'assets/js/main.js',
    'assets/js/lib/modernizr-custom.js',
], 'public/assets');

mix.sass('assets/scss/main.scss', 'public/assets');

mix.autoload({
    jquery: ['$', 'window.jQuery', 'jQuery'],
});

mix.webpackConfig({
    module: {
        rules: [
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
