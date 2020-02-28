# Project Title

One Paragraph of project description goes here

**NOTE:** If you are starting a new project with this repo, follow the instructions here: [FM Website Starter](fm-website-starter-README.md).

## Initial Setup

To run this project for the first time after cloning, init vagrant via [Rokanan](https://github.com/fostermadeco/rokanan):

```
rokanan init
```
You may need to install Rokanan globally with composer:
```
composer global require fostermadeco/rokanan dev-master
```

Then create the file: `ansible/group_vars/all`, copy in the sample file `all.sample` and update the relevant variables (probably just the database name).

Then:
```
vagrant up
```

Then install the dependencies:
```
vagrant ssh
composer install
npm install
```
If you are trying to get the FM Website Starter site to work, you'll need to run `npm run w` to create a `mix-manifest.json`.

**NOTE**: If you are cloning from the FM Website Starter repo, delete the remote:
```
git remote rm origin
```

## Asset Task Usage

This project uses [Mix](https://laravel.com/docs/master/mix) for build process.

NOTE: All tasks and commands should be run on the Vagrant box.

**Development Task**

Creates static files in `/public/assets/`:
```
npm run dev
```

**Watch Task**

Uses BrowserSync to refresh assets and reload browser:
```
npm run w
```

View the site at [http://localhost:3000/](http://localhost:3000/) or the proxy as set in `webpack.mix.js`, e.g. [http://fm-example.test:3000](http://fm-example.test:3000)

**Production Task:**
```
npm run production
```

## Deployment

Add additional notes about how to deploy this on a live system
