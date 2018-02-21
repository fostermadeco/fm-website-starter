# Foster Made Front End Starter Project

Example project of front end assets.

## What is included

* Webpack 3 # TODO update to webpack 4
* Global jQuery reference
* Modernizr
* JS bundle file (main.bundle.js)
* Loading of scss files in separate bundle (main.css)

## Webpack Usage
**Install Dependencies**
```
npm install
```

**Run Development Task**
```
npm run start
```

View the site at: [http://localhost:8080/](http://localhost:8080/)

**Build production files:**
```
npm run dist
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
```
.svg header {
    background: url("test.svg");
}
```

### Modernizr in JS
On the js side, the `modernizr-loader` package is used to load it into a module for js use. This uses the Modernizr config that is located in `./assets/js/lib/.modernizrrc`. The `Modernizr` object holds properties for each test. Test for truthiness:

```
// Modernizer object
{svg: true}
// Testing for truthiness
if (!Modernizr.svg) {
    console.log('This browser does not support svg!');
}
```

