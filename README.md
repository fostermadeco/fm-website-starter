# Foster Made Front End Starter Project

Example project of front end assets with [Laravel Mix](https://laravel.com/docs/5.6/mix).

## What is included

* Larvel Mix 2 - wrapper around webpack
* Global jQuery reference
* Modernizr
* JS bundle file (main.js)
* Loading of scss files in separate bundle (main.css)

## Installation & Setup
**Install Dependencies**
```
composer install
npm install
```

## Tasks

**Development files**

Create static files:
```
npm run dev
```
**Watch files**

Use [Browsersync](https://browsersync.io/) to watch files for changes.
```
npm run watch
```

View the site that reloads with changes: [http://localhost:3000/](http://localhost:3000/)
Or the proxied version: [http://fm-example.test:3000/](http://fm-example.test:3000/)
View browsersync at: [http://localhost:3001/](http://localhost:3001/)

TODO: hot reloading testing

**Build production files:**
```
npm run production
```
Creates minified version of files available in template. See files referenced on proxy url [http://fm-example.test/](http://fm-example.test/).

## Assets
Add an asset by installing the npm package:
```
npm install --save jquery
npm install --save parsleyjs
```

## Sass
Styles are loaded through the js into their own bundle file: `./assets/dev/main.css`.
See require statement in main.js.

Imports can either be aliased in the `webpack.config.js` or by the path to the package folder in the node_modules folder:
```
@import '~normalize.css/normalize';
```

## Modernizr
### Modernizr in CSS
The html Modernizr classes are added via the js Mix bundle from `./assets/js/lib/modernizr-custom.js`. The file was downloaded from [modernizr.com](https://modernizr.com/download?svg-dontmin-printshiv-setclasses-shiv). The SVG feature test is used as an example.

### Modernizr in JS
On the js side, the `modernizr-loader` package is used to load it into a module for js use. This uses the Modernizr config that is located in `./assets/js/lib/.modernizrrc`.

