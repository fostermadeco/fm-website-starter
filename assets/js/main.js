require('../scss/main.scss');

import { buildExternal } from './ui/externalLinks';
import { addPlaceholders } from './ui/placeholders';

if (typeof console === "undefined") {
    console = { log: function() { } };
}

console.log(Modernizr);


buildExternal();
addPlaceholders();

if (!Modernizr.svg) {
    console.log('This browser does not support svg!');
    console.log(Modernizr);
}