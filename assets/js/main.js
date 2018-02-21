import { buildExternal } from './ui/externalLinks';
import { addPlaceholders } from './ui/placeholders';
import Modernizr from 'modernizr';

if (typeof console === "undefined") {
    console = { log: function() { } };
}

buildExternal();
addPlaceholders();

if (!Modernizr.promises) {
    // ...
    console.log(Modernizr);
}