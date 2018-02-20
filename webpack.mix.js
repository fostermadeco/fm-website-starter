const mix = require('laravel-mix');
mix.setPublicPath('./');

mix.js('assets/js/main.js', 'public/assets')
   .sass('assets/scss/main.scss', 'public/assets')
   .browserSync({
        proxy: 'fm-example.test',
        files: ['assets/**/*'],
        open: 'external',
        host: 'fm-example.test',
        port: 3000
   });

if(mix.config.production) {
    mix.version();
}
