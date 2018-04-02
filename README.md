# Foster Made Front End Starter Project

Example project of front end assets using Vagrant and Laravel Mix.

## What is included

* [Laravel Mix](https://github.com/JeffreyWay/laravel-mix) (which uses Webpack)
* Global jQuery reference
* Includes Modernizr
* JS bundle file (main.js)
* Loading of scss files in separate bundle (main.css)

## Things to note

* `resources` contains all source files, these should be modified.
* `public/assets` should be all compiled files, these files are created automatically and should not be edited.

## Installation

Copy files from this repo into project:
* `webpack.mix.js`
* `composer.json`
* `package.json` (if it doesn't already exist)

Depending how your project assets are setup, you might not need to copy the `resources` and `public` folders. These are examples of how your assets might be setup.

Once you have copied all the files into your project, install the dependencies:
```
vagrant ssh
cd /var/www/fm-example-site.dev
sudo cp /etc/ssl/private/fm-example-site.dev.key /var/www/fm-example-site.dev/
npm install
```

NOTE: All tasks and commands should be run on the box.

## Task Usage
**Development Task**
Creates static files in `public/assets/`:
```
npm run start
```
**Watch Task**
Usses BrowserSync to refresh assets and reload browser:
```
npm run watch
```

View the site at [http://localhost:3000/](http://localhost:3000/) or the proxy as set in `webpack.mix.js`, e.g. [http://fm-example.test:3000](http://fm-example.test:3000)

**Production Task:**
```
npm run dist
```

## Assets
Add an asset by installing the npm package:
```
npm install --save parsleyjs
npm install --save handlebars
```
__Note if using npm version 5+ the `--save` flag is not necessary.__

This adds the package the the package.json file. The dependency then needs to be added to your JS file. Depending on the package, it might need to be an import statement or a require:

```
import parsleyjs from 'parsleyjs';
const Handlebars = require('handlebars');
```
Read more about ES6 modules in the [FM JS styleguide]().

## Sass
Styles are loaded through the js into their own bundle file: `./public/assets/main.css`.

Imports can be referenced by the path to the package folder in the node_modules folder:
```
@import '~normalize.css';
```

## Modernizr
### Modernizr in CSS
The html Modernizr classes are added via Webpack loading the Modernizr script into the js bundle from `./assets/js/lib/modernizr-custom.js`. The file was downloaded from [modernizr.com](https://modernizr.com/download?svg-dontmin-printshiv-setclasses-shiv). If you want to add another feature test, go to [modernizr](https://modernizr.com/download?svg-dontmin-printshiv-setclasses-shiv) and download a new build.

The `modernizr-custom.js` example file in this repo adds the classes to the html tag and includes the SVG feature test. Here is an example of how to use it in css:
```
.svg header {
    background: url("test.svg");
}
```

### Modernizr in JS
On the js side, the `modernizr-loader` package is used to load it into a module for js use. This uses the Modernizr config that is located in `./assets/js/lib/.modernizrrc`. If you want to add another feature to test for, add it to the `./assets/js/lib/.modernizrrc`. You can find feature examples at [modernizer.com](https://modernizr.com/download?svg-dontmin-printshiv-setclasses-shiv).

In the js, the `Modernizr` object holds properties for each test. Test for truthiness:

```
// Modernizer object example:
// {svg: true}
// Testing for feature support
if (!Modernizr.svg) {
    console.log('This browser does not support svg!');
}
```

