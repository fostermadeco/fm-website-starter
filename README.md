# Foster Made Webpack Starter

Example of how webpack 2 can be used to build site assets WIP. Right now includes global jQuery reference, Modernizr, js bundle (main.bundle.js), loading of scss files in separate bundle (main.css)

### Usage
**Install Dependencies**
```
npm install
```

**Run Development Task**
```
npm run watch
```

**Build production files:**
```
npm run dist
```


### Assets
Add an asset by installing the npm package:
```
npm install --save jquery
npm install --save parsleyjs
```

### Sass
Styles are loaded through the js into their own bundle: assets/dev/main.css.
See require statement in main.js. 

Imports can either be aliased in the webpack.config.js or by the path to the package folder in the node_modules folder:
```
@import '~normalize.css/normalize';
```

### Modernizr
For the css classes, Modernizr is loaded in the webpack entry array. The file was just downloaded from Modernizr.com.

On the js side, modernizr-loader is used to load it into a module for js use. This uses the Modernizr config that is located in assets/js/lib/.modernizrrc 

