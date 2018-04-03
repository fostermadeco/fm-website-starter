const mix = require('laravel-mix');

mix.setPublicPath('./public');

mix.js([
    'resources/js/lib/modernizr.js',
    'resources/js/main.js',
], 'public/assets/main.js');

mix.sass('resources/scss/main.scss', 'public/assets');

mix.autoload({
    jquery: ['$', 'window.jQuery', 'jQuery'],
});

mix.copyDirectory('resources/images', 'public/assets/images');
mix.copyDirectory('resources/fonts', 'public/assets/fonts');

// temp disable because it was throwing errors
mix.options({
    imgLoaderOptions: {
        enabled: false,
        gifsicle: {},
        mozjpeg: {},
        optipng: {},
        svgo: {},
    }
});

mix.webpackConfig({
    module: {
        rules: [
            {
                test: /\.js?$/,
                exclude: /(node_modules)/,
                use: [{
                    loader: 'babel-loader',
                    options: mix.config.babel(),
                }],
            },
        ],
    },
});

if (!mix.config.production) {
    mix.browserSync({
        proxy: 'https://fm-example-site.dev',
        // compiled files in public or templates
        files: [
            'public/assets/**/*',
            'public/index.php',
        ],
        // open: 'external',
        host: '192.168.202.153',
        port: 3000,
        open: false,
        https: {
            key: 'fm-example-site.dev.key',
            cert: '/etc/ssl/certs/fm-example-site.dev.crt',
        },
        watchOptions: {
            usePolling: true,
            interval: 500,
        },
    });
}

if (mix.config.production) {
    mix.version();
}
