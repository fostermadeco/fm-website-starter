const mix = require('laravel-mix');
const path = require('path');

mix.setPublicPath('./public');

mix.js([
    'resources/js/lib/modernizr.js',
    'resources/js/main.js',
], 'public/assets/main.js');

mix.sass('resources/scss/main.scss', 'public/assets');

mix.autoload({
    jquery: ['$', 'window.jQuery', 'jQuery'],
});

// mix.copy('assets/images', 'public/images', false);

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
        files: [
            'public/assets/**/*',
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
