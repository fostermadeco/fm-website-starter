# Foster Made Front End Starter Project

Example project of front end assets with Laravel Mix.

## What is included

* Larvel mix 2 - wrapper around webpack
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

User browsersync to watch files for changes.
```
npm run watch
```

View the site that reloads with changes: [http://localhost:3000/](http://localhost:3000/)
Or the proxied version: [http://fm-example.test:3000/](http://fm-example.test:3000/)
View browsersync at: [http://localhost:3001/](http://localhost:3001/)

**Build production files:**
```
npm run production
```

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
The html Modernizr classes are added via Webpack loading the Modernizr script into the js bundle from `./assets/js/lib/modernizr-custom.js`. The file was downloaded from [modernizr.com](https://modernizr.com/download?svg-dontmin-printshiv-setclasses-shiv). The SVG feature test is used as an example.

### Modernizr in JS
On the js side, the `modernizr-loader` package is used to load it into a module for js use. This uses the Modernizr config that is located in `./assets/js/lib/.modernizrrc`.

