const mix = require('laravel-mix');
const tailwindcss = require('tailwindcss');

const host = 'fm-website-starter.test';
const vagrantIP = '192.168.202.216';

mix.setPublicPath('./public');

// be sure to use mix.js - not mix.scripts or mix.babel
mix.js(['resources/js/lib/modernizr.js', 'resources/js/main.js'], 'public/assets/main.js');

// order matters, before scss to set sass variable
mix.copy('node_modules/@fortawesome/fontawesome-free/webfonts', 'public/assets/fonts/@fortawesome/fontawesome-free');

// mix.js('resources/js/app.js', 'public/js')
//     .postCss('resources/css/app.css', 'public/css', [
//         require('tailwindcss'),
//     ]);

mix.sass('resources/scss/main.scss', 'public/assets').options({
    postCss: [tailwindcss('./tailwind.config.js')],
});

// Makes $ available globally, no need to import it
mix.autoload({
    jquery: ['$', 'window.jQuery', 'jQuery'],
});

mix.copyDirectory('resources/images', 'public/assets/images');
mix.copyDirectory('resources/fonts', 'public/assets/fonts');

if (process.env.ENVIRONMENT === 'dev') {
    mix.browserSync({
        proxy: `https://${host}`,
        // compiled files in public or templates
        files: ['public/assets/**/*', 'public/index.php'],
        host: vagrantIP,
        port: 3000,
        open: false,
        https: {
            key: `/etc/ssl/private/${host}.key`,
            cert: `/etc/ssl/certs/${host}.crt`,
        },
        watchOptions: {
            usePolling: true,
            interval: 500,
        },
    });
}

if (process.env.ENVIRONMENT !== 'dev') {
    mix.version();
}
