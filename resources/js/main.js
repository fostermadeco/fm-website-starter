import OneRouter from 'one-router';
import initAbout from './routes/about';
import initGlobal from './routes/global';

window.$ = $;

const router = new OneRouter({
    '/$': initGlobal,
    '/about': initAbout,
    // '/approach': function() {},
    // '/work/(.*)': function() {}
});
