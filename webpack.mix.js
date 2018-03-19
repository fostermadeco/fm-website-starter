const mix = require('laravel-mix');

mix.setPublicPath('./');

mix.js([
    'resources/js/lib/modernizr-custom.js',
    'resources/js/main.js',
], 'public/assets/main.js');

mix.sass('resources/scss/main.scss', 'public/assets');

mix.autoload({
    jquery: ['$', 'window.jQuery', 'jQuery'],
});

mix.copy('resources/images', 'public/images');
mix.copy('resources/fonts', 'public/fonts');

mix.webpackConfig({
    module: {
        rules: [
            {
                test: /\.modernizrrc.js$/,
                loader: 'modernizr-loader',
            },
            {
                test: /\.modernizrrc(\.json)?$/,
                loader: 'json-loader',
            },
            // Use Babel to transpile to es2015 https://babeljs.io/learn-es2015/
            {
                test: /\.js?$/,
                exclude: /(node_modules)/,
                use: [{
                    loader: 'babel-loader',
                    // { modules: false, targets: { browsers: [ '> 2%' ], uglify: true } }
                    options: mix.config.babel(),
                }],
            },
        ],
    },
    resolve: {
        alias: {
            modernizr$: path.resolve(__dirname, 'assets/js/lib/.modernizrrc'),
        },
    },
});

if (!mix.config.production) {
    // view site with BrowserSync at https://fm-example.dev:3000
    mix.browserSync({
        proxy: 'https://fm-example.dev',
        // array of files that will be watched for changes
        files: [
            'assets/**/**/**/*',
            'craft/templates/**/**/*',
        ],
        // private ip of vagrant box
        host: '192.168.202.141',
        port: 3000,
        open: false,
        https: {
            // temporarily fixed by copying key into project - fix this
            key: 'fm-example.dev.key',
            cert: '/etc/ssl/certs/fm-example.dev.crt',
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
