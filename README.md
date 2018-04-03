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
npm run dev
```

**Watch Task**

Uses BrowserSync to refresh assets and reload browser:
```
npm run watch
```

View the site at [http://localhost:3000/](http://localhost:3000/) or the proxy as set in `webpack.mix.js`, e.g. [http://fm-example.test:3000](http://fm-example.test:3000)

**Production Task:**
```
npm run production
```

## Assets
Add an asset by installing the npm package:
```
npm install parsleyjs
npm install handlebars
```
__NOTE: if using npm version 5+ the `--save` flag is not necessary.__

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

<a name="modernizr"></a>

Modernizr is loaded into the Mix js bundle from `./resources/js/lib/modernizr.js`.

### Adding tests

Tests can be added two ways:

1. Manually download a new version of modernizr.js from modernizr.com

 Open `./resources/js/lib/modernizr.js` and go to the url in the top of the file that includes all the currents tests as query params, e.g. `https://modernizr.com/download/?-....`

 Add tests and copy new file to `./resources/js/lib/modernizr.js`

2. Use the CLI

On the box:
```
# modernizr package is in package.json
# add test to `resources/js/lib/modernizrrc.json`
npm run modernizr
```

This will read the `resources/js/lib/modernizrrc.json` and writes a new file to `./resources/js/lib/modernizr.js`;

### Modernizr in CSS

The `modernizr.js` example file in this repo adds the classes to the html tag and includes the SVG feature test. Here is an example of how to use it in css:
```
.svg header {
    background: url("test.svg");
}
```

### Modernizr in JS

In the js, the `Modernizr` object holds properties for each test. Test for truthiness:

```
// Modernizer object example:
// {svg: true}
// Testing for feature support
if (!Modernizr.svg) {
    console.log('This browser does not support svg!');
}
```

