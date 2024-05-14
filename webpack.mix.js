const mix = require('laravel-mix');

mix.js('src/app.js', 'public') //source and where to compile the js
    .sass('src/scss/style.scss', 'css') //source and where to compile the scss to css
    .setPublicPath('public') //where to send the bullshit