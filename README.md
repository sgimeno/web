Browserify quick start-up
=========================

 The repo is prepared to accelerate SPA development. Ready to code JS with browserify & gulp as packaging tools
 and ready to deploy to Heroku

 [![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/sgimeno/browserify-boilerplate/tree/master)

####Setup

```
>npm install
>source env.sh
```

####NPM commands
```
> npm run dev # starts the development server (Connect) & watches sources
> npm run build # build the application
> npm start # starts production server (Express)
```

####Gulp tasks

 + `clean`: deletes the `dist` directory
 + `build`: builds the app using `js` and `html` tasks
  + `js`: browserify bundle
  + `html`: copy HTML files to `dist`
 + `watch`: watch HTML & JS files with watchify


####TODO:

 + Add tests
 + Improve gulp build code

####References

 + [browserify](http://browserify.org/)
 + [Gulp + browserify](http://viget.com/extend/gulp-browserify-starter-faq)
