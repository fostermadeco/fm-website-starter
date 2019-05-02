# Foster Made Front End Starter Project

Example project of front end assets using Vagrant and Laravel Mix.

## What is included

- [Laravel Mix](https://github.com/JeffreyWay/laravel-mix) (which uses Webpack, Babel)
- Global jQuery reference
- Includes Modernizr
- JS bundle file (main.js)
- Loading of scss files in separate bundle (main.css)
- Includes polyfills for ES2015+ methods and features

## Things to note

- `resources` contains all source files, these should be modified.
- `public/assets` should be all compiled files, these files are created automatically and should not be edited.

## How to Use

NOTE: If switching from fm-site-build Gulp tasks see [Gulp to Mix Guide](https://github.com/fostermadeco/standards/blob/master/javascript/gulp-to-mix.md).

For a fresh project, use these instructions. Adjust as necessary for an existing project.

### 1. Copy files from this repo into project:

- `webpack.mix.js`
- `composer.json`
- `package.json` (If it doesn't already exist. If it does, copy `browserlist` ,`scripts`, `dependencies` and `devDependencies` from this `package.json` into the project `package.json`)
- Copy `resources` directory (starting place for asset organization, contains Modernizr and Modernizr config.)
- Create empty `public` directory your project.
- `Makefile`
- `.eslintrc`
- `.babelrc`

You can use this [README.md](https://github.com/fostermadeco/standards/blob/master/samples/README.md) as a starting point.

### 2. Vagrant Setup

Setup Vagrant with the [Provisioner](https://github.com/fostermadeco/development-standard#creating-a-new-project).

### 3. Run Initialization

Once all the files are in place, run the initialization commands:

```
make create
vagrant ssh
npm install
```

### 4. Add Assets to Template

This step depends on the CMS on the site. For no CMS:

Copy `composer.json`, `mix.php` from this repo and run on the box:

```
composer install
```

The `mix.php` might have to be adjusted depending on where the assets are for a project.

#### CMS Plugins

- [Craft 3 Mix](https://github.com/mister-bk/craft-plugin-mix)

## Asset Task Usage

NOTE: All tasks and commands should be run on the box.

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

**NOTE: if using npm version 5+ the `--save` flag is not necessary.**

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

## Browser Support

Laravel Mix does not support use of a `.browserslistrc` file so browsers have to be specified in a couple of different places. 

**SCSS**

For the sass autoprefixer, they are specified in `webpack.mix.js`.

**JS**

Mix supports ES2015 syntax out of the box with `mix.js`. This setup also add polyfills for use of ES2015+ methods and objects. This includes them all with the `useBuiltIns` option set to `entry` in the `.babelrc`. Consult this table to view [ES2015+ browser compatibility](https://kangax.github.io/compat-table/es6/). 

To get a list of which plugins and polyfills are added, add `"debug": true` to the `@babel/preset-env` options.

**browserlist**

Mix doesn't support using a `.browserslistrc`, but if you want to see which browsers are includes in a `browserlist` query string for the `targets` in `.babelrc`, run:
```
npx browserslist 'last 1 version, > 1%'
```
More about how to specify which browsers should be included is here [browserlist](https://github.com/browserslist/browserslist).

## Eslint and Prettier

Uses FM's [Eslint and Prettier setup](https://github.com/fostermadeco/eslint-config-fostermade). 

## Package notes

### Font Awesome

Uses [version 5.x](https://fontawesome.com/how-to-use/on-the-web/setup/using-package-managers). This installation specifies the folder for the Font Awesome fonts as `/public/assets/fonts/@fortawesome/fontawesome-free` as `$fa-font-path` in `/resources/scss/_variables.scss` and specifies that they should be copied to that dir in `webpack.mix.js`.
