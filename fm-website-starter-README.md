# Foster Made Website Starter

Starter files for new website project using Vagrant (via Rokanan) and Laravel Mix.

## What is included:

- [Laravel Mix](https://github.com/JeffreyWay/laravel-mix) (which uses Webpack, Babel)
- Global jQuery reference
- Includes Modernizr
- JS bundle file (main.js)
- Scss files in separate bundle (main.css)
- Automatically adds CSS vendor prefixes
- Includes support for Javascript ES2015 and ES2017 features

## Things to note

- `resources` contains all source files, these should be modified.
- `public/assets` should be all compiled files, these files are created automatically and should not be edited.

## How to Use

NOTE: If switching from fm-site-build Gulp tasks see [Gulp to Mix Guide](https://github.com/fostermadeco/standards/blob/master/javascript/gulp-to-mix.md).

For a fresh project, use these instructions. Adjust as necessary for an existing project.

### 1. Clone this repo and then remove the remote
```
git remote rm origin
```

### 2. Update the VM
Destory the leftover vm:
```
make destroy-vm
```

Then init vagrant via [Rokanan](https://github.com/fostermadeco/rokanan):
```
rokanan init
```
You may need to install Rokanan globally with composer:
```
composer global require fostermadeco/rokanan dev-master
```

### 3. Create `ansible/group_vars/all`
Create the file: `ansible/group_vars/all`, copy in the sample file `all.sample` and update the relevant variables (probably just the database name).

### 4. Start up Vagrant
```
vagrant up
```
Commit all the created files.

### 5. Install the dependencies
```
vagrant ssh
composer install
npm install
```
If you are trying to get the FM Website Starter site to work, you'll need to run `npm run w` to create a `mix-manifest.json` before you can view the site.

### 6. Update webpack.mix.js
Update the host and IP in `webpack.mix.js`.


### 7. Install CMS

If you are just trying to get this repo working,  `public/index.php` is setup to autoload `mix.php` and populate the style and script references.

If the project will be built with Craft or some other CMS, remove the starter files:
* `public/index.php`
* `mix.php`
Also remove the autoload reference in `composer.json`
```
{
    "autoload": {
        "files": ["mix.php"]
    }
}
```

#### CMS Plugins

- [Craft 3 Mix](https://github.com/mister-bk/craft-plugin-mix)

## Asset Task Usage

See [README](README.md#asset-task-usage)

## Assets

Add an asset by installing the npm package:

```
npm install parsleyjs
npm install handlebars
```

**NOTE: if using npm version 5+ the `--save` flag is not necessary.**

This adds the package the the package.json file. The dependency then needs to be added to your JS file. Depending on the package, the import might need to be formatted differently:

```
import parsleyjs from 'parsleyjs';
import Handlebars from 'handlebars';
import 'flexslider';
```

See more examples of how to import [packages frequently used on FM projects](https://github.com/fostermadeco/standards/blob/master/javascript/npm-package-examples.md). Read more about [modules in the FM Standards repo](https://github.com/fostermadeco/standards/blob/master/javascript/modules.md).

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

With this setup CSS vendor prefixes are added automatically. Also you can safely use all Javascript ES2015 and ES2017 features. For newer features, consult the [ECMAScript compatibility table](https://kangax.github.io/compat-table/es2016plus/).

The target browsers that are supported depend on the `browserslist` query provided. In this setup, this is set to `"last 1 version, > 1%"` (which includes IE11).

Laravel Mix does not support use of a `.browserslistrc` file so the target browsers have to be specified in a couple of different places. 

**SCSS**

For the Sass autoprefixer, the `browserslist` is specified in `webpack.mix.js`.

**JS**

For the JS, the `browserslist` is specified in the `.babelrc`. It is located in the `targets` option in the `@babel/preset-env`. 

This setup includes polyfills for the targeted browsers. Polyfills are only included for new JS featured that are used in the codebase. See the `.babelrc` file and the `useBuiltIns` option which is set to `usage`. With `usage`, the polyfill does not need to be imported into the `main.js`. Note that `usage` is experimental, test your project in IE11. 

To get a list of which plugins and polyfills are added, add `"debug": true` to the `@babel/preset-env` options.

**browserslist**

To see which browsers are included in a `browserslist` query, run this one-off command in terminal:
```
npx browserslist 'last 1 version, > 1%'
```

More about how to specify which browsers should be included is here [browserslist](https://github.com/browserslist/browserslist).

## Eslint and Prettier

Uses FM's [Eslint and Prettier setup](https://github.com/fostermadeco/eslint-config-fostermade). 

## Specific Package notes

### Font Awesome

Uses [version 5.x](https://fontawesome.com/how-to-use/on-the-web/setup/using-package-managers). This installation specifies the folder for the Font Awesome fonts as `/public/assets/fonts/@fortawesome/fontawesome-free` as `$fa-font-path` in `/resources/scss/_variables.scss` and specifies that they should be copied to that dir in `webpack.mix.js`.
