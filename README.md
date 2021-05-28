# Foster Made Website Starter

Starter files for new website project. 

## What is included:

- [Laravel Mix](https://github.com/JeffreyWay/laravel-mix) (which uses Webpack, Babel)
- Global jQuery reference
- Includes Modernizr
- JS bundle file (main.js)
- Scss files in separate bundle (main.css)
- Includes support for Javascript ES2015 and ES2017 features

## Things to note

- `resources` contains all source files, these should be modified.
- `public/assets` should be all compiled files, these files are created automatically and should not be edited.

--------------
## How to Use

NOTE: If switching from fm-site-build Gulp tasks see [Gulp to Mix Guide](https://github.com/fostermadeco/standards/blob/master/javascript/gulp-to-mix.md).

This is not meant to be a cloneable repo for new projects. This repo uses Rokanan, but your new project needs to use standup its own Vagrant environment. The idea is to copy some files from this repo and use Rokanan to setup the Vagrant dev environement. 

For a fresh project, use these instructions. Adjust as necessary for an existing project.
### 1. Copy files from this repo into project:

- `webpack.mix.js`
- `composer.json`
- `package.json` (If it doesn't already exist. If it does, copy,`scripts`, `dependencies` and `devDependencies` from this `package.json` into the project `package.json`)
- Copy `resources` directory (starting place for asset organization, contains Modernizr and Modernizr config.)
- Create empty `public` directory your project.
- `.eslintrc`
- `.babelrc`

You can use this [README.md](https://github.com/fostermadeco/standards/blob/master/samples/README.md) as a starting point.

### 2. Vagrant Setup

Setup Vagrant with [Rokanan](https://github.com/fostermadeco/rokanan). You will need to create an new private IP for the site by adding it to the [Google Spreadsheet](https://docs.google.com/spreadsheets/u/1/d/1muC1u3OhrVKdCSPz-BC3NtK0I2HvWWhJ5gV9MgBEmSk/edit#gid=0). You will use this in the interactive Rokanan setup.

The quick version is:
```
composer require --dev fostermadeco/rokanan dev-master --ignore-platform-reqs
rokanan init
```

### 3. Create .env file

Create `.env` in root of project and add:

```
ENVIRONMENT=dev
```

This will allow the `webpack.mix.js` file to read the [process.env variables](https://laravel.com/docs/8.x/mix#environment-variables). 

### 4. Run Initialization

Once all the files are in place, run the initialization commands:

```
vagrant ssh
npm install
```

### 5. Add Assets to Template

This step depends on the CMS on the site. For no CMS:

Copy `composer.json`, `mix.php` from this repo and run on the box:

```
composer install
```

The `mix.php` might have to be adjusted depending on where the assets are for a project.
#### CMS Plugins

- [Craft 3 Mix](https://github.com/mister-bk/craft-plugin-mix)

### Congratulations!
You should now be able to run `npm run w` and view the automatically refreshing site at [http://fm-website-starter.test:3000](http://fm-website-starter.test:3000) with your project's host.

--------------

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

View the site at [http://localhost:3000/](http://localhost:3000/) or the proxy as set in `webpack.mix.js`, e.g. [http://fm-website-starter.test:3000](http://fm-website-starter.test:3000)

**Production Task:**

```
npm run production
```

--------------
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

## Javascript

The starter repo implements a JS router to organize JS files. The router is initialized in `main.js`. The `js` dir contains a couple other dirs:

* `lib` - Most packages should be downloaded and used via `npm`, but sometimes there are misc 3rd party scripts that need to be referenced locally. These files should not be altered from their original state. This makes updates a bit easier. 
* `modules` - contained features that are used in the routes, e.g. an slider or forms.
* `routes` - js that is used on a specific route, e.g. /about
### File structure

Files should be kept as short as possible. The code should be structured in this way:

```js
import parsleyjs from 'parsleyjs';

const somethingElseRelatedToForms = () => {
    console.log('Forms!');
};

const initValidation = () => {
    $('form').parsley();
};

const initForms = () => {
    initValidation();
    somethingElseRelatedToForms();
};

export default initForms;
```

Notes:
- Imports at the top
- Keep import close to where it's used (not in `main.js`)
- Export one `default` function
- Initialize other functions in the exported function
- Initialization of modules js should mostly happen in routes
- `resources/js/modules/forms.js` is imported into `routes/global.js` as `import initForms from '../modules/forms';` check `resources/js/routes/global.js` to see how it's used.

--------------

## Sass

Styles are loaded through the js into their own bundle file: `./public/assets/main.css`.

Imports can be referenced by the path to the package folder in the node_modules folder:

```
@import '~normalize.css';
```

--------------

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

--------------

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

--------------

## Eslint and Prettier

Uses FM's [Eslint and Prettier setup](https://github.com/fostermadeco/eslint-config-fostermade). 

--------------
## Specific Package notes

### Font Awesome

Uses [version 5.x](https://fontawesome.com/how-to-use/on-the-web/setup/using-package-managers). This installation specifies the folder for the Font Awesome fonts as `/public/assets/fonts/@fortawesome/fontawesome-free` as `$fa-font-path` in `/resources/scss/_variables.scss` and specifies that they should be copied to that dir in `webpack.mix.js`.
