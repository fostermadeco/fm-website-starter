import { buildExternal } from './ui/externalLinks';
import { addPlaceholders } from './ui/placeholders';
import Modernizr from 'modernizr';

if (typeof console === "undefined") {
    console = { log: function() { } };
}

// modernizr.build(modernizrConfig, function (result) {
//   console.log(result); // the build
// });

buildExternal();
addPlaceholders();

if (!Modernizr.promises) {
    // ...
    console.log(Modernizr);
}